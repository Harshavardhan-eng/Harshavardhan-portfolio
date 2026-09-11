import { ExternalLink, Github, CheckCircle2, ShoppingCart, Users, Plane, Layers, ShoppingBag, Music } from "lucide-react";

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  color: string;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const projects: ProjectItem[] = [
    {
      title: "CraveKart – Multi-Role Food Delivery Web Application",
      subtitle: "Java Full Stack",
      description: "Multi-role food delivery web application built with Java Servlets, JSP, JDBC and MySQL, supporting Customer, Restaurant Partner and Delivery Partner workflows with layered backend architecture, cart management, order processing and payment integration.",
      highlights: [
        "Customer, Restaurant Partner & Delivery Partner workflows",
        "Layered backend architecture (Servlet → Service → DAO → Model)",
        "AJAX cart management with real-time calculations & MySQL",
        "Razorpay payment integration with HMAC verification & COD"
      ],
      tags: ["Java", "JSP", "Servlets (Jakarta EE)", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript", "AJAX", "Razorpay"],
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
      color: "from-orange-500 to-red-500",
      github: "https://github.com/Harshavardhan-eng/CraveKart",
      featured: true,
    },
    {
      title: "Study Group Finder & Collaboration Platform",
      subtitle: "Java Full Stack / Spring Boot",
      description: "Full-stack study collaboration platform built with Spring Boot and React, featuring JWT-based authentication, role-based security, study group management and real-time communication using WebSocket/STOMP.",
      highlights: [
        "JWT authentication & Spring Security role-based access",
        "Study group creation, enrollment & RESTful API management",
        "Real-time peer communication using WebSocket & STOMP",
        "MySQL relational database persistence via Hibernate/JPA"
      ],
      tags: ["Java", "Spring Boot", "Spring Security", "JWT", "WebSocket/STOMP", "React", "MySQL", "Hibernate/JPA"],
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      color: "from-indigo-500 to-cyan-500",
      github: "https://github.com/ChandraDeepika/Study-Group-Finder-Collaborative-Platform",
    },
    {
      title: "Wanderly – AI Travel Planner",
      subtitle: "React / AI / API Integration",
      description: "AI-powered travel planning application built with React and Netlify serverless functions, combining destination discovery, live weather data, location search, AI-generated itineraries and a destination-aware travel chatbot.",
      highlights: [
        "Destination discovery with search, region/budget filtering & geolocation",
        "Netlify serverless functions architecture to protect API credentials",
        "AI itinerary generation & travel chatbot using Google Gemini API",
        "Live weather integration & persistent favorites with LocalStorage"
      ],
      tags: ["React 19", "Vite", "JavaScript", "React Router", "Netlify Functions", "Google Gemini", "OpenWeather", "Unsplash", "LocalStorage"],
      icon: Plane,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      color: "from-violet-500 to-fuchsia-500",
      github: "https://github.com/Harshavardhan-eng/Wanderly-AI-Travel-Planner",
      liveDemo: "https://wanderly-travel-planner.netlify.app/",
    },
    {
      title: "Task Management Application",
      subtitle: "Full Stack Web Application",
      description: "Full-stack task management application built with Angular, Node.js, Express.js, and MongoDB, featuring REST APIs for task CRUD operations, input validation, and structured frontend-backend state handling.",
      highlights: [
        "Angular dynamic single-page frontend interface",
        "Node.js & Express.js REST API backend endpoints",
        "Complete CRUD operations for task tracking and filtering",
        "Document-oriented MongoDB database integration"
      ],
      tags: ["Angular", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      icon: Layers,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      color: "from-blue-500 to-purple-500",
      github: "https://github.com/Harshavardhan3535/Task-Management-Application-Project",
    },
    {
      title: "TechStore – React E-Commerce Web Application",
      subtitle: "React / Frontend Development",
      description: "Responsive e-commerce web application built with React and Vite, featuring product search, brand filtering, price sorting, wishlist management and a persistent shopping cart using LocalStorage.",
      highlights: [
        "Instant product search, brand filtering, and price sorting",
        "Persistent shopping cart & quantity management via LocalStorage",
        "Wishlist management with wishlist-to-cart functionality",
        "Reusable React components with dark/light theme support"
      ],
      tags: ["React 19", "JavaScript", "Vite", "CSS3", "LocalStorage"],
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "from-teal-500 to-emerald-500",
      github: "https://github.com/Harshavardhan-eng/TechStore-Application",
      liveDemo: "https://ecommerce-react-applicationweb.netlify.app/",
    },
    {
      title: "SoundScape – Emotion-Aware Music Player UI",
      subtitle: "UI/UX Design",
      description: "Innovative emotion-aware music player interface design featuring user research, interactive wireframing, component design systems, and high-fidelity Figma prototyping.",
      highlights: [
        "Emotion-driven user experience & adaptive music interaction concept",
        "High-fidelity interactive prototype & design system in Figma",
        "User research, wireframing, typography, and spacing principles"
      ],
      tags: ["Figma", "UI/UX Design", "User Experience", "Prototyping", "Emotion-Aware Music"],
      icon: Music,
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
      color: "from-pink-500 to-rose-500",
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
            Full Stack & <span className="text-gradient">Engineering Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of web applications demonstrating end-to-end software development, Java/Spring Boot backends, React interfaces, relational databases, and serverless API integrations.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map(({ title, subtitle, description, highlights, tags, icon: Icon, image, color, featured, github, liveDemo }, index) => (
            <div
              key={title}
              className={`group relative grid lg:grid-cols-2 gap-8 items-center p-6 bg-card border rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                featured ? "border-primary/30 ring-1 ring-primary/10 hover:border-primary/50 hover:shadow-primary/10" : "border-border hover:border-primary/30"
              } ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              style={{ 
                opacity: 0,
                animation: `fadeSlideUp 0.6s ease-out ${index * 0.1}s forwards`
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
                  <span className={`text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    0{index + 1} — {subtitle}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mt-1 group-hover:text-gradient transition-all">
                    {title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {description}
                </p>

                {/* Bullet Highlights */}
                <ul className="grid grid-cols-1 gap-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-xs text-secondary-foreground rounded-lg font-medium border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {github && (
                    <a 
                      href={github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground hover:text-primary hover:border-primary/50 rounded-xl text-sm font-medium transition-all"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {liveDemo && (
                    <a 
                      href={liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-xl text-sm font-medium transition-all hover:opacity-90 shadow-md"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
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

