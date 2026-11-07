import RoleCard from "@/components/homepage/experience/RoleCard";
import { roles } from "@/utils/experience";
import { displayFont } from "@/utils/fonts";

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-[72px] mt-14 lg:mt-20 pt-10 lg:pt-14 border-t-2 border-[#1a1a1a] font-sans">
      <div className="mb-8">
        <h2 id="experience-title" className={`${displayFont.className} text-5xl sm:text-6xl leading-tight tracking-tight text-[#1a1a1a]`}>
          Work Experience
        </h2>

        <p className="mt-3 text-base sm:text-lg text-[#2e2a22]">
          Where I&apos;ve worked and what I do there.
        </p>
      </div>

      <ol className="flex flex-col gap-5 ml-1.5 pl-6 border-l-2 border-[#1a1a1a]">
        {roles.map((role) => (
          <RoleCard key={`${role.organization}-${role.period}`} role={role} />
        ))}
      </ol>
    </section>
  );
}
