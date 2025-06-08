"use client";

import { servicesData } from "@/data/servicesData";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="bg-zinc-950 text-white py-20 px-6 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/#services"
          className="text-indigo-500 mb-8 inline-block hover:underline"
        >
          ← Back to Services
        </Link>

        <div className="mb-6 flex items-center gap-4">
          <div className="text-indigo-500">{service.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
        </div>

        <p className="text-zinc-400 text-lg mb-6">{service.fullDescription}</p>

        <ul className="list-disc pl-5 space-y-2 mb-8 text-zinc-300">
          {service.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl shadow-lg border border-zinc-800 bg-zinc-950">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-contain rounded-xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
