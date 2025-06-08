"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToAction";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import QuoteEstimatorModal from "@/components/QuoteEsimator/QuoteEstimatorModal";
import { projects } from "@/data/projects";

export default function HomePage() {
  const [showEstimator, setShowEstimator] = useState(false);

  return (
    <main className="bg-zinc-950 text-white">
      <Hero />
      <Services />
      <AboutUs />
      <CallToAction onEstimateClick={() => setShowEstimator(true)} />
      <Projects projects={projects} />
      <Testimonials />
      <Contact />

      {showEstimator && (
        <QuoteEstimatorModal isOpen={showEstimator} onClose={() => setShowEstimator(false)} />
      )}
    </main>
  );
}
