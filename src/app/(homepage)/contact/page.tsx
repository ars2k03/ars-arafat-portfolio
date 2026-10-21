import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/utils/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Md Arafat Rahman Sohan (ARS / ars2k03), full-stack software engineer from Rajshahi, Bangladesh, for software engineering roles, freelance projects or collaboration. Email: arafatsohan2003@gmail.com — GitHub: ars2k03, LinkedIn: ars2k05.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Md Arafat Rahman Sohan (ARS)",
    description:
      "Get in touch with Arafat Rahman Sohan (ars2k03) for roles, freelance work or collaboration.",
    url: "/contact",
    type: "website",
    images: ["/profile.jpg"],
  },
};

const email = site.email;

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const channels: ContactChannel[] = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: `linkedin.com/in/${site.linkedin.handle}`,
    href: site.linkedin.url,
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: `github.com/${site.github.handle}`,
    href: site.github.url,
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "X",
    value: `x.com/${site.x.handle}`,
    href: site.x.url,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              Let&apos;s Work Together
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              Open to full-time software engineering roles, freelance projects and collaborations. Send a message and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight border-b border-[#1a1a1a]/40 pb-2">
              Reach Me Directly
            </h2>

            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="p-4 bg-[#f4efe2] border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[5px_5px_0px_#7a2020] hover:-translate-y-0.5 transition-all duration-150 flex items-center gap-4 group"
              >
                <span className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#fbf8f1] border border-[#1a1a1a] text-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-[#fbf8f1] transition-colors">
                  {channel.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-mono font-bold uppercase tracking-widest text-[#7a2020]">
                    {channel.label}
                  </span>
                  <span className="block text-base sm:text-lg font-bold font-serif text-[#1a1a1a] truncate group-hover:text-[#7a2020] transition-colors">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="p-4 border border-dashed border-[#1a1a1a]/50 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
              <p className="text-sm font-serif text-[#4a4336]">
                <span className="font-bold text-[#1a1a1a]">Available for hire.</span> I usually reply within 24 hours.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm email={email} />
          </div>

        </div>
      </div>
    </section>
  );
}
