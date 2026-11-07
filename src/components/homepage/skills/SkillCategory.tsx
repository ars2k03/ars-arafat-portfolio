import Image from "next/image";
import type { TechCategory } from "@/types/skills";

interface SkillCategoryProps {
  category: TechCategory;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#1a1a1a]/40 pb-2 flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="text-xl sm:text-2xl">{category.icon}</span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight">
            {category.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 pt-1">
        {category.items.map((tech) => (
          <div
            key={tech.name}
            className="px-2 py-4 sm:px-4 sm:py-6 bg-[#f4efe2] border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[5px_5px_0px_#7a2020] hover:-translate-y-0.5 transition-all duration-150 flex flex-col items-center justify-center gap-2 sm:gap-3 text-center group"
          >
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              width={72}
              height={72}
              className="w-11 h-11 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] shrink-0 object-contain group-hover:scale-105 transition-transform"
            />
            <h3 className="text-sm sm:text-lg md:text-xl leading-tight font-black font-serif text-[#1a1a1a] tracking-tight group-hover:text-[#7a2020] transition-colors">
              {tech.name}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
}
