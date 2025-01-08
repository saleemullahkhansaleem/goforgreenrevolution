// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   ThermometerSun,
//   Wind,
//   Settings,
//   Shield,
//   CheckCircle2,
//   Zap,
//   MapPin,
// } from "lucide-react";

// const services = [
//   {
//     icon: <ThermometerSun className="w-6 h-6" />,
//     title: "Climate Control Solutions",
//     description:
//       "Advanced thermal management equipment to combat climate change effectively",
//   },
//   {
//     icon: <Settings className="w-6 h-6" />,
//     title: "Installation Services",
//     description:
//       "Professional installation of heating and cooling systems by certified technicians",
//   },
//   {
//     icon: <Shield className="w-6 h-6" />,
//     title: "Maintenance Contracts",
//     description:
//       "Comprehensive AMC contracts ensuring optimal system performance",
//   },
//   {
//     icon: <Wind className="w-6 h-6" />,
//     title: "HVAC Systems",
//     description:
//       "Top-notch heating and cooling systems for residential and commercial spaces",
//   },
// ];

// const features = [
//   "Quality Assurance",
//   "Innovation Focus",
//   "Customer-Oriented",
//   "Nationwide Coverage",
// ];

// export default function Services() {
//   return (
//     <section className="py-12 bg-primary/5">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <Badge className="mb-4 px-4 py-2 text-base bg-primary/10 text-primary">
//             Professional Services
//           </Badge>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Experience Excellence with Our HVAC Services
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="h-full hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader>
//                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//                     {service.icon}
//                   </div>
//                   <CardTitle className="text-xl mb-2">
//                     {service.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{service.description}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 md:p-12 mb-8"
//         >
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-2xl md:text-3xl font-semibold mb-8">
//               Since 2003, Our Path is Formed by Excellence
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
//                   <span className="text-gray-700 font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center bg-background rounded-2xl shadow-xl p-8 md:p-12"
//         >
//           <div className="max-w-2xl mx-auto">
//             <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
//             <h3 className="text-2xl md:text-3xl font-bold mb-4">
//               Perfection is Attainable at a Remarkable Price
//             </h3>
//             <p className="text-muted-foreground mb-8">
//               From Karachi to Islamabad and beyond, we deliver excellence in
//               HVAC solutions.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Button size="lg" className="bg-primary hover:bg-primary/90">
//                 Get Started Today
//               </Button>
//               <Button size="lg" variant="outline" className="group">
//                 <MapPin className="mr-2 w-5 h-5 group-hover:text-primary transition-colors" />
//                 Find Nearest Location
//               </Button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { FaLeaf, FaWater, FaTools, FaSolarPanel } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl" />,
    title: "Environmental Consultancy",
    description:
      "Providing innovative solutions for climate change adaptation, resource management, and sustainability.",
  },
  {
    icon: <FaWater className="text-blue-600 text-4xl" />,
    title: "Hydropower & Water Resources",
    description:
      "Expertise in hydropower, dams, and water resource development from feasibility to implementation.",
  },
  {
    icon: <FaTools className="text-yellow-600 text-4xl" />,
    title: "Infrastructure Development",
    description:
      "Delivering cutting-edge solutions for industrial and infrastructure development projects.",
  },
  {
    icon: <FaSolarPanel className="text-orange-600 text-4xl" />,
    title: "Energy Solutions",
    description:
      "Comprehensive services in renewable energy, energy efficiency, and sustainable power systems.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-muted/50 py-16 px-6 lg:px-20">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          GGR provides a wide range of consultancy services to meet public,
          private, and social sector needs, focusing on sustainable development
          and innovation.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card>
              <CardContent key={index} className="p-6">
                {/* Icon */}
                <div className="mb-4">{service.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
