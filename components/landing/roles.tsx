"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, UserCog, Headset, Wrench } from "lucide-react";

const roles = [
  {
    icon: ShieldCheck,
    role: "Admin",
    description:
      "Full system access, user management, audit logs, system configuration",
    color: "bg-chart-1",
  },
  {
    icon: Stethoscope,
    role: "Doctor",
    description:
      "Patient consultations, surgeries, prescriptions, medical records",
    color: "bg-chart-2",
  },
  {
    icon: UserCog,
    role: "Nurse",
    description:
      "Triage, patient care, medication administration, observations",
    color: "bg-chart-3",
  },
  {
    icon: Headset,
    role: "Front Desk",
    description:
      "Patient registration, appointments, queue management, billing support",
    color: "bg-chart-4",
  },
  {
    icon: Wrench,
    role: "Theater Tech",
    description: "Theater scheduling support, equipment management",
    color: "bg-chart-5",
  },
];

export function Roles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Role-Based Access Control
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Secure, granular permissions ensure every team member has access to
            exactly what they need.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {roles.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-56 lg:w-64 p-5 sm:p-6 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-background" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                {item.role}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
