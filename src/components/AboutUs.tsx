"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Users2 } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const highlights = [
  {
    icon: <Lightbulb size={28} />,
    title: "Innovation First",
    desc: "We blend creativity with technology to deliver cutting-edge digital experiences.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Quality & Trust",
    desc: "Each solution is built to the highest standards with performance and security in mind.",
  },
  {
    icon: <Users2 size={28} />,
    title: "Client-Centric Approach",
    desc: "We partner with you to understand your goals and deliver real value.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-zinc-950 text-white py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="about-heading" className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-zinc-400 mb-6">
            Esaaka Dev Solutions is a future-focused web development agency blending world-class design, full-stack engineering, and AI-powered features to help you build for tomorrow.
          </p>
          <div className="space-y-5">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-indigo-500">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl border border-zinc-800 h-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <OptimizedImage
            src="/images/about.png"
            alt="Our team collaborating on a web project"
            aspectRatio="16/9"
            priority
            width={800}
            height={450}
            title="Esaaka Dev Team"
            className="rounded-xl"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
