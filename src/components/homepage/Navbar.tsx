"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoFont } from "@/utils/fonts";
import { NAV_ITEMS } from "@/utils/nav";

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const onViewportChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onViewportChange);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbf8f1] text-[#1a1a1a] border-b border-[#1a1a1a]/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 h-[72px] grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Md Arafat Rahman Sohan (ARS) — home"
          className={`${logoFont.className} justify-self-start text-[32px] leading-none tracking-[0.06em] transition-colors hover:text-[#7a2020]`}
        >
          A R S
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center h-[72px]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative flex items-center h-full px-3 lg:px-5 text-base lg:text-[17px] font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-[#1a1a1a] after:absolute after:inset-x-3 lg:after:inset-x-5 after:-bottom-px after:h-0.5 after:bg-[#7a2020]"
                  : "text-[#2e2a22] hover:text-[#7a2020]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex justify-end">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-11 px-5 rounded bg-[#1a1a1a] text-[#fbf8f1] text-base font-semibold transition-colors hover:bg-[#7a2020]"
          >
            <span>Resume</span>
            <ArrowIcon />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls={mobileMenuOpen ? "mobile-menu" : undefined}
          className="md:hidden justify-self-end w-11 h-11 flex items-center justify-end cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            <path strokeLinecap="round" d={mobileMenuOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            tabIndex={-1}
            onClick={closeMenu}
            aria-label="Close menu"
            className="md:hidden fixed inset-x-0 bottom-0 top-[72px] bg-[#1a1a1a]/40 cursor-default"
          />

          <nav
            id="mobile-menu"
            aria-label="Main"
            className="md:hidden absolute inset-x-0 top-full bg-[#fbf8f1] border-b border-[#1a1a1a]/15"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex items-center h-14 px-4 border-t border-[#1a1a1a]/10 text-lg font-semibold transition-colors ${
                  isActive(item.href) ? "text-[#7a2020]" : "text-[#2e2a22] hover:text-[#7a2020]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="px-4 py-3 border-t border-[#1a1a1a]/10">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 h-12 rounded bg-[#1a1a1a] text-[#fbf8f1] text-base font-semibold transition-colors hover:bg-[#7a2020]"
              >
                <span>Resume</span>
                <ArrowIcon />
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
