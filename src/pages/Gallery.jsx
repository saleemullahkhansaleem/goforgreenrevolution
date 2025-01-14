import { useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/20 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our impactful projects that demonstrate our commitment to
            environmental sustainability and innovation
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-2 px-4 sm:px-6 lg:px-8 sticky top-12 md:top-14 z-20 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  size="sm"
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.value)}
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

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ProjectCard projects={filteredProjects} />
        </div>
      </section>

      {/* Project Details Dialog */}
    </div>
  );
}

export function ProjectCard({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative bg-muted rounded-2xl mt-4 group cursor-pointer flex flex-col justify-between"
          onClick={() => setSelectedProject(project)}
        >
          <div className="absolute right-0 -top-4 pb-3 pl-3 rounded-bl-[1.25rem] bg-background z-10">
            <span className="absolute right-full top-4 w-10 h-10 bg-background rounded-full rounded-tr-none"></span>
            <span className="absolute right-full top-4 w-10 h-10 bg-muted rounded-full"></span>
            <span className="absolute right-0 top-full w-10 h-10 bg-background rounded-full rounded-tr-none"></span>
            <span className="absolute right-0 top-full w-10 h-10 bg-muted rounded-full"></span>
            <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
              <ArrowUpRight className="text-primary text-xl" />
            </div>
          </div>
          <div className="p-6 pr-12">
            <Badge variant="secondary" className="mb-3">
              {project.category}
            </Badge>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      ))}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-3xl max-h-screen overflow-auto">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <div className="relative w-full rounded-lg overflow-hidden my-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="object-cover aspect-video w-full"
              />
            </div>
            <div className="grid gap-4">
              <div>
                <h4 className="font-semibold mb-2">Project Details</h4>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-muted-foreground">Client</dt>
                    <dd>{selectedProject.details.client}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Duration</dt>
                    <dd>{selectedProject.details.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Location</dt>
                    <dd>{selectedProject.details.location}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Impact & Outcomes</h4>
                <ul className="list-disc list-inside space-y-1">
                  {selectedProject.details.impact.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

const categories = [
  { value: "all", label: "All Projects" },
  { value: "water", label: "Water Resources" },
  { value: "energy", label: "Renewable Energy" },
  { value: "climate", label: "Climate Change" },
  { value: "community", label: "Community Development" },
  { value: "geospatial", label: "Geospatial Analysis" },
  { value: "disaster", label: "Disaster Risk Reduction" },
];

export const projects = [
  {
    id: "1",
    title: "Water Resource Management",
    description:
      "An innovative project focusing on sustainable water resource allocation for agriculture and urban areas.",
    image: "/images/projects/water-resource-management.webp",
    category: "water",
    details: {
      client: "Regional Water Authority",
      duration: "18 months",
      location: "Punjab, Pakistan",
      impact: [
        "30% reduction in water wastage",
        "Improved irrigation efficiency for 1000+ farmers",
        "Implementation of smart water monitoring systems",
        "Development of sustainable water policies",
      ],
    },
  },
  {
    id: "2",
    title: "Renewable Energy Solutions",
    description:
      "Development of solar and wind power systems to reduce carbon footprints and energy costs.",
    image: "/images/projects/renewable-energy-solutions.webp",
    category: "energy",
    details: {
      client: "Ministry of Energy",
      duration: "24 months",
      location: "Sindh, Pakistan",
      impact: [
        "Installation of 500MW solar capacity",
        "40% reduction in carbon emissions",
        "Energy access for 10,000+ households",
        "Creation of 200+ green jobs",
      ],
    },
  },
  {
    id: "3",
    title: "Climate Change Mitigation",
    description:
      "Strategies and projects aimed at reducing the impact of climate change in vulnerable regions.",
    image: "/images/projects/climate-change-mitigation.webp",
    category: "climate",
    details: {
      client: "Environmental Protection Agency",
      duration: "36 months",
      location: "Multiple Regions, Pakistan",
      impact: [
        "Development of climate action plans",
        "Implementation of early warning systems",
        "Protection of vulnerable ecosystems",
        "Community resilience programs",
      ],
    },
  },
  {
    id: "4",
    title: "Community Development Programs",
    description:
      "Empowering local communities through capacity building and sustainable practices.",
    image: "/images/projects/community-development-programs.webp",
    category: "community",
    details: {
      client: "NGO Consortium",
      duration: "12 months",
      location: "KPK, Pakistan",
      impact: [
        "Training for 1000+ community members",
        "Establishment of sustainable businesses",
        "Implementation of waste management systems",
        "Development of community leadership",
      ],
    },
  },
  {
    id: "5",
    title: "Geospatial Analysis Projects",
    description:
      "Utilizing GIS and remote sensing for better planning and resource management.",
    image: "/images/projects/geospatial-analysis.webp",
    category: "geospatial",
    details: {
      client: "Urban Planning Department",
      duration: "15 months",
      location: "Islamabad, Pakistan",
      impact: [
        "Creation of detailed land use maps",
        "Improved urban planning decisions",
        "Environmental impact assessments",
        "Resource optimization strategies",
      ],
    },
  },
  {
    id: "6",
    title: "Disaster Risk Reduction (DRR)",
    description:
      "Innovative approaches to minimize risks and enhance preparedness for natural disasters.",
    image: "/images/projects/disaster-risk-reduction.webp",
    category: "disaster",
    details: {
      client: "Disaster Management Authority",
      duration: "24 months",
      location: "Coastal Areas, Pakistan",
      impact: [
        "Implementation of early warning systems",
        "Community preparedness training",
        "Infrastructure resilience assessment",
        "Emergency response protocols",
      ],
    },
  },
];
