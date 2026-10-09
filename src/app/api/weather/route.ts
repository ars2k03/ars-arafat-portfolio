import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
      throw new Error("WEATHER_API_KEY is not defined in .env");
    }

    // Hardcoded location: Dhaka, Bangladesh
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Dhaka&aqi=no`,
      {
        next: { revalidate: 300 }, // Cache weather for 5 minutes
      }
    );

    if (!res.ok) {
      throw new Error(`WeatherAPI returned status ${res.status}`);
    }

    const data = await res.json();
    const temp = data?.current?.temp_c ?? 26;
    const condition = (data?.current?.condition?.text ?? "CLEAR").toUpperCase();

    return NextResponse.json({
      success: true,
      city: "DHAKA",
      temp: `${temp}°C`,
      condition,
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

    console.error("Weather API error:", error);

    // Reliable fallback for Dhaka weather
    return NextResponse.json({
      success: false,
      city: "DHAKA",
      temp: "26°C",
      condition: "CLEAR",
    });
  }
}
