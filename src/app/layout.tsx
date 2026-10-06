import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackgroundBeams } from "@/components/shared/BackgroundBeams";
import { AiChatbot } from "@/components/chat/AiChatbot";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/socials";

const fontHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://safdarrehman.dev";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070913" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  keywords: [
    "Safdar Rehman",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Specialist",
    "Node.js Engineer",
    "Frontend Developer Peshawar",
    "Peshawar Pakistan Web Developer",
    "MERN Stack Developer",
    "MySQL Sequelize Developer",
    "Intelligent Hiring AI",
    "Tailwind CSS Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    creator: "@safdarrehman1",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD Person Schema for Rich Search Snippets
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Software Engineer | Full Stack Developer",
  url: siteUrl,
  sameAs: socialLinks.map((s) => s.url),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Peshawar",
    addressRegion: "Khyber Pakhtunkhwa",
    addressCountry: "PK",
  },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.company,
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Sarhad University of Science & IT",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Sequelize",
    "Tailwind CSS",
    "Artificial Intelligence Integration",
    "System Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${fontSans.variable} ${fontHeading.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className="font-sans min-h-screen bg-background text-foreground antialiased selection:bg-primary/25 selection:text-primary relative"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LenisProvider>
            <ScrollProgress />
            <BackgroundBeams />

            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>

            <AiChatbot />
            <Toaster position="bottom-right" richColors />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
