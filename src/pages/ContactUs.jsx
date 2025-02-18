import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import api from "@/http/api";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post("contact-us", { ...formData, domain_key: 1 })
      .then((response) => {
        if (response.success) {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setError("");
        } else {
          setError(
            response.message ||
              "There was an issue with your submission. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error(error);

        setError(error?.message || "An error occurred. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact - Go for Green Revolution (GGR)</title>
        <meta
          name="description"
          content="Go for Green Revolution (GGR) Pvt. Ltd. - GGR is a consulting firm based in Islamabad, providing environmental, management, economic, and technical consultancy services across public, social, and private sectors."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/20 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team to discuss how we can help you achieve
              your environmental goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Have questions about our services? We're here to help. Contact
                  us through any of the following channels or fill out the form.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className={`p-8 bg-muted rounded-2xl relative ${
                      index === 0 && "sm:col-span-2"
                    }`}
                  >
                    <div className="absolute right-0 top-0 pb-3 pl-3 rounded-bl-[2.25rem] bg-background z-10">
                      <span className="absolute right-full top-0 w-10 h-10 bg-background rounded-full rounded-tr-none"></span>
                      <span className="absolute right-full top-0 w-10 h-10 bg-muted rounded-tr-3xl"></span>
                      <span className="absolute right-0 top-full w-10 h-10 bg-background rounded-full rounded-tr-none"></span>
                      <span className="absolute right-0 top-full w-10 h-10 bg-muted rounded-tr-3xl"></span>
                      <div className="bg-primary/10 p-4 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 mt-10">{item.title}</h3>
                      {Array.isArray(item.content) ? (
                        <div className="space-y-1">
                          {item.content.map((line, i) => (
                            <p key={line} className="text-muted-foreground">
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            {submitted ? (
              <div className="w-full max-w-lg m-auto flex flex-col items-center gap-4">
                <FaCheck size={60} className="text-green-500 mb-4" />
                <h1 className="text-2xl text-foreground">
                  You message send successfully
                </h1>
                <Button variant="" asChild>
                  <Link to="/">Go to Home</Link>
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative bg-muted rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <p className="mb-6">
                  Feel free to reach out with any inquiries or questions. We're
                  here to help!
                </p>
                <div className="space-y-4 mb-12">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full py-2 px-4 bg-foreground/5 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full py-2 px-4 bg-foreground/5 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full py-2 px-4 bg-foreground/5 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full py-2 px-4 bg-foreground/5 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary resize-none"
                  />
                  {error && <p className="text-red-500">{error}</p>}
                </div>
                <div className="absolute right-0 bottom-0 pt-3 pl-3 rounded-tl-[2rem] bg-background z-10">
                  <span className="absolute right-full bottom-0 w-8 h-8 bg-background rounded-full rounded-br-none"></span>
                  <span className="absolute right-full bottom-0 w-8 h-8 bg-muted rounded-br-3xl"></span>
                  <span className="absolute right-0 bottom-full w-8 h-8 bg-background rounded-full rounded-br-none"></span>
                  <span className="absolute right-0 bottom-full w-8 h-8 bg-muted rounded-br-3xl"></span>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-none bg-primary/10 hover:bg-primary/20 text-primary"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.853639126428!2d73.06064108755162!3d33.71273595101052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa2b4a3278d%3A0x34a59e63033052c2!2sAl-Malik%20Centre!5e0!3m2!1sen!2s!4v1739857068810!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Office Address",
    content: ["70-West, Blue Area, Islamabad,", "Pakistan."],
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Phone",
    content: ["+92-51-8739888", "+92-51-8736789"],
  },
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email",
    content: "info@goforgreenrevolution.com.pk",
  },
];
