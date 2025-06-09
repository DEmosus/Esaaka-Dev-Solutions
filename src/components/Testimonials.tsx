"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Define a type or interface for type safety
interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sophia Reyes",
    role: "Founder, Bloom & Co.",
    feedback:
      "Esaaka helped us reimagine our online store. Their team blended stunning design with lightning-fast performance. It’s the best decision we’ve made for our business.",
    image: "/avatars/sophia.jpg",
  },
  {
    name: "Liam Chen",
    role: "CTO, Nexora AI",
    feedback:
      "We needed a partner that understood both design and dev — Esaaka nailed it. Our platform looks incredible and runs seamlessly.",
    image: "/avatars/liam.jpg",
  },
  {
    name: "Amara Patel",
    role: "CEO, EduGrowth",
    feedback:
      "Their ability to craft responsive, accessible sites with modern tech was a game changer for our non-profit’s outreach.",
    image: "/avatars/amara.jpg",
  },
];

// Define motion variants for reuse
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-24 px-6 md:px-16 text-white">
      <motion.h2
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-12"
      >
        What Our Clients Say
      </motion.h2>
      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-zinc-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.image}
                alt={`${t.name}'s photo`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-zinc-400 text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-zinc-300 text-base leading-relaxed">{t.feedback}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
