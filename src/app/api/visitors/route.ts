import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { redis } from "@/lib/redis";
import { calculateVolume } from "@/utils/volume";

interface VisitorPayload {
  localTime?: string;
  timeZone?: string;
  city?: string;
  country?: string;
}

async function processVisitor(request: NextRequest, clientInfo?: VisitorPayload) {
  // Get client IP and user-agent from request headers
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const referer = request.headers.get("referer") ?? "direct";

  // Use client-code provided device time, timezone, city, and country
  const timeZone = clientInfo?.timeZone || "UTC";
  const localTime = clientInfo?.localTime
    ? `${clientInfo.localTime} (${timeZone})`
    : new Date().toISOString();

  let city = clientInfo?.city && clientInfo.city !== "Unknown"
    ? clientInfo.city
    : (request.headers.get("x-vercel-ip-city") || (timeZone.includes("/") ? timeZone.split("/")[1].replace(/_/g, " ") : "Unknown"));

  let country = clientInfo?.country && clientInfo.country !== "Unknown"
    ? clientInfo.country
    : (request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || "Unknown");

  // Create a unique fingerprint from IP + device/browser
  const fingerprint = crypto.createHash("sha256")
    .update(`${ip}:${userAgent}`)
    .digest("hex");

  // sadd returns 1 if the fingerprint is new, 0 if it already exists
  const isNew = (await redis.sadd("portfolio:visitors", fingerprint)) === 1;

  // Save full visitor details against this SHA fingerprint if new
  if (isNew) {
    const visitorDetails = {
      ip,
      country,
      city,
      timeZone,
      userAgent,
      referer,
      firstVisitedAt: localTime,
    };
    await redis.hset("portfolio:visitor_details", fingerprint, JSON.stringify(visitorDetails));
  }

  // New visitor: increment the counter. Returning visitor: just read it
  const count = isNew
    ? await redis.incr("portfolio:count")
    : Number(await redis.get("portfolio:count")) || 1;

  return NextResponse.json({
    success: true,
    count,
    ...calculateVolume(count),
    isNew,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: VisitorPayload = await request.json().catch(() => ({}));
    return await processVisitor(request, body);
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "digest" in error &&
      (error as { digest: string }).digest === "NEXT_PRERENDER_INTERRUPTED"
    ) {
      throw error;
    }

    console.error("Visitors API error:", error);

    return NextResponse.json({
      success: false,
      count: 1,
      volumeNumber: 1,
      volumeRoman: "I",
      isNew: false,
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    return await processVisitor(request);
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "digest" in error &&
      (error as { digest: string }).digest === "NEXT_PRERENDER_INTERRUPTED"
    ) {
      throw error;
    }

    console.error("Visitors API error:", error);

    return NextResponse.json({
      success: false,
      count: 1,
      volumeNumber: 1,
      volumeRoman: "I",
      isNew: false,
    });
  }
}
