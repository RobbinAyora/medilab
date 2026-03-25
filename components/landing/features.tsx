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

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Complete EMR with full medical history, allergy tracking, document management, and patient portal for self-registration.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Online appointment booking, real-time patient queue, walk-in registration, and no-show tracking.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Workflows",
    description:
      "End-to-end workflows from triage to discharge, including consultations, surgeries, and recovery management.",
  },
  {
    icon: CreditCard,
    title: "Billing & Finance",
    description:
      "Automated invoicing, payment tracking, revenue reports, and comprehensive financial dashboard.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time stock tracking, low-stock alerts, surgical allocations, and complete audit trails.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description:
      "WebSocket-powered instant alerts, read/unread tracking, and user-specific preferences.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Compliance",
    description:
      "Complete audit logging, entity-level tracking, patient activity history, and exportable reports.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Patient volume analytics, surgical outcomes, revenue reports, and theater utilization rates.",
  },
  {
    icon: Building2,
    title: "Facility Management",
    description:
      "Room management, bed availability tracking, ward occupancy rates, and status monitoring.",
  },
  {
    icon: Shield,
    title: "User Management",
    description:
      "Role-based access control, staff categorization, secure authentication, and password management.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Feature Set
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to run a modern healthcare facility, integrated
            into one powerful platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
