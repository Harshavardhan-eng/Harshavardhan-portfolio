import { Server, Shield, Cpu, Radio, Database, Layout, Rocket } from "lucide-react";

const highlights = [
  { label: "REST API Design & Integration", icon: Server },
  { label: "JWT Authentication & Role-Based Access", icon: Shield },
  { label: "AI Prompt Engineering", icon: Cpu },
  { label: "Real-Time Communication (WebSockets)", icon: Radio },
  { label: "Database Schema Design & Relational Modeling", icon: Database },
  { label: "Responsive UI Systems & Design Architecture", icon: Layout },
  { label: "Deployment & Production Hosting", icon: Rocket },
];

const TechnicalHighlightsSection = () => {
  return (
    <section id="technical-highlights" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Core Competencies
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical <span className="text-gradient">Highlights</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover-lift hover-glow"
              style={{
                opacity: 0,
                animation: `fadeSlideUp 0.5s ease-out ${index * 0.08}s forwards`,
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
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

export default TechnicalHighlightsSection;
