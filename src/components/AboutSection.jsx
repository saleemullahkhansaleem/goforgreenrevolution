import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Info, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">GGR Pvt. Ltd.</span>
          </h2>
          {/* <p className="text-lg text-muted-foreground leading-relaxed mb-6">
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
          </p> */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Go for Green Revolution (GGR) Pvt Limited established under
            Companies Ordinance 1984, is a consulting firm based in Islamabad,
            which provides environmental, management, economic, and technical
            consultancy services to Public, Social and Private sector needs.
            Though the core services are technical in nature, but overall
            approach is to consult, facilitate, mobilize, outreach and interact
            with all the stakeholders and enable communities, organizations,
            industries and government to work in harmony for achieving national
            sustainable development goals in the field of environment, Climate
            Change adaptation and mitigation & energy, hydropower (Dams and
            Water Resources development), Natural Resource Management, industry,
            infrastructure development, information technology, capacity
            building etc from Feasibility to Project implementation. GGR is
            operated by a highly qualified team of Pakistani professionals who
            are graduates of prestigious educational institutions and have been
            involved in a number of important national projects requiring
            extensive first-hand experience. Leading staff members hold Master’s
            and Doctorate degrees in the fields of Environment, Forestry, Law,
            Computer Science, Agriculture, economic and Project Management. GGR
            is aiming for both large and small scales projects for private
            sector, bilateral institutions, international partner consulting
            companies, international and national NGOs and international
            financing institutions.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <Link to="about" className="text-white">
                About Us <Info />
              </Link>
            </Button>
            <Button size="lg" asChild variant="secondary">
              <Link to="team" className="">
                Our Team <Users />
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
          <div className="absolute bottom-8 left-4 md:-left-8 p-1 bg-background rounded-2xl mr-4">
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
