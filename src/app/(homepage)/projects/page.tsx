import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/utils/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Arafat Rahman: production web platforms and open-source npm packages.",
};

interface ProjectLink {
  label: string;
  href: string;
}

interface Tech {
  name: string;
  logo: string;
}

interface Project {
  title: string;
  type: string;
  highlights: string[];
  stack: Tech[];
  links: ProjectLink[];
}

const tech = {
  nextjs: { name: "Next.js", logo: "/skills/nextjs.svg" },
  react: { name: "React", logo: "/skills/react.svg" },
  typescript: { name: "TypeScript", logo: "/skills/typescript.svg" },
  nestjs: { name: "NestJS", logo: "/skills/nestjs.svg" },
  prisma: { name: "Prisma", logo: "/skills/prisma.svg" },
  postgresql: { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
  nodejs: { name: "Node.js", logo: "/skills/nodejs.svg" },
  redis: { name: "Redis", logo: "/skills/redis.svg" },
  githubactions: { name: "CI/CD", logo: "/skills/githubactions.svg" },
  supabase: { name: "Supabase", logo: "/skills/supabase.svg" },
  cloudflare: { name: "Cloudflare", logo: "/skills/cloudflare.svg" },
} satisfies Record<string, Tech>;

const projects: Project[] = [
  {
    title: "WA Gateway",
    type: "WhatsApp OTP SaaS · Solo Project",
    highlights: [
      "WhatsApp OTP API for developers, built and run solo",
      "Pair a number by QR, get an API key, send OTPs with one call",
      "Usage quotas, custom templates and a developer dashboard",
    ],
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.prisma, tech.redis, tech.supabase],
    links: [
      { label: "Live Site", href: "https://wa.ars2k03.online" },
      { label: "API Docs", href: "https://wa.ars2k03.online/docs" },
    ],
  },
  {
    title: "Chakri.ai",
    type: "AI Job Platform · Private Codebase",
    highlights: [
      "AI-powered job platform for Bangladesh, live in beta",
      "AI job matching, CV analysis and a recruiting assistant",
      "Dashboards for candidates and employers, with bKash payments",
    ],
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.prisma, tech.redis, tech.supabase, tech.cloudflare],
    links: [{ label: "Live Site", href: "https://chakriai.com" }],
  },
  {
    title: "JoldiMart",
    type: "Quick-Commerce Platform · Private Codebase",
    highlights: [
      "10-minute grocery delivery platform in Dhaka",
      "Phone OTP login, cart, checkout and live order tracking",
      "Supports Cash on Delivery, bKash and Nagad",
    ],
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.prisma, tech.redis, tech.supabase, tech.cloudflare, tech.githubactions],
    links: [{ label: "Live Site", href: "https://joldimart.com" }],
  },
  {
    title: "ars-facebook-auth",
    type: "Open-Source npm Package",
    highlights: [
      "npm package that verifies Facebook access tokens",
      "Returns a clean, typed user profile from one function",
      "Zero runtime dependencies",
    ],
    stack: [tech.typescript, tech.nodejs],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/ars-facebook-auth" },
      { label: "Source", href: `${site.github.url}/ars-facebook-auth` },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        {/* Lead Headline Banner */}
        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              Selected Work
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              Production platforms and open-source packages I&apos;ve worked on.
            </p>
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="p-5 sm:p-7 bg-[#f4efe2] border-2 border-[#1a1a1a] shadow-[5px_5px_0px_#1a1a1a] grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7a2020]">
                    {String(index + 1).padStart(2, "0")} · {project.type}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight mt-1">
                    {project.title}
                  </h2>
                </div>

                <ul className="space-y-2 text-base text-[#2e2a22] leading-relaxed">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#7a2020] shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6 lg:border-l lg:border-[#1a1a1a]/20 lg:pl-6">
                <div className="flex-1 flex flex-col">
                  <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#4a4336] mb-3">
                    Built With
                  </h3>
                  <ul className="flex-1 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 auto-rows-fr gap-2">
                    {project.stack.map((t) => (
                      <li
                        key={t.name}
                        className="flex flex-col items-center justify-center gap-1.5 px-2 py-3 bg-[#fbf8f1] border border-[#1a1a1a]/40 text-center"
                      >
                        <Image src={t.logo} alt="" width={28} height={28} className="w-7 h-7 object-contain" />
                        <span className="text-xs sm:text-sm font-bold font-serif text-[#1a1a1a]">{t.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        i === 0
                          ? "inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
                          : "inline-flex items-center gap-2 px-5 py-2.5 bg-[#fbf8f1] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
                      }
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">&#8599;&#xFE0E;</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              More on GitHub
            </h3>
            <p className="text-sm text-[#5c5446] italic font-serif">
              Browse all repositories and recent activity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
            >
              <span>View GitHub</span>
              <span aria-hidden="true">&#8599;&#xFE0E;</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4efe2] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
