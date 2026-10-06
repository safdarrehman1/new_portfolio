# 🚀 Safdar Rehman — Senior Full Stack & Frontend Engineer Portfolio

> **"Building scalable web apps with modern UIs and robust backends."**  
> Modern, animated, high-conversion personal portfolio website for **Safdar Rehman** (Software Engineer & Full Stack Developer). Built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Lenis smooth scrolling.

---

## 🌟 Highlights & Features

- ⚡ **Next.js 16 + React 19 + TypeScript**: Strict mode, App Router architecture with SSG (Static Site Generation) for instant loading and 100/100 Core Web Vitals.
- 🎨 **Design System & Glassmorphism**: Premium dark theme by default with indigo → blue → teal gradient accents, aurora background glows, and polished light mode support via `next-themes`.
- 🕹️ **Micro-Interactions & Animations**:
  - **Initials Monogram Preloader**: Sleek startup brand animation (<1.2s, skippable, session-cached).
  - **Lenis Smooth Scrolling**: Inertial smooth scroll that automatically respects `prefers-reduced-motion`.
  - **Interactive Custom Cursor**: Fluid spring physics cursor follower on desktop.
  - **Scroll Progress Bar**: Pinned gradient header bar tracking scroll depth.
  - **Magnetic Buttons & 3D Tilt / Spotlight Cards**: Interactive hover physics and lighting reflections.
  - **Infinite Marquee Ticker**: Smooth scrolling technology logos with hover-to-pause.
  - **Animated Stat Counters**: Scroll-triggered numbers with custom easing and decimal formatting.
- 📱 **Filterable Projects & Detailed Case Studies**:
  - Category filters: *All, Full Stack, Frontend, Admin Panels, Mobile*.
  - Interactive project detail modal with **Problem → Solution → Business Impact** metrics breakdown.
  - Dedicated `/projects/[slug]` static case study routes for sharing direct URLs.
- 📬 **Direct-to-Email Contact API**:
  - Validated with **Zod** on client and server.
  - Dual delivery engine: **Resend API** (primary) + **Nodemailer / Gmail SMTP** (fallback) + local simulation mode.
  - Automated dual email dispatch: instant alert to Safdar with visitor reply-to + professional auto-confirmation sent to the client.
  - Multi-layer spam protection: honeypot field, in-memory IP rate limiter (5 requests/hour), and server sanitization.
  - **Canvas Confetti** celebration and **Sonner** toast feedback upon submission.
- 🔍 **SEO & Search Dominance**:
  - Dynamic OpenGraph image generation via `opengraph-image.tsx`.
  - JSON-LD Structured Data for `Person` schema.
  - Auto-generated `sitemap.xml` and `robots.txt`.
- 🧩 **Zero-Component Content Editing**: 100% of data lives in `/src/data/` for instantaneous customization.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS with CSS Variables & Design Tokens |
| **UI Components** | Radix UI Primitives, shadcn/ui pattern, Sonner |
| **Animations** | Framer Motion, Lenis Smooth Scroll, Canvas Confetti |
| **Icons** | Lucide React, React Icons (FontAwesome 6, Simple Icons) |
| **Forms & Validation** | React Hook Form, Zod Resolver |
| **Email Transport** | Resend, Nodemailer (Gmail SMTP App Password) |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── cv/
│   │   └── Safdar-Rehman-CV.pdf         # Resume download file
│   ├── images/
│   │   ├── profile.svg                  # High-fidelity portrait illustration
│   │   ├── projects/                    # Vector mockups for all 10 featured projects
│   │   └── testimonials/                # Avatar illustrations
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts         # Secure rate-limited contact API route
│   │   ├── projects/[slug]/page.tsx     # Dynamic SSG project case study pages
│   │   ├── globals.css                  # CSS tokens, glassmorphism, marquee keyframes
│   │   ├── layout.tsx                   # Font setup, ThemeProvider, Lenis, Schema.org
│   │   ├── not-found.tsx                # Custom 404 page
│   │   ├── opengraph-image.tsx          # Dynamic social preview card generator
│   │   ├── page.tsx                     # Main single-page portfolio layout
│   │   ├── robots.ts                    # Search engine robot rules
│   │   └── sitemap.ts                   # XML sitemap generator
│   ├── components/
│   │   ├── layout/                      # Navbar, Footer, ThemeToggle, Preloader, Cursor, ScrollProgress
│   │   ├── projects/                    # ProjectCard, ProjectFilter, ProjectModal
│   │   ├── sections/                    # Hero, About, Skills, Experience, Projects, Education, Testimonials, Contact
│   │   ├── shared/                      # AnimatedCounter, SectionHeading, TechBadge, MagneticButton, SpotlightCard
│   │   └── ui/                          # shadcn UI components (Button, Dialog, Sheet, Tabs, Input, Textarea, etc.)
│   ├── data/
│   │   ├── education.ts                 # Academic degrees, FYP info, certifications
│   │   ├── experience.ts                # Career timeline, roles, achievements
│   │   ├── projects.ts                  # All featured and client project data
│   │   ├── site-config.ts               # Core bio, titles, rotating roles, stats, quotes
│   │   ├── skills.ts                    # Categorized tech stacks and marquee icons
│   │   ├── socials.ts                   # GitHub, LinkedIn, WhatsApp, Instagram links
│   │   └── testimonials.ts              # Colleague and client recommendations
│   ├── hooks/                           # useScrollSpy, useMediaQuery, useMounted
│   ├── lib/                             # email.ts, validations.ts, rate-limit.ts, animations.ts, utils.ts
│   └── types/                           # Complete TypeScript interfaces
├── .env.example
├── .env.local
├── components.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚡ Quick Start & Local Development

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/safdarrehman1/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create `.env.local` based on `.env.example`:

