import type { TechCategory } from "@/types/skills";

export const skillCategories: TechCategory[] = [
  {
    title: "Core Languages",
    icon: "💻",
    items: [
      { name: "TypeScript", logo: "/skills/typescript.svg" },
      { name: "JavaScript", logo: "/skills/javascript.svg" },
      { name: "Dart", logo: "/skills/dart.svg" },
      { name: "SQL", logo: "/skills/sql.svg" },
    ],
  },
  {
    title: "Backend Engines",
    icon: "⚙️",
    items: [
      { name: "NestJS", logo: "/skills/nestjs.svg" },
      { name: "Node.js", logo: "/skills/nodejs.svg" },
      { name: "Express.js", logo: "/skills/express.svg" }
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: "📱",
    items: [
      { name: "Next.js", logo: "/skills/nextjs.svg" },
      { name: "React", logo: "/skills/react.svg" },
      { name: "Flutter", logo: "/skills/flutter.svg" },
    ],
  },
  {
    title: "Databases & In-Memory Stores",
    icon: "🗄️",
    items: [
      { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
      { name: "MongoDB", logo: "/skills/mongodb.svg" },
      { name: "Redis", logo: "/skills/redis.svg" },
    ],
  },
  {
    title: "Data Modeling & ORM",
    icon: "🔗",
    items: [
      { name: "Prisma ORM", logo: "/skills/prisma.svg" },
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: "🚀",
    items: [
      { name: "Docker", logo: "/skills/docker.svg" },
      { name: "GitHub Actions", logo: "/skills/githubactions.svg" },
    ],
  },
  {
    title: "Cloud & Platforms",
    icon: "☁️",
    items: [
      { name: "Cloudflare", logo: "/skills/cloudflare.svg" },
      { name: "Supabase", logo: "/skills/supabase.svg" },
    ],
  },
  {
    title: "Tools & Environment",
    icon: "🛠️",
    items: [
      { name: "Git", logo: "/skills/git.svg" },
      { name: "Linux", logo: "/skills/linux.svg" },
    ],
  },
];
