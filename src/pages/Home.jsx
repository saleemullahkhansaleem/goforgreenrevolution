import {
  AboutSection,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  TeamSection,
} from "@/components";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import LandingPage from "./LandingPage";

export const contactData = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    content: "+92 51 8739888",
    link: "tel:+92518739888",
  },
  {
    icon: FaEnvelope,
    title: "Mail Us",
    content: "info@goforgreenrevolution.com.pk",
    link: "mailto:info@goforgreenrevolution.com.pk",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    content: "Office No. 5, Jinnah Avenue, Blue Area, Islamabad.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />

      {/* <LandingPage /> */}
    </div>
  );
}
