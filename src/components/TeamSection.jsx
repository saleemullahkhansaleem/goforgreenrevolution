import React from "react";
import { ExpertCard, experts } from "@/pages/Team";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-8">
          {experts.slice(0, 4).map((member) => (
            <ExpertCard key={member.name} {...member} />
          ))}
        </div>{" "}
        <div className="mt-16 text-center">
          <Button variant="" size="lg" asChild>
            <Link to="team">
              View All Team Members <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
