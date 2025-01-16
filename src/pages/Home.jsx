import {
  AboutSection,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  TeamSection,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
    </div>
  );
}
