import { ScoreWeights } from '../types';

export function getScoreColor(score: number): string {
  if (score >= 0.7) return 'text-green-600';
  if (score >= 0.4) return 'text-yellow-600';
  return 'text-red-600';
}

export function formatScore(score: number): string {
  return (score * 100).toFixed(1) + '%';
}

export function calculateWeightedScore(
  mhiScore: number,
  distanceScore: number,
  ceiScore: number,
  weights: ScoreWeights
): number {
  const totalWeight = weights.mhi + weights.distance + weights.cei;
  if (totalWeight === 0) return 0;

  return (
    (mhiScore * weights.mhi +
    distanceScore * weights.distance +
    ceiScore * weights.cei) / totalWeight
  );
}