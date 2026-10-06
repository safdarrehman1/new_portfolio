"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    100
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-3 focus:outline-none min-h-[44px]"
        >
          <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background">
              <span className="font-extrabold text-sm tracking-tight bg-gradient-to-br from-indigo-300 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform font-mono">
                SR
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm tracking-tight text-foreground group-hover:text-indigo-300 transition-colors">
              Safdar Rehman
            </span>
            <span className="text-[11px] text-muted-foreground font-mono">
              Junior Full-Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-card/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/70 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors min-h-[36px] flex items-center justify-center ${
                  isActive
                    ? "text-white font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-md shadow-indigo-500/25"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <Button
            asChild
            variant="gradient"
            size="sm"
            className="rounded-full shadow-md hover:scale-105 transition-all text-xs font-semibold px-4 min-h-[44px]"
          >
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <Send className="size-3" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-xl"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm p-6 flex flex-col justify-between bg-card/95 backdrop-blur-2xl border-border/80">
              <div>
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1.5px]">
                      <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-background">
                        <span className="font-bold text-xs bg-gradient-to-br from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-mono">
                          SR
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">Safdar Rehman</span>
                      <span className="text-[11px] text-muted-foreground font-mono">Junior Full-Stack Developer</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col space-y-1.5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                          isActive
                            ? "bg-indigo-500/15 text-indigo-400 font-semibold border border-indigo-500/25"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <span>{item.name}</span>
                        {isActive && (
                          <div className="h-2 w-2 rounded-full bg-indigo-400" />
                        )}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <Button
                  asChild
                  variant="gradient"
                  className="w-full justify-center rounded-xl min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href="#contact" className="flex items-center gap-2">
                    <span>Get In Touch</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  Available for full-time & freelance projects
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

