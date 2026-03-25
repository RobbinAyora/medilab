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
  {
    icon: ClipboardList,
    title: "Reception & Registration",
    description: "Patient intake, walk-in tokens, queue management",
  },
  {
    icon: Activity,
    title: "Triage",
    description: "Vital signs, nurse assessments, patient history",
  },
  {
    icon: UserCheck,
    title: "Consultations",
    description: "Doctor notes, photo capture, clinical documentation",
  },
  {
    icon: Scissors,
    title: "Surgical Planning",
    description: "Scheduling, checklists, inventory allocation",
  },
  {
    icon: CheckCircle,
    title: "Pre-Operative",
    description: "Preparation tracking, bed assignments, clearance",
  },
  {
    icon: Theater,
    title: "Operating Theater",
    description: "Session management, team sign-in, procedure logging",
  },
  {
    icon: HeartPulse,
    title: "Recovery Ward",
    description: "Post-surgery monitoring, observations, orders",
  },
  {
    icon: LogOut,
    title: "Discharge",
    description: "Summaries, instructions, follow-up scheduling",
  },
];

export function Workflows() {
  return (
    <section id="workflows" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Complete Clinical Workflows
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              From the moment a patient walks in to their discharge, every step
              is digitized, tracked, and optimized for efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={workflow.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <workflow.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {workflow.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {workflow.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/images/clinical-workflow.jpg"
                alt="Clinical Workflow Management"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
