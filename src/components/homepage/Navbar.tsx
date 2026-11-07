"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/utils/nav";

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

  return (
    <header className="w-full bg-[#fbf8f1] text-[#1a1a1a] border-b-2 border-[#1a1a1a] font-serif">
      <div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-1.5 md:py-2">
            <Link
              href="/"
              aria-label="Md Arafat Rahman Sohan (ARS) — home"
              className="hidden md:block shrink-0 pr-6 text-2xl lg:text-3xl font-black tracking-tight font-serif text-[#1a1a1a] hover:text-[#7a2020] transition-colors"
            >
              A R S
            </Link>
            <nav className="hidden md:flex flex-1 items-center justify-between border-l border-[#1a1a1a]/25 divide-x divide-[#1a1a1a]/25 text-xs lg:text-sm font-extrabold tracking-[0.1em] lg:tracking-[0.14em] font-sans uppercase">
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
              <Link
                href="/"
                aria-label="Md Arafat Rahman Sohan (ARS) — home"
                className="text-2xl lg:text-3xl font-black tracking-tight font-serif text-[#1a1a1a] hover:text-[#7a2020] transition-colors"
              >
                A R S
              </Link>
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
    </header>
  );
}
