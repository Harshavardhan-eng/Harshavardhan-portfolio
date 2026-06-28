import { useState, useEffect, useCallback, useRef } from "react";
import {
  X,
  Award,
  ChevronLeft,
  ChevronRight,
  Code2,
  Shield,
  Coffee,
  Globe,
  ZoomIn,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   DATA  –  correct single-extension filenames
───────────────────────────────────────────────────────────── */
interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  skills: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  accentFrom: string;
  accentTo: string;
  badgeColor: string;
}

const CERTS: Certificate[] = [
  {
    id: "micro1",
    title: "Full Stack Java Developer",
    issuer: "Micro1",
    description:
      "Credential recognising proficiency in Full Stack Java development covering enterprise-grade application architecture, REST API design, and modern web technologies.",
    skills: ["Java", "Spring Boot", "REST APIs", "Full Stack"],
    image: "/certificates/micro1-full-stack.jpg",
    icon: Code2,
    accentFrom: "from-violet-500",
    accentTo: "to-purple-600",
    badgeColor: "violet",
  },
  {
    id: "jpmorgan",
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. (Forage)",
    description:
      "Completed a virtual software engineering experience involving real-world tasks such as code analysis, debugging, and enterprise-level development workflow practices.",
    skills: ["Software Engineering", "Debugging", "Problem Solving"],
    image: "/certificates/jpmorgan-job-simulation.jpg",
    icon: Shield,
    accentFrom: "from-blue-500",
    accentTo: "to-indigo-600",
    badgeColor: "blue",
  },
  {
    id: "infosys",
    title: "Study Group Finder & Collaboration Platform Internship",
    issuer: "Infosys Springboard",
    description:
      "Internship certification for building a full-stack collaboration platform featuring JWT authentication, WebSocket real-time messaging, and Spring Boot REST APIs.",
    skills: ["Java", "Spring Boot", "React.js", "WebSocket", "JWT"],
    image: "/certificates/infosys-springboard.jpg",
    icon: Coffee,
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-600",
    badgeColor: "cyan",
  },
  {
    id: "blackbucks",
    title: "Full Stack Development Internship",
    issuer: "Blackbucks Engineers / APSCHE",
    description:
      "Hands-on internship focused on frontend and backend development with real-time project exposure and practical implementation of full stack development concepts.",
    skills: ["HTML", "CSS", "JavaScript", "Backend", "Web Development"],
    image: "/certificates/blackbucks-fullstack.png",
    icon: Globe,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-600",
    badgeColor: "emerald",
  },
];

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */
function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [locked]);
}

/* ─────────────────────────────────────────────────────────────
   CERTIFICATE CARD
───────────────────────────────────────────────────────────── */
interface CardProps {
  cert: Certificate;
  index: number;
  onOpen: (cert: Certificate) => void;
}

