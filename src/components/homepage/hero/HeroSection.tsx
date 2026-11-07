import Link from "next/link";
import CopyEmailButton from "@/components/homepage/hero/CopyEmailButton";
import ProfilePortrait from "@/components/homepage/hero/ProfilePortrait";
import { displayFont } from "@/utils/fonts";
import { site } from "@/utils/site";

const iconLinkClass =
  "w-11 h-11 flex items-center justify-center rounded border border-[#1a1a1a]/25 text-[#1a1a1a] transition-colors hover:border-[#7a2020] hover:text-[#7a2020] cursor-pointer";

const socialLinks = [
  {
    label: "GitHub",
    href: site.github.url,
    icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    label: "LinkedIn",
    href: site.linkedin.url,
    icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  },
  {
    label: "X",
    href: site.x.url,
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-stretch font-sans lg:py-4">
      <div className="lg:col-span-7 flex flex-col lg:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#2e2a22]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1f7a3d] shrink-0" aria-hidden="true" />
            <span>Available for hire · {site.location}</span>
          </p>

          <h1 className={`${displayFont.className} mt-4 text-[3.25rem] sm:text-7xl xl:text-8xl leading-none tracking-tight text-[#1a1a1a]`}>
            Arafat Rahman
          </h1>

          <p className={`${displayFont.className} italic mt-3 text-[1.625rem] sm:text-4xl leading-tight text-[#7a2020]`}>
            {site.role}
          </p>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#2e2a22]">
            Engineering scalable systems, building seamless digital experiences, and turning complex ideas into production-ready software.
          </p>

          <p className="mt-3 text-sm sm:text-base font-medium text-[#4a4336]">
            Md Arafat Rahman Sohan, known as ARS · ars2k03
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center mt-8 lg:mt-6">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded bg-[#1a1a1a] text-[#fbf8f1] text-base font-semibold border-[1.5px] border-[#1a1a1a] transition-colors hover:bg-[#7a2020] hover:border-[#7a2020]"
            >
              <span>Explore projects</span>
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 rounded text-[#1a1a1a] text-base font-semibold border-[1.5px] border-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-[#fbf8f1]"
            >
              Get in touch
            </Link>
          </div>

          <div className="flex items-center gap-2 mt-6">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className={iconLinkClass}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d={link.icon} />
                </svg>
              </a>
            ))}
            <CopyEmailButton email={site.email} className={iconLinkClass} />
          </div>
        </div>
      </div>

      <ProfilePortrait />
    </div>
  );
}
