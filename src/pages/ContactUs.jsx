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

export default function ContactUs() {
  return (
    <section className="py-20">
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
            className="mb-4 px-4 py-2 text-lg bg-primary/10 text-primary hover:bg-primary/20"
          >
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the pinnacle of premium HVAC excellence with Go for Green
            Revolution (GGR) Pvt Limited.
          </p>
        </motion.div>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Visit Us</h3>
              </div>
              <div>
                <p className="text-muted-foreground">
                  No.3, Diplomatic Enclave No.1,
                  <br />
                  UN Boulevard, G-5,
                  <br />
                  Islamabad - Pakistan
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
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
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13274.192655594568!2d73.07780914981532!3d33.72063881813769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc07b1b153ac9%3A0x7a6fc13096543e55!2sG-5%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735974523026!5m2!1sen!2s"
              className="w-full min-h-96 rounded-2xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-primary/10 rounded-2xl p-6">
              {/* <div>
                <h3 className="text-xl font-semibold mb-4">
                  Ready to Experience Premium HVAC Solutions?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Contact us today to reserve your slot and explore our
                  comprehensive range of HVAC services.
                </p>
              </div> */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
