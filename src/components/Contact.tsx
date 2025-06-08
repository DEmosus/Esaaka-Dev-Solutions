"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface QuoteData {
  template?: string;
  budget?: string;
  timeline?: string;
  notes?: string;
}

interface ContactProps {
  quote?: QuoteData | null;
}

export default function Contact({ quote }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (quote && form.message.trim() === "") {
      const summary = 
`Hi! I’m interested in this quote:

Template: ${quote.template}
Budget: ${quote.budget}
Timeline: ${quote.timeline}
Notes: ${quote.notes || "N/A"}

Let me know how to proceed.`.trim();

      setForm((prev) => ({ ...prev, message: summary }));
    }
  }, [quote, form.message]);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-zinc-950 text-white py-12 px-6 rounded-md border border-zinc-800"
      aria-labelledby="contact-heading"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-describedby="contact-description"
      >
        <h2 id="contact-heading" className="text-2xl font-bold mb-4">Contact Us</h2>
        <p id="contact-description" className="mb-4 text-gray-400">
          Fill out the form below and we will get back to you as soon as possible.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white w-full"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white w-full"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg py-3 px-6 text-white font-medium"
          aria-busy={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-center" role="alert">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center" role="alert">
            Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}
