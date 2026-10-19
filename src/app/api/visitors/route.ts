import { NextRequest, NextResponse } from "next/server";
import { unstable_rethrow } from "next/navigation";
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
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const referer = request.headers.get("referer") ?? "direct";

  const timeZone = clientInfo?.timeZone || "UTC";
  const localTime = clientInfo?.localTime
    ? `${clientInfo.localTime} (${timeZone})`
    : new Date().toISOString();

  const city = clientInfo?.city && clientInfo.city !== "Unknown"
    ? clientInfo.city
    : (request.headers.get("x-vercel-ip-city") || (timeZone.includes("/") ? timeZone.split("/")[1].replace(/_/g, " ") : "Unknown"));

  const country = clientInfo?.country && clientInfo.country !== "Unknown"
    ? clientInfo.country
    : (request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || "Unknown");

  const fingerprint = crypto.createHash("sha256")
    .update(`${ip}:${userAgent}`)
    .digest("hex");

  const isNew = (await redis.sadd("portfolio:visitors", fingerprint)) === 1;

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
    unstable_rethrow(error);

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
    unstable_rethrow(error);

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
