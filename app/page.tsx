import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Marquee from '@/components/Marquee';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import GitHubSection from '@/components/GitHubSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <Marquee />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <GitHubSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
