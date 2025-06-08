'use client';
import { useQuoteStore } from '../useQuoteStore';

export default function Step3() {
  const { data, setField, nextStep, prevStep } = useQuoteStore();

  const timelines = ['1-2 Weeks', '1 Month', '2-3 Months', 'Flexible'];

  return (
    <section aria-labelledby="timeline-heading">
      <h2 id="timeline-heading" className="text-xl font-semibold mb-4">
        Preferred Timeline
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {timelines.map((timeline) => (
          <button
            key={timeline}
            type="button"
            onClick={() => setField('timeline', timeline)}
            className={`px-4 py-2 rounded-lg border ${
              data.timeline === timeline
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            } transition`}
            aria-pressed={data.timeline === timeline}
          >
            {timeline}
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
