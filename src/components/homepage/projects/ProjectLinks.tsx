import type { ProjectLink } from "@/types/projects";

interface ProjectLinksProps {
  links: ProjectLink[];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-1.5 h-[42px] px-4 rounded border-[1.5px] border-[#1a1a1a] text-[15px] font-semibold transition-colors ${
            i === 0
              ? "bg-[#1a1a1a] text-[#fbf8f1] hover:bg-[#7a2020] hover:border-[#7a2020]"
              : "text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#fbf8f1]"
          }`}
        >
          <span>{link.label}</span>
          <span aria-hidden="true">&#8599;&#xFE0E;</span>
        </a>
      ))}
    </div>
  );
}
