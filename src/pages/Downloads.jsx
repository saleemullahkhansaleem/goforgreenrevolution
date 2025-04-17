import { Helmet } from "react-helmet-async";
import { downloadsData } from "@/data/downloadsData"; // Adjust path as needed
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Eye, View } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Downloads() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Downloads - Go for Green Revolution (GGR)</title>
        <meta
          name="description"
          content="Go for Green Revolution (GGR) Pvt. Ltd. - GGR is a consulting firm based in Islamabad, providing environmental, management, economic, and technical consultancy services across public, social, and private sectors. Explore collection of downloadable resources, including important
            links, policies, acts, rules, and other documents related to our
            services and projects"
        />
        <meta
          name="keywords"
          content="
        NEQS,
        Hospital Waste Rules,
        Pakistan Biosafety Rules,
        Environmental Tribunal Rules,
        Pollution Charge Rules,
        Environmental Samples Rules,
        Sustainable Development Fund Rules,
        Hazardous Waste Rules,
        Industrial Wastewater,
        Ambient Air Standards,
        Motor Vehicle Emissions,
        Noise Pollution,
        GGR Islamabad,
        Environmental Regulations Pakistan,
        Green Revolution Downloads
      "
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/20 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Downloads
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore collection of downloadable resources, including important
            links, policies, acts, rules, and other documents related to our
            services and projects.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {downloadsData.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-2">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((doc) => (
                  //   <div
                  //     key={doc.id}
                  //     className="bg-background border p-6 shadow hover:shadow-lg transition duration-200"
                  //   >
                  //     <h3 className="text-sm text-foreground mb-4">{doc.name}</h3>
                  //     <div className="flex space-x-2">
                  //       <Button size="sm" asChild>
                  //         <a
                  //           href={doc.link}
                  //           target="_blank"
                  //           rel="noopener noreferrer"
                  //         >
                  //           View
                  //         </a>
                  //       </Button>
                  //       <Button variant="secondary" size="sm" asChild>
                  //         <a href={doc.link} download>
                  //           Download
                  //         </a>
                  //       </Button>
                  //     </div>
                  //   </div>
                  <DownloadsCard doc={doc} key={doc.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function DownloadsCard({ doc }) {
  return (
    <Card className="relative bg-muted shadow-none border-none group mt-4">
      <CardContent className="p-6">
        <h3 className="text-foreground pl-2 mb-8">{doc.name}</h3>
      </CardContent>
      <div className="absolute right-0 bottom-0 pt-2 pl-2 rounded-tl-3xl bg-background z-10">
        <span className="absolute right-full bottom-0 w-8 h-8 bg-background rounded-full rounded-br-none"></span>
        <span className="absolute right-full bottom-0 w-8 h-8 bg-muted rounded-br-2xl"></span>
        <span className="absolute right-0 bottom-full w-8 h-8 bg-background rounded-full rounded-br-none"></span>
        <span className="absolute right-0 bottom-full w-8 h-8 bg-muted rounded-br-2xl"></span>
        {doc.noDownload ? (
          <Button
            size="sm"
            asChild
            variant="outline"
            className="rounded-full border-none text-foreground bg-primary/30 hover:bg-primary/50"
          >
            <a href={doc.link} target="_blank" rel="noopener noreferrer">
              Visit <ExternalLink />
            </a>
          </Button>
        ) : (
          <div className="flex gap-3">
            <Button
              size="sm"
              asChild
              variant="outline"
              className="rounded-full border-none text-foreground bg-primary/30 hover:bg-primary/50"
            >
              <a href={doc.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="rounded-full border-none text-foreground bg-secondary/30 hover:bg-secondary/50"
              asChild
            >
              <a href={doc.link} download>
                Download <Download />
              </a>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
