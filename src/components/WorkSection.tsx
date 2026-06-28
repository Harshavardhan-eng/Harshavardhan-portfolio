import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with seamless checkout and inventory management.",
      tags: ["React", "Node.js", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      title: "Dashboard Analytics",
      description: "Real-time data visualization dashboard for business intelligence and reporting.",
      tags: ["TypeScript", "D3.js", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking solution with biometric authentication.",
      tags: ["React Native", "Firebase", "UI Design"],
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    },
  ];

  return (
    <section id="work" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Recent <span className="italic">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