const CertCard = ({ cert, index, onOpen }: CardProps) => {
  const [thumbError, setThumbError] = useState(false);
  const Icon = cert.icon;

  return (
    <div
      className="cert-card group relative cursor-pointer rounded-2xl focus-within:outline-none"
      style={{
        opacity: 0,
        animation: `certFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s forwards`,
      }}
      onClick={() => onOpen(cert)}
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.title} certificate`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(cert); } }}
    >
      {/* Glow ring on hover */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-25" />

      {/* Card surface */}
      <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/15">

        {/* Shimmer layer */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/4 group-hover:to-accent/4 group-hover:opacity-100" />

        {/* ── Top row: icon + thumbnail ── */}
        <div className="relative flex items-start justify-between gap-4">
          {/* Icon badge */}
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cert.accentFrom} ${cert.accentTo} shadow-lg transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>

          {/* Thumbnail */}
          <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-border/60 bg-muted transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
            {!thumbError ? (
              <>
                <img
                  src={cert.image}
                  alt={`${cert.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  onError={() => setThumbError(true)}
                />
                {/* Overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                  <ZoomIn className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 drop-shadow-lg" />
                </div>
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Award className="h-6 w-6 text-muted-foreground/40" />
              </div>
            )}
          </div>
        </div>

        {/* ── Text content ── */}
        <div className="relative flex-1">
          <h3 className="mb-1 line-clamp-2 font-display text-base font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
            {cert.title}
          </h3>
          <p className="mb-3 text-sm font-semibold text-primary/80">{cert.issuer}</p>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {cert.description}
          </p>
        </div>

        {/* ── Skills ── */}
        <div className="relative flex flex-wrap gap-1.5">
          {cert.skills.map((skill, i) => (
            <span
              key={skill}
              className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-all duration-300 group-hover:bg-primary/15 group-hover:text-primary"
              style={{
                opacity: 0,
                animation: `skillPop 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.12 + i * 0.04}s forwards`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="relative flex items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5">
            <ZoomIn className="h-4 w-4" />
            View Certificate
          </span>
          <div className="ml-auto h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   MODAL
───────────────────────────────────────────────────────────── */
interface ModalProps {
  certs: Certificate[];
  activeIndex: number;
  visible: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const CertModal = ({ certs, activeIndex, visible, onClose, onPrev, onNext }: ModalProps) => {
  const cert = certs[activeIndex];
  const [imgError, setImgError] = useState<Record<string, boolean>>({});
  const [imgLoaded, setImgLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const Icon = cert.icon;

  // Reset loaded state on cert change
  useEffect(() => { setImgLoaded(false); }, [activeIndex]);

  // Focus trap to close button on open
  useEffect(() => {
    if (visible) closeRef.current?.focus();
  }, [visible]);

  // Keyboard: ESC + arrow navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const hasError = imgError[cert.id];

  return (
    /* ── Backdrop ── */
    <div
      className="cert-modal-backdrop fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-10"
      style={{ animation: `backdropIn 0.35s ease forwards` }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} certificate viewer`}
    >
      {/* Blurred glass backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      {/* ── Modal Panel ── */}
      <div
        className="cert-modal-panel relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        style={{
          background: "linear-gradient(145deg, rgba(20,18,40,0.97) 0%, rgba(10,9,28,0.98) 100%)",
          backdropFilter: "blur(40px)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
          animation: `modalPanelIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow lines */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-40 w-60 rounded-full bg-accent/10 blur-2xl" />

        {/* ── Header ── */}
        <div className="relative flex flex-shrink-0 items-center justify-between border-b border-white/8 px-6 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cert.accentFrom} ${cert.accentTo} shadow-lg`}
            >
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate font-display text-sm font-bold text-white/95 md:text-base">
                {cert.title}
              </h3>
              <p className="text-xs font-medium text-primary/80">{cert.issuer}</p>
            </div>
          </div>

          {/* Counter + Close */}
          <div className="ml-4 flex flex-shrink-0 items-center gap-3">
            <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 sm:block">
              {activeIndex + 1} / {certs.length}
            </span>
            <button
              ref={closeRef}
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              aria-label="Close certificate viewer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Certificate Image ── */}
        <div className="relative flex flex-1 items-center justify-center overflow-y-auto px-6 py-8"
          style={{ maxHeight: "calc(90vh - 180px)" }}
        >
          {!hasError ? (
            <div className="relative w-full">
              {/* Loading skeleton */}
              {!imgLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/5">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
                  <p className="text-xs text-white/40">Loading certificate…</p>
                </div>
              )}
              <img
                key={cert.id}
                src={cert.image}
                alt={`${cert.title} certificate issued by ${cert.issuer}`}
                loading="eager"
                decoding="async"
                className="mx-auto block w-full max-w-[88%] rounded-2xl object-contain transition-opacity duration-500"
                style={{
                  opacity: imgLoaded ? 1 : 0,
                  boxShadow: "0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.2)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                }}
                onLoad={() => setImgLoaded(true)}
                onError={() => {
                  setImgError((prev) => ({ ...prev, [cert.id]: true }));
                  setImgLoaded(true);
                }}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Award className="h-10 w-10 text-primary/60" />
              </div>
              <div>
                <p className="mb-1 font-semibold text-white/70">Image not available</p>
                <p className="text-sm text-white/40">
                  Expected:{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-primary/80">
                    {cert.image}
                  </code>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer: Skills + Navigation ── */}
        <div className="relative flex flex-shrink-0 flex-col gap-4 border-t border-white/8 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary/90"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={activeIndex === 0}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary disabled:pointer-events-none disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>
            <button
              onClick={onNext}
              disabled={activeIndex === certs.length - 1}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary disabled:pointer-events-none disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next certificate"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalPanelIn {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes backdropOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes modalPanelOut {
          from { opacity: 1; transform: scale(1)    translateY(0);    }
          to   { opacity: 0; transform: scale(0.94) translateY(16px); }
        }
        .cert-modal-backdrop.closing {
          animation: backdropOut 0.3s ease forwards !important;
        }
        .cert-modal-backdrop.closing .cert-modal-panel {
          animation: modalPanelOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        }
      `}</style>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────────── */
const CertificationSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useBodyScrollLock(isOpen);

  const openModal = useCallback((cert: Certificate) => {
    const idx = CERTS.findIndex((c) => c.id === cert.id);
    setActiveIndex(idx);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    // Add closing class for exit animation
    if (backdropRef.current) {
      backdropRef.current.classList.add("closing");
    }
    animTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveIndex(null);
    }, 300);
  }, []);

  const prevCert = useCallback(() => {
    setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const nextCert = useCallback(() => {
    setActiveIndex((i) => (i !== null && i < CERTS.length - 1 ? i + 1 : i));
  }, []);

  useEffect(() => {
    return () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* ═══════════════════════════ SECTION ═══════════════════════════ */}
      <section id="certifications" className="relative overflow-hidden px-6 py-24">
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">

          {/* ── Section header ── */}
          <div className="mb-16 text-center">
            <span
              className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              style={{ opacity: 0, animation: "certFadeIn 0.6s cubic-bezier(0.16,1,0.3,1) 0s forwards" }}
            >
              Credentials
            </span>
            <h2
              className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
              style={{ opacity: 0, animation: "certFadeIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.08s forwards" }}
            >
              Professional{" "}
              <span className="text-gradient">Certifications</span>
            </h2>
            <p
              className="mx-auto max-w-2xl text-muted-foreground"
              style={{ opacity: 0, animation: "certFadeIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.16s forwards" }}
            >
              Industry-recognised credentials validating expertise across software engineering,
              full-stack development, and enterprise technologies. Click any card to view
              the certificate.
            </p>
          </div>

          {/* ── 2×2 Grid ── */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CERTS.map((cert, index) => (
              <CertCard
                key={cert.id}
                cert={cert}
                index={index}
                onOpen={openModal}
              />
            ))}
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes certFadeIn {
            from { opacity: 0; transform: translateY(24px) scale(0.98); }
            to   { opacity: 1; transform: translateY(0)    scale(1);    }
          }
          @keyframes skillPop {
            from { opacity: 0; transform: scale(0.82) translateY(4px); }
            to   { opacity: 1; transform: scale(1)    translateY(0);   }
          }
          .cert-card { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1); }
          .cert-card:focus-visible { outline: 2px solid hsl(var(--primary)); outline-offset: 3px; }
        `}</style>
      </section>

      {/* ═══════════════════════════ MODAL ═══════════════════════════ */}
      {isOpen && activeIndex !== null && (
        <div ref={backdropRef}>
          <CertModal
            certs={CERTS}
            activeIndex={activeIndex}
            visible={isOpen}
            onClose={closeModal}
            onPrev={prevCert}
            onNext={nextCert}
          />
        </div>
      )}
    </>
  );
};

export default CertificationSection;
