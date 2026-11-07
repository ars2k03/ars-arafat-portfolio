import type { TechItem } from "@/types/skills";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  type: string;
  image?: string;
  highlights: string[];
  stack: TechItem[];
  links: ProjectLink[];
}
