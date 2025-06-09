import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esaaka Dev Solutions – Web Development Experts",
  description: "Modern, AI-powered web development services for the future. Custom websites, apps, platforms, and solutions.",
  keywords: [
    "web development",
    "frontend",
    "backend",
    "fullstack",
    "website design",
    "Esaaka Dev Solutions",
    "AI websites",
    "Next.js agency",
  ],
  metadataBase: new URL("https://esaaka-dev-solutions.vercel.app/"), 
  openGraph: {
    title: "Esaaka Dev Solutions",
    description: "Web development for the future — powered by AI and crafted with care.",
    type: "website",
    url: "https://esaaka-dev-solutions.vercel.app/",
    siteName: "Esaaka Dev Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esaaka Dev Solutions",
    description: "Modern, AI-powered web development services for the future.",
    site: "@esaaka044", 
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-zinc-950 text-zinc-100 antialiased")}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
