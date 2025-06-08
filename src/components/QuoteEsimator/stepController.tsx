'use client';
import { useQuoteStore } from './useQuoteStore';
import Step1 from './Steps/Step1_SolutionType';
import Step2 from './Steps/Step2_Features';
import Step3 from './Steps/Step3_Timeline';
import Step4 from './Steps/Step4_Budget';
import Step5 from './Steps/Step5_Notes';
import Step6 from './Steps/Step6_Summary';

const steps = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
  5: Step5,
  6: Step6,
};

export default function StepController() {
  const step = useQuoteStore((s) => s.step);
  const StepComponent = steps[step as keyof typeof steps];

  return (
    <div className="space-y-4">
      <StepComponent />
    </div>
  );
}
