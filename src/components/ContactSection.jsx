import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Mail,
  Phone,
  Building2,
  Home,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the pinnacle of premium HVAC excellence with Go for Green
            Revolution (GGR) Pvt Limited.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="p-6 bg-gradient-to-r from-primary/10 to-blue-500/10">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Service Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Building2 className="w-4 h-4 mr-2" />
                      Commercial
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Home className="w-4 h-4 mr-2" />
                      Residential
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements"
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      No.3, Diplomatic Enclave No.1,
                      <br />
                      UN Boulevard, G-5,
                      <br />
                      Islamabad - Pakistan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a
                      href="mailto:info@goforgreenrevolution.com.pk"
                      className="text-primary hover:underline"
                    >
                      info@goforgreenrevolution.com.pk
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <a
                      href="tel:+92518739888"
                      className="text-primary hover:underline"
                    >
                      +92 51 8739888
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
