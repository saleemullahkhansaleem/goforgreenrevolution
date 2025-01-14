import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Wind,
  TreePine,
  Leaf,
  Building,
  AlertTriangle,
  Recycle,
  Users,
  Globe,
  Zap,
  FileText,
  Shield,
  Flower2,
  ArrowUpRight,
  Target,
  CloudRain,
  Sun,
  Trash,
  DollarSign,
  Trees,
  Filter,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ServicesPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setSelectedCategory(serviceId ? serviceId : "all");
  }, [serviceId]);

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/20 to-transparent overflow-hidden">
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

      {/* Filter Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 sticky top-16 backdrop-blur-sm z-20 border-b">
        <div className="max-w-7xl mx-auto">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <Button
                size="sm"
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => navigate(`/services`)}
                // onClick={() => setSelectedCategory("all")}
                className="rounded-full"
              >
                All Services
              </Button>
              {categories.map((category) => (
                <Button
                  size="sm"
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  onClick={() => navigate(`/services/${category.value}`)}
                  // onClick={() => setSelectedCategory(category.value)}
                  className="rounded-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                id={service.category}
                className="relative bg-muted shadow-none border-none group mt-6 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="absolute left-0 -top-6 pb-3 pr-3 rounded-br-[2.25rem] bg-background z-10">
                  <span className="absolute left-full top-6 w-10 h-10 bg-background rounded-full rounded-tl-none"></span>
                  <span className="absolute left-full top-6 w-10 h-10 bg-muted rounded-full"></span>
                  <span className="absolute left-0 top-full w-10 h-10 bg-background rounded-full rounded-tl-none"></span>
                  <span className="absolute left-0 top-full w-10 h-10 bg-muted rounded-full"></span>
                  <div className="bg-primary/10 p-4 rounded-full transition-colors">
                    <service.icon className="text-primary text-xl" />
                  </div>
                </div>
                <CardHeader>
                  <div className="mb-4 text-right">
                    <Badge variant="secondary">
                      {
                        categories.find((c) => c.value === service.category)
                          ?.label
                      }
                    </Badge>
                  </div>
                  <div className="flex items-start gap-4">
                    {/* <div className="p-2 rounded-lg bg-primary/10">
                      {<service.icon className="w-6 h-6 text-primary" />}
                    </div> */}
                    <div>
                      <CardTitle className="text-xl mb-2 pl-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <ul className="space-y-2 mb-10">
                    {service.subServices.slice(0, 3).map((subService, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {subService}
                      </li>
                    ))}
                    {service.subServices.length > 3 && (
                      <li className="text-sm text-primary">
                        +{service.subServices.length - 3} more services
                      </li>
                    )}
                  </ul>
                </CardContent>
                <div className="absolute right-0 bottom-0 pt-3 pl-3 rounded-tl-3xl bg-background z-10">
                  <span className="absolute right-full bottom-0 w-8 h-8 bg-background rounded-full rounded-br-none"></span>
                  <span className="absolute right-full bottom-0 w-8 h-8 bg-muted rounded-full"></span>
                  <span className="absolute right-0 bottom-full w-8 h-8 bg-background rounded-full rounded-br-none"></span>
                  <span className="absolute right-0 bottom-full w-8 h-8 bg-muted rounded-full"></span>
                  <Button
                    variant=""
                    className="rounded-full border-none text-foreground bg-secondary/30 group-hover:bg-secondary/50"
                  >
                    Viw Detail <ArrowUpRight />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        {selectedService && (
          <DialogContent className="max-w-3xl max-h-screen overflow-auto">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  {<selectedService.icon className="w-6 h-6 text-primary" />}
                </div>
                <div>
                  <DialogTitle className="text-2xl">
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription>
                    {
                      categories.find(
                        (c) => c.value === selectedService.category
                      )?.label
                    }
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            <div className="relative h-[300px] rounded-lg overflow-hidden my-6">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="object-cover w-full"
              />
            </div>
            <div className="grid gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Overview</h3>
                <p className="text-muted-foreground">
                  {selectedService.details?.overview ||
                    selectedService.description}
                </p>
              </div>
              {selectedService.details?.benefits && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Key Benefits</h3>
                  <ul className="grid gap-2">
                    {selectedService.details.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-lg mb-2">Services Offered</h3>
                <ul className="grid gap-2">
                  {selectedService.subServices.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              {selectedService.details?.process && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Our Process</h3>
                  <ol className="grid gap-2">
                    {selectedService.details.process.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="font-semibold text-primary">
                          {idx + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

const categories = [
  { value: "cdm-energy", label: "Energy" },
  { value: "environmental-climate", label: "Climate" },
  { value: "drr-redd", label: "Risk" },
  { value: "horticulture-waste", label: "Waste" },
  { value: "gcf-capacity", label: "GCF" },
];

const services = [
  {
    id: "cdm-advisory",
    title: "CDM Advisory Services",
    category: "cdm-energy",
    description:
      "Expert guidance throughout the CDM project lifecycle with international network support.",
    image: "/images/services/cdm.webp",
    icon: Globe,
    subServices: [
      "Project assessment and conceptualization",
      "Documentation support",
      "Approval process management",
      "CER transaction assistance",
      "International partner networking",
    ],
    details: {
      overview:
        "Our CDM Advisory Services provide comprehensive support throughout the entire CDM project lifecycle, from initial assessment to final CER transactions.",
      benefits: [
        "Access to international carbon markets",
        "Expert guidance on CDM methodologies",
        "Streamlined documentation process",
        "Maximum carbon credit potential",
      ],
      process: [
        "Initial project assessment and feasibility study",
        "Documentation preparation and validation",
        "Host country approval facilitation",
        "Registration with UNFCCC",
        "Monitoring and verification support",
      ],
    },
  },
  {
    id: "energy-renewable",
    title: "Renewable Energy Projects",
    category: "cdm-energy",
    description:
      "Comprehensive renewable energy solutions from concept to implementation.",
    image: "/images/services/rep.webp",
    icon: Zap,
    subServices: [
      "Biomass-based power generation",
      "Bagasse cogeneration efficiency improvement",
      "Wind Power Generation",
      "Biogas Plants",
      "Hydropower Generation",
      "Solar Power Generation",
    ],
  },
  {
    id: "nama-services",
    title: "Nationally Appropriate Mitigation Actions (NAMAs)",
    category: "environmental-climate",
    description: "Strategic support for NAMA development and implementation.",
    image: "/images/services/namas.webp",
    icon: Target,
    subServices: [
      "Framework assessment and gap analysis",
      "NAMA strategy and policy development",
      "Standards and labelling schemes",
      "MRV framework design",
      "Capacity building and data gathering",
    ],
  },
  {
    id: "eia-services",
    title: "Environmental Impact Assessment (EIA)",
    category: "environmental-climate",
    description: "Comprehensive EIA services for diverse sectors and projects.",
    image: "/images/services/eia.webp",
    icon: FileText,
    subServices: [
      "Initial Environmental Examination (IEE)",
      "Environmental Impact Assessment (EIA)",
      "Public and stakeholder consultation",
      "Environmental Impact Statement (EIS)",
      "Technical advice on mitigation measures",
    ],
  },
  {
    id: "redd-plus",
    title: "REDD+ Services",
    category: "drr-redd",
    description:
      "Innovative solutions to reduce deforestation and forest degradation.",
    image: "/images/services/redd.webp",
    icon: Trees,
    subServices: [
      "REDD+ process initiation support",
      "Stakeholder engagement for strategy development",
      "Monitoring, reporting, and verification (MRV) systems",
      "Capacity building for public and private sectors",
    ],
  },
  {
    id: "climate-adaptation",
    title: "Climate Change Adaptation",
    category: "environmental-climate",
    description:
      "Tailored strategies to address climate change vulnerabilities.",
    image: "/images/services/cca.webp",
    icon: CloudRain,
    subServices: [
      "Climate change vulnerability assessment",
      "Impact assessment",
      "Adaptation strategy and policy development",
      "Capacity building",
      "Prioritization of adaptation approaches",
    ],
  },
  {
    id: "drr-services",
    title: "Disaster Risk Reduction (DRR)",
    category: "drr-redd",
    description: "Comprehensive DRR strategies and assessments.",
    image: "/images/services/drr.webp",
    icon: Shield,
    subServices: [
      "Vulnerability assessment",
      "Impact assessment",
      "DRR strategy and policy development",
      "Capacity building",
      "Prioritization of DRR approaches",
    ],
  },
  {
    id: "horticulture",
    title: "Horticulture and Landscaping",
    category: "horticulture-waste",
    description: "Design and maintenance of sustainable landscapes.",
    image: "/images/services/hl.webp",
    icon: Sun,
    subServices: [
      "Survey, design, and implementation",
      "Indoor and outdoor plant provision",
      "Regular landscape maintenance",
      "Plant and tree trimming into attractive shapes",
    ],
  },
  {
    id: "waste-management",
    title: "Waste Management and Waste-to-Energy",
    category: "horticulture-waste",
    description: "Innovative waste management and energy generation solutions.",
    image: "/images/services/wmwe.webp",
    icon: Trash,
    subServices: [
      "Waste-to-energy policy formulation",
      "CDM, NAMA, and GCF potential assessment",
      "Capacity building and stakeholder awareness",
    ],
  },
  {
    id: "gcf-projects",
    title: "Green Climate Fund (GCF) Projects",
    category: "gcf-capacity",
    description: "Comprehensive support for GCF project development.",
    image: "/images/services/gcf.webp",
    icon: DollarSign,
    subServices: [
      "GCF potential identification and assessment",
      "Feasibility studies",
      "Policy formulation and technical evaluation",
      "Stakeholder engagement and capacity building",
    ],
  },
  {
    id: "capacity-building",
    title: "Capacity Building and Awareness",
    category: "gcf-capacity",
    description:
      "Empowering stakeholders through training and awareness programs.",
    image: "/images/services/cba.webp",
    icon: Users,
    subServices: [
      "Awareness events for climate adaptation and mitigation",
      "Training workshops in energy, industry, waste, transport, and more",
    ],
  },
];
