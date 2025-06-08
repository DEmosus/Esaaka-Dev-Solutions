import { create } from 'zustand';

type QuoteData = {
  solutionType: string;
  features: string[];
  timeline: string;
  budget: string;
  notes: string;
};

type QuoteStore = {
  step: number;
  data: QuoteData;
  nextStep: () => void;
  prevStep: () => void;
  setField: <K extends keyof QuoteData>(field: K, value: QuoteData[K]) => void;
  reset: () => void;
};

export const useQuoteStore = create<QuoteStore>((set) => ({
  step: 1,
  data: {
    solutionType: '',
    features: [],
    timeline: '',
    budget: '',
    notes: '',
  },
  nextStep: () => set((s) => ({ step: s.step + 1 })),
  prevStep: () => set((s) => ({ step: s.step - 1 })),
  setField: (field, value) =>
    set((s) => ({
      data: { ...s.data, [field]: value },
    })),
  reset: () =>
    set(() => ({
      step: 1,
      data: {
        solutionType: '',
        features: [],
        timeline: '',
        budget: '',
        notes: '',
      },
    })),
}));
