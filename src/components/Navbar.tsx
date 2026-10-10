"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  tag?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "#top" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills", tag: "HOT" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [visitorStats, setVisitorStats] = useState<{
    volumeRoman: string;
    count: number;
  } | null>(null);
  const [weather, setWeather] = useState<{
    temp: string;
    condition: string;
  } | null>(null);

  useEffect(() => {
    // Format a stately newspaper date string
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    try {
      const formatted = now.toLocaleDateString("en-US", options).toUpperCase();
      setCurrentDate(formatted);
    } catch {
      // fallback
    }

    // Fetch dynamic visitor stats (IP + Browser + Device fingerprint)
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && data.volumeRoman && typeof data.count === "number") {
          setVisitorStats({
            volumeRoman: data.volumeRoman,
            count: data.count,
          });
        }
      })
      .catch((err) => {
        console.error("Failed to load visitor stats:", err);
      });

    // Fetch live weather from /api/weather
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => {
        if (data?.temp) {
          setWeather({
            temp: data.temp,
            condition: data.condition,
          });
        }
      })
      .catch((err) => {
        console.error("Failed to load weather:", err);
      });
  }, []);

  return (
    <header className="w-full bg-[#fbf8f1] text-[#1a1a1a] border-b-2 border-[#1a1a1a] font-serif">
      {/* Top Folio / Ears Bar */}
      <div className="border-b border-[#1a1a1a]/30 text-[11px] uppercase tracking-wider text-[#3d3830]">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
          {/* Left Ear */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-bold text-[#1a1a1a] tracking-wider">
              VOL. {visitorStats ? visitorStats.volumeRoman : "—"} · NO.{" "}
              {visitorStats ? String(visitorStats.count).padStart(2, "0") : "—"}
            </span>
            <span className="text-[#1a1a1a]/40">•</span>
            <span className="text-[#3d3830] font-semibold">ESTABLISHED 2026</span>
          </div>

          {/* Center Date */}
          <div className="font-bold tracking-widest text-[#1a1a1a] text-center">
            {currentDate}
          </div>

          {/* Right Ear */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline font-medium">
              DHAKA: {weather ? `${weather.temp} · ${weather.condition}` : "26°C · CLEAR"}
            </span>
            <span className="hidden md:inline text-[#1a1a1a]/40">•</span>
            <span className="bg-[#1a1a1a] text-[#fbf8f1] px-1.5 py-0.5 text-[10px] font-mono tracking-tight font-bold rounded-xs">
              STATUS: AVAILABLE FOR HIRE
            </span>
          </div>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          {/* Left Ear Quote / Box (Desktop) */}
          <div className="hidden md:flex md:col-span-3 flex-col justify-center border-r border-[#1a1a1a]/20 pr-4 text-left">
            <p className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#7a2020] mb-0.5">
              ★ Daily Quotation
            </p>
            <p className="text-xs italic text-[#4a443a] leading-snug">
              &ldquo;Simplicity is prerequisite for reliability.&rdquo;
            </p>
            <span className="text-[10px] text-[#736b5e] mt-1 font-mono">
              — Edsger W. Dijkstra
            </span>
          </div>

          {/* Central Newspaper Title */}
          <div className="md:col-span-6 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] tracking-[0.25em] uppercase font-sans text-[#5c5446] mb-1">
              <span>✦</span>
              <span>The Independent Portfolio & Chronicle</span>
              <span>✦</span>
            </div>

            <Link href="/" className="inline-block group cursor-pointer">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1a1a] font-serif transition-colors group-hover:text-[#7a2020]">
                THE CHRONICLE
              </h1>
            </Link>

            {/* Subtitle Ribbon */}
            <div className="mt-1 flex items-center justify-center gap-3 text-xs sm:text-sm italic text-[#3f3930]">
              <span className="h-[1px] w-8 sm:w-16 bg-[#1a1a1a]/40 inline-block"></span>
              <span>&ldquo;All the Code That&apos;s Fit to Ship&rdquo;</span>
              <span className="h-[1px] w-8 sm:w-16 bg-[#1a1a1a]/40 inline-block"></span>
            </div>

            <div className="text-[10px] tracking-widest uppercase font-sans text-[#6b6254] mt-1">
              EST. 2024 · SPECIAL EDITION FOR CURIOUS MINDS
            </div>
          </div>

          {/* Right Ear Status / Weather (Desktop) */}
          <div className="hidden md:flex md:col-span-3 flex-col justify-center border-l border-[#1a1a1a]/20 pl-4 text-right">
            <div className="inline-flex items-center justify-end gap-1.5 text-[10px] font-sans uppercase font-bold tracking-wider text-emerald-800 mb-0.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Dispatch Status
            </div>
            <p className="text-xs font-semibold text-[#1a1a1a] leading-tight">
              AVAILABLE FOR HIRE
            </p>
            <p className="text-[11px] text-[#5c5446] leading-snug mt-0.5">
              Open to contracts, full-time engineering &amp; design.
            </p>
          </div>
        </div>
      </div>

      {/* Classic Broadsheet Double Rule Separator */}
      <div className="border-t-2 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-1.5 md:py-2">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center justify-between w-full divide-x divide-[#1a1a1a]/25 text-sm font-extrabold tracking-[0.14em] font-sans uppercase">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex-1 text-center py-3.5 px-2 xl:px-4 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#fbf8f1] transition-all flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
                >
                  <span className="font-extrabold">{item.label}</span>
                  {item.tag && (
                    <span className="text-[10px] bg-[#7a2020] text-white px-1.5 py-0.5 rounded-xs font-mono font-bold tracking-normal animate-pulse">
                      {item.tag}
                    </span>
                  )}
                </Link>
              ))}
              <a
                href="#contact"
                className="px-6 py-3.5 bg-[#1a1a1a] text-[#fbf8f1] hover:bg-[#7a2020] transition-colors font-serif font-bold tracking-normal lowercase italic text-sm flex items-center justify-center shrink-0 min-h-[46px] cursor-pointer"
              >
                Telegram ✉
              </a>
            </nav>

            {/* Mobile / Tablet Header Controls */}
            <div className="flex lg:hidden items-center justify-between w-full py-2">
              <span className="text-xs font-bold uppercase tracking-widest font-sans text-[#1a1a1a]">
                Section Index
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle section menu"
                className="px-2.5 py-1 text-xs border border-[#1a1a1a] uppercase font-bold tracking-widest hover:bg-[#1a1a1a] hover:text-[#fbf8f1] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{mobileMenuOpen ? "CLOSE [×]" : "SECTIONS [≡]"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b-2 border-[#1a1a1a] bg-[#f5f0e3] px-4 py-3 divide-y divide-[#1a1a1a]/15 text-sm font-sans uppercase">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-[#1a1a1a] font-semibold hover:text-[#7a2020]"
            >
              <span>{item.label}</span>
              {item.tag && (
                <span className="text-[10px] bg-[#7a2020] text-white px-1.5 py-0.5 rounded-xs font-mono">
                  {item.tag}
                </span>
              )}
            </Link>
          ))}
          <div className="pt-3 pb-1 flex justify-between items-center text-xs font-serif italic text-[#5c5446]">
            <span>Vol. XXIV — Special Edition</span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#1a1a1a] text-[#fbf8f1] px-3 py-1 font-sans not-italic font-bold text-[11px]"
            >
              DISPATCH TELEGRAM ✉
            </a>
          </div>
        </div>
      )}

      {/* Breaking Ticker / Sub-bar */}
      <div className="bg-[#ede7d8] border-b border-[#1a1a1a]/40 text-[11px] font-sans">
        <div className="max-w-7xl mx-auto px-4 py-1 flex items-center gap-3 overflow-hidden">
          <div className="shrink-0 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#7a2020]">
            <span className="inline-block w-1.5 h-1.5 bg-[#7a2020]"></span>
            <span>DISPATCH:</span>
          </div>
          <div className="truncate text-[#3f3930]">
            <span className="font-semibold text-[#1a1a1a]">EDITORIAL NOTICE:</span> Welcoming visitors to this curated portfolio. Built with modern craftsmanship and classic broadsheet discipline.
          </div>
        </div>
      </div>
    </header>
  );
}
