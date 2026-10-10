import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityParam = searchParams.get("city")?.trim();

  try {
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
      throw new Error("WEATHER_API_KEY is not defined in .env");
    }

    const queryCity = cityParam && cityParam !== "Unknown" ? cityParam : "Dhaka";
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(queryCity)}&aqi=no`,
      {
        next: { revalidate: 300 }, // Cache weather for 5 minutes
      }
    );

    if (!res.ok) {
      throw new Error(`WeatherAPI returned status ${res.status}`);
    }

    const data = await res.json();
    const resolvedCity = (data?.location?.name || queryCity).toUpperCase();
    const temp = Math.round(data?.current?.temp_c ?? 26);
    const condition = (data?.current?.condition?.text ?? "CLEAR").toUpperCase();

    return NextResponse.json({
      success: true,
      city: resolvedCity,
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

    // Reliable fallback
    const fallbackCity = (cityParam && cityParam !== "Unknown" ? cityParam : "DHAKA").toUpperCase();
    return NextResponse.json({
      success: false,
      city: fallbackCity,
      temp: "26°C",
      condition: "CLEAR",
    });
  }
}
