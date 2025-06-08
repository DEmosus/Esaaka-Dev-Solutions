export const pricingConfig = {
  Website: { base: 1000, perFeature: 500 },
  WebApp: { base: 15000, perFeature: 750 },
  AITool: { base: 20000, perFeature: 1000 },
  ECommerce: { base: 5000, perFeature: 600 },
} as const;

export type SolutionType = keyof typeof pricingConfig;

export const getEstimate = (
  solutionType: string,
  featureCount: number
): number => {
  const config = pricingConfig[solutionType as SolutionType];
  if (!config) {
    console.warn(`Unknown solution type: ${solutionType}`);
  }
  const base = config?.base ?? 1000;
  const perFeature = config?.perFeature ?? 500;
  return base + featureCount * perFeature;
};

export const getEstimateBreakdown = (
  solutionType: string,
  featureCount: number
) => {
  const config = pricingConfig[solutionType as SolutionType];
  const base = config?.base ?? 1000;
  const perFeature = config?.perFeature ?? 500;
  return {
    base,
    perFeature,
    featureCount,
    total: base + featureCount * perFeature,
  };
};
