"use client";

import { motion } from "framer-motion";
import { Server, Cloud, RefreshCw } from "lucide-react";

const deploymentOptions = [
  {
    icon: Server,
    title: "On-Premise",
    description: "Deploy on your own infrastructure with Docker for complete control over your data and environment.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Host on any cloud provider (AWS, GCP, Azure, DigitalOcean) for scalability and reduced maintenance.",
  },
  {
    icon: RefreshCw,
    title: "Hybrid",
    description: "Combine on-premise data security with cloud accessibility for the best of both worlds.",
  },
];

export function Deployment() {
  return (
    <section id="deployment" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Flexible Deployment Options
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the deployment model that fits your organization's needs and
            compliance requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {deploymentOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <option.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {option.title}
              </h3>
              <p className="text-muted-foreground">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
