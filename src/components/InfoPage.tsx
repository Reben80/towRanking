import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface InfoPageProps {
  onClose: () => void;
}

export function InfoPage({ onClose }: InfoPageProps) {
  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-6 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Rankings
        </button>

        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Understanding Our Scoring System</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">MHI Score (Median Household Income)</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The MHI score is calculated based on the median household income in Montgomery County, Maryland ($125,371 in 2023) 
                  and the service area coverage. This score reflects how well a towing company serves communities across different 
                  income levels. A higher score indicates better service coverage across diverse economic areas.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Distance Score</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The distance score is calculated using the Haversine formula multiplied by 1.4 to account for actual road distances 
                  rather than straight-line distances. This adjustment factor provides a more realistic estimate of travel time and 
                  service coverage area. 
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">CEI Score (Community Equity Index)</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The Community Equity Index (CEI) measures how equitably
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Score Normalization</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  All scores are normalized to a 0-100 scale to ensure fair comparison between different metrics. This normalization 
                  process allows us to combine different measurements into a single, meaningful ranking system while maintaining the 
                  relative performance differences between companies.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
