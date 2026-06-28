# Portfolio Project — Complete Documentation

A premium, recruiter-friendly developer portfolio for **Harsha Vardhan Sreerangapuram**, built with React + Vite + TypeScript + Tailwind CSS + shadcn/ui. This document explains every part of the project so you can confidently make modifications.

---

## 1. Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + Vite 5 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3 (semantic HSL tokens) |
| UI Library | shadcn/ui (Radix primitives) |
| Icons | lucide-react |
| Routing | react-router-dom |
| Theme | Dark / Light toggle (next-themes pattern) |
| Hosting | Lovable (preview + published) |

No backend is connected. All content is static inside React components.

---

## 2. Folder Structure

```
public/
  Harshavardhan_Resume.pdf      ← your live resume (replace this file to update)
  placeholder.svg, robots.txt

src/
  pages/
    Index.tsx                   ← main page: assembles all sections
    NotFound.tsx                ← 404 page
  components/
    Navigation.tsx              ← top nav + mobile menu + theme toggle
    HeroSection.tsx             ← hero with typing animation + resume button
    AboutSection.tsx            ← about / bio cards
    SkillsSection.tsx           ← skill categories with progress bars
    TechnicalHighlightsSection.tsx ← key technical strengths
    ProjectsSection.tsx         ← all featured projects
    ExperienceSection.tsx       ← experience / education timeline
    CertificationSection.tsx    ← certifications grid
    ContactSection.tsx          ← contact form + social links
    Footer.tsx                  ← footer
    ThemeToggle.tsx             ← dark/light mode switch
    NavLink.tsx, ProjectCard.tsx, WorkSection.tsx  (helpers)
    ui/                         ← shadcn/ui primitives (buttons, dialogs, etc.)
  index.css                     ← design tokens (HSL), gradients, mesh-bg, animations
  App.tsx, main.tsx
tailwind.config.ts              ← tailwind theme extension
```

---

## 3. Page Composition

Order of sections rendered in `src/pages/Index.tsx`:

1. `<Navigation />`
2. `<HeroSection />` — `#home`
3. `<AboutSection />` — `#about`
4. `<SkillsSection />` — `#skills`
5. `<TechnicalHighlightsSection />`
6. `<ProjectsSection />` — `#projects`
7. `<ExperienceSection />` — `#experience`
8. `<CertificationSection />`
9. `<ContactSection />` — `#contact`
10. `<Footer />`

To reorder, add, or remove a section, simply edit `Index.tsx`.

---

## 4. Section-by-Section Guide

### 4.1 HeroSection.tsx
- **Name / heading**: `"Hi, I'm Harsha Vardhan"` — edit the `<h1>`.
- **Typing animation roles**: `const roles = ["Full Stack Developer", "AI Integration", "Scalable Web Applications"]`.
- **Bio paragraph**: `<p>` under the typing line.
- **Resume button**:
  - `resumeUrl = "/Harshavardhan_Resume.pdf?v=2"` (cache-busted)
  - Opens in new tab + `download` attribute.
  - To swap the resume: replace `public/Harshavardhan_Resume.pdf` and bump `?v=2` → `?v=3`.
- **Profile image**: `profileImageUrl` (GitHub-hosted). Always `object-top` per project memory.
- **Social links**: GitHub, LinkedIn, Email — update `href` values in the map array.
- **CTA**: `"Let's Talk"` button scrolls to `#contact`.

### 4.2 AboutSection.tsx
Short biography + stats/highlight cards. Edit the text and the array of highlight cards.

### 4.3 SkillsSection.tsx
Skill categories (Frontend, Backend, Database, Tools…). Each category has a list of `{ name, level }` items rendered as progress bars. Add/remove items inside the `skillCategories` array.

### 4.4 TechnicalHighlightsSection.tsx
Compact strip of key strengths (e.g., AI integration, REST APIs). Edit the highlight array inside the file.

### 4.5 ProjectsSection.tsx — most-edited section
Array `projects` controls every card. Each project object:
```ts
{
  title, subtitle, description,
  highlights: string[],     // shown as ✓ bullets
  tags: string[],           // pill chips
  icon: LucideIcon,
  image: string,            // unsplash url or local import
  color: "from-x to-y",     // gradient accent
  featured?: boolean        // adds badge + ring
}
```
Current projects (in order):
1. **WanderAI** — featured (AI travel planner)
2. Study Group Finder & Collaboration Platform
3. Task Management Application (Angular + Node + Express + Mongo)
4. Healthcare Management System
5. SoundScape (UI/UX)
6. House Price Prediction (ML)
7. Developer Portfolio Platform

