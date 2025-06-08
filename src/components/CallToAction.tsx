"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  onEstimateClick?: () => void;
};

export default function CallToAction({ onEstimateClick }: Props) {
  return (
    <section
      className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white py-20 px-6"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          id="cta-heading"
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let’s Build Something Incredible Together
        </motion.h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Whether you&apos;re launching a startup, redesigning your brand, or scaling a SaaS — we’re your tech partner.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            Get in Touch
          </Link>
          <button
            onClick={onEstimateClick}
            type="button"
            className="inline-block bg-black/80 text-white border border-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-indigo-700 transition-all"
            aria-label="Estimate Project"
          >
            Estimate Project
          </button>
        </div>
      </div>
    </section>
  );
}
