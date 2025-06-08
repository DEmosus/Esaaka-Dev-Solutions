'use client';
import { useQuoteStore } from '../useQuoteStore';

export default function Step4() {
  const { data, setField, nextStep, prevStep } = useQuoteStore();

  const budgets = ['< $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '> $10,000'];

  return (
    <section aria-labelledby="budget-heading">
      <h2 id="budget-heading" className="text-xl font-semibold mb-4">
        Estimated Budget
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {budgets.map((budget) => (
          <button
            key={budget}
            type="button"
            onClick={() => setField('budget', budget)}
            className={`px-4 py-2 rounded-lg border ${
              data.budget === budget
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            } transition`}
            aria-pressed={data.budget === budget}
          >
            {budget}
          </button>
        ))}
      </div>
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
