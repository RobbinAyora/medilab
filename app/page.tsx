import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Workflows } from "@/components/landing/workflows";
import { TechStack } from "@/components/landing/tech-stack";
import { Benefits } from "@/components/landing/benefits";
import { Roles } from "@/components/landing/roles";
import { Deployment } from "@/components/landing/deployment";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Workflows />
      <TechStack />
      <Benefits />
      <Roles />
      <Deployment />
      <CTA />
      <Footer />
    </main>
  );
}
