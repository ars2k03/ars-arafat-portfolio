import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and open-source work of Arafat Rahman, full-stack software engineer.",
};

interface Role {
  title: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

// Newest first. Add company roles and internships here as they happen.
const roles: Role[] = [
  {
    title: "Full-Stack Software Engineer",
    organization: "Independent & Open Source",
    period: "2026 — Present",
    location: "Remote",
    summary:
      "Designing, building and shipping full-stack applications and reusable developer tooling end to end.",
    achievements: [
      "Built a Bangladesh NID verification web app with OCR extraction, liveness detection and face matching, deployed on Vercel",
      "Published ars-facebook-auth, a zero-dependency TypeScript package for verifying Facebook access tokens, to npm",
      "Created a production-ready NestJS + Prisma + PostgreSQL starter template to standardise backend setup across projects",
      "Designed and developed this portfolio with Next.js App Router, server components and Redis-backed APIs",
    ],
    stack: ["TypeScript", "Next.js", "React", "NestJS", "Prisma", "PostgreSQL", "Redis"],
  },
];

export default function ExperiencePage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        {/* Lead Headline Banner */}
        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              Work Experience
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              Where I&apos;ve worked, what I&apos;ve built and the impact it had.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative border-l-2 border-[#1a1a1a] ml-2 sm:ml-3 space-y-10 max-w-4xl">
          {roles.map((role) => (
            <li key={`${role.organization}-${role.period}`} className="pl-6 sm:pl-8 relative">
              <span className="absolute -left-[9px] top-2 w-4 h-4 bg-[#7a2020] border-2 border-[#1a1a1a]" />

              <div className="p-5 sm:p-6 bg-[#f4efe2] border border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-serif text-[#1a1a1a] tracking-tight">
                      {role.title}
                    </h2>
                    <p className="text-base sm:text-lg font-bold font-serif text-[#7a2020]">
                      {role.organization}
                    </p>
                  </div>
                  <div className="text-right text-xs font-mono font-bold uppercase tracking-wider text-[#4a4336]">
                    <div>{role.period}</div>
                    <div className="text-[#696050]">{role.location}</div>
                  </div>
                </div>

                <p className="text-base text-[#2e2a22] leading-relaxed italic">
                  {role.summary}
                </p>

                <ul className="space-y-1.5 text-sm sm:text-base text-[#4a4336] leading-relaxed">
                  {role.achievements.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#7a2020] shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2 pt-1">
                  {role.stack.map((name) => (
                    <li
                      key={name}
                      className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1a1a1a] bg-[#fbf8f1] px-2 py-0.5 border border-[#1a1a1a]/30"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {/* Bottom Call to Action */}
        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              Hiring for a software engineering role?
            </h3>
            <p className="text-sm text-[#5c5446] italic font-serif">
              Download my resume or reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
            >
              <span>Resume</span>
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
