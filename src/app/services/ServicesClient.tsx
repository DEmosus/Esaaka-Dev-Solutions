"use client";

import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";

export default function ServicesClient() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-zinc-400 text-lg">Discover what we can do for your business.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.slug}
            className="bg-zinc-900 p-6 rounded-lg shadow-lg border border-zinc-800 hover:border-indigo-500 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="text-indigo-400 text-3xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-zinc-400 mb-4 text-sm">{service.shortDescription}</p>
            <Link href={`/services/${service.slug}`} className="text-indigo-500 text-sm hover:underline">
              Learn More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
