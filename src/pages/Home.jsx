import {
  AboutSection,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  TeamSection,
} from "@/components";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Go for Green Revolution (GGR) Pvt. Ltd.</title>
        <meta
          name="description"
          content="Go for Green Revolution (GGR) Pvt. Ltd. - GGR is a consulting firm based in Islamabad, providing environmental, management, economic, and technical consultancy services across public, social, and private sectors."
        />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div className="h-1 w-full bg-background"></div>
      {/* <PortfolioSection /> */}
      <TeamSection />
    </div>
  );
}
