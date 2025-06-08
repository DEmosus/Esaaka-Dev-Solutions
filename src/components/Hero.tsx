"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-zinc-950 text-white overflow-hidden px-6"
      aria-labelledby="hero-heading"
    >
      {/* Animated Gradient Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-gradient-bg bg-gradient-to-tr from-indigo-700 via-purple-800 to-zinc-900 opacity-20 blur-2xl" />
      </div>

      {/* Content */}
      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Building the Future of the Web — 
          <span className="text-indigo-500"> With AI</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-zinc-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Esaaka Dev Solutions crafts lightning-fast, beautiful digital experiences with cutting-edge AI and web technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="#services"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
