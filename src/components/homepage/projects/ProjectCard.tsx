import Image from "next/image";
import ProjectLinks from "@/components/homepage/projects/ProjectLinks";
import TechButton from "@/components/homepage/skills/TechButton";
import type { Project } from "@/types/projects";
import { displayFont } from "@/utils/fonts";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`grid grid-cols-1 bg-[#f4efe2] border-[1.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] ${
        project.image ? "md:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)]" : ""
      }`}
    >
      <div className="flex flex-col items-start justify-center gap-2.5 p-5 md:p-7">
        <h3 className={`${displayFont.className} text-[1.75rem] md:text-[2rem] leading-tight text-[#1a1a1a]`}>
          {project.title}
        </h3>
        <p className="max-w-xl text-base leading-relaxed text-[#2e2a22]">{project.description}</p>

        <ul aria-label="Built with" className="flex flex-wrap gap-2 mt-1.5">
          {project.stack.map((tech) => (
            <li key={tech.name}>
              <TechButton tech={tech} />
            </li>
          ))}
        </ul>

        <div className="mt-2.5">
          <ProjectLinks links={project.links} />
        </div>
      </div>

      {project.image && (
        <div className="relative order-first md:order-none aspect-[16/10] md:aspect-auto md:min-h-[240px] overflow-hidden bg-[#fbf8f1] border-b-[1.5px] md:border-b-0 md:border-l-[1.5px] border-[#1a1a1a]">
          <Image
            src={project.image}
            alt={`${project.title} homepage`}
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}
    </article>
  );
}
