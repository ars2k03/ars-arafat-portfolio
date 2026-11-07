import type { Project } from "@/types/projects";
import type { TechItem } from "@/types/skills";
import { site } from "@/utils/site";

const tech = {
  nextjs: { name: "Next.js", logo: "/skills/nextjs.svg" },
  typescript: { name: "TypeScript", logo: "/skills/typescript.svg" },
  nestjs: { name: "NestJS", logo: "/skills/nestjs.svg" },
  postgresql: { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
  nodejs: { name: "Node.js", logo: "/skills/nodejs.svg" },
  redis: { name: "Redis", logo: "/skills/redis.svg" },
} satisfies Record<string, TechItem>;

export const projects: Project[] = [
  {
    title: "WA Gateway",
    description: "A free, public API for adding WhatsApp OTP verification to any website or app.",
    image: "/projects/wa-gateway.png",
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.redis],
    links: [
      { label: "Live site", href: "https://wa.ars2k03.tech" },
      { label: "API docs", href: "https://wa.ars2k03.tech/docs" },
    ],
  },
  {
    title: "Chakri AI",
    description: "AI-powered hiring platform for the Bangladesh job market, in public beta.",
    image: "/projects/chakri-ai-home.png",
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.redis],
    links: [{ label: "Live site", href: "https://chakriai.com" }],
  },
  {
    title: "JoldiMart",
    description: "Quick-commerce startup delivering groceries in Dhaka within 10 minutes.",
    image: "/projects/joldimart-home.png",
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.redis],
    links: [{ label: "Live site", href: "https://joldimart.com" }],
  },
  {
    title: "ars-facebook-auth",
    description: "Add Facebook login to any Node.js backend in two lines of code.",
    stack: [tech.typescript, tech.nodejs],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/ars-facebook-auth" },
      { label: "Source", href: `${site.github.url}/ars-facebook-auth` },
    ],
  },
];
