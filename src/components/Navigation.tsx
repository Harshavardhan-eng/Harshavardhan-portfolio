import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        scrolled ? "glass-strong py-3 shadow-lg shadow-background/5" : "py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="font-display text-xl font-bold text-gradient"
        >
          HV
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out ${
                activeSection === item.toLowerCase()
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === item.toLowerCase() && (
                <span className="absolute inset-0 bg-primary/10 rounded-lg" style={{ animation: 'scaleIn 0.2s ease-out' }} />
              )}
              <span className="relative">{item}</span>
            </button>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-border p-6"
          style={{ animation: 'slideDown 0.3s ease-out' }}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-left text-base font-medium py-3 px-4 rounded-lg transition-all duration-300 ease-out ${
                  activeSection === item.toLowerCase() 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:bg-muted/50"
                }`}
                style={{ 
                  opacity: 0,
                  animation: `slideUp 0.3s ease-out ${index * 0.05}s forwards`
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
