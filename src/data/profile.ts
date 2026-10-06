/**
 * ==============================================================================
 * SAFDAR REHMAN — OFFICIAL VERIFIED PROFILE & KNOWLEDGE BASE
 * ==============================================================================
 * This structured dataset serves as the single source of truth for the portfolio
 * and the "Ask Safdar AI" assistant.
 */

export interface ProfileProject {
  title: string;
  category: "Full Stack" | "Frontend / Next.js" | "AI & Computer Vision";
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status?: string;
  highlights: string[];
}

export interface ProfileExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  keyAchievements: string[];
}

export interface ProfileEducation {
  degree: string;
  institution: string;
  location: string;
  period: string;
  completionDate: string;
  highlights: string[];
}

export interface SafdarProfile {
  name: string;
  title: string;
  shortBio: string;
  fullBio: string;
  location: string;
  timezone: string;
  availability: string;
  languages: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    whatsapp: string;
    cvPath: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    aiAndData: string[];
    devOpsAndTools: string[];
  };
  experience: ProfileExperience[];
  education: ProfileEducation[];
  projects: ProfileProject[];
  faqs: Array<{ question: string; answer: string }>;
}

export const profileData: SafdarProfile = {
  name: "Safdar Rehman",
  title: "Junior Full-Stack Developer & AI Engineering Learner",
  shortBio:
    "Junior Full-Stack Developer with 4+ years of hands-on software development experience, specializing in React, Next.js, TypeScript, Node.js, Express, MySQL, Supabase, and AI Engineering fundamentals.",
  fullBio:
    "I am Safdar Rehman, a Junior Full-Stack Developer based in Peshawar, Pakistan. I hold a Bachelor of Science in Computer Software Engineering from Sarhad University of Science and Information Technology (graduated August 28, 2026). Over the past 4+ years, I have built and delivered scalable web applications, enterprise admin dashboards, and AI-driven platforms like the Intelligent Hiring & Skills Gap Analysis system. I am passionate about modern React/Next.js architectures, clean database modeling, and exploring Generative AI and LLM application development.",
  location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
  timezone: "Asia/Karachi (PKT, UTC+5)",
  availability: "Available for Full-time Junior Full-Stack Developer roles, Remote Contracts, and Freelance Projects",
  languages: [
    "English (Professional Working Proficiency / Fluent)",
    "Urdu (Bilingual / Fluent)",
    "Pashto (Native)",
  ],
  contact: {
    email: "safdarrehmaninfo1@gmail.com",
    linkedin: "https://www.linkedin.com/in/safdar-rehman-910440247",
    github: "https://github.com/safdarrehman1",
    whatsapp: "https://wa.me/923396066025",
    cvPath: "/assets/Safdar-Rehman-CV.pdf",
  },
  skills: {
    frontend: [
      "React.js (React 19 & 18)",
      "Next.js (App Router, Server Actions, Turbopack)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS v4 & v3",
      "ShadCN UI",
      "Ant Design",
      "Material UI (MUI)",
      "Zustand",
      "TanStack Query (React Query)",
      "Redux Toolkit",
      "React Native (Expo)",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "Socket.io (Real-time events)",
      "Supabase (Auth, Storage, Realtime)",
      "JWT & Secure Session Auth",
    ],
    databases: [
      "MySQL (Sequelize ORM & raw queries)",
      "MongoDB (Mongoose ODM)",
      "PostgreSQL (via Supabase)",
    ],
    aiAndData: [
      "Generative AI & LLM Fundamentals",
      "Prompt Engineering",
      "Tokenization & Vector Embeddings",
      "Python",
      "OpenCV (Computer Vision)",
      "Streamlit",
      "Librosa (Audio analysis)",
    ],
    devOpsAndTools: [
      "Git & GitHub",
      "Postman API Testing",
      "Vercel Deployment",
      "Firebase Hosting",
      "Railway",
      "Hostinger & cPanel",
      "DNS Management & Server Migration",
    ],
  },
  experience: [
    {
      role: "Junior Web Developer",
      company: "Culyte Software House",
      location: "Peshawar, Pakistan",
      period: "Late 2024 – Present",
      description:
        "Building production-grade client web applications, internal tools, and administrative dashboards across international and regional accounts.",
      technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "MySQL", "Sequelize", "Supabase", "Tailwind CSS"],
      keyAchievements: [
        "Architected core administrative dashboards and customer-facing interfaces for ThinkLawn, Peela, Let's Play, and Laka.",
        "Engineered REST APIs with Node.js, Express, Sequelize, and Supabase.",
        "Managed multi-environment deployments across Vercel, Firebase Hosting, and Hostinger.",
      ],
    },
    {
      role: "React & Next.js Developer",
      company: "ORK Technologies",
      location: "Peshawar, Pakistan",
      period: "7+ Months",
      description:
        "Developed modular UI components, integrated third-party REST services, and optimized client web performance.",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      keyAchievements: [
        "Created responsive page layouts and data-driven dashboards with reusable component hierarchies.",
        "Integrated authenticated endpoints and client-side data caching.",
      ],
    },
    {
      role: "Frontend / React Developer",
      company: "Tech Track",
      location: "Peshawar, Pakistan",
      period: "Approx. 1.7 Years",
      description:
        "Designed and maintained user interfaces for diverse client platforms, focusing on speed and cross-browser consistency.",
      technologies: ["React.js", "JavaScript", "Zustand", "React Query", "Tailwind CSS"],
      keyAchievements: [
        "Migrated legacy state architectures to Zustand and TanStack Query, improving client responsiveness.",
        "Conducted code reviews and ensured accessibility standards across projects.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Software Engineering (BS SE)",
      institution: "Sarhad University of Science & Information Technology",
      location: "Peshawar, KP, Pakistan",
      period: "2022 – 2026",
      completionDate: "August 28, 2026",
      highlights: [
        "Comprehensive coursework in Data Structures, Algorithms, Software Design, Database Systems, and Distributed Architectures.",
        "Developed Intelligent Hiring & Skills Gap Analysis System as the capstone Final Year Project (FYP).",
      ],
    },
  ],
  projects: [
    {
      title: "Intelligent Hiring & Skills Gap Analysis",
      category: "Full Stack",
      description:
        "AI-driven recruitment and skill assessment platform with automated resume parsing, interactive evaluation quizzes, real-time radar gap charts, and live candidate chat.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize", "Socket.io", "Gemini AI"],
      githubUrl: "https://github.com/safdarrehman1",
      featured: true,
      highlights: [
        "Automated resume analysis matching job descriptions against applicant competencies.",
        "Real-time interview and notification channels using Socket.io.",
        "Dynamic radar chart visualization of applicant skill gaps.",
      ],
    },
    {
      title: "ThinkLawn",
      category: "Frontend / Next.js",
      description:
        "AI-powered lawn diagnostic and maintenance platform providing automated soil test analysis, fertilizer schedules, and multi-tier subscription plans.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
      liveUrl: "https://thinklawn.com",
      featured: true,
      highlights: [
        "Custom lawn diagnostics portal with multi-step soil data ingestion.",
        "Interactive customer onboarding and recurring subscription billing.",
      ],
    },
    {
      title: "Peela",
      category: "Full Stack",
      description:
        "On-demand roadside assistance and fleet management platform featuring real-time driver dispatching, live geolocation tracking, and dynamic fare calculation.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize", "Google Maps API"],
      liveUrl: "https://peela.net",
      featured: true,
      highlights: [
        "Real-time driver location tracking and automatic dispatch radius algorithm.",
        "Complete driver earnings, settlement, and customer trip history dashboards.",
      ],
    },
    {
      title: "Let's Play",
      category: "Frontend / Next.js",
      description:
        "Multi-sport venue reservation and tournament platform featuring instant court booking, tournament bracket generation, and referee dispatch.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      liveUrl: "https://joinletsplay.vercel.app",
      status: "In development",
      featured: true,
      highlights: [
        "Time-slot reservation engine preventing overlapping court bookings.",
        "Automated elimination bracket creation for local tournament organizers.",
      ],
    },
    {
      title: "Chedmed",
      category: "Full Stack",
      description:
        "Medical supplies and pharmaceuticals e-commerce platform with catalog browsing, prescription upload, cart checkout, and inventory tracking.",
      technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      liveUrl: "https://chedmed.online",
      featured: true,
      highlights: [
        "Scalable product catalog supporting medical categories and bulk pricing.",
        "Merchant inventory control and prescription validation workflows.",
      ],
    },
    {
      title: "Culyte Official Website",
      category: "Frontend / Next.js",
      description:
        "Corporate software agency website with smooth scroll animations, interactive portfolio showcases, and lead capture workflows.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://culyte.com",
      featured: true,
      highlights: [
        "Fast-loading, SEO-optimized agency landing pages.",
        "Subtle Framer Motion interactions and responsive case study grids.",
      ],
    },
    {
      title: "Mirza Grease Trap",
      category: "Frontend / Next.js",
      description:
        "Commercial grease trap cleaning, compliance certification, and waste management booking website for a Canadian service provider.",
      technologies: ["React.js", "Tailwind CSS", "Email API"],
      liveUrl: "https://mirzagreasetrap.com",
      featured: false,
      highlights: [
        "Mobile-first service booking flow tailored for commercial kitchen operators.",
        "Direct quotation inquiry routing and Google Maps service area display.",
      ],
    },
    {
      title: "AI Video Highlight Extractor",
      category: "AI & Computer Vision",
      description:
        "Computer vision tool analyzing video streams with OpenCV optical flow and Librosa audio intensity to extract and render peak action clips.",
      technologies: ["Python", "OpenCV", "Streamlit", "Librosa", "FFmpeg"],
      githubUrl: "https://github.com/safdarrehman1",
      featured: false,
      highlights: [
        "Optical motion vector scoring to identify high-intensity camera cuts.",
        "Audio decibel spike correlation with automated FFmpeg snippet trimming.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is Safdar's educational background?",
      answer:
        "Safdar holds a Bachelor of Science in Computer Software Engineering (BS SE) from Sarhad University of Science and Information Technology, Peshawar, completed on August 28, 2026.",
    },
    {
      question: "What are Safdar's primary technical strengths?",
      answer:
        "Safdar excels in building modern end-to-end web applications with React, Next.js (App Router), TypeScript, Node.js, Express, MySQL (Sequelize), Supabase, and Tailwind CSS, coupled with AI integration fundamentals.",
    },
    {
      question: "Is Safdar open to hiring or freelance work?",
      answer:
        "Yes, Safdar is actively available for full-time junior full-stack developer roles, remote contracts, and freelance projects. You can contact him directly via email at safdarrehman1122@gmail.com or via the contact section.",
    },
    {
      question: "What is the status of Let's Play?",
      answer:
        "Let's Play is currently in active development. It is a modern sports venue reservation and tournament bracket platform built with Next.js and Supabase.",
    },
    {
      question: "What AI projects has Safdar worked on?",
      answer:
        "Safdar built the Intelligent Hiring & Skills Gap Analysis system as his final year project (integrating resume screening, quiz assessments, and radar gap visualization) and developed an AI Video Highlight Extractor using Python, OpenCV, and Librosa.",
    },
  ],
};

