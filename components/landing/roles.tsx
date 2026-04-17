"use client";

import { motion } from "framer-motion";

const roles = [
  {
    role: "Clinical Gates",
    description:
      "Ward checklist finalization and other clinical gates determine downstream scheduling eligibility and enforce readiness before progression.",
  },
  {
    role: "Case Membership Controls",
    description:
      "Access to sensitive clinical documentation is governed through strict case membership controls, ensuring only authorized personnel interact with patient data.",
  },
  {
    role: "UI Safeguards",
    description:
      "Prevents missed saves on critical steps such as charge sheet updates, ensuring that user actions are reliably captured and persisted.",
  },
  {
    role: "Status Transitions",
    description:
      "Meaningful status changes trigger visible and enforceable downstream effects across the workflow, maintaining system integrity.",
  },
  {
    role: "System Integrity",
    description:
      "Eliminates 'UI-only state' by ensuring all confirmed actions are validated and completed at the system level, not just visually represented.",
  },
];

export function Roles() {
  return (
    <section id="roles" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            5. Workflow Safety & Reliability
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tibaflow is built to prevent 'UI-only state' — conditions where the interface appears to confirm an action that the system has not actually completed.
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