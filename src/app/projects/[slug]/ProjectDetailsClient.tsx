"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface ProjectDetailsClientProps {
  project: {
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    stack: string[];
    image: string;
    liveUrl?: string;
    repo?: string;
  };
}

export default function ProjectDetailsClient({
  project,
}: ProjectDetailsClientProps) {
  return (
    // Structured data annotation using schema.org CreativeWork.
    <main
      className="text-white"
      itemScope
      itemType="https://schema.org/CreativeWork"
      role="main"
    >
      {/* JSON‑LD for Structured Data – improves SEO */}
      <script
        type="application/ld+json"
        // For security, note that using dangerouslySetInnerHTML requires you to ensure project data is safe.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            image: project.image,
            url: project.liveUrl || "",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 px-6 md:px-16 flex flex-col justify-end pb-10">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-3"
            itemProp="name"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-300 text-lg max-w-3xl"
            itemProp="description"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-16 py-16 space-y-16">
        {/* Overview */}
        {project.longDescription && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            aria-labelledby="overview-heading"
          >
            <h2 id="overview-heading" className="text-2xl font-semibold mb-4">
              🧩 Project Overview
            </h2>
            <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </motion.section>
        )}

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          aria-labelledby="tech-stack-heading"
        >
          <h2 id="tech-stack-heading" className="text-2xl font-semibold mb-4">
            🛠️ Tech Stack
          </h2>
          <ul
            className="flex flex-wrap gap-3 text-sm text-zinc-100"
            aria-label="Tech Stack"
          >
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="bg-zinc-700 px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Image Showcase */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          aria-labelledby="screenshots-heading"
        >
          <h2 id="screenshots-heading" className="text-2xl font-semibold mb-4">
            🖼️ Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={project.image}
              alt={`${project.title} main screenshot`}
              width={1200}
              height={700}
              className="rounded-lg object-cover w-full"
            />
            {/* Optional second image (replace or duplicate as needed) */}
            <Image
              src={project.image}
              alt={`${project.title} alternate screenshot`}
              width={1200}
              height={700}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </motion.section>

        {/* Project Links */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          aria-labelledby="project-links-heading"
        >
          <h2
            id="project-links-heading"
            className="text-2xl font-semibold mb-4"
          >
            🔗 Project Links
          </h2>
          <div className="flex gap-4 flex-wrap">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium transition"
                aria-label="Visit Live Site"
              >
                🌐 Live Site
              </Link>
            )}
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded font-medium transition"
                aria-label="View GitHub Repository"
              >
                📂 GitHub Repo
              </Link>
            )}
          </div>
        </motion.section>

        {/* Back Button */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/#projects"
            className="text-indigo-400 hover:underline text-sm"
            role="button"
            aria-label="Back to Projects"
          >
            ← Back to Projects
          </Link>
        </motion.nav>
      </div>
    </main>
  );
}
