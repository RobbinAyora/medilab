"use client";

import { motion } from "framer-motion";

// Feature data
const features = [
  { title: "Frontdesk", short: "Registers and manages patients during intake;" },
  { title: "Doctor", short: "Receives queue updates" },
  { title: "Manages perioperative clinical workflow and documentation;" },
  { title: "Theatre technician", short: "Plans and operationalizes surgical cases" },
  { title: "Admin", short: "Manages system configuration and governance; " },
];
// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Features() {
  return (
    <section id="billing" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-nav">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 opacity-70">
              Core Roles & Responsibilities
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
             Tibaflow is structured around five distinct roles.
            </h2>
          </div>

          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Connecting the complete care process.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="
                group 
                bg-card 
                border border-border/50 
                rounded-xl 
                p-6 sm:p-8 
                flex flex-col gap-4
                hover:shadow-lg 
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.short}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
