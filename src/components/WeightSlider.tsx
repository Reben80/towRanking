import React from 'react';

interface WeightSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function WeightSlider({ label, value, onChange }: WeightSliderProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-600">{label}</label>
        <span className="text-sm text-gray-500">{(value * 100).toFixed()}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value * 100}
        onChange={(e) => onChange(Number(e.target.value) / 100)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
}