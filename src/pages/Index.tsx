import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import TechnicalHighlightsSection from "@/components/TechnicalHighlightsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationSection from "@/components/CertificationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TechnicalHighlightsSection />
        <ProjectsSection />
        <CertificationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
