import { ProjectCard, projects } from "@/pages/Gallery";
import { ArrowUpRight, Images } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 px-6 lg:px-20">
      <div className="max-w-7xl container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
          Our <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
          Discover some of our remarkable projects that demonstrate our
          commitment to sustainable development and innovation.
        </p>

        <ProjectCard projects={projects.slice(0, 3)} />

        <div className="mt-16 text-center">
          <Button variant="" size="lg" asChild>
            <Link to="gallery">
              <Images />
              View All Projects <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
