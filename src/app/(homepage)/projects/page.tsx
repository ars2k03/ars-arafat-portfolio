import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/homepage/projects/ProjectCard";
import { projects } from "@/utils/projects";
import { site } from "@/utils/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Md Arafat Rahman Sohan (ARS / ars2k03), full-stack software engineer from Bangladesh: Chakri.ai, JoldiMart, WA Gateway and other production web platforms built with TypeScript, Next.js, NestJS and PostgreSQL.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects by Md Arafat Rahman Sohan (ARS)",
    description:
      "Production projects by Arafat Rahman Sohan (ars2k03): Chakri.ai, JoldiMart, WA Gateway and more.",
    url: "/projects",
    type: "website",
    images: ["/profile.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              More on GitHub
            </h3>
            <p className="text-sm text-[#4a4336] italic font-serif">
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
