"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/socials";
import {
  Mail,
  Send,
  Loader2,
  MapPin,
  Clock,
  ArrowUpRight,
  Copy,
} from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa6";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      projectType: "Full Stack Solution",
      budget: "$1,000 - $3,000",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // If honeypot is filled, silently ignore (bot detected)
    if (data.honeypot) {
      toast.success("Thank you! Your message has been sent.");
      reset();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Celebrate success!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#38bdf8", "#2dd4bf", "#ec4899"],
      });

      toast.success("Message sent successfully! 🚀", {
        description: "Thanks for reaching out. I will get back to you within 24 hours.",
      });

      reset();
    } catch (error: unknown) {
      console.error("Submission error:", error);
      const errMessage =
        error instanceof Error ? error.message : "Please check your network and try again, or email me directly.";
      toast.error("Failed to send message", {
        description: errMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink =
    socialLinks.find((s) => s.name === "WhatsApp")?.url ||
    "https://wa.me/923000000000";

  return (
    <section id="contact" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Get In Touch"
          title="Have a Project in Mind?"
          highlightedText="Let's Build It"
          subtitle="Whether you have an upcoming project, freelance inquiry, job opportunity, or just want to connect—my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Quick Links (Enters from Left) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="left" distance={32}>
              <SpotlightCard className="p-7 sm:p-8 bg-card/80 border-border/80 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Contact Information
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Feel free to send a message via the form or reach out through direct communication channels.
                  </p>
                </div>

                {/* Quick Contacts */}
                <div className="space-y-3.5">
                  {/* Email Card with 1-Click Copy */}
                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-muted/60 hover:bg-indigo-500/10 border border-border/70 hover:border-indigo-500/40 transition-all group">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
                      <Mail className="size-5" />
                    </div>
                    <div className="overflow-hidden flex-1">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                        Direct Inquiries
                      </span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-semibold text-foreground group-hover:text-indigo-400 transition-colors truncate block"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(siteConfig.email);
                        toast.success("Email copied to clipboard!");
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1.5 rounded-md bg-background/80 hover:bg-indigo-500/20 text-muted-foreground hover:text-indigo-300 border border-border/60 transition-colors min-h-[36px]"
                      aria-label="Copy email address"
                    >
                      <Copy className="size-3" />
                      <span>Copy</span>
                    </button>
                  </div>

                  {/* WhatsApp Card */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-muted/60 hover:bg-emerald-500/10 border border-border/70 hover:border-emerald-500/40 transition-all group min-h-[56px]"
                  >
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                      <FaWhatsapp className="size-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                        Instant WhatsApp Chat
                      </span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                        Start Direct Conversation
                      </span>
                    </div>
                    <ArrowUpRight className="size-4 ml-auto text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                  </a>

                  {/* LinkedIn Card */}
                  <a
                    href="https://linkedin.com/in/safdar-rehman-910440247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-muted/60 hover:bg-cyan-500/10 border border-border/70 hover:border-cyan-500/40 transition-all group min-h-[56px]"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
                      <FaLinkedin className="size-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                        Professional Network
                      </span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                        linkedin.com/in/safdar-rehman
                      </span>
                    </div>
                    <ArrowUpRight className="size-4 ml-auto text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>

                {/* Status Meta */}
                <div className="pt-4 border-t border-border/60 space-y-2 text-xs text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-indigo-400" />
                    <span>{siteConfig.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-3.5 text-indigo-400" />
                    <span>Average response time: &lt; 24 hours</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Right Column: Contact Form (Enters from Right) */}
          <div className="lg:col-span-7">
            <Reveal direction="right" distance={32}>
              <SpotlightCard className="p-7 sm:p-8 bg-card/80 border-border/80">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Honeypot anti-spam field (hidden) */}
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name & Email in Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <Input
                        placeholder="e.g. John Doe"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                        className="min-h-[44px]"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 font-medium">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="e.g. john@company.com"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                        className="min-h-[44px]"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 font-medium">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <Input
                        placeholder="e.g. Next.js Web App Project"
                        {...register("subject")}
                        aria-invalid={!!errors.subject}
                        className="min-h-[44px]"
                      />
                      {errors.subject && (
                        <p className="text-xs text-rose-500 font-medium">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Project Type
                      </label>
                      <select
                        {...register("projectType")}
                        className="flex min-h-[44px] w-full rounded-xl border border-input bg-background/60 px-4 py-2 text-sm ring-offset-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all backdrop-blur-sm"
                      >
                        <option value="Full Stack Solution">Full Stack Solution</option>
                        <option value="Web App">Custom Web App</option>
                        <option value="Landing Page">Landing Page / Marketing Site</option>
                        <option value="Admin Panel">Admin &amp; CRM Dashboard</option>
                        <option value="Mobile App">Mobile App (React Native)</option>
                        <option value="Other">Consultation / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Range (Optional) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Estimated Budget Range (Optional)
                    </label>
                    <select
                      {...register("budget")}
                      className="flex min-h-[44px] w-full rounded-xl border border-input bg-background/60 px-4 py-2 text-sm ring-offset-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all backdrop-blur-sm"
                    >
                      <option value="< $1,000">&lt; $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                      <option value="Full-time Role / Negotiable">Full-time Role / Negotiable</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Project Details / Message <span className="text-rose-500">*</span>
                    </label>
                    <Textarea
                      placeholder="Tell me about your project goals, timeline, and key requirements..."
                      rows={5}
                      {...register("message")}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-medium">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-xl font-bold py-3.5 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-center text-muted-foreground">
                    🔒 Direct inquiry with Safdar. Spam-protected with rate limiting.
                  </p>
                </form>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

