import { useState } from "react";
import { Code2, Server, Layout, Database, ShieldCheck, Wrench, BarChart2 } from "lucide-react";

interface SkillGroup {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    color: "from-orange-500 to-red-500",
    skills: ["Java", "JavaScript", "SQL", "Python"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    color: "from-green-600 to-emerald-600",
    skills: ["Spring Boot", "Spring Security", "Servlets", "JSP", "JDBC", "Hibernate/JPA", "Node.js", "Express.js"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    color: "from-cyan-500 to-blue-500",
    skills: ["React.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    color: "from-blue-500 to-indigo-500",
    skills: ["MySQL", "MongoDB"],
  },
  {
    id: "apis-security",
    title: "APIs & Security",
    icon: ShieldCheck,
    color: "from-violet-500 to-purple-600",
    skills: ["REST APIs", "JWT", "WebSocket/STOMP", "API Integration", "Razorpay Payment"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-amber-500 to-orange-500",
    skills: ["Git", "GitHub", "Vite", "VS Code", "Postman", "Netlify", "Apache Tomcat"],
  },
  {
    id: "data-design",
    title: "Data & Design",
    icon: BarChart2,
    color: "from-pink-500 to-rose-500",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Power BI", "Tableau", "Figma"],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend" },
    { id: "databases", label: "Databases" },
    { id: "apis-security", label: "APIs & Security" },
    { id: "tools", label: "Tools" },
  ];

  const filteredGroups = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter(g => g.id === activeCategory || (activeCategory === "backend" && (g.id === "languages" || g.id === "backend")));

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills & Technical Stack
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical hands-on experience across full-stack web development, enterprise Java architecture, relational databases, REST APIs, and modern developer tooling.
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

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="group p-6 bg-card border border-border rounded-2xl transition-all duration-300 ease-out hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden"
                style={{ 
                  opacity: 0,
                  animation: `skillFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s forwards`
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/3 group-hover:to-accent/3 transition-all duration-300" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium border border-border/50 group-hover:border-primary/30 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-gradient-card border border-border rounded-2xl text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-semibold">Technical Identity:</span> Focused on Java, Spring Boot, React, REST API development, and MySQL relational database architecture with practical experience building multi-role and real-time applications.
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
