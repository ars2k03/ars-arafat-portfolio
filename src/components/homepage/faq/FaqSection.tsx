import JsonLd from "@/components/ui/JsonLd";
import { faqs } from "@/utils/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqSection() {
  return (
    <section aria-labelledby="faq-arafat" className="mt-16 border-t-2 border-[#1a1a1a] pt-10">
      <JsonLd data={faqJsonLd} />
      <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#7a2020] mb-2">★ Questions &amp; Answers</p>
      <h2 id="faq-arafat" className="text-3xl sm:text-4xl font-black font-serif text-[#1a1a1a] tracking-tight mb-6">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {faqs.map((f) => (
          <div key={f.question}>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#1a1a1a] mb-1.5">{f.question}</h3>
            <p className="text-base text-[#2e2a22] font-serif leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
