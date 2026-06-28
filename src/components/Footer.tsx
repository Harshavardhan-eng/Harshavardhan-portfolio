import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const technologies = ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite", "Lucide Icons"];

  return (
    <footer className="py-16 px-6 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div 
          className="flex flex-col items-center gap-8 text-center"
          style={{ opacity: 0, animation: "fadeIn 0.6s ease-out forwards" }}
        >
          {/* Copyright */}
          <p className="text-sm text-foreground font-medium">
            © Harsha Vardhan. All rights reserved.
          </p>

          {/* Disclaimer */}
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            This portfolio website is created for professional presentation and personal branding.
            All content, designs, and projects showcased here belong to the owner unless stated otherwise.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <span className="w-10 h-10 rounded-xl border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

          {/* Divider */}
          <div className="w-24 h-px bg-border" />

          {/* Technologies */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Built with modern web technologies:</p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
              {technologies.map((tech, index) => (
                <span key={tech} className="text-xs text-foreground/80 font-medium">
                  {tech}
                  {index < technologies.length - 1 && (
                    <span className="text-primary ml-3">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;
