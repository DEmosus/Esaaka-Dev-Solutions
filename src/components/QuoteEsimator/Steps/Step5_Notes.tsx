'use client';
import { useQuoteStore } from '../useQuoteStore';

export default function Step6Summary() {
  const { data, setField, nextStep, prevStep } = useQuoteStore();

  return (
    <section aria-labelledby="notes-heading">
      <h2 id="notes-heading" className="text-xl font-semibold mb-4">
        Additional Notes
      </h2>
      <textarea
        value={data.notes}
        onChange={(e) => setField('notes', e.target.value)}
        placeholder="Any specific requirements or details..."
        className="w-full h-32 p-4 rounded-lg bg-gray-800 text-white border border-gray-700"
      />
      <div className="mt-4 flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </section>
  );
}
