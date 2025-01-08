import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-muted dark">
      <div className="container mx-auto grid gap-8 py-12 px-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info Section */}
        <div className="flex flex-col gap-2">
          <Link to="/" className="flex items-end gap-2">
            <img
              src="/logo.png"
              alt="logo"
              height={100}
              className="h-10 md:h-14 bg-white p-4"
            />
          </Link>
          {/* <h3 className="text-lg font-semibold text-foreground">Go for Green Revolution (GGR) Pvt Limited</h3> */}
          <p className="text-sm text-muted-foreground mt-1">
            Leading HVAC Sales & Service Co. providing excellence since 2003.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground">Contact</h3>
          <p className="text-sm text-muted-foreground">
            No.3, Diplomatic Enclave No.1,
          </p>
          <p className="text-sm text-muted-foreground">
            UN Boulevard, G-5, Islamabad - Pakistan
          </p>
          <Link
            to="mailto:info@goforgreenrevolution.com.pk"
            className="text-sm text-primary hover:underline"
          >
            info@goforgreenrevolution.com.pk
          </Link>
          <Link
            to="tel:+92518739888"
            className="text-sm text-primary hover:underline"
          >
            +92 51 8739888
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          {[
            { name: "About Us", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Terms of Service", path: "/terms" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Services Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground">Services</h3>
          {[
            { name: "Commercial HVAC", path: "/commercial-hvac" },
            { name: "Residential HVAC", path: "/residential-hvac" },
            { name: "Maintenance", path: "/amc" },
            { name: "Installation", path: "/amc" },
          ].map((service) => (
            <Link
              key={service.name}
              to={service.path}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-foreground/20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-6 px-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Go for Green Revolution (GGR) Pvt
            Limited. All rights reserved.
          </p>

          <div className="flex gap-4 text-muted-foreground">
            <Link to="#" className="hover:text-foreground" title="Facebook">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="hover:text-foreground" title="Instagram">
              <Instagram size={20} />
            </Link>
            <Link to="#" className="hover:text-foreground" title="Twitter">
              <Twitter size={20} />
            </Link>
            <Link to="#" className="hover:text-foreground" title="Linkedin">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
