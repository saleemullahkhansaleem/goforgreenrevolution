import { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import MrCard from "./MrCard";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    // Simulating fetching dynamic footer data
    const fetchFooterData = async () => {
      const data = {
        companyInfo: {
          name: "Go for Green Revolution (GGR) Pvt. Ltd.",
          description:
            "GGR is a consulting firm based in Islamabad, providing environmental, management, economic, and technical consultancy services across public, social, and private sectors.",
        },
        contactInfo: {
          address: "Jinnah Avenue, Blue Area, Islamabad. - Pakistan",
          email: "info@goforgreenrevolution.com.pk",
          phone: "+92 51 8739888",
        },
        quickLinks: [
          { name: "About Us", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "GGR Team", path: "/team" },
          { name: "Downloads", path: "/downloads" },
          { name: "Contact", path: "/contact" },
        ],
        importentLinks: [{ name: "About Us", path: "/about" }],
        services: [
          {
            name: "CDM & Energy Projects",
            path: "/services/#cdm-energy",
          },
          {
            name: "Environmental & Climate Services",
            path: "/services/#environmental-climate",
          },
          {
            name: "Disaster Risk Reduction & REDD+",
            path: "/services/#drr-redd",
          },
          {
            name: "Horticulture & Waste Management",
            path: "/services/#horticulture-waste",
          },
          {
            name: "GCF Projects & Capacity Building",
            path: "/services/#gcf-capacity",
          },
        ],

        socialMedia: [
          { platform: "Facebook", url: "#", icon: <Facebook size={16} /> },
          { platform: "Instagram", url: "#", icon: <Instagram size={16} /> },
          { platform: "Twitter", url: "#", icon: <Twitter size={16} /> },
          { platform: "LinkedIn", url: "#", icon: <Linkedin size={16} /> },
        ],
      };
      setFooterData(data);
    };

    fetchFooterData();
  }, []);

  // Return null while data is being fetched
  if (!footerData) return null;

  return (
    <footer className="dark bg-background text-muted-foreground border-t">
      <div className="container mx-auto grid gap-8 py-12 px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info Section */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="GGR Logo"
              className="h-14 md:h-16 rounded-md shadow-md"
            />
          </Link>
          <p className="text-sm leading-relaxed">
            <strong>{footerData.companyInfo.name}</strong> <br />{" "}
            {footerData.companyInfo.description}
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            Get in Touch
          </h3>
          <div>
            <p className="text-sm">{footerData.contactInfo.address}</p>
          </div>
          <Link
            to={`mailto:${footerData.contactInfo.email}`}
            className="text-sm text-primary hover:underline underline-offset-4"
          >
            {footerData.contactInfo.email}
          </Link>
          <Link
            to={`tel:${footerData.contactInfo.phone}`}
            className="text-sm text-primary hover:underline underline-offset-4"
          >
            {footerData.contactInfo.phone}
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            {footerData.quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm hover:text-foreground hover:underline underline-offset-4 flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-[2px] transition-transform"
                  />{" "}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-foreground">
            Our Services
          </h3>
          <ul className="space-y-2">
            {footerData.services.map((service) => (
              <li key={service.name}>
                <Link
                  to={service.path}
                  className="text-sm hover:text-foreground hover:underline underline-offset-4 flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-[2px] transition-transform"
                  />{" "}
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-foreground/20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 py-4 px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Go for Green Revolution (GGR) Pvt
            Limited. All rights reserved.
          </p>
          <MrCard />
          <div className="flex gap-4">
            {footerData.socialMedia.map((social) => (
              <Link
                key={social.platform}
                to={social.url}
                className="text-muted-foreground hover:text-primary"
                title={social.platform}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
