import AboutUs from "@/components/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Esaaka Dev Solutions",
  description: "Learn more about our mission, values, and team behind Esaaka Dev Solutions.",
};

export default function AboutPage() {
  return <AboutUs />;
}
