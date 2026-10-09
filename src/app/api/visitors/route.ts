import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { redis } from "@/lib/redis";
import { calculateVolume } from "@/utils/volume";

export async function GET(request: NextRequest) {
  try {
    // Get client IP and user-agent from request headers
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
    const userAgent = request.headers.get("user-agent") ?? "unknown";

    // Create a unique fingerprint from IP + device/browser
    const fingerprint = crypto.createHash("sha256")
      .update(`${ip}:${userAgent}`)
      .digest("hex");

    // sadd returns 1 if the fingerprint is new, 0 if it already exists
    const isNew = (await redis.sadd("portfolio:visitors", fingerprint)) === 1;

    // New visitor: increment the counter. Returning visitor: just read it
    const count = isNew
      ? await redis.incr("portfolio:count")
      : Number(await redis.get("portfolio:count")) || 1;

    return NextResponse.json({ 
      success: true, 
      count, 
      ...calculateVolume(count), 
      isNew 
    });
    
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

    // Fallback response if Redis is unreachable
    return NextResponse.json({
      success: false,
      count: 1,
      volumeNumber: 1,
      volumeRoman: "I",
      isNew: false,
    });
  }
}
