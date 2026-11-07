import type { Metadata } from "next";
import Link from "next/link";
import RoleCard from "@/components/homepage/experience/RoleCard";
import { roles } from "@/utils/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Md Arafat Rahman Sohan (ARS / ars2k03): Founding Full-Stack Engineer at Chakri.ai and JoldiMart, Full-Stack Software Engineer (part-time) at LuminexLabs, and BSc CSE student at RUET, Rajshahi, Bangladesh.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience of Md Arafat Rahman Sohan (ARS)",
    description:
      "Founding engineer at Chakri.ai and JoldiMart, part-time at LuminexLabs — the experience of Arafat Rahman Sohan (ars2k03).",
    url: "/experience",
    type: "website",
    images: ["/profile.jpg"],
  },
};

export default function ExperiencePage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

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

        <ol className="relative border-l-2 border-[#1a1a1a] ml-2 sm:ml-3 space-y-10 max-w-4xl">
          {roles.map((role) => (
            <RoleCard key={`${role.organization}-${role.period}`} role={role} />
          ))}
        </ol>

        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              Hiring for a software engineering role?
            </h3>
            <p className="text-sm text-[#4a4336] italic font-serif">
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
