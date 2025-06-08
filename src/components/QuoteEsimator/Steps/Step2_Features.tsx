'use client';
import { useQuoteStore } from '../useQuoteStore';

export default function Step2() {
  const { data, setField, nextStep } = useQuoteStore();

  const features = [
    'Responsive Design',
    'User Authentication',
    'Payment Integration',
    'AI Assistant',
    'Admin Dashboard',
    'SEO Optimization',
  ];

  const toggleFeature = (feature: string) => {
    const currentFeatures = data.features;
    if (currentFeatures.includes(feature)) {
      setField('features', currentFeatures.filter((f) => f !== feature));
    } else {
      setField('features', [...currentFeatures, feature]);
    }
  };

  return (
    <section aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-xl font-semibold mb-4">
        Select Desired Features
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature) => (
          <button
            key={feature}
            type="button"
            onClick={() => toggleFeature(feature)}
            className={`px-4 py-2 rounded-lg border ${
              data.features.includes(feature)
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            } transition`}
            aria-pressed={data.features.includes(feature)}
          >
            {feature}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={nextStep}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
      >
        Next
      </button>
    </section>
  );
}
