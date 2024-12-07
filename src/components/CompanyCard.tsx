import React from 'react';
import type { CompanyData, ScoreWeights } from '../types';
import { calculateWeightedScore } from '../utils/scores';
import { ScoreBar } from './ScoreBar';

interface CompanyCardProps {
  company: CompanyData;
  rank: number;
  weights: ScoreWeights;
}

export function CompanyCard({ company, rank, weights }: CompanyCardProps) {
  const weightedScore = calculateWeightedScore(
    company.mhiScore,
    company.distanceScore,
    company.ceiScore,
    weights
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{company.tradeName}</h3>
        <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">#{rank}</span>
      </div>

      <div className="mb-6">
        <ScoreBar 
          score={weightedScore}
          label="Overall Score"
          size="large"
        />
      </div>
      
      <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Individual Scores</h4>
        <ScoreBar score={company.mhiScore} label="MHI Score" showExplanation type="mhi" />
        <ScoreBar score={company.distanceScore} label="Distance Score" showExplanation type="distance" />
        <ScoreBar score={company.ceiScore} label="CEI Score" showExplanation type="cei" />
      </div>
    </div>
  );
}