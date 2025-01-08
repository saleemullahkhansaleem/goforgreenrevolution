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
      <div className="w-full py-1 px-4 text-foreground bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          {/* <div className="text-foreground py-1">
            <Link to="/" className="flex items-end gap-2">
              <img
                src="/logo.png"
                alt="logo"
                height={100}
                className="h-10 md:h-14"
              />
            </Link>
          </div> */}
          <p className="text-white">Jinnah Avenue, Blue Area, Islamabad.</p>
          <div className="flex items-end gap-4">
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
                content: "+92-51-8481049",
                link: "tel:+92518739888",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-white">
                <Link
                  to={item.link}
                  title={item.title}
                  className="hover:underline underline-offset-2 flex gap-2 items-center"
                >
                  <span className="hidden sm:block">{item.content}</span>
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
            <Link to="/" className="flex items-end gap-2">
              <img
                src="/logo.png"
                alt="logo"
                height={100}
                className="h-10 md:h-14"
              />
            </Link>
          </div>
          <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
          <Navbar />
          {/* <div className="flex self-center text-muted-foreground">
            <Link to="#" className="p-2 hover:text-foreground" title="Facebook">
              <Facebook size={18} />
            </Link>
            <Link
              to="#"
              className="p-2 hover:text-foreground"
              title="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link to="#" className="p-2 hover:text-foreground" title="Twitter">
              <Twitter size={18} />
            </Link>
            <Link to="#" className="p-2 hover:text-foreground" title="Linkedin">
              <Linkedin size={18} />
            </Link>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
