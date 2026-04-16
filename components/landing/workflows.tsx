"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ClipboardList,
  Activity,
  UserCheck,
  Scissors,
  CheckCircle,
  Theater,
  HeartPulse,
  LogOut,
} from "lucide-react";

const workflows = [
  { icon: ClipboardList, title: "Registration", short: "Intake & queue" },
  { icon: Activity, title: "Triage", short: "Vitals & checks" },
  { icon: UserCheck, title: "Consultation", short: "Doctor review" },
  { icon: Scissors, title: "Planning", short: "Surgery prep" },
  { icon: CheckCircle, title: "Pre-Op", short: "Clearance ready" },
  { icon: Theater, title: "Theater", short: "Procedure stage" },
  { icon: HeartPulse, title: "Recovery", short: "Post-op care" },
  { icon: LogOut, title: "Discharge", short: "Exit & follow-up" },
];

export function Workflows() {
  return (
    <section id="workflows" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-nav">
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
              Clinical workflow,
              <br className="hidden sm:block" /> simplified.
            </h2>

            <p className="text-muted-foreground mb-8 sm:mb-10 max-w-md">
              From entry to discharge — every step streamlined.
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
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                    <workflow.icon className="w-4 h-4 text-primary" />
                  </div>

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
