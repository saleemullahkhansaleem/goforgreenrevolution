import { ArrowUpRight } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "Water Resource Management",
    description:
      "An innovative project focusing on sustainable water resource allocation for agriculture and urban areas.",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    title: "Renewable Energy Solutions",
    description:
      "Development of solar and wind power systems to reduce carbon footprints and energy costs.",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    title: "Climate Change Mitigation",
    description:
      "Strategies and projects aimed at reducing the impact of climate change in vulnerable regions.",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    title: "Community Development Programs",
    description:
      "Empowering local communities through capacity building and sustainable practices.",
    image: "https://picsum.photos/400/300?random=4",
  },
  {
    title: "Geospatial Analysis Projects",
    description:
      "Utilizing GIS and remote sensing for better planning and resource management.",
    image: "https://picsum.photos/400/300?random=5",
  },
  {
    title: "Disaster Risk Reduction (DRR)",
    description:
      "Innovative approaches to minimize risks and enhance preparedness for natural disasters.",
    image: "https://picsum.photos/400/300?random=6",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
          Our <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
          Discover some of our remarkable projects that demonstrate our
          commitment to sustainable development and innovation.
        </p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-muted rounded-2xl overflow-hidden group"
            >
              <div className="absolute right-0 top-0 pb-3 pl-3 rounded-bl-[2.25rem] bg-background z-10">
                <span className="absolute right-full top-0 w-10 h-10 bg-background rounded-full rounded-tr-none"></span>
                <span className="absolute right-full top-0 w-10 h-10 bg-muted rounded-full"></span>
                <span className="absolute right-0 top-full w-10 h-10 bg-background rounded-full rounded-tr-none"></span>
                <span className="absolute right-0 top-full w-10 h-10 bg-muted rounded-full"></span>
                <div className="bg-primary/10 p-4 rounded-full">
                  <ArrowUpRight className="text-primary text-xl" />
                </div>
              </div>
              <div className="p-6 pr-12">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
