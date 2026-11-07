import Link from "next/link";
import ProjectCard from "@/components/homepage/projects/ProjectCard";
import { displayFont } from "@/utils/fonts";
import { projects } from "@/utils/projects";
import { site } from "@/utils/site";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-[72px] mt-14 lg:mt-20 pt-10 lg:pt-14 border-t-2 border-[#1a1a1a] font-sans">
      <div className="mb-8">
        <h2 id="projects-title" className={`${displayFont.className} text-5xl sm:text-6xl leading-tight tracking-tight text-[#1a1a1a]`}>
          Selected Work
        </h2>

        <p className="mt-3 text-base sm:text-lg text-[#2e2a22]">
          Production platforms and open-source packages I&apos;ve worked on.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
        <div>
          <h3 className={`${displayFont.className} text-2xl text-[#1a1a1a]`}>More on GitHub</h3>
          <p className="mt-1 text-[15px] text-[#2e2a22]">Browse all repositories and recent activity.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-11 px-5 rounded bg-[#1a1a1a] text-[#fbf8f1] text-[15px] font-semibold border-[1.5px] border-[#1a1a1a] transition-colors hover:bg-[#7a2020] hover:border-[#7a2020]"
          >
            <span>View GitHub</span>
            <span aria-hidden="true">&#8599;&#xFE0E;</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-5 rounded text-[#1a1a1a] text-[15px] font-semibold border-[1.5px] border-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-[#fbf8f1]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
