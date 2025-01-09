import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Wind,
  TreePine,
  Leaf,
  Building,
  AlertTriangle,
  Recycle,
  Users,
  Globe,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/20 to-transparent overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive environmental and sustainable development solutions
              for a greener future
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          className={`py-16 px-4 sm:px-6 lg:px-8 ${
            index % 2 === 0 ? "bg-background" : "bg-muted"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12">
              {/* Category Header */}
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, idx) => (
                  <Card
                    key={idx}
                    className={`group relative shadow-none border-none ${
                      index % 2 === 1 ? "bg-background" : "bg-muted"
                    }`}
                  >
                    <div
                      className={`absolute right-0 top-0 pb-3 pl-3 rounded-bl-[2.25rem] ${
                        index % 2 === 0 ? "bg-background" : "bg-muted"
                      } z-10`}
                    >
                      <span
                        className={`absolute right-full top-0 w-10 h-10 ${
                          index % 2 === 0 ? "bg-background" : "bg-muted"
                        } rounded-full rounded-tr-none`}
                      ></span>
                      <span
                        className={`absolute right-full top-0 w-10 h-10 ${
                          index % 2 === 1 ? "bg-background" : "bg-muted"
                        } rounded-full`}
                      ></span>
                      <span
                        className={`absolute right-0 top-full w-10 h-10 ${
                          index % 2 === 0 ? "bg-background" : "bg-muted"
                        } rounded-full rounded-tr-none`}
                      ></span>
                      <span
                        className={`absolute right-0 top-full w-10 h-10 ${
                          index % 2 === 1 ? "bg-background" : "bg-muted"
                        } rounded-full`}
                      ></span>
                      <div className="bg-primary/10 p-4 rounded-full">
                        <service.icon className="text-primary text-xl" />
                      </div>
                    </div>
                    <CardHeader className="relative pr-10">
                      <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="relative aspect-video overflow-hidden mx-4 rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={200}
                        className="object-cover h-full w-full transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      {service.subServices && (
                        <ul className="space-y-3">
                          {service.subServices.map((subService, subIdx) => (
                            <li
                              key={subIdx}
                              className="text-sm text-muted-foreground flex items-center gap-3 group-hover:translate-x-1 transition-transform"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {subService}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted text-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in our mission to create sustainable environmental solutions
            for a better tomorrow
          </p>
          <Button size="lg" variant="" className="">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}

const serviceCategories = [
  {
    id: "cdm",
    title: "Clean Development Mechanism Services",
    description:
      "Comprehensive solutions for greenhouse gas emission reduction projects and carbon credit development.",
    services: [
      {
        title: "CDM Advisory Services",
        description:
          "Expert guidance throughout the CDM project lifecycle with international network support.",
        image: "https://picsum.photos/400/300?random=9",
        icon: Globe,
        subServices: [
          "Project assessment and conceptualization",
          "Documentation and approval process management",
          "CER transaction assistance",
          "International partner networking",
        ],
      },
      {
        title: "Carbon Finance",
        description:
          "Strategic financial solutions for carbon credit projects and market optimization.",
        image: "https://picsum.photos/400/300?random=8",
        icon: Building,
        subServices: [
          "Carbon credit trading strategies",
          "Project financing solutions",
          "Market analysis and optimization",
          "Risk assessment and management",
        ],
      },
      {
        title: "Renewable Energy Projects",
        description:
          "Comprehensive clean energy solutions from concept to implementation.",
        image: "https://picsum.photos/400/300?random=7",
        icon: Wind,
        subServices: [
          "Wind and solar power generation",
          "Biomass energy solutions",
          "Hydropower development",
          "Energy efficiency optimization",
        ],
      },
    ],
  },
  {
    id: "environmental",
    title: "Environmental Impact Assessment",
    description:
      "Comprehensive environmental assessment and consultation services across various sectors.",
    services: [
      {
        title: "Impact Assessment",
        description:
          "Thorough environmental impact studies and mitigation planning.",
        image: "https://picsum.photos/400/300?random=1",
        icon: TreePine,
        subServices: [
          "Initial Environmental Examination (IEE)",
          "Environmental Impact Assessment (EIA)",
          "Stakeholder consultation and engagement",
          "Environmental Impact Statement (EIS)",
        ],
      },
      {
        title: "REDD+ Implementation",
        description:
          "Reducing emissions from deforestation and forest degradation.",
        image: "https://picsum.photos/400/300?random=2",
        icon: Leaf,
        subServices: [
          "REDD+ process initiation and support",
          "Stakeholder engagement programs",
          "Monitoring and verification systems",
          "Capacity building initiatives",
        ],
      },
      {
        title: "Climate Change Adaptation",
        description: "Strategic solutions for climate change challenges.",
        image: "https://picsum.photos/400/300?random=3",
        icon: AlertTriangle,
        subServices: [
          "Vulnerability assessment",
          "Adaptation strategy development",
          "Policy formulation and implementation",
          "Capacity building programs",
        ],
      },
    ],
  },
  {
    id: "waste",
    title: "Waste Management & Sustainable Solutions",
    description:
      "Innovative approaches to waste management and sustainable development.",
    services: [
      {
        title: "Waste to Energy",
        description: "Converting waste into valuable energy resources.",
        image: "https://picsum.photos/400/300?random=4",
        icon: Recycle,
        subServices: [
          "Policy formulation and implementation",
          "CDM potential assessment",
          "Project development and management",
          "Technical feasibility studies",
        ],
      },
      {
        title: "Green Climate Fund Projects",
        description: "Accessing and implementing GCF initiatives.",
        image: "https://picsum.photos/400/300?random=5",
        icon: Globe,
        subServices: [
          "Proposal development",
          "Technical studies and feasibility",
          "Project evaluation and monitoring",
          "Stakeholder coordination",
        ],
      },
      {
        title: "Capacity Building",
        description: "Comprehensive training and development programs.",
        image: "https://picsum.photos/400/300?random=6",
        icon: Users,
        subServices: [
          "Awareness raising events",
          "Technical training workshops",
          "Stakeholder engagement",
          "Knowledge transfer programs",
        ],
      },
    ],
  },
];
