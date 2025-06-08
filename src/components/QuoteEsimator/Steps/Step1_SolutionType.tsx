'use client';
import { useQuoteStore } from '../useQuoteStore';

export default function Step1() {
  const setField = useQuoteStore((s) => s.setField);
  const nextStep = useQuoteStore((s) => s.nextStep);
  const data = useQuoteStore((s) => s.data);

  const options = ['Website', 'Web App', 'AI Tool', 'E-commerce', 'Other'];

  return (
    <section aria-labelledby="solution-type-heading">
      <h2 id="solution-type-heading" className="text-xl font-semibold mb-4">
        What type of solution do you need?
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => {
              setField('solutionType', opt);
              nextStep();
            }}
            className={`px-4 py-3 rounded-lg border ${
              data.solutionType === opt
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            } transition`}
            aria-pressed={data.solutionType === opt}
          >
            {opt}
          </button>
        ))}
      </div>
    </section>
  );
}
