import SkillCategory from "@/components/homepage/skills/SkillCategory";
import { displayFont } from "@/utils/fonts";
import { skillCategories } from "@/utils/skills";

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-[72px] mt-14 lg:mt-20 pt-10 lg:pt-14 border-t-2 border-[#1a1a1a] font-sans">
      <div className="mb-8">
        <h2 id="skills-title" className={`${displayFont.className} text-5xl sm:text-6xl leading-tight tracking-tight text-[#1a1a1a]`}>
          Tech Stack &amp; Tools
        </h2>

        <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-[#2e2a22]">
          The languages, frameworks and tools I use to build full-stack web and mobile applications, from API design to deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
