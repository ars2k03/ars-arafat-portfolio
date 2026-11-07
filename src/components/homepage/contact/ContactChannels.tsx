import type { ReactNode } from "react";
import type { ContactChannel } from "@/types/contact";
import { contactChannels } from "@/utils/contact";

const channelIcons: Record<ContactChannel["label"], ReactNode> = {
  Email: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
  GitHub: (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  X: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

export default function ContactChannels() {
  return (
    <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-3">
      {contactChannels.map((channel) => (
        <a
          key={channel.label}
          href={channel.href}
          target={channel.href.startsWith("http") ? "_blank" : undefined}
          rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
          className="group flex flex-1 items-center gap-3.5 p-3.5 bg-[#f4efe2] border-[1.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]"
        >
          <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-[#fbf8f1] border-[1.5px] border-[#1a1a1a] text-[#1a1a1a] transition-colors group-hover:bg-[#1a1a1a] group-hover:text-[#fbf8f1]">
            {channelIcons[channel.label]}
          </span>
          <span className="min-w-0">
            <span className="block text-[13px] font-semibold text-[#7a2020]">{channel.label}</span>
            <span className="block text-base font-semibold text-[#1a1a1a] break-words">{channel.value}</span>
          </span>
        </a>
      ))}

      <p className="flex items-center gap-2.5 p-3.5 border-[1.5px] border-dashed border-[#1a1a1a]/50 text-[15px] text-[#2e2a22]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#1f7a3d] shrink-0" aria-hidden="true" />
        <span>
          <span className="font-semibold text-[#1a1a1a]">Available for hire.</span> I usually reply within 24 hours.
        </span>
      </p>
    </div>
  );
}
