"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Reveal } from "@/components/shared/Reveal";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="Social Proof"
          title="What Collaborators &amp;"
          highlightedText="Clients Say"
          subtitle="Feedback from engineering managers, product leads, and clients I have collaborated with."
        />

        {/* Carousel Card */}
        <Reveal direction="up" distance={28}>
          <div className="relative">
            <SpotlightCard className="p-8 sm:p-12 bg-card/80 border-border/80 min-h-[300px] flex flex-col justify-between shadow-xl">
              <Quote className="size-12 text-indigo-500/20 absolute top-6 right-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Star rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: currentTestimonial.rating }).map(
                      (_, i) => (
                        <Star key={i} className="size-4 fill-amber-400" />
                      )
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed italic">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-500/40 shrink-0">
                      <Image
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm sm:text-base">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {currentTestimonial.role} •{" "}
                        <span className="text-indigo-400 font-medium">
                          {currentTestimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-border/40">
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setAutoplay(false);
                        setCurrentIndex(idx);
                      }}
                      className={`h-2.5 rounded-full transition-all ${
                        currentIndex === idx
                          ? "w-8 bg-indigo-500"
                          : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    className="h-10 w-10 rounded-full"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    className="h-10 w-10 rounded-full"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

