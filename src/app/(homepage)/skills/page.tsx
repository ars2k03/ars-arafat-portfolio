import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills & Tech Stack",
  description: "The languages, frameworks and tools Arafat Rahman uses to build full-stack web and mobile applications.",
};

interface TechItem {
  name: string;
  logo: string;
}

interface TechCategory {
  title: string;
  icon: string;
  items: TechItem[];
}

export default function SkillsPage() {
  const categories: TechCategory[] = [
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
      title: "Cloud & Hosting",
      icon: "☁️",
      items: [
        { name: "Cloudflare", logo: "/skills/cloudflare.svg" },
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

  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        {/* Lead Headline Banner */}
        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              Tech Stack &amp; Tools
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              The languages, frameworks and tools I use to build full-stack web and mobile applications, from API design to deployment.
            </p>
          </div>
        </div>

        {/* Categories Stack Grid */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title} className="space-y-4">
              
              {/* Category Header Rule */}
              <div className="border-b border-[#1a1a1a]/40 pb-2 flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl sm:text-2xl">{cat.icon}</span>
                  <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight">
                    {cat.title}
                  </h2>
                </div>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-1">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-4 py-6 bg-[#f4efe2] border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[5px_5px_0px_#7a2020] hover:-translate-y-0.5 transition-all duration-150 flex flex-col items-center justify-center gap-3 text-center group"
                  >
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      width={72}
                      height={72}
                      className="w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0 object-contain group-hover:scale-105 transition-transform"
                    />
                    <h3 className="text-lg sm:text-xl font-black font-serif text-[#1a1a1a] tracking-tight group-hover:text-[#7a2020] transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Call to Action Footer Rule */}
        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              Looking to deploy these technologies into your stack?
            </h3>
            <p className="text-sm text-[#5c5446] italic font-serif">
              Available for full-time software engineering roles and targeted technical consulting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4efe2] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
            >
              <span>Initiate Contact</span>
              <span>✉</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
