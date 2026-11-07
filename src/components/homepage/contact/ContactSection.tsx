import ContactChannels from "@/components/homepage/contact/ContactChannels";
import ContactForm from "@/components/homepage/contact/ContactForm";
import { displayFont } from "@/utils/fonts";

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-[72px] mt-14 lg:mt-20 pt-10 lg:pt-14 border-t-2 border-[#1a1a1a] font-sans">
      <div className="mb-8">
        <h2 id="contact-title" className={`${displayFont.className} text-5xl sm:text-6xl leading-tight tracking-tight text-[#1a1a1a]`}>
          Let&apos;s Work Together
        </h2>

        <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-[#2e2a22]">
          Open to full-time software engineering roles, freelance projects and collaborations. Send a message and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <ContactChannels />
        <div className="lg:col-span-7 xl:col-span-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
