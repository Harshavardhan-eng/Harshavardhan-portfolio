import { Code2, Cpu, Palette, TrendingUp, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, title: "Full Stack", desc: "End-to-end development" },
    { icon: Cpu, title: "Generative AI", desc: "AI-powered solutions" },
    { icon: Palette, title: "UI/UX Design", desc: "User-centered design" },
    { icon: TrendingUp, title: "Problem Solver", desc: "Creative solutions" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Building software that <span className="text-gradient">makes an impact</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <span className="text-foreground font-semibold">Harsha Vardhan Sreerangapuram</span>,
                an aspiring Java Full Stack Developer with a strong foundation in application development,
                object-oriented programming, database management, and modern web technologies. My focus is
                on building maintainable, efficient, and scalable software that delivers meaningful business value.
              </p>
              <p>
                Through academic projects, internships, and continuous self-learning, I have gained hands-on
                experience working with <span className="text-primary">Java, Spring Boot, React, Angular, MySQL,
                REST APIs</span>, and modern development workflows. These experiences have strengthened my ability
                to design, develop, and enhance applications across the full software development lifecycle.
              </p>
              <p>
                Alongside full-stack development, I actively explore <span className="text-accent">Generative AI
                technologies</span> and their practical applications in modern software systems. I am particularly
                interested in how AI-powered capabilities can enhance user experiences, automate workflows, and
                solve real-world challenges.
              </p>
              <p>
                Currently seeking opportunities where I can contribute to impactful engineering teams, strengthen
                my technical expertise, and grow into a well-rounded software developer while delivering
                high-quality solutions in fast-paced environments.
              </p>
            </div>

            {/* Education Block */}
            <div 
              className="mt-8 p-5 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl"
              style={{ 
                opacity: 0,
                animation: `fadeSlideUp 0.6s ease-out 0.4s forwards`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-primary mb-1">Education</h4>
                  <p className="font-display font-semibold text-foreground">
                    B.Tech – Computer Science Engineering (2022 – 2026)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sri Venkateswara College of Engineering and Technology (Autonomous), Chittoor
                  </p>
                  <p className="text-xs text-primary/70 mt-1 font-medium">Graduated 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className="group p-6 bg-gradient-card border border-border rounded-2xl transition-all duration-300 ease-out hover:border-primary/50 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
                style={{ 
                  opacity: 0,
                  animation: `fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards`
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, hsl(250, 85%, 60%, 0.1), hsl(280, 80%, 55%, 0.1))', filter: 'blur(8px)' }} />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
