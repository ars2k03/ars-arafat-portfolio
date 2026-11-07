import Image from "next/image";
import type { TechCategory } from "@/types/skills";
import { displayFont } from "@/utils/fonts";

interface SkillCategoryProps {
  category: TechCategory;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <article className="p-5 md:p-6 bg-[#f4efe2] border-[1.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
      <h3 className={`${displayFont.className} mb-4 text-2xl md:text-[1.75rem] leading-tight text-[#1a1a1a]`}>
        {category.title}
      </h3>

      <ul className="flex flex-wrap gap-2">
        {category.items.map((tech) => (
          <li
            key={tech.name}
            className="inline-flex items-center gap-2 h-14 px-3 rounded bg-[#fbf8f1] border-[1.5px] border-[#1a1a1a] text-[17px] font-semibold text-[#1a1a1a]"
          >
            <Image src={tech.logo} alt="" width={32} height={32} className="w-8 h-8 object-contain" />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
