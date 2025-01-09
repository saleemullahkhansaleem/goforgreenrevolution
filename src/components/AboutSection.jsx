import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">GGR Pvt Limited</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Go for Green Revolution (GGR) is a consulting firm based in
            Islamabad, specializing in providing environmental, management,
            economic, and technical consultancy services. Our mission is to
            enable sustainable development through innovative solutions in
            climate change adaptation, energy, hydropower, and more.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a highly qualified team of professionals holding advanced
            degrees in diverse fields, GGR delivers results from feasibility
            studies to project implementation.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <Link to="services" className="text-white">
                About Us
              </Link>
            </Button>
            <Button size="lg" asChild variant="secondary">
              <Link to="#contact" className="">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/leaf.webp"
              alt="GGR Mission"
              className="w-full aspect-[3/2] object-cover"
            />
          </div>
          <div className="absolute bottom-8 left-4 md:-left-8 p-1 bg-background rounded-2xl">
            <div className="bg-accent p-4 rounded-xl border">
              <h3 className="text-lg font-semibold text-primary">
                100+ Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                Delivered across energy, climate change, and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
