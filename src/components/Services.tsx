"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";

export default function Services() {
  return (
    <section 
      id="services" 
      className="bg-zinc-950 text-white py-24 px-6"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          id="services-heading"
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Do Best
        </motion.h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-14 text-base md:text-lg">
          We bring ideas to life through strategy, design, code, and innovation — from concept to deployment.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>
              <motion.div
                className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-indigo-500 shadow-md hover:shadow-xl transition-all duration-300 text-left cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-indigo-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm">
                  {service.shortDescription}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
