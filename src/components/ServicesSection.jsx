import React from "react";
import { FaLeaf, FaWater, FaTools, FaSolarPanel } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaLeaf className="text-primary text-xl" />,
    title: "CDM & Energy Projects",
    description:
      "We offer CDM services and energy projects that help reduce carbon emissions and promote sustainable energy solutions.",
  },
  {
    icon: <FaWater className="text-primary text-xl" />,
    title: "Environmental & Climate Services",
    description:
      "Our services include environmental consultancy, climate change adaptation, and mitigation strategies to foster sustainability.",
  },
  {
    icon: <FaTools className="text-primary text-xl" />,
    title: "Disaster Risk Reduction & REDD+",
    description:
      "We work on disaster risk reduction projects and REDD+ initiatives to improve environmental resilience and reduce the impact of climate change.",
  },
  {
    icon: <FaSolarPanel className="text-primary text-xl" />,
    title: "Horticulture & Waste Management",
    description:
      "We provide sustainable horticulture solutions and efficient waste management strategies to promote environmental protection.",
  },
  {
    icon: <FaTools className="text-primary text-xl" />,
    title: "GCF Projects & Capacity Building",
    description:
      "We support global climate financing and provide capacity-building programs that enhance skills and foster sustainable development.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-muted py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
          GGR provides a wide range of consultancy services to meet public,
          private, and social sector needs, focusing on sustainable development
          and innovation.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8">
          {services.map((service) => (
            <Card
              className="relative bg-background shadow-none border-none group mt-4"
              key={service.title}
            >
              <div className="absolute left-0 -top-4 pb-3 pr-3 rounded-br-[2.25rem] bg-muted z-10">
                <span className="absolute left-full top-4 w-10 h-10 bg-muted rounded-full rounded-tl-none"></span>
                <span className="absolute left-full top-4 w-10 h-10 bg-background rounded-full"></span>
                <span className="absolute left-0 top-full w-10 h-10 bg-muted rounded-full rounded-tl-none"></span>
                <span className="absolute left-0 top-full w-10 h-10 bg-background rounded-full"></span>
                <div className="bg-primary/10 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-8 pl-2 pt-8">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-10">
                  {service.description}
                </p>
              </CardContent>
              <div className="absolute right-0 bottom-0 pt-3 pl-3 rounded-tl-3xl bg-muted z-10">
                <span className="absolute right-full bottom-0 w-8 h-8 bg-muted rounded-full rounded-br-none"></span>
                <span className="absolute right-full bottom-0 w-8 h-8 bg-background rounded-full"></span>
                <span className="absolute right-0 bottom-full w-8 h-8 bg-muted rounded-full rounded-br-none"></span>
                <span className="absolute right-0 bottom-full w-8 h-8 bg-background rounded-full"></span>
                <Button
                  variant="outline"
                  className="rounded-full border-none text-foreground bg-secondary/30 hover:bg-secondary/50"
                  asChild
                >
                  <Link to="services">
                    Explore More <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button variant="" size="lg" asChild>
            <Link to="services">
              View All Services <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
