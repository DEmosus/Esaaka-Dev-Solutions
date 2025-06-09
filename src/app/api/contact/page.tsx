"use client";
import { useEffect, useState } from "react";

interface QuoteData {
  solutionType: string;
  features: string[];
  timeline: string;
  budget: string;
  notes: string;
  totalEstimate?: number;
}

export default function ContactPage() {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const stored = localStorage.getItem("quoteData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setQuoteData(parsed);
        setForm((prev) => ({
          ...prev,
          message: `Hi! I’d like to discuss the following quote:\n\n${stored}`,
        }));
      } catch (err) {
        console.error("Failed to parse quoteData", err);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    // Simple client-side check: ensure required fields are not empty.
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website: form.website,
        }),
      });

      if (response.ok) {
        setStatus("success");
        localStorage.removeItem("quoteData");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Let’s Talk</h1>
      <p className="text-gray-400 mb-6">
        We&apos;ll follow up with your quote and next steps.
      </p>

      {quoteData && (
        <div className="bg-gray-800 rounded-md p-4 text-sm text-gray-300 mb-8">
          <h2 className="text-lg font-semibold text-white mb-2">
            Quote Summary
          </h2>
          <p>
            <strong>Solution:</strong> {quoteData.solutionType}
          </p>
          <p>
            <strong>Features:</strong> {quoteData.features?.join(", ")}
          </p>
          <p>
            <strong>Timeline:</strong> {quoteData.timeline}
          </p>
          <p>
            <strong>Budget:</strong> {quoteData.budget}
          </p>
          <p>
            <strong>Notes:</strong> {quoteData.notes}
          </p>
          <p className="mt-2 font-semibold text-indigo-400">
            Estimated Total: ${quoteData.totalEstimate?.toLocaleString()}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          />
        </div>
        {/* Hidden honeypot field to trap bots */}
        <div style={{ display: "none" }}>
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Message</label>
          <textarea
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 mt-3">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-3">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  );
}
