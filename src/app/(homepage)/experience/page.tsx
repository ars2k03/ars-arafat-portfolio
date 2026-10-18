import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Arafat Rahman, full-stack software engineer.",
};

interface RoleLink {
  label: string;
  href: string;
}

interface Role {
  title: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  links: RoleLink[];
}

// Newest first. Add company roles and internships here as they happen.
const roles: Role[] = [
  {
    title: "Full-Stack Software Engineer",
    organization: "LuminexLabs",
    period: "2026 — Present",
    location: "Remote",
    summary:
      "Building web, AI and SaaS products for clients at an independent software studio, working across the backend, frontend and deployment.",
    links: [{ label: "Company Website", href: "https://luminexlabs.io" }],
  },
];

export default function ExperiencePage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        {/* Lead Headline Banner */}
        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              Work Experience
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              Where I&apos;ve worked and what I do there.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative border-l-2 border-[#1a1a1a] ml-2 sm:ml-3 space-y-10 max-w-4xl">
          {roles.map((role) => (
            <li key={`${role.organization}-${role.period}`} className="pl-6 sm:pl-8 relative">
              <span className="absolute -left-[9px] top-3 w-4 h-4 bg-[#7a2020] border-2 border-[#1a1a1a]" />

              <article className="bg-[#f4efe2] border-2 border-[#1a1a1a] shadow-[5px_5px_0px_#1a1a1a]">
                <header className="flex flex-wrap items-center justify-between gap-2 px-5 sm:px-7 py-2.5 border-b border-[#1a1a1a]/30 text-[11px] font-mono font-bold uppercase tracking-widest">
                  <span className="text-[#7a2020]">{role.period}</span>
                  <span className="text-[#4a4336]">{role.location}</span>
                </header>

                <div className="p-5 sm:p-7 space-y-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight">
                      {role.title}
                    </h2>
                    <p className="text-base sm:text-lg font-bold font-serif text-[#7a2020] mt-1">
                      {role.organization}
                    </p>
                  </div>

                  <p className="text-base text-[#2e2a22] leading-relaxed">
                    {role.summary}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {role.links.map((link, i) => (
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
                </div>
              </article>
            </li>
          ))}
        </ol>

        {/* Bottom Call to Action */}
        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              Hiring for a software engineering role?
            </h3>
            <p className="text-sm text-[#5c5446] italic font-serif">
              Download my resume or reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
            >
              <span>Resume</span>
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
