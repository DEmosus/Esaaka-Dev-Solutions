import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates | Esaaka Dev Solutions",
  description: "Browse our collection of high-quality templates for web apps, SaaS platforms, portfolios, and more.",
};

export default function TemplatesPage() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Templates</h1>
        <p className="text-zinc-400 mb-6">
          Browse high-quality, production-ready templates crafted for startups, SaaS, personal brands, and more.
        </p>
        <Link href="/projects/esaaka-template-store" className="inline-block mt-4 text-indigo-500 hover:underline">
          View Categories →
        </Link>
      </div>
    </section>
  );
}
