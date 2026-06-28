import { useState, useRef, useEffect } from "react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "all",      label: "All Skills"    },
    { id: "frontend", label: "Frontend"       },
    { id: "backend",  label: "Backend"        },
    { id: "database", label: "Database"       },
    { id: "orm",      label: "ORM & Persistence" },
    { id: "tools",    label: "Tools"          },
    { id: "concepts", label: "Concepts"       },
  ];

  const skills = [
    // Frontend Development
    { name: "HTML5",        level: 90, category: "frontend", color: "from-orange-500 to-red-500"     },
    { name: "CSS3",         level: 88, category: "frontend", color: "from-blue-500 to-cyan-500"      },
    { name: "JavaScript",   level: 85, category: "frontend", color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript",   level: 75, category: "frontend", color: "from-blue-400 to-indigo-500"   },
    { name: "React.js",     level: 85, category: "frontend", color: "from-cyan-500 to-blue-500"     },
    { name: "Angular",      level: 75, category: "frontend", color: "from-red-500 to-pink-500"      },
    { name: "Tailwind CSS", level: 82, category: "frontend", color: "from-teal-400 to-cyan-500"     },
    // Backend Development
    { name: "Core Java",     level: 88, category: "backend", color: "from-orange-600 to-red-600"    },
    { name: "Advanced Java", level: 80, category: "backend", color: "from-amber-600 to-orange-600"  },
    { name: "JDBC",          level: 78, category: "backend", color: "from-yellow-600 to-amber-600"  },
    { name: "Servlets",      level: 75, category: "backend", color: "from-lime-600 to-green-600"    },
    { name: "JSP",           level: 73, category: "backend", color: "from-green-500 to-emerald-500" },
    { name: "Spring Boot",   level: 82, category: "backend", color: "from-green-600 to-emerald-600" },
    { name: "Node.js",       level: 78, category: "backend", color: "from-green-500 to-lime-500"    },
    { name: "Express.js",    level: 76, category: "backend", color: "from-slate-500 to-gray-700"    },
    // Database Technologies
    { name: "MySQL",   level: 83, category: "database", color: "from-blue-500 to-indigo-500"  },
    { name: "MongoDB", level: 76, category: "database", color: "from-green-600 to-teal-500"   },
    { name: "SQL",     level: 85, category: "database", color: "from-indigo-500 to-violet-500" },
    // ORM & Persistence
    { name: "Hibernate", level: 76, category: "orm", color: "from-amber-500 to-orange-500" },
    { name: "JPA",       level: 74, category: "orm", color: "from-orange-500 to-red-500"   },
    // Tools & Platforms
    { name: "Git",     level: 87, category: "tools", color: "from-orange-500 to-red-500"  },
    { name: "GitHub",  level: 87, category: "tools", color: "from-gray-600 to-gray-800"   },
    { name: "VS Code", level: 92, category: "tools", color: "from-blue-500 to-blue-700"   },
    { name: "Postman", level: 82, category: "tools", color: "from-orange-500 to-amber-500" },
    // Software Development Concepts
    { name: "REST APIs",                    level: 87, category: "concepts", color: "from-indigo-500 to-purple-500"  },
    { name: "JWT Authentication",           level: 80, category: "concepts", color: "from-violet-500 to-purple-600" },
    { name: "Object-Oriented Programming",  level: 90, category: "concepts", color: "from-blue-500 to-violet-500"  },
    { name: "Data Structures & Algorithms", level: 78, category: "concepts", color: "from-cyan-500 to-blue-500"    },
    { name: "Generative AI Fundamentals",   level: 72, category: "concepts", color: "from-fuchsia-500 to-pink-500" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 relative overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning the Java full-stack ecosystem — from frontend frameworks to enterprise backend technologies and modern development concepts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out ${
                activeCategory === id
                  ? "bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-300"
          key={activeCategory}
        >
          {filteredSkills.map(({ name, level, color }, index) => (
            <div
              key={name}
              className="group p-5 bg-card border border-border rounded-2xl transition-all duration-300 ease-out hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 cursor-pointer relative overflow-hidden"
              style={{ 
                opacity: 0,
                animation: `skillFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s forwards`
              }}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/3 group-hover:to-accent/3 transition-all duration-300" />
              
              <div className="relative">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {name}
                  </span>
                  <span className="text-sm font-medium text-gradient">{level}%</span>
                </div>
                <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-700 ease-out`}
                    style={{ 
                      width: isVisible ? `${level}%` : '0%',
                      transitionDelay: `${index * 50}ms`,
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-gradient-card border border-border rounded-2xl text-center">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">Always learning:</span> Currently deepening expertise in
            Spring ecosystem, microservices architecture, cloud deployment, and applied Generative AI integrations.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes skillFadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.98); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
