import { Briefcase, Code, Award, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Full Stack Developer Intern",
      type: "TAP Academy • Bengaluru, Karnataka",
      period: "Feb 2026 – Aug 2026",
      description: "Completed a hands-on Full Stack Development internship at TAP Academy, Bengaluru, gaining practical experience in Java-based web development, frontend technologies, databases, application architecture, and software development workflows. Applied classroom concepts to real project development and strengthened practical problem-solving and development skills through continuous implementation.",
      responsibilities: [
        "Applied Java full-stack development concepts to build and enhance web applications using Java, JSP, Servlets, JDBC, MySQL, HTML5, CSS3, and JavaScript.",
        "Gained hands-on experience with application architecture, database integration, CRUD operations, backend development, frontend integration, debugging, and end-to-end feature implementation.",
        "Major Project: CraveKart — Developed CraveKart, a multi-role food delivery web application, as a major milestone project during the internship, implementing customer, restaurant, and delivery partner workflows with Java, JSP, Servlets, JDBC, and MySQL.",
        "Strengthened practical software development skills through Git/GitHub version control, structured application development, debugging, testing, and iterative feature implementation.",
        "Transformed academic knowledge into practical development experience through continuous hands-on implementation, problem-solving, code debugging, and collaborative learning in a professional environment.",
      ],
      technologies: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: Briefcase,
      title: "JPMorgan Chase & Co. Job Simulation",
      type: "Software Engineering (Forage)",
      period: "2025",
      description: "Virtual software engineering experience tackling practical enterprise software development tasks.",
      responsibilities: [
        "Analyzed existing open-source codebases and resolved technical bugs",
        "Utilized Git workflows and version control for feature implementation",
        "Practiced software debugging, testing, and system maintenance standards",
      ],
      technologies: ["Software Engineering", "Debugging", "Python", "Git", "Code Review"],
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Code,
      title: "Infosys Springboard Virtual Internship",
      type: "Java Technology Track",
      period: "2024",
      description: "Hands-on virtual internship building full-stack Java web applications using modern enterprise technologies.",
      responsibilities: [
        "Architected Study Group Finder platform using Spring Boot REST APIs and React frontend",
        "Configured Spring Security with JWT for stateless, role-based authorization",
        "Implemented real-time bi-directional messaging with WebSocket and STOMP",
        "Designed relational database schemas and mapped entities using Hibernate/JPA and MySQL",
      ],
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "WebSocket/STOMP", "React.js", "MySQL", "Hibernate/JPA"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Award,
      title: "Blackbucks Engineers / APSCHE Virtual Internship",
      type: "Full Stack Web Development Track",
      period: "2024",
      description: "Structured industry virtual internship focused on full-stack web development principles and project implementation.",
      responsibilities: [
        "Developed responsive web interfaces using modern HTML5, CSS3, and JavaScript",
        "Learned server-side web application architectures and HTTP request handling",
        "Applied database integration patterns and structured API design",
        "Collaborated on project milestones following standard version control practices",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "SQL", "Git", "REST Basics"],
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-muted/30">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth and hands-on experience in technology.
          </p>
        </div>

        {/* Modern Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary rounded-full blur-sm opacity-50" />
          </div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map(({ icon: Icon, title, type, period, description, responsibilities, technologies, color }, index) => (
              <div
                key={title}
                className="timeline-item relative pl-16 md:pl-0"
                style={{ 
                  opacity: 0,
                  animation: `${index % 2 === 0 ? 'slideInFromRight' : 'slideInFromLeft'} 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s forwards`
                }}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 z-10">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-primary rounded-full blur-md opacity-50 animate-pulse-node" />
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${color} border-4 border-background shadow-lg`} />
                  </div>
                </div>

                {/* Year badge - visible on larger screens */}
                <div className={`hidden md:block absolute top-6 ${index % 2 === 0 ? 'right-[52%]' : 'left-[52%]'}`}>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full border border-primary/20">
                    {period}
                  </span>
                </div>

                {/* Card */}
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                <div className="group relative">
                    {/* Card glow on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl blur opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                    
                    <div className="relative p-6 bg-card border border-border rounded-2xl transition-all duration-400 ease-out group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {title}
                          </h3>
                          <p className="text-sm text-primary/80 font-medium">{type}</p>
                        </div>
                      </div>

                      {/* Period - mobile only */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 md:hidden">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{period}</span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-5">
                        {responsibilities.map((item, i) => (
                          <li 
                            key={item} 
                            className="text-sm text-muted-foreground flex items-start gap-3 group/item"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2 group-hover/item:scale-150 transition-transform" />
                            <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech chips with hover animation */}
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, i) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-105 hover:shadow-md hover:shadow-primary/10 cursor-default"
                            style={{ animationDelay: `${i * 0.05}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-node {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        .animate-pulse-node {
          animation: pulse-node 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
