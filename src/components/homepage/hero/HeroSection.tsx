import Link from "next/link";
import CopyEmailButton from "@/components/homepage/hero/CopyEmailButton";
import ProfilePortrait from "@/components/homepage/hero/ProfilePortrait";
import { site } from "@/utils/site";

const socialLinkClass =
  "inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#f4efe2] hover:bg-[#1a1a1a] hover:text-[#fbf8f1] text-[#1a1a1a] border border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer group";

export default function HeroSection() {
  return (
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
              className={socialLinkClass}
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
              className={socialLinkClass}
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
              className={socialLinkClass}
            >
              <svg className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <CopyEmailButton email={site.email} className={socialLinkClass} />
          </div>
        </div>

      </div>

      <ProfilePortrait />
    </div>
  );
}
