import type { Metadata } from "next";
import Link from "next/link";
import SkillCategory from "@/components/homepage/skills/SkillCategory";
import { skillCategories } from "@/utils/skills";

export const metadata: Metadata = {
  title: "Skills & Tech Stack — TypeScript, Next.js, NestJS",
  description:
    "Skills and tech stack of Md Arafat Rahman Sohan (ARS / ars2k03), full-stack software engineer: TypeScript, Next.js, React, NestJS, Node.js, PostgreSQL, Redis, Docker, Flutter and LLM / AI agent integration.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills of Md Arafat Rahman Sohan (ARS)",
    description:
      "TypeScript, Next.js, NestJS, PostgreSQL and more — the tech stack of Arafat Rahman Sohan (ars2k03).",
    url: "/skills",
    type: "website",
    images: ["/profile.jpg"],
  },
};

export default function SkillsPage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              Tech Stack &amp; Tools
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              The languages, frameworks and tools I use to build full-stack web and mobile applications, from API design to deployment.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              Looking to deploy these technologies into your stack?
            </h3>
            <p className="text-sm text-[#4a4336] italic font-serif">
              Available for full-time software engineering roles and targeted technical consulting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4efe2] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
            >
              <span>Initiate Contact</span>
              <span>✉</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
