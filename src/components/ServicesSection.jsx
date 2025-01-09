import React from "react";
import { FaLeaf, FaWater, FaTools, FaSolarPanel } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: <FaLeaf className="text-primary text-xl" />,
    title: "Environmental Consultancy",
    description:
      "Providing innovative solutions for climate change adaptation, resource management, and sustainability.",
  },
  {
    icon: <FaWater className="text-primary text-xl" />,
    title: "Hydropower & Water Resources",
    description:
      "Expertise in hydropower, dams, and water resource development from feasibility to implementation.",
  },
  {
    icon: <FaTools className="text-primary text-xl" />,
    title: "Infrastructure Development",
    description:
      "Delivering cutting-edge solutions for industrial and infrastructure development projects.",
  },
  {
    icon: <FaSolarPanel className="text-primary text-xl" />,
    title: "Energy Solutions",
    description:
      "Comprehensive services in renewable energy, energy efficiency, and sustainable power systems.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              className="relative bg-background shadow-none border-none"
              key={service.title}
            >
              <div className="absolute left-0 top-0 pb-3 pr-3 rounded-br-[2.25rem] bg-muted z-10">
                <span className="absolute left-full top-0 w-10 h-10 bg-muted rounded-full rounded-tl-none"></span>
                <span className="absolute left-full top-0 w-10 h-10 bg-background rounded-full"></span>
                <span className="absolute left-0 top-full w-10 h-10 bg-muted rounded-full rounded-tl-none"></span>
                <span className="absolute left-0 top-full w-10 h-10 bg-background rounded-full"></span>
                <div className="bg-primary/10 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-8 pl-16">
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
                  className="rounded-full border-none hover:bg-primary/10"
                >
                  Explore More <ArrowUpRight />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button variant="" size="lg">
            View All Services <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
