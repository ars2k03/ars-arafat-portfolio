import type { Role } from "@/types/experience";
import { displayFont } from "@/utils/fonts";

interface RoleCardProps {
  role: Role;
}

export default function RoleCard({ role }: RoleCardProps) {
  return (
    <li className="relative">
      <span className="absolute -left-8 top-3.5 w-3.5 h-3.5 bg-[#7a2020] border-2 border-[#1a1a1a]" aria-hidden="true" />

      <article className="bg-[#f4efe2] border-[1.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
        <header className="flex flex-wrap items-center justify-between gap-2 px-5 md:px-7 py-2.5 border-b border-[#1a1a1a]/30 text-sm font-semibold">
          <span className="text-[#7a2020]">{role.period}</span>
          <span className="text-[#4a4336]">
            {[role.employmentType, role.location].filter(Boolean).join(" · ")}
          </span>
        </header>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 p-5 md:p-7">
          <div className="flex-1 basis-72 min-w-0">
            <h3 className={`${displayFont.className} text-[1.75rem] md:text-[2rem] leading-tight text-[#1a1a1a]`}>
              {role.organization}
            </h3>
            <p className="mt-1 text-[17px] font-semibold text-[#1a1a1a]">{role.title}</p>
            <p className="mt-1.5 text-base leading-relaxed text-[#2e2a22]">{role.about}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {role.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 h-[42px] px-4 rounded bg-[#1a1a1a] text-[#fbf8f1] text-[15px] font-semibold border-[1.5px] border-[#1a1a1a] transition-colors hover:bg-[#7a2020] hover:border-[#7a2020]"
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
