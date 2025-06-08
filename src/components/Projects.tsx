"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right" | "none">("none");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(isTouchDevice);
  }, []);

  useEffect(() => {
    let rafId: number;

    const scroll = () => {
      const container = containerRef.current;
      if (!container) return;

      if (hovered && !isMobile) {
        if (scrollDirection === "right") container.scrollLeft += 1;
        else if (scrollDirection === "left") container.scrollLeft -= 1;
      } else if (isMobile || !hovered) {
        container.scrollLeft += 0.5;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(rafId);
  }, [hovered, scrollDirection, isMobile]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const x = clientX - left;

    if (x < width * 0.25) setScrollDirection("left");
    else if (x > width * 0.75) setScrollDirection("right");
    else setScrollDirection("none");
  };

  return (
    <section
      id="projects"
      className="mt-24 px-6 md:px-16"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold mb-6 text-white">
        🧪 Projects & Case Studies
      </h2>

      <div
        ref={containerRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setScrollDirection("none");
        }}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto space-x-6 scrollbar-hide py-2 cursor-none"
        role="region"
        aria-label="Project previews"
      >
        {[...projects, ...projects].map((project, index) => (
          <Link
            key={`${project.slug}-${index}`}
            href={`/projects/${project.slug}`}
            aria-label={`View details for ${project.title}`}
            className="block min-w-[300px] max-w-sm flex-shrink-0 bg-zinc-800 p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-[1.02] focus:scale-[1.02] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={600}
                height={340}
                priority
                className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
              {project.liveUrl && (
                <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded shadow-md">
                  Live
                </span>
              )}
            </div>

            <div className="text-white mt-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-zinc-400 text-sm mt-1 line-clamp-2">
                {project.description}
              </p>
              <ul
                className="flex flex-wrap gap-2 mt-3 text-xs text-zinc-300"
                aria-label="Tech stack"
              >
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <span className="bg-zinc-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
