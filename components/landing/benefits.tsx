"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Clock,
  ShieldCheck,
  Heart,
  LineChart,
  Scale,
  Lock,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: Workflow,
    title: "End-to-End Patient Journey",
    description:
      "Complete digitization from registration to discharge eliminates paper-based processes and manual handoffs.",
  },
  {
    icon: Clock,
    title: "Reduced Administrative Burden",
    description:
      "Automated billing, appointment reminders, and queue management free up staff time for patient care.",
  },
  {
    icon: ShieldCheck,
    title: "Improved Patient Safety",
    description:
      "Digital allergies, medication tracking, and standardized workflows reduce medical errors.",
  },
  {
    icon: Heart,
    title: "Better Patient Experience",
    description:
      "Shorter wait times, transparent billing, coordinated care across departments.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description:
      "Comprehensive reports and analytics provide insights for strategic planning.",
  },
  {
    icon: Scale,
    title: "Scalable Architecture",
    description:
      "Modern microservices-ready design grows with your facility.",
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    description:
      "JWT authentication, role-based access, complete audit trails ensure compliance.",
  },
  {
    icon: Zap,
    title: "Real-Time Collaboration",
    description:
      "WebSocket notifications keep all departments synchronized instantly.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Key Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transform your healthcare facility with measurable improvements
            across every department.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
