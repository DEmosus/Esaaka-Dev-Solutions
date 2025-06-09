// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found | Esaaka Dev Solutions",
      description: "The requested project could not be found.",
      robots: "noindex",
    };
  }
  return {
    title: `${project.title} | Project Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
    twitter: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();
  return <ProjectDetailsClient project={project} />;
}
