import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TreePine,
  Wind,
  Lightbulb,
  Building2,
  Shield,
  Sprout,
  Trash2,
  GalleryVerticalEnd,
  Users,
  LineChart,
  Leaf,
  CloudRain,
  Mountain,
  Recycle,
  Sun,
  Factory,
} from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("environmental");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <div className="container mx-auto px-4 py-16 md:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive environmental and sustainable development solutions
            for a better future
          </p>
        </div>

        {/* Main Services Navigation */}
        <Tabs
          defaultValue="environmental"
          className="space-y-8"
          onValueChange={setActiveCategory}
        >
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TabsTrigger
                value="environmental"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Environmental
              </TabsTrigger>
              <TabsTrigger
                value="energy"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Energy
              </TabsTrigger>
              <TabsTrigger
                value="climate"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Climate Action
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Specialized
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Environmental Services */}
          <TabsContent value="environmental" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={TreePine}
                title="Environmental Impact Assessment"
                description="Comprehensive environmental assessment services"
                details={[
                  "Initial Environmental Examination (IEE)",
                  "Environmental Impact Assessment (EIA)",
                  "Public Consultation",
                  "Environmental Impact Statement (EIS)",
                  "Technical Assistance & Mitigation Measures",
                ]}
              />
              <ServiceCard
                icon={Mountain}
                title="REDD plus"
                description="Reducing Emissions from Deforestation and Forest Degradation"
                details={[
                  "REDD-Plus Process Initiation",
                  "Stakeholder Engagement",
                  "Monitoring & Verification Systems",
                  "Capacity Building",
                  "Strategy Development",
                ]}
              />
              <ServiceCard
                icon={Sprout}
                title="Horticulture & Landscaping"
                description="Professional landscaping and maintenance services"
                details={[
                  "Survey & Design Architecture",
                  "Indoor/Outdoor Plants",
                  "Regular Maintenance",
                  "Attractive Plant Shaping",
                  "Landscape Implementation",
                ]}
              />
            </div>
          </TabsContent>

          {/* Energy Services */}
          <TabsContent value="energy" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={Wind}
                title="Renewable Energy"
                description="Sustainable energy solutions"
                details={[
                  "Wind Power Generation",
                  "Solar Power Projects",
                  "Hydro Power Generation",
                  "Biomass Energy",
                  "Bio-gas Plants",
                ]}
              />
              <ServiceCard
                icon={Factory}
                title="Energy Efficiency"
                description="Optimization of energy consumption"
                details={[
                  "Industrial Energy Audits",
                  "Efficiency Improvements",
                  "Cogeneration Facilities",
                  "Energy Management Systems",
                  "Technical Consultancy",
                ]}
              />
              <ServiceCard
                icon={Recycle}
                title="Waste to Energy"
                description="Converting waste to sustainable energy"
                details={[
                  "Policy Formulation",
                  "Project Assessment",
                  "CDM Integration",
                  "Technical Evaluation",
                  "Implementation Support",
                ]}
              />
            </div>
          </TabsContent>

          {/* Climate Action Services */}
          <TabsContent value="climate" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={LineChart}
                title="CDM Services"
                description="Clean Development Mechanism solutions"
                details={[
                  "Advisory Services",
                  "Project Development",
                  "Carbon Finance",
                  "Emission Reduction",
                  "International Network Access",
                ]}
              />
              <ServiceCard
                icon={CloudRain}
                title="Climate Change Adaptation"
                description="Strategic climate adaptation services"
                details={[
                  "Vulnerability Assessment",
                  "Impact Assessment",
                  "Strategy Development",
                  "Policy Formation",
                  "Capacity Building",
                ]}
              />
              <ServiceCard
                icon={Shield}
                title="Disaster Risk Reduction"
                description="Comprehensive risk management"
                details={[
                  "Risk Assessment",
                  "Impact Analysis",
                  "Strategy Development",
                  "Capacity Building",
                  "Vulnerability Mapping",
                ]}
              />
            </div>
          </TabsContent>

          {/* Specialized Services */}
          <TabsContent value="other" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={GalleryVerticalEnd}
                title="NAMAs"
                description="Nationally Appropriate Mitigation Actions"
                details={[
                  "Framework Assessment",
                  "Strategy Development",
                  "MRV Framework Design",
                  "Policy Gap Analysis",
                  "Capacity Building",
                ]}
              />
              <ServiceCard
                icon={Sun}
                title="Green Climate Fund"
                description="GCF project development and management"
                details={[
                  "Proposal Development",
                  "Feasibility Studies",
                  "Technical Evaluation",
                  "Partner Liaison",
                  "Capacity Building",
                ]}
              />
              <ServiceCard
                icon={Users}
                title="Capacity Building"
                description="Training and development programs"
                details={[
                  "Awareness Programs",
                  "Technical Workshops",
                  "Stakeholder Engagement",
                  "Training Sessions",
                  "Knowledge Transfer",
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Detailed Service Information */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Our Services?</CardTitle>
              <CardDescription>
                Comprehensive solutions backed by expertise and experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Expert Team</AccordionTrigger>
                  <AccordionContent>
                    Our team consists of highly qualified professionals with
                    advanced degrees in environmental science, engineering, and
                    sustainable development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Global Standards</AccordionTrigger>
                  <AccordionContent>
                    We adhere to international best practices and standards in
                    all our services, ensuring quality and compliance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Comprehensive Solutions</AccordionTrigger>
                  <AccordionContent>
                    From initial assessment to implementation and monitoring, we
                    provide end-to-end solutions for all your environmental and
                    sustainability needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Contact us to discuss how we can help with your specific needs
          </p>
          <Button className="bg-green-600 hover:bg-green-700">
            Request Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, description, details }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-4">
          <Icon className="w-8 h-8 text-green-600" />
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full rounded-md">
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
