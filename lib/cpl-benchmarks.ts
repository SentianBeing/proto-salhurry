export interface IndustryCPL {
  id: string;
  name: string;
  google: { min: number; max: number };
  meta: { min: number; max: number };
  primaryPlatform: 'google' | 'meta' | 'equal';
}

export const CPL_BENCHMARKS: Record<string, IndustryCPL> = {
  real_estate: {
    id: 'real_estate',
    name: 'Real Estate',
    google: { min: 300, max: 1500 },
    meta: { min: 150, max: 700 },
    primaryPlatform: 'google',
  },
  ecommerce: {
    id: 'ecommerce',
    name: 'E-commerce / D2C',
    google: { min: 150, max: 500 },
    meta: { min: 80, max: 300 },
    primaryPlatform: 'meta',
  },
  restaurant: {
    id: 'restaurant',
    name: 'Restaurant / Food / Local',
    google: { min: 100, max: 400 },
    meta: { min: 50, max: 250 },
    primaryPlatform: 'meta',
  },
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare / Clinic',
    google: { min: 250, max: 900 },
    meta: { min: 150, max: 500 },
    primaryPlatform: 'google',
  },
  education: {
    id: 'education',
    name: 'Education',
    google: { min: 200, max: 700 },
    meta: { min: 100, max: 400 },
    primaryPlatform: 'equal',
  },
  b2b: {
    id: 'b2b',
    name: 'B2B / Professional Services',
    google: { min: 400, max: 1500 },
    meta: { min: 200, max: 800 },
    primaryPlatform: 'google',
  },
  fashion: {
    id: 'fashion',
    name: 'Fashion / Lifestyle',
    google: { min: 150, max: 500 },
    meta: { min: 80, max: 300 },
    primaryPlatform: 'meta',
  },
  fitness: {
    id: 'fitness',
    name: 'Fitness / Gym',
    google: { min: 200, max: 600 },
    meta: { min: 100, max: 350 },
    primaryPlatform: 'meta',
  },
  other: {
    id: 'other',
    name: 'Other / General Industry',
    google: { min: 250, max: 800 },
    meta: { min: 150, max: 450 },
    primaryPlatform: 'equal',
  },
};

export interface LeadEstimateResult {
  optimistic: number;
  realistic: number;
  conservative: number;
  cplRange: { min: number; max: number };
}

export function calculateLeadEstimates(
  industryKey: string,
  adBudget: number,
  platform: 'meta' | 'google' | 'both' | 'none'
): LeadEstimateResult | null {
  if (platform === 'none' || adBudget <= 0) return null;

  const bench = CPL_BENCHMARKS[industryKey] || CPL_BENCHMARKS.other;

  let minCpl = 0;
  let maxCpl = 0;

  if (platform === 'google') {
    minCpl = bench.google.min;
    maxCpl = bench.google.max;
  } else if (platform === 'meta') {
    minCpl = bench.meta.min;
    maxCpl = bench.meta.max;
  } else if (platform === 'both') {
    // Weighted blend: 60% to primary platform, 40% to secondary
    const isGooglePrimary = bench.primaryPlatform === 'google';
    const isMetaPrimary = bench.primaryPlatform === 'meta';

    let weightGoogle = 0.5;
    let weightMeta = 0.5;

    if (isGooglePrimary) {
      weightGoogle = 0.6;
      weightMeta = 0.4;
    } else if (isMetaPrimary) {
      weightMeta = 0.6;
      weightGoogle = 0.4;
    }

    minCpl = Math.round(bench.google.min * weightGoogle + bench.meta.min * weightMeta);
    maxCpl = Math.round(bench.google.max * weightGoogle + bench.meta.max * weightMeta);
  }

  const midCpl = Math.round((minCpl + maxCpl) / 2);

  // Optimistic = Low CPL, Conservative = High CPL, Realistic = Mid CPL
  const optimistic = Math.round(adBudget / minCpl);
  const realistic = Math.round(adBudget / midCpl);
  const conservative = Math.round(adBudget / maxCpl);

  return {
    optimistic,
    realistic,
    conservative,
    cplRange: { min: minCpl, max: maxCpl },
  };
}
