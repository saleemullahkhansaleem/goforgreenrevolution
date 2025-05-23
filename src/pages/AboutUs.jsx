import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, LineChart, Building2, Globe, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About - Go for Green Revolution (GGR)</title>
        <meta
          name="description"
          content="Go for Green Revolution (GGR) Pvt. Ltd. - GGR is a consulting firm based in Islamabad, providing environmental, management, economic, and technical consultancy services across public, social, and private sectors."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Go for Green Revolution
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A leading environmental consulting firm dedicated to sustainable
              development and climate change solutions in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-primary/20 shadow hover:shadow-lg relative"
              >
                <div className="absolute top-2 left-[10%] rounded-full bg-background text-primary/30 text-xl w-4 h-4">
                  <div className="absolute bottom-1 right-1 left-1 rounded-full bg-secondary text-primary/30 text-xl w-2 h-7"></div>
                </div>
                <div className="absolute top-2 right-[10%] rounded-full bg-background text-primary/30 text-xl w-4 h-4">
                  <div className="absolute bottom-1 right-1 left-1 rounded-full bg-secondary text-primary/30 text-xl w-2 h-7"></div>
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className="group relative shadow-none border-none bg-muted mt-6"
              >
                <div className="absolute left-0 -top-6 pb-3 pr-3 rounded-br-[2.25rem] bg-background z-10">
                  <span className="absolute left-full top-6 w-10 h-10 bg-background rounded-full rounded-tl-none"></span>
                  <span className="absolute left-full top-6 w-10 h-10 bg-muted rounded-full"></span>
                  <span className="absolute left-0 top-full w-10 h-10 bg-background rounded-full rounded-tl-none"></span>
                  <span className="absolute left-0 top-full w-10 h-10 bg-muted rounded-full"></span>
                  <div className="bg-primary/10 p-4 rounded-full">
                    {objective.icon}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 pl-12">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary text-background rounded-2xl p-8 md:p-12 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="rounded-3xl p-[10px] absolute left-16 -top-10 bg-primary">
                <h2 className="text-3xl font-bold bg-background text-primary rounded-2xl p-4">
                  Our Mission
                  <span className="absolute left-full top-2 w-8 h-8 bg-primary rounded-full rounded-bl-none"></span>
                  <span className="absolute left-full top-2 w-8 h-8 bg-background rounded-bl-[1.5rem]"></span>
                  <span className="absolute right-full top-2 w-8 h-8 bg-primary rounded-full rounded-br-none"></span>
                  <span className="absolute right-full top-2 w-8 h-8 bg-background rounded-br-[1.5rem]"></span>
                </h2>
              </div>
              <p className="text-xl leading-relaxed mt-4">
                To help Public and Private sectors and individuals benefits from
                adopting low Greenhouse Gases and environmental conscious life
                styles, addressing global environmental issues with local
                approaches while considering national circumstances for
                sustainable development of Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-2xl space-y-4 relative mt-12"
              >
                <div className="absolute right-10 -top-12 p-3 rounded-b-2xl bg-muted">
                  <span className="absolute left-full top-12 w-8 h-8 bg-muted rounded-full rounded-tl-none"></span>
                  <span className="absolute left-full top-12 w-8 h-8 bg-background rounded-full"></span>
                  <span className="absolute right-full top-12 w-8 h-8 bg-muted rounded-full rounded-tr-none"></span>
                  <span className="absolute right-full top-12 w-8 h-8 bg-background rounded-full"></span>
                  <div className="p-4 bg-primary/10 rounded-xl">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const stats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects Completed",
  },
  {
    value: "25+",
    label: "Expert Consultants",
  },
];

const objectives = [
  {
    icon: <Leaf className="w-6 h-6 text-primary" />,
    title: "Environmental Research",
    description:
      "Conducting research on environmental issues and disseminating information to educate and suggest solutions.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Community Mobilization",
    description:
      "Mobilizing local support from individuals, communities, and organizations for environmental preservation.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Quality Consultancy",
    description:
      "Providing high-quality consultancy services from pre-feasibility studies to post-construction services.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Climate Change Solutions",
    description:
      "Assessing vulnerability and recommending adaptation strategies for climate change challenges.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Project Development",
    description:
      "Developing NAMA strategies and proposals for climate financing from various donor windows.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" />,
    title: "Capacity Building",
    description:
      "Building awareness and capacity regarding climate change issues and their solutions.",
  },
];

const expertise = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Environmental Consulting",
    description:
      "Comprehensive environmental impact assessments and sustainable development solutions.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Climate Change Adaptation",
    description:
      "Strategies and solutions for climate change mitigation and adaptation.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" />,
    title: "Infrastructure Development",
    description:
      "Technical consulting for sustainable infrastructure and development projects.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Community Engagement",
    description:
      "Stakeholder consultation and community mobilization for environmental projects.",
  },
];
