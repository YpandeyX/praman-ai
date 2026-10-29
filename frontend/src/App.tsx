import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingHero } from './components/LandingHero';
import { VerifyWorkspace } from './components/VerifyWorkspace';
import { BriefAuditor } from './components/BriefAuditor';
import { BatchAudit } from './components/BatchAudit';
import { HistoryView } from './components/HistoryView';
import { DoctrineTimeline } from './components/DoctrineTimeline';
import { EvaluationDashboard } from './components/EvaluationDashboard';
import { CorpusView } from './components/CorpusView';
import { MethodologyView } from './components/MethodologyView';
import { ResultView } from './components/ResultView';
import { VerifyQuoteResponse } from './types';
import { Scale } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<
    'home' | 'verify' | 'brief' | 'batch' | 'history' | 'lineage' | 'benchmark' | 'corpus' | 'methodology'
  >('home');
  const [selectedHistoryResult, setSelectedHistoryResult] = useState<VerifyQuoteResponse | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSelectHistoryItem = (record: VerifyQuoteResponse) => {
    setSelectedHistoryResult(record);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-600 selection:text-white transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={(tab) => {
          setSelectedHistoryResult(null);
          setCurrentTab(tab as any);
        }}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedHistoryResult ? (
          <ResultView
            result={selectedHistoryResult}
            onReset={() => setSelectedHistoryResult(null)}
          />
        ) : (
          <>
            {currentTab === 'home' && (
              <LandingHero
                onStartVerify={() => setCurrentTab('verify')}
                onExplorePresets={() => setCurrentTab('verify')}
              />
            )}
            {currentTab === 'verify' && <VerifyWorkspace />}
            {currentTab === 'brief' && <BriefAuditor />}
            {currentTab === 'batch' && <BatchAudit />}
            {currentTab === 'history' && (
              <HistoryView onSelectResult={handleSelectHistoryItem} />
            )}
            {currentTab === 'lineage' && <DoctrineTimeline caseName="Puttaswamy" />}
            {currentTab === 'benchmark' && <EvaluationDashboard />}
            {currentTab === 'corpus' && <CorpusView />}
            {currentTab === 'methodology' && <MethodologyView />}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 py-8 text-slate-500 dark:text-slate-400 text-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
            <Scale size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span>Praman AI — Deterministic Legal Evidence & Citation Authentication</span>
          </div>

          <div className="text-slate-500 dark:text-slate-400 text-center sm:text-right">
            Official Supreme Court Landmark Corpus • ReportLab PDF Evidence Reports
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
