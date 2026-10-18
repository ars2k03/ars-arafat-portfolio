import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/utils/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Arafat Rahman, a full-stack software engineer building scalable backends, web apps and mobile apps.",
};

const focusAreas = [
  {
    title: "Backend Engineering",
    body: "Designing REST APIs and modular services with NestJS, Express and Node.js, backed by PostgreSQL, MongoDB and Redis.",
  },
  {
    title: "Web Applications",
    body: "Building fast, SEO-friendly interfaces with Next.js and React, using server components and type-safe data flows.",
  },
  {
    title: "Mobile Apps",
    body: "Shipping cross-platform mobile apps with Flutter and Dart from a single codebase.",
  },
  {
    title: "Delivery & Tooling",
    body: "Containerising with Docker, automating CI/CD with GitHub Actions and serving through Cloudflare.",
  },
];

const facts = [
  { label: "Role", value: site.role },
  { label: "Based in", value: site.location },
  { label: "Core stack", value: "TypeScript · NestJS · Next.js" },
  { label: "Status", value: "Open to full-time roles" },
];

export default function AboutPage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        {/* Lead Headline Banner */}
        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              About Me
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              Full-stack software engineer focused on reliable backends, clean interfaces and software that holds up in production.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Story & Focus Areas */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4 text-base sm:text-lg text-[#2e2a22] leading-relaxed">
              <p className="first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:leading-[0.85] first-letter:text-[#7a2020]">
                Hi, I&apos;m {site.name}, a full-stack software engineer from {site.location}. I build products end to end — from the database schema and API layer to the interface people actually use.
              </p>
              <p>
                Most of my work is in TypeScript. On the backend I reach for NestJS, Prisma and PostgreSQL, with Redis for caching; on the frontend I use Next.js and React, and Flutter when a project needs a mobile app.
              </p>
              <p>
                I care about maintainable code: clear module boundaries, typed contracts between client and server, and automated checks that keep releases boring. I also publish reusable tools, such as an open-source NestJS starter template and an npm package for Facebook token verification.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight border-b border-[#1a1a1a]/40 pb-2">
                What I Do
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-5 bg-[#f4efe2] border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
                  >
                    <h3 className="text-lg sm:text-xl font-black font-serif text-[#1a1a1a] tracking-tight mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[#4a4336] leading-relaxed">
                      {area.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Portrait & Quick Facts */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#f4efe2] border-2 border-[#1a1a1a] p-3 shadow-[6px_6px_0px_#1a1a1a]">
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#1a1a1a]">
                <Image
                  src="/profile.jpg"
                  alt={`${site.name} - ${site.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover object-top grayscale contrast-125 sepia-[0.25]"
                />
              </div>
            </div>

            <dl className="border border-[#1a1a1a] bg-[#f4efe2] divide-y divide-[#1a1a1a]/20">
              {facts.map((fact) => (
                <div key={fact.label} className="px-4 py-3">
                  <dt className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7a2020]">
                    {fact.label}
                  </dt>
                  <dd className="text-base font-bold font-serif text-[#1a1a1a]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
              >
                <span>Get in Touch</span>
                <span>→</span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4efe2] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
              >
                <span>Resume</span>
              </a>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
