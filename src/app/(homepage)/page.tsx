import ContactSection from "@/components/homepage/contact/ContactSection";
import ExperienceSection from "@/components/homepage/experience/ExperienceSection";
import HeroSection from "@/components/homepage/hero/HeroSection";
import ProjectsSection from "@/components/homepage/projects/ProjectsSection";
import SkillsSection from "@/components/homepage/skills/SkillsSection";

export default function Home() {
  return (
    <section id="top" className="w-full flex-1 flex flex-col bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </section>
  );
}
