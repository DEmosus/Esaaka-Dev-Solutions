'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuoteStore } from "../useQuoteStore";
import { getEstimate, pricingConfig, SolutionType } from "@/config/pricingConfig";

export default function Step6() {
  const router = useRouter();
  const { data, reset } = useQuoteStore();
  const [suggestions, setSuggestions] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);

  const totalEstimate = getEstimate(data.solutionType, data.features.length);
  const config = pricingConfig[data.solutionType as SolutionType];

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/ai-suggestions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        });
        const result = await response.json();
        setSuggestions(result.suggestions);
      } catch {
        setSuggestions("Unable to fetch AI suggestions at this time.");
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [data]);

  const handleContinueToContact = () => {
    localStorage.setItem("quoteData", JSON.stringify({ ...data, totalEstimate }));
    router.push("/contact"); // Ensure /contact/page.tsx exists
  };

  return (
    <section aria-labelledby="summary-heading" className="p-4">
      <h2 id="summary-heading" className="text-xl font-bold mb-4">Summary & Estimate</h2>

      <div className="space-y-2 text-sm text-gray-300">
        <p><strong>Solution:</strong> {data.solutionType}</p>
        <p><strong>Features:</strong> {data.features.join(", ")}</p>
        <p><strong>Timeline:</strong> {data.timeline}</p>
        <p><strong>Budget:</strong> {data.budget}</p>
        <p><strong>Notes:</strong> {data.notes}</p>
      </div>

      <div className="mt-6 text-lg font-semibold relative group">
        Estimated Cost:
        <span
          className="text-indigo-400 ml-2"
          title="Click 'View Breakdown' to understand the estimate."
        >
          ${totalEstimate.toLocaleString()}
        </span>

        <button
          type="button"
          onClick={() => setShowBreakdown(!showBreakdown)}
          aria-expanded={showBreakdown}
          className="ml-3 text-sm text-indigo-300 underline hover:text-indigo-200"
        >
          {showBreakdown ? "Hide Breakdown" : "View Breakdown"}
        </button>

        {showBreakdown && (
          <div className="mt-3 text-sm text-gray-400 bg-gray-800 p-4 rounded-lg">
            <p>
              Base price for <strong>{data.solutionType}</strong>: $
              {config?.base?.toLocaleString() ?? "1,000"}
            </p>
            <p>
              {data.features.length} feature(s) × ${config?.perFeature ?? 500} = $
              {(data.features.length * (config?.perFeature ?? 500)).toLocaleString()}
            </p>
            <p className="font-semibold mt-2 text-white">
              Total: ${totalEstimate.toLocaleString()}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">AI Suggestions:</h3>
        {loading ? (
          <p>Loading suggestions...</p>
        ) : (
          <p className="text-gray-300 whitespace-pre-line">{suggestions}</p>
        )}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg"
        >
          Start Over
        </button>
        <button
          type="button"
          onClick={handleContinueToContact}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
        >
          Continue to Contact
        </button>
      </div>
    </section>
  );
}
