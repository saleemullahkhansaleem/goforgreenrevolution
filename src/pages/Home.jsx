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
      <div className="h-1 w-full bg-background"></div>
      {/* <PortfolioSection /> */}
      <TeamSection />
    </div>
  );
}
