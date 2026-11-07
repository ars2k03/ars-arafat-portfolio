import type { TechItem } from "@/types/skills";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  stack: TechItem[];
  links: ProjectLink[];
}
