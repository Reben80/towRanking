import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompanyCard } from './components/CompanyCard';
import { WeightControls } from './components/WeightControls';
import { InfoPage } from './components/InfoPage';
import { towingCompanies } from './data/companies';
import { getSortedCompanies } from './utils/sorting';
import type { SortOption, ScoreWeights } from './types';

const DEFAULT_WEIGHTS: ScoreWeights = {
  mhi: 0.33,
  distance: 0.33,
  cei: 0.34
};

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const [sortBy, setSortBy] = useState<SortOption>('average');
  const [weights, setWeights] = useState<ScoreWeights>(DEFAULT_WEIGHTS);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const updateWeight = (key: keyof ScoreWeights, value: number) => {
    const remaining = 1 - value;
    const otherKeys = Object.keys(weights).filter(k => k !== key) as Array<keyof ScoreWeights>;
    const otherWeight = remaining / otherKeys.length;
    
    setWeights({
      ...weights,
      [key]: value,
      [otherKeys[0]]: otherWeight,
      [otherKeys[1]]: otherWeight
    });
  };

  if (showInfo) {
    return <InfoPage onClose={() => setShowInfo(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Header 
        sortBy={sortBy} 
        onSortChange={setSortBy}
        isDark={isDark}
        onThemeToggle={() => setIsDark(!isDark)}
        onInfoClick={() => setShowInfo(true)}
      />

      <main className="container mx-auto px-4 py-8">
        <WeightControls
          weights={weights}
          onWeightChange={updateWeight}
          onReset={() => setWeights(DEFAULT_WEIGHTS)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSortedCompanies(towingCompanies, sortBy, weights).map((company, index) => (
            <CompanyCard
              key={company.tradeName}
              company={company}
              rank={index + 1}
              weights={weights}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;