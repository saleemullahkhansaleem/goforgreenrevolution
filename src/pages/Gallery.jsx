import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-base bg-primary/10 text-primary"
          >
            Portfolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Latest Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Explore our successful HVAC installations across Pakistan
          </p>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
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
              className="group relative overflow-hidden rounded-2xl bg-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/100 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <img
                alt={project.title}
                className="object-cover w-full aspect-[4/3] group-hover:scale-110 transition-transform duration-500"
                src={project.image}
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Badge className="text-sm">{project.category}</Badge>
                <h3 className="text-xl font-semibold text-foreground mt-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
