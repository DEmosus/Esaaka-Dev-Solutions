import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Esaaka Dev Solutions",
  description: "Explore our wide range of web development and AI-powered digital services.",
};

export default function Page() {
  return <ServicesClient />;
}
