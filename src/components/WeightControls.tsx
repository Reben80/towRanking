import React from 'react';
import { RotateCcw } from 'lucide-react';
import { WeightSlider } from './WeightSlider';
import type { ScoreWeights } from '../types';

interface WeightControlsProps {
  weights: ScoreWeights;
  onWeightChange: (key: keyof ScoreWeights, value: number) => void;
  onReset: () => void;
}

export function WeightControls({ weights, onWeightChange, onReset }: WeightControlsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold dark:text-white">Adjust Score Weights</h2>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
        >
          <RotateCcw className="w-4 h-4" />
          Reset to Default
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <WeightSlider
          label="MHI Score Weight"
          value={weights.mhi}
          onChange={(value) => onWeightChange('mhi', value)}
        />
        <WeightSlider
          label="Distance Score Weight"
          value={weights.distance}
          onChange={(value) => onWeightChange('distance', value)}
        />
        <WeightSlider
          label="CEI Score Weight"
          value={weights.cei}
          onChange={(value) => onWeightChange('cei', value)}
        />
      </div>
    </div>
  );
}