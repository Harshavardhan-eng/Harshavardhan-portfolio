import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const roles = ["Full Stack Developer", "AI Integration", "Scalable Web Applications"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const resumeUrl = "/Harsha_Vardhan_Resume.pdf?v=4";
  const profileImageUrl = "/profile.jpg";

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20 mesh-bg"
    >
      {/* Background decorations - optimized */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full grid-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">

            <h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              style={{ opacity: 0, animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' }}
            >
              Hi, I'm{" "}
              <span className="text-gradient">Harsha Vardhan</span>
            </h1>
            
            <div 
              className="h-10 mb-6"
              style={{ opacity: 0, animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' }}
            >
              <span className="font-display text-xl md:text-2xl text-primary">
                {displayText}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </div>

            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
              style={{ opacity: 0, animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' }}
            >
              Aspiring Java Full Stack Developer focused on building scalable, high-performance web applications
              using modern development technologies. Continuously expanding expertise in Generative AI and
              software engineering to create reliable, user-centric digital solutions.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 mb-10"
              style={{ opacity: 0, animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 ease-out hover:opacity-90 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/25 shadow-lg"
              >
                Let's Talk
                <ChevronRight size={18} />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Harsha_Vardhan_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-border bg-card text-foreground rounded-xl font-semibold transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 glow-hover"
              >
                <Download size={18} />
                Download Resume (PDF)
              </a>
            </div>

            {/* Social Links */}
            <div 
              className="flex items-center gap-4"
              style={{ opacity: 0, animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards' }}
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "https://github.com/Harshavardhan-eng", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/vardhan2005", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:sharsha19032005@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel={label !== "Email" ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="w-11 h-11 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
          </div>

          {/* Right - Profile Image */}
          <div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end" 
            style={{ opacity: 0, animation: "heroScaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards" }}
          >
            <div className="relative group cursor-pointer">
              {/* Animated gradient ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-conic animate-spin-slow opacity-60 blur-sm" />
              <div className="absolute -inset-2 rounded-full bg-gradient-conic animate-spin-slow opacity-30" />
              
              {/* Outer glow pulse */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-25 animate-pulse-slow" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-background p-1 transition-all duration-500 ease-out group-hover:scale-[1.03]">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img
                    src={profileImageUrl}
                    alt="Harsha Vardhan Sreerangapuram"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ objectPosition: "center 10%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ease-out hover:opacity-70"
          style={{ opacity: 0, animation: "heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards" }}
        >
          <span className="text-muted-foreground text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
          </div>
        </button>

        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroScaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.03); }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .bg-gradient-conic {
            background: conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(280, 100%, 70%), hsl(var(--primary)));
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;
