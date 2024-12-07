export type SortOption = 'average' | 'mhi' | 'distance' | 'cei';

export interface CompanyData {
  tradeName: string;
  mhiScore: number;      // MHI Score
  distanceScore: number; // Distance Score
  ceiScore: number;      // CEI Score
  averageScore: number;
}

export interface ScoreWeights {
  mhi: number;
  distance: number;
  cei: number;
}

export interface Theme {
  isDark: boolean;
}