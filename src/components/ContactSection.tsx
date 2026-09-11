import { Mail, MapPin, Send, Linkedin, Github, Phone, ArrowUpRight, FileText, Instagram, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const resumeUrl = "/Harsha_Vardhan_Resume.pdf";
  const contactEmail = "sharsha19032005@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Launch native mail client with draft
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client ✉️",
      description: "Your message has been formatted into a mail draft in your default email client.",
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    toast({
      title: "Email Copied! 📋",
      description: `${contactEmail} copied to clipboard.`,
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: contactEmail, href: `mailto:${contactEmail}` },
    { icon: Phone, label: "Phone", value: "+91 6302627155", href: "tel:+916302627155" },
    { icon: MapPin, label: "Location", value: "Kadapa, Andhra Pradesh, India", href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Harshavardhan-eng" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vardhan2005" },
    { icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7.5H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zM5 12a3.5 3.5 0 0 1 3.5-3.5H12V15.5H8.5A3.5 3.5 0 0 1 5 12zM5 18.5A3.5 3.5 0 0 1 8.5 15H12v.5a3.5 3.5 0 1 1-7 0zM12 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
      </svg>
    ), label: "Figma", href: "https://www.figma.com" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/urs.bunnyboyy_19?igsh=aHdkOXdjeDhvNGtk" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Available for Java Full Stack Developer opportunities, engineering discussions, and project collaborations. Feel free to reach out via email or connect directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Let's connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Whether you have an open Java Full Stack position, project inquiry, or collaboration idea — send an email directly or use the contact form.
              </p>
              
              {/* Copy email CTA */}
              <button
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-between px-4 py-3 bg-secondary border border-border rounded-xl text-sm font-medium text-foreground hover:border-primary/50 transition-all mb-4"
              >
                <span className="truncate">{contactEmail}</span>
                {copied ? <Check size={16} className="text-green-500 flex-shrink-0" /> : <Copy size={16} className="text-muted-foreground flex-shrink-0" />}
              </button>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Link */}
            <div className="pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Harsha_Vardhan_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary/10 border border-primary/20 text-primary rounded-xl font-medium hover:bg-primary/20 transition-all group"
              >
                <FileText size={18} />
                Download Resume (PDF)
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover-glow transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 bg-card border border-border rounded-3xl shadow-lg">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Send an Email Message</h3>
              <p className="text-xs text-muted-foreground mb-6">Submitting this form prepares a pre-filled email in your mail app.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground text-sm"
                    placeholder="Tell me about your role, project, or opportunity..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg hover:shadow-xl group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Compose Email Draft
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
