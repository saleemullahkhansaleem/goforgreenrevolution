import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Syed Amjad Hussain",
    role: "Director, GGR",
    description:
      "A Climate Change Professional with over 15 years of experience in water resource management, climate change impacts, mitigation, and CDM projects.",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:amjad@ggr.com",
  },
  {
    name: "Irfanullah",
    role: "IEE and EIA Expert",
    description:
      "13 years of experience in environmental management and forestry, with advanced degrees in Environmental Management and Forestry.",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:irfan@ggr.com",
  },
  {
    name: "Javaid Iqbal",
    role: "Geoinformatics and Project Development Expert",
    description:
      "14+ years of experience in GIS, climate change, and project management, with international certifications from the Netherlands, UK, and UAE.",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:javaid@ggr.com",
  },
  {
    name: "Intisar Ahmed",
    role: "Development Advisor and Human Resource Expert",
    description:
      "16 years of expertise in strategic planning, community development, and capacity building for NGOs and INGOs in Pakistan.",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:intisar@ggr.com",
  },
  {
    name: "Waqas Zafar",
    role: "Head, Information Technology Cell",
    description:
      "An expert in IT solutions and project management, specializing in web development, mobile apps, and business solutions.",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:waqas@ggr.com",
  },
  {
    name: "M. R. Kayani",
    role: "Strategic Planner and DRR Expert",
    description:
      "18 years of experience in disaster risk reduction, WASH, and environmental management with innovative approaches to disaster mitigation.",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:kayani@ggr.com",
  },
  {
    name: "Syed Ehtesham Ahmed Zaide",
    role: "Manager, Project Implementation",
    description:
      "Strong background in electronics and project management, with expertise in automation and embedded control systems.",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:ehtesham@ggr.com",
  },
  {
    name: "Danish Javaid",
    role: "Manager, Admin and Finance",
    description:
      "MBA in Project Management with expertise in quality assurance, data collection, and training sessions across diverse stakeholders.",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:danish@ggr.com",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-muted py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
          Meet Our <span className="text-primary">Team</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
          Our team of highly qualified professionals is dedicated to delivering
          innovative solutions for sustainable development.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="relative bg-background shadow-none border-none group overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-12">
                  {member.description}
                </p>
              </CardContent>
              <Button variant="link" className="absolute bottom-4 right-4">
                See Details <ArrowUpRight />
              </Button>

              <div className="absolute left-0 bottom-0 pt-3 pr-3 rounded-tr-3xl bg-muted z-10">
                <span className="absolute left-full bottom-0 w-8 h-8 bg-muted rounded-full rounded-bl-none"></span>
                <span className="absolute left-full bottom-0 w-8 h-8 bg-background rounded-full"></span>
                <span className="absolute left-0 bottom-full w-8 h-8 bg-muted rounded-full rounded-bl-none"></span>
                <span className="absolute left-0 bottom-full w-8 h-8 bg-background rounded-full"></span>
                <div className="flex justify-center gap-4">
                  <Link
                    to={member.linkedin}
                    target="_blank"
                    className="rounded-full hover:text-primary p-3 bg-primary/10"
                  >
                    <FaLinkedin className="text-lg" />
                  </Link>
                  <Link
                    to={member.twitter}
                    target="_blank"
                    className="rounded-full hover:text-primary p-3 bg-primary/10"
                  >
                    <FaTwitter className="text-lg" />
                  </Link>
                  <Link
                    to={member.email}
                    className="rounded-full hover:text-primary p-3 bg-primary/10"
                  >
                    <FaEnvelope className="text-lg" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