Layout alternates left/right via `index % 2 === 1`. Featured card has a glow ring and "✦ Featured Project" badge.

### 4.6 ExperienceSection.tsx
Timeline of work / internships / education. Edit the experiences array.

### 4.7 CertificationSection.tsx
Three current certifications:
- Java Foundation — Infosys
- Full Stack Development Internship — BLACKBUCKS (APSCHE)
- Software Engineering Job Simulation — JP Morgan Chase

⚠️ Per project memory: **never display years/dates** on certifications.

### 4.8 ContactSection.tsx
- Contact info cards (email, phone, location).
- Social links.
- Resume link (`resumeUrl = "/Harshavardhan_Resume.pdf?v=2"`).
- Contact form (currently UI-only; no backend wired). To make it functional, connect Lovable Cloud or a form service.

### 4.9 Footer.tsx
Branding + quick links. Per project memory: **no copyright year** is shown.

### 4.10 Navigation.tsx
Sticky top nav with smooth-scroll anchors, mobile hamburger menu, and theme toggle.

---

## 5. Design System

Defined in `src/index.css` and `tailwind.config.ts`. All colors are HSL semantic tokens — **never hardcode colors in components**.

Key tokens:
- `--background`, `--foreground`
- `--primary`, `--primary-foreground` (blue)
- `--accent` (purple)
- `--card`, `--border`, `--muted`, `--secondary`
- `--gradient-primary`, `--gradient-conic`
- `--shadow-elegant`

Utility classes used across sections:
- `text-gradient` — blue→purple text gradient
- `bg-gradient-primary` — main brand gradient
- `mesh-bg` — hero background mesh
- `grid-pattern` — subtle grid overlay
- `glow-hover` — soft glow on hover
- Animations: `heroFadeUp`, `heroScaleIn`, `fadeSlideUp`, `animate-spin-slow`, `animate-pulse-slow`

Both light and dark themes are supported and switchable via `ThemeToggle`.

---

## 6. How to Make Common Changes

| You want to… | Edit this |
|---|---|
| Change name / title | `HeroSection.tsx` `<h1>` |
| Change typing roles | `HeroSection.tsx` `roles` array |
| Replace resume PDF | Replace `public/Harshavardhan_Resume.pdf` and bump `?v=N` in `HeroSection.tsx` + `ContactSection.tsx` |
| Update profile picture | `profileImageUrl` in `HeroSection.tsx` |
| Add a project | Add object to `projects` array in `ProjectsSection.tsx` |
| Mark project as featured | Add `featured: true` to that project |
| Change social links | `HeroSection.tsx` + `ContactSection.tsx` + `Footer.tsx` |
| Add/remove skills | `skillCategories` in `SkillsSection.tsx` |
| Update certifications | `CertificationSection.tsx` (no dates) |
| Update experience | `ExperienceSection.tsx` |
| Change theme colors | `src/index.css` HSL tokens |
| Add/remove a whole section | `src/pages/Index.tsx` |

---

## 7. Animation Rules (project memory)

- Use only performance-friendly props: `transform`, `scale`, `opacity`.
- No floating badges/status popups in hero or nav.
- Smooth fade-in on scroll for project cards.
- Profile image: always `object-top`.
- Generous spacing (`py-32` on major sections).
- Premium blue–purple theme, dark/light mode supported.

---

## 8. Running & Deploying

```bash
npm install
npm run dev      # local dev
npm run build    # production build
```

Deployment is handled by Lovable. Click **Publish** in the top-right to push changes to:
- Preview: `https://id-preview--85963dbb-5d7c-49e9-ae05-ff46e0f4451d.lovable.app`
- Published: `https://unique-me-canvas.lovable.app`

---

## 9. Known Conventions / Do Not Break

- ❌ No years/dates on certifications.
- ❌ No copyright year in footer.
- ❌ No raw color classes (`text-white`, `bg-black`) — always semantic tokens.
- ❌ No floating popups in hero/nav.
- ✅ Profile image uses `object-top`.
- ✅ Resume URL always cache-busted with `?v=N`.
- ✅ Featured projects get the `featured: true` flag (don't manually style).

---

Anything you want to tweak — content, order, colors, or add a brand-new section — point me to it and I'll handle it.
