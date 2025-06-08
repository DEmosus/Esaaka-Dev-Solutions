import { servicesData } from "@/data/servicesData";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found | Esaaka Dev Solutions",
      description: "The requested service could not be found.",
      robots: "noindex",
    };
  }

  return {
    title: `${service.title} | Esaaka Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Esaaka Services`,
      description: service.shortDescription,
      images: service.image ? [service.image] : [],
    },
    twitter: {
      card: "summary",
      title: service.title,
      description: service.shortDescription,
    },
  };
}
