"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Clear Role Separation",
    description:
      "Each staff role stays focused on their domain while contributing to a unified, case-centered care record.",
  },
  {
    title: "Documentation Continuity",
    description:
      "Every clinical event from consultation to discharge is captured in a single connected record.",
  },
  {
    title: "Clinically-Anchored Scheduling",
    description:
      "Theater scheduling driven by clinical readiness — cases only enter booking queue when pre-op requirements are met.",
  },
  {
    title: "Accurate, Auditable Billing",
    description:
      "Charges integrated at every care phase and computed server-side, reducing revenue leakage.",
  },
  {
    title: "Flexible Documentation",
    description:
      "Tools designed for real-world variability — structured where precision matters, freeform where essential.",
  },
  {
    title: "Scalable Configuration",
    description:
      "Admin-controlled theater definitions, pricing configurations, and role governance adapt as needs evolve.",
  },
  {
    title: "Workflow Safety",
    description:
      "Clinical gates and case membership controls prevent UI-only state and ensure enforceable transitions.",
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Immediate notifications keep teams synchronized throughout the care journey.",
  },
];

export function Benefits() {
  return (
    <section id="why" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-nav">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Tibaflow Works
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Purpose-built for surgical and aesthetic centers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="
                group 
                relative 
                p-4 sm:p-6 
                rounded-xl 
                bg-card 
                border border-border/50
                hover:shadow-lg 
                hover:-translate-y-1
                transition-all duration-300
                cursor-default
              "
            >
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {benefit.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
