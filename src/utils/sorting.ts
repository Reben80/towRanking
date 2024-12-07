import { CompanyData, SortOption, ScoreWeights } from '../types';
import { calculateWeightedScore } from './scores';

export function getSortedCompanies(
  companies: CompanyData[],
  sortBy: SortOption,
  weights: ScoreWeights
): CompanyData[] {
  return [...companies].sort((a, b) => {
    switch (sortBy) {
      case 'mhi':
        return b.mhiScore - a.mhiScore;
      case 'distance':
        return b.distanceScore - a.distanceScore;
      case 'cei':
        return b.ceiScore - a.ceiScore;
      default:
        const scoreA = calculateWeightedScore(a.mhiScore, a.distanceScore, a.ceiScore, weights);
        const scoreB = calculateWeightedScore(b.mhiScore, b.distanceScore, b.ceiScore, weights);
        return scoreB - scoreA;
    }
  });
}