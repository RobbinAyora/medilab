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
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-nav">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Key Benefits
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Measurable impact across your entire facility.
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
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-sm font-semibold text-foreground mb-1">
                {benefit.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              <div className="
                absolute inset-0 
                p-4 sm:p-6 
                rounded-xl 
                bg-card/98 
                backdrop-blur-sm
                border 
                opacity-0 
                group-hover:opacity-100 
                group-focus-within:opacity-100
                transition duration-300
                flex flex-col justify-center
                pointer-events-none group-hover:pointer-events-auto
              ">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
