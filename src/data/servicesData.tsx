import React from "react";
import {
  Code,
  MonitorSmartphone,
  Server,
  Sparkles,
  Globe,
  LayoutTemplate,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  points: string[];
  image: string;
  icon: React.ReactNode;
};

export const servicesData: Service[] = [
  {
    slug: "ui-ux",
    title: "Website Design & UI/UX",
    shortDescription:
      "Modern, mobile-first interfaces built with research, wireframes, and clean prototypes.",
    fullDescription:
      "We create visually stunning, user-centric websites using in-depth research, wireframes, and interactive prototypes. Our designs adapt seamlessly across all devices.",
    points: [
      "Mobile-first responsive layouts",
      "Wireframes and Figma prototypes",
      "Design systems and brand consistency",
      "User testing and accessibility compliance",
    ],
    image: "/images/services/ui-ux.png",
    icon: <LayoutTemplate size={32} />,
  },
  {
    slug: "frontend",
    title: "Frontend Development",
    shortDescription:
      "Interactive interfaces using React, Vue, or plain JavaScript — optimized for performance.",
    fullDescription:
      "We develop responsive and dynamic frontend experiences using modern libraries and frameworks like React and Vue. Every interface is crafted for speed, usability, and accessibility.",
    points: [
      "Reusable components and clean architecture",
      "Mobile responsiveness and animations",
      "Frameworks like React, Vue, or Svelte",
      "SEO-friendly and optimized delivery",
    ],
    image: "/images/services/frontend.png",
    icon: <MonitorSmartphone size={32} />,
  },
  {
    slug: "backend",
    title: "Backend & APIs",
    shortDescription:
      "Secure server-side logic with Node.js, Python, PostgreSQL, and REST/GraphQL APIs.",
    fullDescription:
      "Robust backend systems, RESTful APIs, and scalable infrastructure using technologies like Node.js and PostgreSQL. We ensure data security, performance, and maintainability.",
    points: [
      "Node.js or Python backend architecture",
      "Database design (SQL, NoSQL)",
      "Authentication and authorization flows",
      "REST and GraphQL APIs",
    ],
    image: "/images/services/backend.png",
    icon: <Server size={32} />,
  },
  {
    slug: "fullstack",
    title: "Full-Stack & SaaS",
    shortDescription:
      "End-to-end custom apps, SaaS platforms, and client dashboards that scale.",
    fullDescription:
      "From design to deployment, we create fully integrated SaaS apps and dashboards with secure authentication, APIs, and responsive UIs — built for long-term scale.",
    points: [
      "Integrated frontend + backend",
      "SaaS architecture and dashboards",
      "Auth, database, API integration",
      "Performance, tests, CI/CD pipelines",
    ],
    image: "/images/services/fullstack.png",
    icon: <Code size={32} />,
  },
  {
    slug: "ai",
    title: "AI-Enhanced Features",
    shortDescription:
      "Smart tools and user experiences powered by OpenAI and custom AI integrations.",
    fullDescription:
      "We build AI-powered features using OpenAI, vector search, chatbots, recommendation engines, and more. Unlock the power of intelligent automation and personalized UX.",
    points: [
      "OpenAI API, embeddings, assistants",
      "Chatbots, summarizers, generators",
      "AI image/video/text integrations",
      "Custom fine-tuned models and tools",
    ],
    image: "/images/services/ais.png",
    icon: <Sparkles size={32} />,
  },
  {
    slug: "optimization",
    title: "Global Web Optimization",
    shortDescription:
      "SEO, Core Web Vitals, accessibility, and internationalization for maximum reach.",
    fullDescription:
      "We improve your site’s discoverability, speed, and usability worldwide. Our team handles SEO audits, structured data, accessibility, and performance optimization.",
    points: [
      "SEO metadata, schema, indexing",
      "Core Web Vitals tuning",
      "Accessibility (WCAG) improvements",
      "Multilingual & internationalization",
    ],
    image: "/images/services/optimization.png",
    icon: <Globe size={32} />,
  },
];
