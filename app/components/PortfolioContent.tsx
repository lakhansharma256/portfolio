import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SiteFooter } from "./sections/SiteFooter";
import { SkillsSection } from "./sections/SkillsSection";

export function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
