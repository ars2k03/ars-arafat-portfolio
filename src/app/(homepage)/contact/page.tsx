import type { Metadata } from "next";
import ContactChannels from "@/components/homepage/contact/ContactChannels";
import ContactForm from "@/components/homepage/contact/ContactForm";

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

          <ContactChannels />

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
