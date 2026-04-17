"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const workflows = [
  { title: "A. Intake", short: "Patient registration & clinic readiness" },
  { title: "B. Consultation", short: "Clinical assessment & documentation" },
  { title: "C. Case Planning", short: "Surgical case creation & team" },
  { title: "D. Surgical Notes", short: "Case-linked notes & collaboration" },
  { title: "E. Pre-Op", short: "Ward readiness checklist" },
  { title: "F. Theater", short: "Scheduling & management" },
  { title: "G. Intra-Op", short: "Parallel doc. workflows" },
  { title: "H. Discharge", short: "Recovery & summary" },
];

export function Workflows() {
  return (
    <section id="care" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-nav">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              End-to-end care journey,
              <br className="hidden sm:block" /> clinically gated.
            </h2>

            <p className="text-muted-foreground mb-8 sm:mb-10 max-w-md">
              Eight phases from intake to discharge — each governed by clinical readiness gates.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={workflow.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="
                    group
                    flex flex-col gap-2 sm:gap-3
                    p-3 sm:p-4
                    rounded-xl
                    bg-card
                    border border-border/50
                    hover:shadow-md
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {workflow.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {workflow.short}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden border shadow-xl bg-card">
              <Image
                src="/images/clinical-workflow.jpg"
                alt="Clinical Workflow"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
