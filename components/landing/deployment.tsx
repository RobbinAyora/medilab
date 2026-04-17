"use client";

import { motion } from "framer-motion";

const deploymentOptions = [
  {
    title: "On-Premise",
    description: "Full control on your infrastructure.",
  },
  {
    title: "Cloud",
    description: "Scalable and low maintenance.",
  },
  {
    title: "Hybrid",
    description: "Balance security and accessibility.",
  },
];

export function Deployment() {
  return (
    <section
      id="deployment"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-nav"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Flexible Deployment
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Choose what works for you.
          </p>
        </motion.div>

        {/* ✅ Horizontal scroll on small screens */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:overflow-visible sm:grid sm:grid-cols-3">
          {deploymentOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="min-w-[80%] sm:min-w-0 snap-start p-5 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}