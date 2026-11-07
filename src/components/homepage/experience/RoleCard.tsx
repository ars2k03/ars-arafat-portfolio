import type { Role } from "@/types/experience";

interface RoleCardProps {
  role: Role;
}

export default function RoleCard({ role }: RoleCardProps) {
  return (
    <li className="pl-6 sm:pl-8 relative">
      <span className="absolute -left-[9px] top-3 w-4 h-4 bg-[#7a2020] border-2 border-[#1a1a1a]" />

      <article className="bg-[#f4efe2] border-2 border-[#1a1a1a] shadow-[5px_5px_0px_#1a1a1a]">
        <header className="flex flex-wrap items-center justify-between gap-2 px-5 sm:px-7 py-2.5 border-b border-[#1a1a1a]/30 text-xs font-mono font-bold uppercase tracking-widest">
          <span className="text-[#7a2020]">{role.period}</span>
          <span className="text-[#4a4336]">
            {[role.employmentType, role.location].filter(Boolean).join(" · ")}
          </span>
        </header>

        <div className="p-5 sm:p-7 sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight">
              {role.organization}
            </h2>
            <p className="text-base sm:text-lg font-bold font-serif text-[#7a2020] mt-1">
              {role.title}
            </p>
            <p className="text-sm sm:text-base italic font-serif text-[#4a4336] mt-2">
              {role.about}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-4 sm:mt-0 sm:col-start-2 sm:row-start-1 sm:self-start">
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
  );
}
