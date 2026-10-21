"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/utils/site";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const email = site.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="top" className="w-full flex-1 flex flex-col bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <div className="lg:col-span-7 flex flex-col">

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.04]">
                Arafat Rahman
              </h1>

              <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#7a2020] font-bold tracking-tight">
                Full-Stack Software Engineer
              </p>

              <p className="text-sm sm:text-base font-sans font-bold tracking-wider uppercase text-[#4a4336]">
                Md Arafat Rahman Sohan — known as ARS · ars2k03
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-[#4a4336] font-serif italic leading-relaxed max-w-xl mt-6">
              Engineering scalable systems, building seamless digital experiences, and turning complex ideas into production-ready software.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:items-center mt-8 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs sm:text-sm font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
              >
                <span>Explore Projects</span>
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f4efe2] text-[#1a1a1a] text-xs sm:text-sm font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#7a2020] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
              >
                <span>Get in Touch</span>
                <span>→</span>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1a1a1a]/20">
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#f4efe2] hover:bg-[#1a1a1a] hover:text-[#fbf8f1] text-[#1a1a1a] border border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer group"
                >
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Resume</span>
                </a>

                <a
                  href={site.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#f4efe2] hover:bg-[#1a1a1a] hover:text-[#fbf8f1] text-[#1a1a1a] border border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer group"
                >
                  <svg className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href={site.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#f4efe2] hover:bg-[#1a1a1a] hover:text-[#fbf8f1] text-[#1a1a1a] border border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer group"
                >
                  <svg className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#f4efe2] hover:bg-[#1a1a1a] hover:text-[#fbf8f1] text-[#1a1a1a] border border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer group"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <span className="text-emerald-700 group-hover:text-emerald-400">✓ Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-md bg-[#f4efe2] border-2 border-[#1a1a1a] p-3 sm:p-4 shadow-[6px_6px_0px_#1a1a1a] relative">

              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#1a1a1a] pointer-events-none"></div>
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#1a1a1a] pointer-events-none"></div>
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#1a1a1a] pointer-events-none"></div>
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#1a1a1a] pointer-events-none"></div>

              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
                className="relative w-full aspect-[4/5] overflow-hidden border border-[#1a1a1a] bg-[#ebe3cf] cursor-crosshair select-none"
              >
                <Image
                  src="/profile.jpg"
                  alt={`Md Arafat Rahman Sohan (ARS / ars2k03) - ${site.role} from Rajshahi, Bangladesh`}
                  fill
                  preload
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top grayscale contrast-125 sepia-[0.25] brightness-[0.96]"
                />

                <div
                  className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
                  style={{
                    backgroundImage: `radial-gradient(#1a1a1a 1px, transparent 1px)`,
                    backgroundSize: "4px 4px",
                  }}
                />

                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    maskImage: `radial-gradient(circle 95px at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 95px at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 100%)`,
                  }}
                >
                  <Image
                    src="/profile.jpg"
                    alt={`Md Arafat Rahman Sohan (ARS / ars2k03) - ${site.role} from Rajshahi, Bangladesh`}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>

                {isHovered && (
                  <div
                    className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1a1a1a]/30 shadow-[0_0_12px_rgba(0,0,0,0.15)]"
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`,
                      width: "190px",
                      height: "190px",
                    }}
                  />
                )}

                <div className="absolute bottom-3 right-8 sm:right-10 pointer-events-none select-none z-10">
                  <svg
                    width="92"
                    height="92"
                    viewBox="0 0 100 100"
                    className="opacity-95 text-[#7a2020] drop-shadow-sm rotate-[-12deg]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      fill="#fbf8f1"
                      fillOpacity="0.92"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="33"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                    />

                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                      <text
                        key={deg}
                        x="50"
                        y="11.5"
                        textAnchor="middle"
                        fontSize="6.5"
                        fill="currentColor"
                        transform={`rotate(${deg} 50 50)`}
                      >
                        ★
                      </text>
                    ))}

                    <text
                      x="50"
                      y="56"
                      textAnchor="middle"
                      fontSize="20"
                      fontFamily="'Georgia', 'Times New Roman', serif"
                      fontStyle="italic"
                      fontWeight="900"
                      letterSpacing="3"
                      fill="currentColor"
                    >
                      A R S
                    </text>

                    <path
                      d="M 28 62 C 38 59, 58 63, 72 60 C 75 59, 68 64, 56 65"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>


        <section aria-labelledby="about-arafat" className="mt-16 border-t-2 border-[#1a1a1a] pt-10">
          <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#7a2020] mb-2">★ About</p>
          <h2 id="about-arafat" className="text-3xl sm:text-4xl font-black font-serif text-[#1a1a1a] tracking-tight mb-4">
            About Md Arafat Rahman Sohan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base sm:text-lg text-[#2e2a22] font-serif leading-relaxed">
            <p>
              <strong>Md Arafat Rahman Sohan</strong>, known online as <strong>ARS</strong> and{" "}
              <strong>ars2k03</strong>, is a full-stack software engineer based in Rajshahi,
              Bangladesh. People search for him as Arafat, Sohan, Rahman, ARS, ARS Arafat and
              ars2k03 — every name points to the same engineer, and this site, ars2k03.online,
              is his official portfolio.
            </p>
            <p>
              Arafat is a founding full-stack engineer at <strong>Chakri.ai</strong> and{" "}
              <strong>JoldiMart</strong>, works part-time at <strong>LuminexLabs</strong>, and
              studies BSc in Computer Science &amp; Engineering at RUET (Rajshahi University of
              Engineering &amp; Technology). He builds production systems with TypeScript,
              Next.js, NestJS and PostgreSQL. Find him on{" "}
              <a href="https://github.com/ars2k03" target="_blank" rel="noreferrer" className="underline decoration-[#7a2020] underline-offset-4 hover:text-[#7a2020]">GitHub (ars2k03)</a>,{" "}
              <a href="https://www.linkedin.com/in/ars2k05" target="_blank" rel="noreferrer" className="underline decoration-[#7a2020] underline-offset-4 hover:text-[#7a2020]">LinkedIn (ars2k05)</a>{" "}
              and <a href="https://x.com/ars_2k03" target="_blank" rel="noreferrer" className="underline decoration-[#7a2020] underline-offset-4 hover:text-[#7a2020]">X (ars_2k03)</a>.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