```bash
cp .env.example .env.local
```

Fill in your variables in `.env.local`:

```env
# 1. Contact Form Destination
CONTACT_TO_EMAIL=safdarrehman.dev@gmail.com

# 2. Public Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=safdarrehman.dev@gmail.com

# 3. Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# OPTION A: Resend API Key (Recommended)
RESEND_API_KEY=re_your_api_key_here

# OPTION B: Gmail SMTP
# GMAIL_USER=yourgmail@gmail.com
# GMAIL_APP_PASSWORD=your_16_char_app_password
```

> **Note:** If no email keys are set, the contact form operates in **Simulation Mode**, logging the message details to the server console and returning a successful status to test the UI and confetti without sending live emails.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Production Build & Type Check

```bash
# Verify TypeScript without emitting files
npx tsc --noEmit

# Run ESLint
npm run lint

# Build optimized production bundle
npm run build
```

---

## 📧 Email Configuration Guide

### Option 1: Using Resend (Recommended for Vercel)
1. Sign up for free at [Resend.com](https://resend.com).
2. Create an API Key in the Resend dashboard.
3. Add `RESEND_API_KEY=re_xxxxxxxx` and `CONTACT_TO_EMAIL=your-email@gmail.com` to your `.env.local` and Vercel Environment Variables.

### Option 2: Using Gmail SMTP (Nodemailer)
1. Go to your [Google Account Security Settings](https://myaccount.google.com/security).
2. Enable **2-Step Verification**.
3. Go to [App Passwords](https://myaccount.google.com/apppasswords).
4. Create an App Name (e.g. `Portfolio Contact Form`) and generate a 16-character password.
5. Add `GMAIL_USER=your-email@gmail.com` and `GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx` to `.env.local`.

---

## ✏️ How to Edit Content in `/src/data/`

You don't need to touch JSX/TSX layout components to update your information:

- **Bio, Tagline, Stats, Fun Fact, Quotes**: Edit `src/data/site-config.ts`
- **Projects, Case Studies, Problem/Solution, Live URLs**: Edit `src/data/projects.ts`
- **Work History, Roles, Achievements**: Edit `src/data/experience.ts`
- **Technical Skills & Categories**: Edit `src/data/skills.ts`
- **Education, FYP Details, Certifications**: Edit `src/data/education.ts`
- **Social Profiles & WhatsApp Link**: Edit `src/data/socials.ts`
- **Client & Colleague Quotes**: Edit `src/data/testimonials.ts`

---

## 🚀 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio for Safdar Rehman"
   git push origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/new).
3. Under **Environment Variables**, add:
   - `CONTACT_TO_EMAIL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://safdarrehman.dev`)
   - `RESEND_API_KEY` (or `GMAIL_USER` and `GMAIL_APP_PASSWORD`)
4. Click **Deploy**. Vercel will build and serve all static and dynamic routes automatically.

---

## 📋 Customization Checklist & Placeholders to Replace

Before going live with client traffic, you may customize the following items:

1. [ ] **Resume PDF**: Replace `public/cv/Safdar-Rehman-CV.pdf` with your actual PDF resume.
2. [ ] **WhatsApp Number**: Update `public/cv/` or `src/data/socials.ts` with your actual WhatsApp phone number (currently `+92 300 0000000`).
3. [ ] **Profile Portrait**: (Optional) Replace `public/images/profile.svg` with your personal headshot photo (e.g. `public/images/profile.jpg`) and update the `src` attribute if desired.
4. [ ] **Degree Title Confirmation**: Verify degree title in `src/data/education.ts` (currently BS Software Engineering, Sarhad University, batch 2022–2026).
5. [ ] **Client Project URLs**: Update any live URLs or GitHub links in `src/data/projects.ts` with your latest live deployments.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
Created with 💙 for **Safdar Rehman**.
