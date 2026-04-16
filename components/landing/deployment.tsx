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
    <section id="deployment" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-nav">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Flexible Deployment Options
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the deployment model that fits your organization's needs and
            compliance requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {deploymentOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <option.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                {option.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
