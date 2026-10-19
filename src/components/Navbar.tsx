"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Marquee from "@/components/Marquee";
import { NAV_ITEMS } from "@/utils/nav";

const DEFAULT_CITY = "Dhaka";

const formatNewspaperDate = (date: Date) => date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).toUpperCase();

const lookupGeoByIp = async () => {
  try {
    const res = await fetch("https://ipwho.is/", {
      signal: AbortSignal.timeout(2000),
    });
    if (!res.ok) return null;
    const geo = await res.json();
    return geo?.success ? geo : null;
  } catch {
    return null;
  }
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuCloseRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const onViewportChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onViewportChange);

    const toggle = menuToggleRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onViewportChange);
      toggle?.focus();
    };
  }, [mobileMenuOpen]);
  const [currentDate, setCurrentDate] = useState("");
  const [visitorStats, setVisitorStats] = useState<{
    volumeRoman: string;
    count: number;
  } | null>(null);

  const [weather, setWeather] = useState<{
    city: string;
    temp: string;
    condition: string;
  } | null>(null);

  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentDate(formatNewspaperDate(now));
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async (city: string) => {
      try {
        const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
        const data = await res.json();
        if (data?.temp) {
          setWeather({
            city: data.city || city.toUpperCase(),
            temp: data.temp,
            condition: data.condition,
          });
        }
      } catch (err) {
        console.error("Failed to load weather:", err);
      }
    };

    const collectVisitorInfo = async () => {
      let city = DEFAULT_CITY;
      let country = "Bangladesh";

      try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
        const localTime = new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });

        const geo = await lookupGeoByIp();
        if (geo?.city) city = geo.city;
        if (geo?.country) country = geo.country;

        fetchWeather(city);

        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ localTime, timeZone, city, country }),
        });
        const data = await res.json();

        if (data?.success && data.volumeRoman && typeof data.count === "number") {
          setVisitorStats({ volumeRoman: data.volumeRoman, count: data.count });
        }
      } catch (err) {
        console.error("Failed to load visitor stats:", err);
        fetchWeather(city);
      }
    };

    collectVisitorInfo();
  }, []);

  return (
    <header className="w-full bg-[#fbf8f1] text-[#1a1a1a] border-b-2 border-[#1a1a1a] font-serif">
      <div className="border-b border-[#1a1a1a]/30 text-xs uppercase tracking-wider text-[#2e2a22]">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-bold text-[#1a1a1a] tracking-wider">
              VOL. {visitorStats ? visitorStats.volumeRoman : "—"} · NO.{" "}
              {visitorStats ? String(visitorStats.count).padStart(2, "0") : "—"}
            </span>
            <span className="hidden sm:inline text-[#1a1a1a]/40">•</span>
            <span className="hidden sm:inline text-[#2e2a22] font-semibold">EST. 2026</span>
          </div>

          <div className="hidden sm:block font-bold tracking-widest text-[#1a1a1a] text-center">
            {currentDate}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline font-medium">
              {weather
                ? `${weather.city}: ${weather.temp} · ${weather.condition}`
                : "DHAKA: 26°C · CLEAR"}
            </span>
            
            <span className="bg-[#1a1a1a] text-[#fbf8f1] px-1.5 py-0.5 text-[10px] font-mono tracking-tight font-bold rounded-xs">
              STATUS: AVAILABLE FOR HIRE
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4">
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center border-r border-[#1a1a1a]/20 pr-4 text-left">
            <p className="text-xs font-sans uppercase font-bold tracking-widest text-[#7a2020] mb-1">
              ★ Daily Quotation
            </p>
            <p className="text-sm italic text-[#2e2a22] leading-snug">
              &ldquo;Simplicity is prerequisite for reliability.&rdquo;
            </p>
            <span className="text-xs text-[#4a4336] mt-1 font-mono">
              — Edsger W. Dijkstra
            </span>
          </div>

          <div className="lg:col-span-6 text-center">
            <div className="flex items-center justify-center gap-2 text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase font-sans text-[#4a4336] mb-1">
              <span>✦</span>
              <span>A SOFTWARE ENGINEER’S BROADSHEET</span>
              <span>✦</span>
            </div>

            <Link href="/" className="inline-block group cursor-pointer">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1a1a] font-serif transition-colors group-hover:text-[#7a2020]">
                A R S
              </h1>
            </Link>

            <div className="mt-1 flex items-center justify-center gap-3 text-sm sm:text-base italic text-[#2e2a22]">
              <span className="h-[1px] w-8 sm:w-16 bg-[#1a1a1a]/40 inline-block"></span>
              <span>&ldquo;All the Code That&apos;s Fit to Ship&rdquo;</span>
              <span className="h-[1px] w-8 sm:w-16 bg-[#1a1a1a]/40 inline-block"></span>
            </div>

            <div className="text-xs tracking-widest uppercase font-sans text-[#4a4336] mt-1">
              FULL-STACK ENGINEER · SPECIAL EDITION · 2026
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center border-l border-[#1a1a1a]/20 pl-4 text-right">
            <div className="inline-flex items-center justify-end gap-2 text-xs font-black font-sans uppercase tracking-widest text-red-600 mb-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <span>LIVE</span>
            </div>
            <p className="text-2xl lg:text-3xl xl:text-4xl font-black font-mono tabular-nums text-[#1a1a1a] tracking-tight leading-none">
              {currentTime || "--:--:-- --"}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-1.5 md:py-2">
            <nav className="hidden md:flex items-center justify-between w-full divide-x divide-[#1a1a1a]/25 text-xs lg:text-sm font-extrabold tracking-[0.1em] lg:tracking-[0.14em] font-sans uppercase">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex-1 text-center py-3.5 px-2 xl:px-4 transition-all flex items-center justify-center gap-2 min-h-[46px] cursor-pointer ${
                    isActive(item.href)
                      ? "bg-[#1a1a1a] text-[#fbf8f1]"
                      : "text-[#1a1a1a] hover:bg-[#ede3ce] hover:text-[#7a2020]"
                  }`}
                >
                  <span className="font-extrabold">{item.label}</span>
                  {item.tag && (
                    <span className="text-[10px] bg-[#7a2020] text-white px-1.5 py-0.5 rounded-xs font-mono font-bold tracking-normal animate-pulse">
                      {item.tag}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex md:hidden items-center justify-between w-full py-1">
              <span className="text-xs font-bold uppercase tracking-widest font-sans text-[#1a1a1a]">
                Section Index
              </span>
              <button
                ref={menuToggleRef}
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open section menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-section-menu"
                className="min-h-[40px] px-3.5 py-2 text-xs border border-[#1a1a1a] uppercase font-bold tracking-widest hover:bg-[#1a1a1a] hover:text-[#fbf8f1] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>SECTIONS [≡]</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-50 ${mobileMenuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-[#1a1a1a]/50 transition-opacity duration-300 motion-reduce:transition-none ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          id="mobile-section-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site sections"
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#fbf8f1] border-l-2 border-[#1a1a1a] flex flex-col transition-transform duration-300 ease-out motion-reduce:transition-none ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#1a1a1a]">
            <span className="text-xs font-bold uppercase tracking-widest font-sans text-[#7a2020]">
              Section Index
            </span>
            <button
              ref={menuCloseRef}
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close section menu"
              className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a] text-2xl leading-none font-sans hover:bg-[#1a1a1a] hover:text-[#fbf8f1] transition-colors cursor-pointer"
            >
              &times;
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 divide-y divide-[#1a1a1a]/15 font-sans uppercase">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex items-center justify-between py-4 text-base font-bold tracking-wider hover:text-[#7a2020] transition-colors ${
                  isActive(item.href) ? "text-[#7a2020]" : "text-[#1a1a1a]"
                }`}
              >
                <span>{isActive(item.href) ? `▸ ${item.label}` : item.label}</span>
                {item.tag && (
                  <span className="text-[10px] bg-[#7a2020] text-white px-1.5 py-0.5 rounded-xs font-mono">
                    {item.tag}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="px-5 py-5 border-t-2 border-[#1a1a1a] space-y-3">
            <span className="inline-block bg-[#1a1a1a] text-[#fbf8f1] px-2 py-1 text-[11px] font-mono font-bold tracking-tight">
              STATUS: AVAILABLE FOR HIRE
            </span>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#fbf8f1] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
            >
              <span>Resume</span>
              <span aria-hidden="true">&#8599;&#xFE0E;</span>
            </a>
          </div>
        </aside>
      </div>

      <div className="bg-[#ede7d8] border-b border-[#1a1a1a]/40 text-xs font-sans">
        <div className="max-w-4xl mx-auto px-4 py-1.5 flex items-center justify-center gap-3 overflow-hidden">
          <div className="shrink-0 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#7a2020] bg-[#ede7d8] pr-2 z-10 border-r border-[#1a1a1a]/20">
            <span className="inline-block w-1.5 h-1.5 bg-[#7a2020] animate-pulse"></span>
            <span>DISPATCH:</span>
          </div>
          <Marquee className="items-center gap-2.5 text-[13px] text-[#1a1a1a] cursor-default">
            <span className="font-semibold text-[#1a1a1a]">
              Engineering scalable end-to-end systems with
            </span>
            <span className="text-[#7a2020] text-[10px]">✦</span>
            <span className="font-bold text-[#1a1a1a]">Next.js</span>
            <span className="text-[#7a2020] text-[10px]">✦</span>
            <span className="font-bold text-[#1a1a1a]">NestJS</span>
            <span className="text-[#7a2020] text-[10px]">✦</span>
            <span className="font-bold text-[#1a1a1a]">TypeScript</span>
            <span className="text-[#7a2020] text-[10px]">✦</span>
            <span className="font-bold text-[#1a1a1a]">SQL</span>
            <span className="text-[#7a2020] text-[10px]">✦</span>
            <span className="font-bold text-[#1a1a1a]">NoSQL</span>
            <span className="text-[#7a2020] text-[10px]">✦</span>
            <span className="font-bold text-[#1a1a1a]">Redis</span>
          </Marquee>
        </div>
      </div>
    </header>
  );
}
