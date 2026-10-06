"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/socials";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <FaGithub className="size-4" />;
      case "linkedin":
        return <FaLinkedin className="size-4" />;
      case "whatsapp":
        return <FaWhatsapp className="size-4" />;
      case "instagram":
        return <FaInstagram className="size-4" />;
      case "facebook":
        return <FaFacebook className="size-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative border-t border-border/80 bg-background/60 backdrop-blur-xl overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-2xl bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal direction="up" distance={20} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
            {/* Col 1: Bio and Brand */}
            <div className="md:col-span-5 flex flex-col items-start space-y-4">
              <Link href="#hero" className="flex items-center gap-3 group">
                <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-teal-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background">
                    <span className="font-extrabold text-sm bg-gradient-to-br from-indigo-400 to-teal-400 bg-clip-text text-transparent">
                      SR
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-foreground">
                    {siteConfig.name}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {siteConfig.title}
                  </span>
                </div>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {siteConfig.tagline} Focused on crafting high-conversion web applications, robust backends, and pixel-perfect user experiences.
              </p>

              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center h-9 w-9 rounded-xl border border-border/80 bg-card hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all text-muted-foreground shadow-sm"
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3 flex flex-col space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary/40" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quote & Location */}
            <div className="md:col-span-4 flex flex-col space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-2">
                <Sparkles className="size-3.5 text-amber-400" />
                Philosophy
              </h4>

              <blockquote className="rounded-2xl border border-border/70 bg-card/60 p-4 text-xs italic text-muted-foreground leading-relaxed">
                &ldquo;{siteConfig.quote.text}&rdquo;
                <span className="mt-2 block font-medium not-italic text-primary">
                  — {siteConfig.quote.author}
                </span>
              </blockquote>

              <div className="text-xs text-muted-foreground space-y-1">
                <p>
                  📍 <span className="text-foreground">{siteConfig.location}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-500 font-medium">
                    {siteConfig.availabilityText}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Safdar Rehman. All rights reserved.</p>

            <p className="flex items-center gap-1.5">
              Designed &amp; Built with <Heart className="size-3 text-red-500 fill-red-500 inline" /> using Next.js &amp; Tailwind
            </p>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full gap-1.5 text-xs h-8 px-3 hover:border-primary"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3" />
            </Button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
