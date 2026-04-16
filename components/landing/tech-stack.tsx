"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const backendTech = [
  { name: "NestJS", desc: "Enterprise Node.js framework" },
  { name: "PostgreSQL", desc: "ACID-compliant database" },
  { name: "Redis", desc: "High-performance caching" },
  { name: "TypeORM", desc: "Type-safe database operations" },
  { name: "JWT", desc: "Secure authentication" },
  { name: "WebSockets", desc: "Real-time communication" },
];

const frontendTech = [
  { name: "React 18", desc: "Type-safe UI development" },
  { name: "Vite", desc: "Lightning-fast builds" },
  { name: "Tailwind CSS", desc: "Modern responsive styling" },
  { name: "Zustand", desc: "Lightweight state management" },
  { name: "TanStack Query", desc: "Server state management" },
  { name: "React Hook Form", desc: "Performant form handling" },
];

const infraTech = [
  { name: "Docker", desc: "Containerized deployment" },
  { name: "MinIO", desc: "S3-compatible storage" },
  { name: "Nginx", desc: "Reverse proxy & load balancing" },
  { name: "pgAdmin", desc: "Database administration" },
];

export function TechStack() {
  return (
    <section id="technology" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Modern Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Built with industry-leading technologies for performance,
            scalability, and developer experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/images/analytics-dashboar.jpg"
                alt="Analytics Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {backendTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-card border border-border/50"
                  >
                    <p className="font-medium text-foreground">{tech.name}</p>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {frontendTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-card border border-border/50"
                  >
                    <p className="font-medium text-foreground">{tech.name}</p>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-chart-3" />
                Infrastructure
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {infraTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-card border border-border/50"
                  >
                    <p className="font-medium text-foreground">{tech.name}</p>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
