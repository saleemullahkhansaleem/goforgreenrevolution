import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-background text-white overflow-hidden dark min-h-[calc(100vh-96px)] flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt="Sustainable Development"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 px-6 py-20 space-y-10 lg:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="/images/about.png"
            alt="Sustainability"
            className="w-96 lg:w-[500px]"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Driving <span className="text-primary">Sustainable Solutions </span>
            for a Better Tomorrow
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Empowering industries, communities, and governments to achieve
            national sustainable development goals through innovative
            consultancy services.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <a href="#services">Explore Services</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
