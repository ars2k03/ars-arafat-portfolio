"use client";

import { useState } from "react";

interface ContactFormProps {
  email: string;
}

export default function ContactForm({ email }: ContactFormProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // No mail backend yet: open the visitor's mail client with the message prefilled.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `${message}\n\n— ${name}\n${from}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full px-3.5 py-2.5 bg-[#fbf8f1] border border-[#1a1a1a] text-[#1a1a1a] font-sans text-sm placeholder:text-[#8a8070] focus:outline-none focus:shadow-[3px_3px_0px_#7a2020] transition-shadow";
  const labelClass = "block mb-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-[#4a4336]";

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 sm:p-7 bg-[#f4efe2] border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] space-y-5"
    >
      <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight">
        Send a Message
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <input id="subject" name="subject" type="text" required placeholder="Job opportunity, project, collaboration…" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" required rows={6} placeholder="Tell me a bit about the role or project." className={`${inputClass} resize-y`} />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-[#fbf8f1] text-xs sm:text-sm font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[4px_4px_0px_#7a2020] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
        >
          <span>Send Message</span>
          <span>→</span>
        </button>
      </div>
    </form>
  );
}
