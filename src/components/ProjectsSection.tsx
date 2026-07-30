import { ExternalLink, Github, CheckCircle2, Layers, Activity, Music, Users, Plane, Code, ShoppingCart } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "WanderAI – Premium AI Travel Planning Platform",
      subtitle: "AI-Powered Travel Tech Web Application",
      description: "An intelligent SaaS-style travel platform leveraging Groq LLM and prompt engineering to generate structured 3-day itineraries in seconds. Integrates real-time weather and destination APIs for dynamic trip planning with budget estimation across 15+ curated global destinations.",
      highlights: [
        "AI itinerary generation in seconds",
        "Real-time API integration",
        "Prompt-engineered LLM pipeline",
        "SaaS-style architecture"
      ],
      tags: ["React", "Vite", "Tailwind CSS", "Groq API", "OpenWeather API", "Axios", "Netlify"],
      icon: Plane,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      color: "from-violet-500 to-fuchsia-500",
      featured: true,
    },
    {
      title: "Study Group Finder & Collaboration Platform",
      subtitle: "Full Stack Java Web Application",
      description: "A secure, full-stack collaboration platform built with Spring Boot and React, featuring JWT-based authentication, role-based access control, and WebSocket-powered real-time messaging. RESTful API architecture enables seamless course enrollment, peer discovery, and study session scheduling.",
      highlights: [
        "Secure JWT authentication",
        "Role-based access control",
        "WebSocket real-time messaging",
        "RESTful API architecture"
      ],
      tags: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "WebSocket", "REST APIs"],
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      title: "Task Management Application",
      subtitle: "Final Year Full Stack Project",
      description: "A full-stack task management application built with Angular, Node.js, Express.js, and MongoDB. Features REST APIs for task CRUD, JWT-based authentication with middleware for secure access, and structured frontend–backend communication validated via Postman.",
      highlights: [
        "Angular + Node/Express/MongoDB",
        "JWT auth & middleware",
        "REST APIs for task CRUD",
        "Postman-validated endpoints"
      ],
      tags: ["Angular", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      icon: Layers,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Healthcare Management System",
      subtitle: "Enterprise Solution",
      description: "A robust healthcare platform designed to streamline patient records, appointments, and medical data management. Built with secure database architecture following healthcare compliance standards.",
      highlights: [
        "Patient record management",
        "Admin dashboard",
        "Secure data access",
        "Database-driven architecture"
      ],
      tags: ["Java", "MySQL", "Healthcare", "Security"],
      icon: Activity,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "SoundScape",
      subtitle: "UI/UX Project",
      description: "An innovative emotion-aware music player that adapts playlists based on user mood. Complete design system including user research, wireframes, and high-fidelity prototypes in Figma.",
      highlights: [
        "Emotion-driven playlists",
        "Privacy-first design",
        "Complete design system",
        "User research backed"
      ],
      tags: ["Figma", "UI/UX", "Prototyping", "Research"],
      icon: Music,
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
      color: "from-pink-500 to-rose-500",
    },

    {
      title: "CraveKart – Multi-Role Food Delivery Web Application",
      subtitle: "End-to-End Java Full Stack Web Application",
      description: "A multi-role food delivery web application supporting Customer, Restaurant Partner, Delivery Partner, and Admin roles, built end-to-end solo using core Java, Servlets, and JSP with a layered backend architecture.",
      highlights: [
        "Secure multi-role auth & session management",
        "Layered Servlet → Service → DAO → Model architecture",
        "AJAX-based cart with real-time price calculation",
        "Razorpay integration with HMAC-SHA256 verification",
        "Cash-on-Delivery alternative payment flow",
        "JDBC & MySQL for menus, carts, orders, coupons"
      ],
      tags: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "JavaScript (AJAX)", "Apache Tomcat", "Razorpay"],
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
      color: "from-orange-500 to-red-500",
      github: "https://github.com/Harshavardhan-eng",
      liveDemo: "https://github.com/Harshavardhan-eng",
    },

    {
      title: "Developer Portfolio Platform",
      subtitle: "Interactive React-Based Showcase Application",
      description: "A modern, responsive portfolio platform designed to showcase full-stack projects, AI integrations, certifications, and technical expertise with smooth, performance-optimized UI animations. Built using component-based architecture with structured layout and interaction-focused design principles.",
      highlights: [
        "Scroll-triggered animations",
        "Mobile-first responsive layout",
        "Resume & social integration",
        "Performance-optimized interactions"
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite", "Lucide Icons"],
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work that <span className="text-gradient">matters</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills in development, design, and problem-solving.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map(({ title, subtitle, description, highlights, tags, icon: Icon, image, color, featured }, index) => (
            <div
              key={title}
              className={`group relative grid lg:grid-cols-2 gap-8 items-center p-6 bg-card border rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                featured ? "border-primary/30 ring-1 ring-primary/10 hover:border-primary/50 hover:shadow-primary/10" : "border-border hover:border-primary/30"
              } ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              style={{ 
                opacity: 0,
                animation: `fadeSlideUp 0.6s ease-out ${index * 0.15}s forwards`
              }}
            >
              {/* Featured badge */}
              {featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold tracking-wide uppercase">
                  ✦ Featured Project
                </div>
              )}
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-5 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div>
                  <span className={`text-sm font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {subtitle}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mt-1 group-hover:text-gradient transition-all">
                    {title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>

                {/* Highlights */}
                <ul className="grid grid-cols-2 gap-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-secondary text-sm text-secondary-foreground rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a 
                    href="https://github.com/Harshavardhan-eng" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
