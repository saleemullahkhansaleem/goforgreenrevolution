import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeToggle } from ".";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  TwitterIcon,
} from "lucide-react";

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <>
      <div className="w-full py-px px-4 text-foreground bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-foreground text-sm">
            <span className="hidden md:inline">Jinnah Avenue,</span> Blue Area,
            Islamabad.
          </p>
          <div className="flex items-center gap-4">
            {[
              {
                icon: FaEnvelope,
                title: "Mail Us",
                content: "info@goforgreenrevolution.com.pk",
                link: "mailto:info@goforgreenrevolution.com.pk",
              },
              {
                icon: FaPhoneAlt,
                title: "Call Us",
                content: "+92-51-8739888",
                link: "tel:+92518739888",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-foreground"
              >
                <Link
                  to={item.link}
                  title={item.title}
                  className="hover:underline underline-offset-2 flex gap-2 items-center text-sm"
                >
                  <span className="hidden md:block">{item.content}</span>
                  <item.icon />
                </Link>
                {index === 0 && "|"}
              </div>
            ))}
          </div>
        </div>
      </div>
      <header className="bg-background/70 text-foreground sticky top-0 shadow-md z-20 backdrop-blur px-4  ">
        <div className="container mx-auto flex justify-between">
          <div className="text-foreground py-1">
            <Link
              to="/"
              className=""
            >
              <img
                src="/logo.png"
                alt="logo"
                height={100}
                className="h-10 md:h-12"
              />
            </Link>
          </div>
          <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
