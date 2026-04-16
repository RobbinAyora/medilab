"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-muted/30" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            Modern Healthcare,
            <span className="block text-primary mt-2">Simplified</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Tibaflow helps healthcare facilities streamline operations,
            improve patient care, and scale efficiently with a clean,
            powerful digital system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 lg:order-2"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border bg-card">
            <Image
              src="/images/dashboard-preview.jpg"
              alt="Dashboard Preview"
              width={1200}
              height={700}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

