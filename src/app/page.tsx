import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="max-w-7xl md:px-12 px-4 mx-auto">
      <HeroSection/>
      <ProjectsSection/>
      <AboutSection/>
      <SkillSection/>
      <ExperienceSection/>
      <ContactSection/>
    </div>
    
  );
}