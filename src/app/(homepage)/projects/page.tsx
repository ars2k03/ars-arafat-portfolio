import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/utils/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Arafat Rahman: web applications, backend templates and open-source npm packages.",
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
  description: string;
  highlights: string[];
  stack: Tech[];
  links: ProjectLink[];
}

const tech = {
  nextjs: { name: "Next.js", logo: "/skills/nextjs.svg" },
  react: { name: "React", logo: "/skills/react.svg" },
  typescript: { name: "TypeScript", logo: "/skills/typescript.svg" },
  tailwind: { name: "Tailwind CSS", logo: "/skills/tailwindcss.svg" },
  nestjs: { name: "NestJS", logo: "/skills/nestjs.svg" },
  prisma: { name: "Prisma", logo: "/skills/prisma.svg" },
  postgresql: { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
  nodejs: { name: "Node.js", logo: "/skills/nodejs.svg" },
} satisfies Record<string, Tech>;

const projects: Project[] = [
  {
    title: "Bangladesh NID Verification",
    type: "Web Application",
    description:
      "An identity verification web app for Bangladeshi National ID cards, integrated with the Didit identity verification API.",
    highlights: [
      "OCR extraction of name, NID number, date of birth and address from Smart and regular NID cards",
      "3D liveness detection and biometric face matching against the NID portrait",
      "Fully localised Bengali (bn-BD) interface",
      "API keys and session checks kept on the server",
    ],
    stack: [tech.nextjs, tech.react, tech.typescript, tech.tailwind],
    links: [
      { label: "Live Demo", href: "https://nid-ars.vercel.app" },
      { label: "Source", href: `${site.github.url}/nid` },
    ],
  },
  {
    title: "ars-backend-template",
    type: "Backend Starter Template",
    description:
      "A production-ready NestJS starter that removes repetitive backend setup and keeps a consistent, scalable structure across projects.",
    highlights: [
      "Pre-configured NestJS architecture with Prisma ORM and PostgreSQL",
      "Fast linting with Oxlint and testing with Vitest",
      "Environment template and ready-to-run development scripts",
    ],
    stack: [tech.nestjs, tech.prisma, tech.postgresql, tech.typescript],
    links: [{ label: "Source", href: `${site.github.url}/ars-backend-template` }],
  },
  {
    title: "ars-facebook-auth",
    type: "Open-Source npm Package",
    description:
      "A lightweight library that verifies Facebook user access tokens and returns a normalised user profile through one typed function.",
    highlights: [
      "Confirms the token was issued for your Facebook app",
      "Generates appsecret_proof and supports custom Graph API versions",
      "Fully typed with zero runtime dependencies; works with NestJS",
    ],
    stack: [tech.typescript, tech.nodejs, tech.nestjs],
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
              Applications, backend tooling and open-source packages I&apos;ve designed and built.
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

                <p className="text-base text-[#2e2a22] leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 text-sm text-[#4a4336] leading-relaxed">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#7a2020] shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between gap-6 lg:border-l lg:border-[#1a1a1a]/20 lg:pl-6">
                <div>
                  <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#4a4336] mb-3">
                    Built With
                  </h3>
                  <ul className="flex flex-wrap gap-2.5">
                    {project.stack.map((t) => (
                      <li
                        key={t.name}
                        className="flex items-center gap-2 px-3 py-1.5 bg-[#fbf8f1] border border-[#1a1a1a]/40"
                      >
                        <Image src={t.logo} alt="" width={20} height={20} className="w-5 h-5 object-contain" />
                        <span className="text-sm font-bold font-serif text-[#1a1a1a]">{t.name}</span>
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
