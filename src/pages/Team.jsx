import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, LinkedinIcon, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/20 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert team brings together decades of experience in
              environmental sustainability, climate change, and sustainable
              development
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Leadership</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((member) => (
              <LeadershipCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((member) => (
              <ExpertCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Areas of Expertise
          </h2>
          <div className="w-full whitespace-nowrap rounded-lg border">
            <div className="flex flex-wrap gap-4 p-4">
              {expertise.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LeadershipCard({ name, title, image, description, achievements }) {
  return (
    <Card className="relative bg-muted shadow-none border-none group overflow-hidden">
      <div className="absolute left-0 top-0 pb-3 pr-3 rounded-br-[2.25rem] bg-background z-10">
        <span className="absolute left-full top-0 w-10 h-10 bg-background rounded-full rounded-tl-none"></span>
        <span className="absolute left-full top-0 w-10 h-10 bg-muted rounded-full"></span>
        <span className="absolute left-0 top-full w-10 h-10 bg-background rounded-full rounded-tl-none"></span>
        <span className="absolute left-0 top-full w-10 h-10 bg-muted rounded-full"></span>
        <div className="bg-primary/10 p-2 rounded-3xl">
          <img
            src={image}
            alt={name}
            className="w-40 aspect-square object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-1 gap-6">
        <div className="relative h-full min-h-[170px]">
          {/* <img src={image} alt={name} className="object-cover" /> */}
          <CardHeader className="p-8 pl-60 mb-4 hidden sm:block">
            <CardTitle className="text-2xl mb-2">{name}</CardTitle>
            <CardDescription className="text-lg font-medium text-primary">
              {title}
            </CardDescription>
          </CardHeader>
        </div>
        <div className="p-6 sm:px-12">
          <CardHeader className="p-0 mb-4 block sm:hidden">
            <CardTitle className="text-2xl mb-2">{name}</CardTitle>
            <CardDescription className="text-lg font-medium text-primary">
              {title}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-4 mb-12">
            <p className="text-muted-foreground">{description}</p>
            <div className="">
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 pt-3 pl-3 rounded-tl-[2rem] bg-background">
        <span className="absolute right-full bottom-0 w-8 h-8 bg-background rounded-full rounded-br-none"></span>
        <span className="absolute right-full bottom-0 w-8 h-8 bg-muted rounded-full"></span>
        <span className="absolute right-0 bottom-full w-8 h-8 bg-background rounded-full rounded-br-none"></span>
        <span className="absolute right-0 bottom-full w-8 h-8 bg-muted rounded-full"></span>
        <div className="flex justify-center gap-4">
          <Link
            to="#"
            target="_blank"
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaLinkedin className="text-lg" />
          </Link>
          <Link
            to="#"
            target="_blank"
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaTwitter className="text-lg" />
          </Link>
          <Link
            to="#"
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaEnvelope className="text-lg" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export function ExpertCard({
  name,
  title,
  image,
  expertise,
  description,
  experience,
}) {
  return (
    <Card className="relative bg-background shadow-none border-none group mt-20">
      <div className="absolute right-16 -top-20 p-3 rounded-b-[2rem] bg-muted">
        <span className="absolute left-full top-20 w-8 h-8 bg-muted rounded-full rounded-tl-none"></span>
        <span className="absolute left-full top-20 w-8 h-8 bg-background rounded-full"></span>
        <span className="absolute right-full top-20 w-8 h-8 bg-muted rounded-full rounded-tr-none"></span>
        <span className="absolute right-full top-20 w-8 h-8 bg-background rounded-full"></span>
        <div className="bg-primary/10 p-2 rounded-3xl">
          <img
            src={image}
            alt={name}
            className="w-32 aspect-square object-cover rounded-2xl"
          />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mt-16">{name}</h3>
        <p className="text-primary font-medium text-sm mb-4">{title}</p>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="mb-14">
          <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((item, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <Badge variant="outline" className="absolute bottom-4 right-4">
        Exp: {experience} Years
      </Badge>

      <div className="absolute left-0 bottom-0 pt-3 pr-3 rounded-tr-[2rem] bg-muted">
        <span className="absolute left-full bottom-0 w-8 h-8 bg-muted rounded-full rounded-bl-none"></span>
        <span className="absolute left-full bottom-0 w-8 h-8 bg-background rounded-full"></span>
        <span className="absolute left-0 bottom-full w-8 h-8 bg-muted rounded-full rounded-bl-none"></span>
        <span className="absolute left-0 bottom-full w-8 h-8 bg-background rounded-full"></span>
        <div className="flex justify-center gap-4">
          <Link
            to="#"
            target="_blank"
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaLinkedin className="text-lg" />
          </Link>
          <Link
            to="#"
            target="_blank"
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaTwitter className="text-lg" />
          </Link>
          <Link
            to="#"
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaEnvelope className="text-lg" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

const leadership = [
  {
    name: "Syed Amjad Hussain",
    title: "Director, GGR",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    description:
      "A highly motivated and result-oriented Climate Change Professional with M.Sc (Hons)/M.Phil in Agriculture specializing in Water Management from Agricultural University Peshawar, Pakistan.",
    achievements: [
      "15+ years experience with Multi-Lateral and Bi-Lateral donors",
      "Assessed 105+ Public and Private sector CDM projects",
      "Organized 80+ Climate Change workshops and seminars",
      "Facilitated 7 NAMAs submission to UK/German Facility",
    ],
  },
  {
    name: "Irfanullah",
    title: "IEE and EIA Expert",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    description:
      "Environmental Management professional with M.Sc from Coventry University, UK and expertise in Forestry, Natural Resource Management, and Environmental Assessment.",
    achievements: [
      "13 years experience in Environmental Management",
      "Led numerous Environmental and CDM projects",
      "Expert in Natural Resource Management",
      "Specializes in Social Forestry",
    ],
  },
];

export const experts = [
  {
    name: "Javaid Iqbal",
    title: "Geoinformatic and Project Development Expert",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    expertise: ["GIS", "Climate Change", "CDM", "Project Management"],
    description:
      "14+ years of experience in GIS, climate change, and project management, with international certifications from the Netherlands, UK, and UAE.",
    experience: 14,
  },
  {
    name: "Intisar Ahmed",
    title: "Development Advisor and HR Expert",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    expertise: ["HR Management", "Community Development", "Strategic Planning"],
    description:
      "16 years of expertise in strategic planning, community development, and capacity building for NGOs and INGOs in Pakistan.",
    experience: 16,
  },
  {
    name: "Waqas Zafar",
    title: "Head Information Technology Cell",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    expertise: ["IT Solutions", "Web Development", "Business Analysis"],
    description:
      "An expert in IT solutions and project management, specializing in web development, mobile apps, and business solutions.",
    experience: 10,
  },
  {
    name: "Mr. Kayani",
    title: "Strategic Planner And DRR Expert",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    expertise: ["Disaster Risk Management", "Strategic Planning", "WASH"],
    description:
      "18 years of experience in disaster risk reduction, WASH, and environmental management with innovative approaches to disaster mitigation.",
    experience: 18,
  },
  {
    name: "Syed Ehtesham Ahmed Zaide",
    title: "Manager Project Implementation",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    expertise: ["Project Management", "Electronics", "Automation Control"],
    description:
      "Strong background in electronics and project management, with expertise in automation and embedded control systems.",
    experience: 12,
  },
  {
    name: "Danish Javaid",
    title: "Manager Admin And Finance",
    image:
      "https://static.vecteezy.com/system/resources/previews/036/594/092/large_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    expertise: ["Project Management", "Finance", "M&E"],
    description:
      "MBA in Project Management with expertise in quality assurance, data collection, and training sessions across diverse stakeholders.",
    experience: 5,
  },
];

const expertise = [
  "Climate Change",
  "Environmental Management",
  "CDM Projects",
  "Water Resources",
  "GIS & Remote Sensing",
  "Project Management",
  "Disaster Risk Reduction",
  "Community Development",
  "IT Solutions",
  "Strategic Planning",
  "Environmental Assessment",
  "NAMA Development",
  "Green Climate Fund",
  "Capacity Building",
];
