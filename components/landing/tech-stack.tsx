"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const backendTech = [
  { name: "Charge Sheets", desc: "Support services and inventory across all care phases" },
  { name: "Price Overrides", desc: "Per-charge-sheet overrides without affecting master catalog" },
  { name: "Theater Fee Engine", desc: "Server-side computation based on booking duration and pricing config" },
  { name: "Inventory Tracking", desc: "Reconciled against planned and actual procedure usage" },
];

export function TechStack() {
  return (
    <section id="reliability" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-nav">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            4. Billing & Inventory Integration
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Financial and operational data stay consistent throughout the care journey without constraining clinical flexibility.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <Image
                src="/images/analytics-dashboar.jpg"
                alt="Analytics Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                Tibaflow achieves this through
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {backendTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-card border border-border/50"
                  >
                    <p className="font-medium text-foreground">{tech.name}</p>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