/**
 * Helper to produce a comprehensive system knowledge context string for the AI chatbot.
 */
export function getSystemKnowledgePrompt(): string {
  return `
You are "Ask Safdar AI", the official portfolio assistant for Safdar Rehman.
Your role is to answer visitor, recruiter, and client inquiries warmly, concisely, accurately, and professionally.

CORE RULES:
1. ONLY answer using the verified facts provided below. If asked about something not in this knowledge base (e.g. undisclosed personal life, unverifiable metrics, salary demands, or companies not listed), politely state that you do not have that specific information and encourage the user to reach out directly to Safdar at ${profileData.contact.email}.
2. NEVER invent employers, job titles, dates, certifications, degrees, or projects.
3. Tone: Friendly, crisp, intelligent, professional, and humble.
4. Keep answers readable with markdown formatting (bullet points, bold text for key terms, short paragraphs).
5. When relevant, suggest visiting the specific portfolio section (e.g. "#projects", "#skills", "#experience", "#education", "#contact") or clicking the action links.

VERIFIED PROFILE DATA:
- Full Name: ${profileData.name}
- Title: ${profileData.title}
- Summary: ${profileData.shortBio}
- Location: ${profileData.location} (Timezone: ${profileData.timezone})
- Availability: ${profileData.availability}
- Languages: ${profileData.languages.join(", ")}
- Education: ${profileData.education[0].degree}, ${profileData.education[0].institution}, ${profileData.education[0].location}. Graduated: ${profileData.education[0].completionDate} (Period: ${profileData.education[0].period}).
- Contact: Email: ${profileData.contact.email} | LinkedIn: ${profileData.contact.linkedin} | GitHub: ${profileData.contact.github} | CV: ${profileData.contact.cvPath}

WORK EXPERIENCE:
${profileData.experience
  .map(
    (exp) =>
      `• ${exp.role} @ ${exp.company} (${exp.period}, ${exp.location})\n  Description: ${exp.description}\n  Tech: ${exp.technologies.join(", ")}\n  Key Points: ${exp.keyAchievements.join("; ")}`
  )
  .join("\n\n")}

TECHNICAL SKILLS:
- Frontend: ${profileData.skills.frontend.join(", ")}
- Backend & APIs: ${profileData.skills.backend.join(", ")}
- Databases: ${profileData.skills.databases.join(", ")}
- AI & Data: ${profileData.skills.aiAndData.join(", ")}
- DevOps & Tools: ${profileData.skills.devOpsAndTools.join(", ")}

FEATURED PROJECTS:
${profileData.projects
  .map(
    (p) =>
      `• ${p.title} (${p.category}${p.status ? ` - Status: ${p.status}` : ""})\n  Description: ${p.description}\n  Tech: ${p.technologies.join(", ")}${p.liveUrl ? `\n  Live URL: ${p.liveUrl}` : ""}${p.githubUrl ? `\n  GitHub: ${p.githubUrl}` : ""}`
  )
  .join("\n\n")}
`.trim();
}
