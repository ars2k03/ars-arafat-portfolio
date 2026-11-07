import Image from "next/image";
import ProjectLinks from "@/components/homepage/projects/ProjectLinks";
import TechTile from "@/components/homepage/skills/TechTile";
import type { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="p-5 sm:p-7 bg-[#f4efe2] border-2 border-[#1a1a1a] shadow-[5px_5px_0px_#1a1a1a] grid grid-cols-1 lg:grid-cols-12 gap-6"
    >
      <div className={`${project.image ? "lg:col-span-7" : "lg:col-span-12"} flex flex-col gap-6`}>
        <div className="space-y-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7a2020]">
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

        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#4a4336] mb-3">
            Built With
          </h3>
          <ul className="grid grid-cols-3 sm:grid-cols-5 auto-rows-fr gap-2">
            {project.stack.map((t) => (
              <TechTile key={t.name} name={t.name} logo={t.logo} />
            ))}
          </ul>
        </div>

        {!project.image && <ProjectLinks links={project.links} />}
      </div>

      {project.image && (
        <div className="lg:col-span-5 flex flex-col justify-center gap-6 lg:border-l lg:border-[#1a1a1a]/20 lg:pl-6">
          <div className="w-full border-2 border-[#1a1a1a] bg-[#fbf8f1] overflow-hidden shadow-[4px_4px_0px_#1a1a1a]">
            <Image
              src={project.image}
              alt={`${project.title} homepage`}
              width={1440}
              height={900}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="w-full h-auto"
            />
          </div>

          <ProjectLinks links={project.links} />
        </div>
      )}
    </article>
  );
}
