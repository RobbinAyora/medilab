"use client";

import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Stethoscope,
  CreditCard,
  Package,
  Bell,
  ClipboardCheck,
  BarChart3,
  Building2,
  Shield,
} from "lucide-react";

// Feature data
const features = [
  { icon: Users, title: "Patient Management", short: "Full EMR & history" },
  { icon: Calendar, title: "Smart Scheduling", short: "Book, queue, track" },
  { icon: Stethoscope, title: "Clinical Workflows", short: "Triage to discharge" },
  { icon: CreditCard, title: "Billing & Finance", short: "Invoicing & revenue" },
  { icon: Package, title: "Inventory", short: "Stock & alerts" },
  { icon: Bell, title: "Notifications", short: "Real-time alerts" },
  { icon: BarChart3, title: "Analytics", short: "Reports & insights" },
  { icon: Shield, title: "Security", short: "RBAC & auth" },
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
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-nav">
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
              Platform
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Built for modern healthcare.
            </h2>
          </div>

          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            One unified system for operations, care, and growth.
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
                p-4 sm:p-6 
                flex flex-col gap-3 sm:gap-4
                hover:shadow-lg 
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                <feature.icon className="w-4 h-4 text-primary" />
              </div>

              <h3 className="text-sm font-semibold text-foreground">
                {feature.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.short}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
