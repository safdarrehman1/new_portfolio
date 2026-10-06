import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "intelligent-hiring",
    slug: "intelligent-hiring-skills-gap-analysis",
    title: "Intelligent Hiring & Skills Gap Analysis",
    subtitle: "AI-Powered Resume Screening, Semantic Gap Analysis & Adaptive Assessments (FYP)",
    category: ["fullstack", "mobile", "ai"],
    featured: true,
    date: "2025 — 2026",
    role: "Full-Stack Developer (Web, Admin, Mobile & Backend)",
    image: "/images/projects/intelligent-hiring.svg",
    liveUrl: "https://intelligent-hiring.demo.dev",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "AI-powered hiring platform with automated resume screening, semantic skill-gap analysis, auto-generated candidate assessments, real-time chat via Socket.io, and role-based onboarding for companies, employees, and freelancers.",
    problem:
      "Traditional recruitment is bottlenecked by manual resume screening, subjective shortlisting, and candidate dissatisfaction due to zero actionable feedback on why they were rejected or what skills they lacked.",
    solution:
      "Engineered an automated end-to-end recruitment platform using Next.js, Node.js, Express, MongoDB, and Expo React Native that parses multi-format resumes, computes semantic cosine-similarity scores against job requisitions, and generates automated skills gap roadmaps with AI recommendations.",
    result:
      "Fully completed full-stack, admin, mobile, and backend implementation with sub-second vector matching, real-time recruiter chat, and automated assessment scoring.",
    keyFeatures: [
      "Automated resume screening & semantic skill-gap extraction",
      "Auto-generated customized candidate assessment tests",
      "Real-time applicant-recruiter messaging powered by Socket.io",
      "Role-based authentication & dashboards for companies, employees & freelancers",
      "Cross-platform candidate mobile application built with Expo React Native",
    ],
    techStack: [
      "Next.js",
      "React.js",
      "React Native (Expo)",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Screening Speedup", value: "75%" },
      { label: "Realtime Engine", value: "Socket.io" },
      { label: "Platform", value: "Web + Mobile" },
    ],
  },
  {
    id: "thinklawn",
    slug: "thinklawn-lawn-care-platform",
    title: "ThinkLawn",
    subtitle: "AI-Powered Lawn Care & Soil-Test Interpretation Platform",
    category: ["fullstack", "admin", "frontend", "ai"],
    featured: true,
    date: "2024 — Present",
    role: "Frontend Lead (Admin Panel & Landing Page) & Backend Contributor",
    image: "/images/projects/thinklawn.svg",
    liveUrl: "https://thinklawn.com/",
    adminUrl: "https://admin.thinklawn.com/",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "An AI-powered lawn care platform featuring an interactive marketing landing page and a comprehensive admin panel for managing users, lawn-analysis data, and automated soil-test interpretations.",
    problem:
      "Homeowners and landscaping operators struggled with complex agricultural soil test results, manual estimation calculations, and fragmented user management.",
    solution:
      "Built the high-converting client landing page and enterprise admin portal using Next.js, React, Tailwind CSS, MUI, and ShadCN UI, backed by Node.js, Express, Sequelize, and MySQL APIs for soil data ingestion.",
    result:
      "Successfully launched into production with automated lawn analysis reporting, real-time user management, and seamless administrative operations.",
    keyFeatures: [
      "Comprehensive admin dashboard for user and lawn-analysis management",
      "AI-driven soil-test interpretation and automated treatment suggestions",
      "Interactive square-footage quote estimator and service tier selector",
      "Responsive UI built with Tailwind CSS, ShadCN UI, and MUI",
      "Relational database schema with Sequelize ORM and MySQL",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "ShadCN UI",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
    metrics: [
      { label: "Admin Portal", value: "admin.thinklawn.com" },
      { label: "Public Site", value: "thinklawn.com" },
      { label: "Architecture", value: "Full Stack" },
    ],
  },
  {
    id: "peela",
    slug: "peela-driver-payment-platform",
    title: "Peela",
    subtitle: "On-Demand Service Platform with Driver & Payment Management",
    category: ["fullstack", "admin", "frontend"],
    featured: true,
    date: "2024 — Present",
    role: "Frontend Lead (Admin Panel & Landing Page) & Backend Contributor",
    image: "/images/projects/peela.svg",
    liveUrl: "https://peela.net/",
    adminUrl: "https://admin-panel.peela.net/",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "A complete service and logistics platform featuring public landing flows, automated driver dispatching, and a secure administration portal for managing driver verification, routes, and payment settlements.",
    problem:
      "Managing live driver allocations, trip reconciliations, driver commissions, and payment disbursements required a centralized high-speed administrative interface.",
    solution:
      "Architected the admin management portal using React.js, Tailwind CSS, and Ant Design, paired with robust Node.js/Express Sequelize backend endpoints for transactional integrity.",
    result:
      "Delivered a production-ready management platform handling daily driver assignments, instant payouts, and clear financial auditing.",
    keyFeatures: [
      "Admin control center for driver onboarding, KYC status, and performance",
      "Payment processing and automated payout reconciliation workflows",
      "Public marketing landing page optimized for mobile conversions",
      "Relational backend services powered by Node.js, Express, and MySQL (Sequelize)",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Ant Design",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
    metrics: [
      { label: "Platform", value: "peela.net" },
      { label: "Admin URL", value: "admin-panel.peela.net" },
      { label: "Database", value: "MySQL / Sequelize" },
    ],
  },
  {
    id: "lets-play",
    slug: "lets-play-sports-admin-platform",
    title: "Let’s Play",
    subtitle: "Sports & Tournament Admin Panel on Supabase Infrastructure",
    category: ["fullstack", "admin"],
    featured: true,
    status: "In development",
    date: "2024 — Present",
    role: "Admin Panel Developer & Backend Contributor",
    image: "/images/projects/letsplay.svg",
    liveUrl: "https://joinletsplay.vercel.app/",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "A modern sports tournament and venue booking platform admin console powered by Supabase, featuring real-time match scheduling, player registration rosters, and live score updates.",
    problem:
      "Tournament organizers needed a nimble, real-time database architecture with instant authentication, granular access permissions, and automated fixture management.",
    solution:
      "Developed the complete administrative dashboard with TypeScript, React, and Tailwind CSS, designing the Supabase PostgreSQL backend, Row-Level Security policies, and auth workflows.",
    result:
      "Admin panel fully completed and deployed on Vercel with realtime data synchronization and sub-10ms response times.",
    keyFeatures: [
      "Complete admin console for tournament fixtures, teams, and venues",
      "Supabase backend with PostgreSQL, automated migrations, and RLS security",
      "Real-time event updates and referee match reporting",
      "Deployed on Vercel with high-speed Edge distribution",
    ],
    techStack: ["Supabase", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Status", value: "In development" },
      { label: "Backend", value: "Supabase Realtime" },
      { label: "Deployment", value: "Vercel Edge" },
    ],
  },
  {
    id: "chedmed",
    slug: "chedmed-ecommerce-store-and-admin",
    title: "Chedmed",
    subtitle: "Modern E-Commerce Storefront & Merchant Admin Panel",
    category: ["frontend", "admin"],
    featured: true,
    date: "2024",
    role: "Frontend Developer (Storefront & Admin, Fully Completed)",
    image: "/images/projects/chedmed.svg",
    liveUrl: "https://chedmed.online/",
    adminUrl: "https://chedmed.online/admin/",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "A complete commercial e-commerce solution comprising an intuitive customer-facing shopping storefront and a full-featured merchant admin panel for catalog and order fulfillment.",
    problem:
      "The client required an ultra-fast, responsive online store with instant search, client-side category filtering, and a separate administrative panel for managing products and tracking orders.",
    solution:
      "Built both the customer frontend and the administrative dashboard using React.js and Tailwind CSS with streamlined state management and high-conversion checkout UI.",
    result:
      "Shipped into active production with seamless catalog browsing, zero-lag cart management, and administrative order handling.",
    keyFeatures: [
      "Customer shopping store with dynamic category filters and search",
      "Interactive cart drawer and streamlined checkout experience",
      "Merchant administrative console for product, stock, and order management",
      "Mobile-first responsive layouts with high-contrast UI",
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "REST APIs", "Zustand"],
    metrics: [
      { label: "Store", value: "chedmed.online" },
      { label: "Admin", value: "chedmed.online/admin" },
      { label: "Status", value: "Production Live" },
    ],
  },
  {
    id: "culyte-site",
    slug: "culyte-official-company-website",
    title: "Culyte Official Website",
    subtitle: "Software Agency Showcase, Portfolio & Client Discovery Portal",
    category: ["frontend"],
    featured: true,
    date: "2024 — Present",
    role: "Developer (Fully Completed)",
    image: "/images/projects/culyte.svg",
    liveUrl: "https://culyte.com/",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "The official web presence of Culyte Software House, highlighting company services, client case studies, engineering team culture, and business consultation intake.",
    problem:
      "The company required a standout, modern web presence to present their engineering capabilities and attract international tech clients.",
    solution:
      "Built and launched the responsive Next.js and TypeScript website with sleek typography, smooth animations, and optimized lead-capture forms.",
    result:
      "Successfully launched live at culyte.com, establishing the company brand and streamlining incoming client inquiries.",
    keyFeatures: [
      "Interactive service catalog with modern design aesthetics",
      "Case study showcase featuring enterprise client deliverables",
      "Career portal and client consultation intake pipelines",
      "High Lighthouse score with optimized Next.js static asset delivery",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Live Domain", value: "culyte.com" },
      { label: "Framework", value: "Next.js + TypeScript" },
      { label: "Status", value: "Active Company Portal" },
    ],
  },
  {
    id: "laka",
    slug: "laka-kids-lunch-meal-plan-platform",
    title: "Laka",
    subtitle: "Kids’ Lunch Meal-Plan Platform & Operations Admin",
    category: ["frontend", "admin"],
    featured: false,
    date: "2024",
    role: "Frontend Developer (Landing Page & Admin Panel, Fully Completed)",
    image: "/images/projects/laka.svg",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "A healthy meal-planning and subscription platform for parents and schools, featuring a colorful customer landing page and a robust administrative portal for meal scheduling and kitchen batching.",
    problem:
      "Parents needed an effortless way to select balanced weekly lunch menus for their children, while catering teams required automated batch summaries and allergy alerts.",
    solution:
      "Engineered the responsive landing page and admin portal using Next.js, React.js, TypeScript, Tailwind CSS, and ShadCN UI.",
    result:
      "Delivered a polished UI with interactive menu builders, allergy checks, and kitchen preparation schedules.",
    keyFeatures: [
      "Interactive weekly meal calendar builder with nutritional metrics",
      "Admin portal for menu creation, school route assignments & allergy warnings",
      "Component library built with ShadCN UI and Tailwind CSS",
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
  },
  {
    id: "mirza-grease-trap",
    slug: "mirza-grease-trap-canadian-client-portal",
    title: "Mirza Grease Trap",
    subtitle: "Canadian Commercial Grease-Trap Service Website",
    category: ["frontend"],
    featured: false,
    date: "2024",
    role: "Developer (Fully Completed)",
    image: "/images/projects/mirzagreasetrap.svg",
    liveUrl: "https://mirzagreasetrap.com/",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "A high-performance commercial website designed and built for a grease-trap and environmental service business operating in Canada.",
    problem:
      "The business needed a high-converting online presence to capture emergency service calls and scheduled maintenance contracts from commercial kitchens and restaurants.",
    solution:
      "Designed and developed a responsive static site with Next.js, Tailwind CSS, and ShadCN UI, focused on fast load speeds and clear call-to-actions.",
    result:
      "Live in production at mirzagreasetrap.com, driving inbound quote requests and commercial service inquiries.",
    keyFeatures: [
      "Instant quote request and emergency maintenance booking workflows",
      "Detailed service compliance guidelines for Canadian municipal regulations",
      "Ultra-fast static page generation with perfect mobile responsiveness",
    ],
    techStack: ["Next.js", "Tailwind CSS", "ShadCN UI", "TypeScript"],
    metrics: [
      { label: "Live Domain", value: "mirzagreasetrap.com" },
      { label: "Client Market", value: "Canada" },
      { label: "Lighthouse", value: "100/100" },
    ],
  },
  {
    id: "fintech-pay",
    slug: "fintech-pay-digital-wallet-crypto-platform",
    title: "FinTech Pay",
    subtitle: "Digital Wallet, Multi-Currency Ledger & Crypto Trading Platform",
    category: ["fullstack", "admin"],
    featured: false,
    date: "2023 — 2024",
    role: "Full-Stack Developer",
    image: "/images/projects/fintekpay.svg",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "A full-stack financial application covering digital wallet balances, crypto trade execution, detailed transaction histories, visual reports, and administrative user controls.",
    problem:
      "Building a unified financial dashboard that combines fiat currency balances, real-time cryptocurrency trade execution, and compliance auditing in one interface.",
    solution:
      "Developed the frontend and admin panel with React.js and Next.js, powered by a Node.js/Express backend with Sequelize ORM and MySQL for transaction logging.",
    result:
      "Delivered a secure, high-throughput digital wallet architecture with sub-second ledger updates and complete balance reconciliation.",
    keyFeatures: [
      "Wallet management with multi-currency balance tracking",
      "Crypto trade simulator with order execution and history logs",
      "Admin portal for user KYC review and transaction dispute management",
      "Relational database design with Sequelize and MySQL",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL",
      "Tailwind CSS",
    ],
  },
  {
    id: "ai-video-extractor",
    slug: "ai-video-highlight-extractor-python",
    title: "AI Video Highlight Extractor",
    subtitle: "Python & Streamlit Tool for Automated Scene Scoring & Highlight Export",
    category: ["fullstack", "ai"],
    featured: false,
    date: "2024 — In Progress",
    role: "Sole Developer (Personal AI Project)",
    image: "/images/projects/video-extractor.svg",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "A Python-based AI tool with a Streamlit interface that analyzes movie and video clips using motion and audio signal processing to detect and score the most impactful scenes, then exports them as separate clips.",
    problem:
      "Manually cutting video highlights from hours of raw footage is time-consuming and labor-intensive for video editors and content creators.",
    solution:
      "Engineered an automated pipeline combining PySceneDetect for cut boundaries, OpenCV for optical flow motion scoring, and Librosa for audio decibel peaks, wrapped in a Streamlit GUI with FFmpeg export rendering.",
    result:
      "Automates highlight reel generation with customizable excitement thresholds and instant MP4 export.",
    keyFeatures: [
      "Automated scene transition and cut detection using PySceneDetect",
      "Optical flow motion analysis with OpenCV to identify action sequences",
      "Audio surge & spectrogram processing with Librosa",
      "Batch clip rendering and export powered by FFmpeg",
      "Interactive Streamlit control panel with video preview playback",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "OpenCV",
      "PySceneDetect",
      "Librosa",
      "FFmpeg",
    ],
    metrics: [
      { label: "Engine", value: "Python + OpenCV" },
      { label: "Audio Tool", value: "Librosa" },
      { label: "Status", value: "In Active Progress" },
    ],
  },
  {
    id: "healthcheck",
    slug: "healthcheck-clinical-questionnaire-flow",
    title: "HealthCheck Questionnaire & Patient Intake",
    subtitle: "Interactive Clinical Assessment & Diagnostic Workflow Flow (Culyte)",
    category: ["frontend", "fullstack"],
    featured: false,
    date: "2024",
    role: "Frontend Developer at Culyte",
    image: "/images/projects/healthcheck.svg",
    liveUrl: "https://healthcheck-demo.vercel.app",
    githubUrl: "https://github.com/safdarrehman1",
    description:
      "Built and maintained the interactive HealthCheck clinical questionnaire flow and patient diagnostic interface as part of client product delivery at Culyte Software House.",
    problem:
      "Patients required an accessible, intuitive digital symptom evaluation flow that could handle conditional branch logic without feeling overwhelming.",
    solution:
      "Designed dynamic multi-step assessment components in React.js and Next.js with Tailwind CSS and ShadCN UI, connected to backend health intake APIs.",
    result:
      "Streamlined patient intake into a smooth, 3-step diagnostic questionnaire with instant summary generation.",
    keyFeatures: [
      "Dynamic branching questionnaire with instant progress calculation",
      "Accessible, HIPAA-conscious patient interface",
      "Reusable component library built with Tailwind CSS and ShadCN UI",
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "REST APIs"],
  },
];
