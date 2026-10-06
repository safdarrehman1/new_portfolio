export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'admin' | 'mobile' | 'ai';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ('fullstack' | 'frontend' | 'admin' | 'mobile' | 'ai')[];
  description: string;
  featured?: boolean;
  problem: string;
  solution: string;
  result: string;
  keyFeatures: string[];
  techStack: string[];
  image: string;
  gallery?: string[];
  liveUrl?: string;
  adminUrl?: string;
  githubUrl?: string;
  isNda?: boolean;
  date: string;
  role: string;
  status?: string;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Academic' | 'Freelance';
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Core' | 'Proficient' | 'Familiar';
    iconKey: string;
    highlight?: boolean;
  }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  completionDate?: string;
  description: string;
  highlights: string[];
  fypTitle?: string;
  fypDescription?: string;
  languages?: { name: string; proficiency: string }[];
  certifications?: {
    title: string;
    issuer: string;
    date: string;
    url?: string;
    credentialId?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  linkedIn?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: string;
  primary?: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  currentRole: string;
  company: string;
  openToWork: boolean;
  availabilityText: string;
  cvPath: string;
  githubUsername: string;
  githubStats: {
    contributions: string;
    longestStreak: string;
    repositories: string;
  };
  funFact: string;
  quote: {
    text: string;
    author: string;
  };
  stats: {
    yearsExperience: string;
    projectsDelivered: string;
    technologiesMastered: string;
    githubContributions: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  projectType: 'Web App' | 'Landing Page' | 'Admin Panel' | 'Mobile App' | 'Full Stack Solution' | 'Other';
  budget?: string;
  message: string;
  honeypot?: string;
}
