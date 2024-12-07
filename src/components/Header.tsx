import React from 'react';
import { Truck, ArrowUpDown, Info } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SortOption } from '../types';

interface HeaderProps {
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  isDark: boolean;
  onThemeToggle: () => void;
  onInfoClick: () => void;
}

export function Header({ 
  sortBy, 
  onSortChange, 
  isDark, 
  onThemeToggle, 
  onInfoClick 
}: HeaderProps) {
  return (
    <header className="bg-blue-600 dark:bg-blue-900 text-white py-6 shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Montgomery County Towing Rankings</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onInfoClick}
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              aria-label="View scoring information"
            >
              <Info className="w-5 h-5" />
              <span className="hidden sm:inline">About Scoring</span>
            </button>
            <span className="text-sm">Sort by:</span>
            <select
              className="bg-blue-700 dark:bg-blue-800 text-white px-3 py-1 rounded-md border border-blue-400 dark:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-700"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
            >
              <option value="average">Weighted Score</option>
              <option value="mhi">MHI Score</option>
              <option value="distance">Distance Score</option>
              <option value="cei">CEI Score</option>
            </select>
            <ArrowUpDown className="w-5 h-5" />
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          </div>
        </div>
      </div>
    </header>
  );
}