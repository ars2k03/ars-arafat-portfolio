import type { Project } from "@/types/projects";
import type { TechItem } from "@/types/skills";
import { site } from "@/utils/site";

const tech = {
  nextjs: { name: "Next.js", logo: "/skills/nextjs.svg" },
  react: { name: "React", logo: "/skills/react.svg" },
  typescript: { name: "TypeScript", logo: "/skills/typescript.svg" },
  nestjs: { name: "NestJS", logo: "/skills/nestjs.svg" },
  prisma: { name: "Prisma", logo: "/skills/prisma.svg" },
  postgresql: { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
  nodejs: { name: "Node.js", logo: "/skills/nodejs.svg" },
  redis: { name: "Redis", logo: "/skills/redis.svg" },
  githubactions: { name: "CI/CD", logo: "/skills/githubactions.svg" },
  supabase: { name: "Supabase", logo: "/skills/supabase.svg" },
  cloudflare: { name: "Cloudflare", logo: "/skills/cloudflare.svg" },
} satisfies Record<string, TechItem>;

export const projects: Project[] = [
  {
    title: "WA Gateway",
    type: "WhatsApp OTP API · Creator & Maintainer",
    image: "/projects/wa-gateway.png",
    highlights: [
      "A free, public API for adding WhatsApp OTP verification to any website or app; Chakri.ai and JoldiMart both use it for login",
      "Connect a WhatsApp number by scanning a QR code, get an API key, and send an OTP with one request; no Meta Business approval needed",
      "Sessions are saved in Redis and reconnect automatically after drops or server restarts, with no need to scan the QR again",
      "Free tier of 100 messages/day and 3,000/month, enforced per API key, plus custom message templates and a usage dashboard",
    ],
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.prisma, tech.redis, tech.supabase],
    links: [
      { label: "Live Site", href: "https://wa.ars2k03.online" },
      { label: "API Docs", href: "https://wa.ars2k03.online/docs" },
    ],
  },
  {
    title: "Chakri.ai",
    type: "AI Hiring Platform · Founding Full-Stack Engineer · Since Jun 2026",
    image: "/projects/chakri-ai.png",
    highlights: [
      "Architected and developed an AI-powered hiring platform end to end, covering frontend, backend and database, and took it from concept to public beta",
      "Built AI voice interviews with speech-to-text and text-to-speech, along with AI agents that shortlist candidates for recruiters and auto-apply to relevant jobs for job seekers",
      "Engineered the complete hiring workflow: CV parsing, AI job matching, application tracking and real-time recruiter–candidate messaging",
      "Designed a modular NestJS and PostgreSQL backend, integrating Gemini and Ollama Cloud LLMs for cost-efficient AI features",
    ],
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.prisma, tech.redis, tech.supabase, tech.cloudflare],
    links: [{ label: "Live Site", href: "https://chakriai.com" }],
  },
  {
    title: "JoldiMart",
    type: "Quick-Commerce Platform · Founding Full-Stack Engineer · Since Sep 2026",
    image: "/projects/joldimart.png",
    highlights: [
      "Built the customer storefront, backend and database for a 10-minute grocery delivery startup in Dhaka",
      "Login with a phone number and a WhatsApp OTP, product catalog, cart, saved addresses and checkout",
      "Live order tracking from checkout to delivery; Cash on Delivery is live, bKash and Nagad payments are in development",
    ],
    stack: [tech.nextjs, tech.nestjs, tech.typescript, tech.postgresql, tech.prisma, tech.redis, tech.supabase, tech.cloudflare, tech.githubactions],
    links: [{ label: "Live Site", href: "https://joldimart.com" }],
  },
  {
    title: "ars-facebook-auth",
    type: "Open-Source npm Package",
    highlights: [
      "Add Facebook login to any Node.js backend in two lines of code",
      "Verifies the Facebook access token and returns a clean, typed user profile",
      "Written in TypeScript, with zero runtime dependencies",
    ],
    stack: [tech.typescript, tech.nodejs],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/ars-facebook-auth" },
      { label: "Source", href: `${site.github.url}/ars-facebook-auth` },
    ],
  },
];
