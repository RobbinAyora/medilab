"use client";

import { Activity } from "lucide-react";
import Link from "next/link";

const techStack = [
  "NestJS",
  "React",
  "PostgreSQL",
  "Redis",
  "Docker",
  "TypeScript",
];

export function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
              <span className="text-primary">Tibaflow</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
              Empowering healthcare facilities with modern digital solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tibaflow. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
