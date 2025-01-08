import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Home,
  Phone,
  Factory,
  School,
  UtensilsCrossed,
  Wrench,
  ArrowRight,
  Mail,
  Building,
  Users,
  MessageCircle,
  Sparkles,
  Globe,
  TargetIcon,
  ShieldIcon,
  Leaf,
  GlobeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { LightningBoltIcon } from "@radix-ui/react-icons";

export default function LandingPage() {
  const features = [
    {
      icon: <TargetIcon className="w-6 h-6 text-primary" />,
      title: "Precision Execution",
      description: "Delivering tailored solutions with unmatched accuracy.",
    },
    {
      icon: <ShieldIcon className="w-6 h-6 text-primary" />,
      title: "Robust Security",
      description: "Prioritizing your peace of mind with reliable safeguards.",
    },
    {
      icon: <LightningBoltIcon className="w-6 h-6 text-primary" />,
      title: "Unmatched Performance",
      description: "Optimized processes to deliver top-notch efficiency.",
    },
    {
      icon: <GlobeIcon className="w-6 h-6 text-primary" />,
      title: "Global Reach",
      description: "Expanding horizons with services accessible worldwide.",
    },
  ];

  const industries = [
    {
      icon: <Building className="h-10 w-10" />,
      title: "Apartments & Homes",
      description:
        "Custom climate solutions for residential complexes and private homes.",
      image: "/services/home.webp",
      stats: ["500+ Projects", "24/7 Support", "Energy Efficient"],
      href: "portfolio/apartments-homes",
    },
    {
      icon: <Factory className="h-10 w-10" />,
      title: "Offices & Factories",
      description:
        "Efficient cooling solutions for workplace comfort and productivity.",
      image: "/services/office.webp",
      stats: ["Industrial Grade", "Cost Effective", "Low Maintenance"],
      href: "portfolio/offices-factories",
    },
    {
      icon: <School className="h-10 w-10" />,
      title: "Hospitals & Schools",
      description:
        "High-quality air purification systems for healthcare and education.",
      image: "/services/hospital.webp",
      stats: ["Air Purification", "Noise Control", "24/7 Operation"],
      href: "portfolio/hospitals-schools",
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10" />,
      title: "Kitchens & Restaurants",
      description: "Specialized HVAC solutions for the food service industry.",
      image: "/services/hotel.webp",
      stats: ["Temperature Control", "Ventilation", "Humidity Control"],
      href: "portfolio/kitchens-restaurants",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Shopping Malls",
      description:
        "Complete climate control solutions for retail environments.",
      image: "/services/hotel-1.webp",
      stats: ["Large Scale", "Energy Saving", "Smart Control"],
      href: "/shopping-malls",
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Data Centers",
      description: "Precision cooling systems for critical IT infrastructure.",
      image: "/services/home-1.webp",
      stats: ["Precision Control", "Redundancy", "24/7 Monitoring"],
      href: "/data-centers",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary w-fit">
                Our Story
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Excellence Since 2003
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  We've been challenging the comfort world by producing the best
                  HVAC air-conditioning systems. Guided by the concepts of
                  quality and innovation, we created systems that meet the best
                  performance and ensure durability.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="group" asChild>
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/100 to-cyan-500 rounded-2xl rotate-3 blur-2xl opacity-20" />
              <img
                alt="About Go for Green Revolution (GGR) Pvt Limited"
                className="relative rounded-2xl object-cover w-full aspect-[5/3] shadow-2xl"
                src="/about.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive HVAC Solutions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Discover our range of professional HVAC services tailored to your
              needs
            </p>
          </div>
          <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start mt-16">
            <ServiceCard
              icon={<Building2 className="h-10 w-10" />}
              title="Commercial HVAC"
              description="State-of-the-art chillers, VRF systems, and package units for businesses."
              image="/services/commercial.webp"
              features={[
                "Advanced VRF Systems",
                "Energy Efficient",
                "24/7 Support",
              ]}
              href="/commercial-hvac"
            />
            <ServiceCard
              icon={<Home className="h-10 w-10" />}
              title="Residential HVAC"
              description="Energy-efficient solutions for optimal home comfort and air quality."
              image="/services/residential.webp"
              features={[
                "Smart Controls",
                "Quiet Operation",
                "Air Purification",
              ]}
              href="/residential-hvac"
            />
            <ServiceCard
              icon={<Wrench className="h-10 w-10" />}
              title="Annual Maintenance"
              description="Comprehensive maintenance contracts for year-round system efficiency."
              image="/services/amc.webp"
              features={[
                "Regular Inspections",
                "Performance Tuning",
                "Emergency Service",
              ]}
              href="/amc"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Industries
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sectors We Serve
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Tailored HVAC solutions for various industries
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start mt-16"
          >
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-24 overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-base bg-primary/10 text-primary"
            >
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Excellence in Every Step
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why we stand out in delivering unmatched solutions
              tailored to your unique needs.
            </p>
          </motion.div>

          {/* Main Features */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Highlighted Feature */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-2xl transform -rotate-3"></div>
                <div className="relative bg-background rounded-2xl shadow-lg p-8">
                  <Globe className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Global Expertise</h3>
                  <p className="text-muted-foreground mb-6">
                    Leverage our extensive knowledge to ensure success on an
                    international scale. We deliver solutions that align with
                    your aspirations.
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-semibold">
                      Empowering Your Business Globally
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-background hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Sustainability Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Leaf className="w-12 h-12 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Commitment to Sustainability
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our solutions are designed with sustainability at the core,
                  ensuring we deliver long-term value without compromising the
                  planet.
                </p>
                <Button className="bg-primary hover:bg-primary/90 group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/60 backdrop-blur rounded-lg p-6 text-center">
                  <h4 className="font-semibold mb-2">100%</h4>
                  <p className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </p>
                </div>
                <div className="bg-background/60 backdrop-blur rounded-lg p-6 text-center">
                  <h4 className="font-semibold mb-2">24/7</h4>
                  <p className="text-sm text-muted-foreground">
                    Support Availability
                  </p>
                </div>
                <div className="bg-background/60 backdrop-blur rounded-lg p-6 text-center">
                  <h4 className="font-semibold mb-2">50%</h4>
                  <p className="text-sm text-muted-foreground">Cost Savings</p>
                </div>
                <div className="bg-background/60 backdrop-blur rounded-lg p-6 text-center">
                  <h4 className="font-semibold mb-2">0%</h4>
                  <p className="text-sm text-muted-foreground">
                    Carbon Emissions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 bg-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Latest Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Explore our successful HVAC installations across Pakistan
            </p>
          </div>
          <div className="mx-auto grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {[
              {
                title: "Commercial Building HVAC System",
                category: "Commercial",
                image: "/services/home.webp",
              },
              {
                title: "Residential Complex Installation",
                category: "Residential",
                image: "/services/home-2.webp",
              },
              {
                title: "Hospital HVAC Solution",
                category: "Healthcare",
                image: "/services/school.webp",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded bg-primary/10"
              >
                <img
                  alt={project.title}
                  className="object-cover w-full aspect-[4/3] group-hover:scale-110 transition-transform duration-500"
                  src={project.image}
                />
                <div className="absolute inset-0 dark flex flex-col items-start justify-end p-6 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <Badge className="text-sm">{project.category}</Badge>
                  <h3 className="text-xl text-foreground font-semibold mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="group" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container mx-auto relative px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Ready to experience premium HVAC excellence? Reach out to us
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="group h-12" asChild>
                <Link to="tel:+92518739888">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group h-12"
                asChild
              >
                <Link to="mailto:info@goforgreenrevolution.com.pk">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group h-12"
                asChild
              >
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description, image, features, href }) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/100/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="rounded-full bg-background/90 backdrop-blur-sm p-3 text-primary">
            {icon}
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {features.map((feature, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/10 text-primary"
            >
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-center pt-0">
        <Button className="group w-full" asChild>
          <Link to={href}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function IndustryCard({ icon, title, description, image, stats, href }) {
  return (
    <Card className="group relative h-full transition-all duration-300">
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 -z-10 blur-3xl"></div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            className="bg-background/90 backdrop-blur-sm"
            asChild
          >
            <Link to={href}>View Details</Link>
          </Button>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-sm font-medium text-primary">{stat}</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end pt-0">
        <Button variant="outline" className="group/btn" asChild>
          <Link to={href}>
            Explore
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
