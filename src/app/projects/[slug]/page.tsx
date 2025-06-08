import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  return <ProjectDetailsClient project={project} />;
}
