import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TechTile from "@/components/TechTile";
import { site } from "@/utils/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Arafat Rahman: production web platforms and open-source npm packages.",
};

interface ProjectLink {
  label: string;
  href: string;
}

interface Tech {
  name: string;
  logo: string;
}

interface Project {
  title: string;
  type: string;
  image?: string;
  highlights: string[];
  stack: Tech[];
  links: ProjectLink[];
}

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
} satisfies Record<string, Tech>;

const projects: Project[] = [
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

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={
            i === 0
              ? "inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
              : "inline-flex items-center gap-2 px-5 py-2.5 bg-[#fbf8f1] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
          }
        >
          <span>{link.label}</span>
          <span aria-hidden="true">&#8599;&#xFE0E;</span>
        </a>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        {/* Lead Headline Banner */}
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

        {/* Project List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="p-5 sm:p-7 bg-[#f4efe2] border-2 border-[#1a1a1a] shadow-[5px_5px_0px_#1a1a1a] grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className={`${project.image ? "lg:col-span-7" : "lg:col-span-12"} flex flex-col gap-6`}>
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7a2020]">
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
                  <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#4a4336] mb-3">
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
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className="w-full h-auto"
                    />
                  </div>

                  <ProjectLinks links={project.links} />
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              More on GitHub
            </h3>
            <p className="text-sm text-[#5c5446] italic font-serif">
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
