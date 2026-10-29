import React from 'react';
import {
  Scale,
  Search,
  Layers,
  Clock,
  BarChart3,
  BookOpen,
  BookMarked,
  ShieldCheck,
  FileText,
  History,
  Sun,
  Moon,
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  darkMode,
  onToggleDarkMode,
}) => {
  const navItems = [
    { id: 'verify', label: 'Verify Quote', icon: Search },
    { id: 'brief', label: 'Brief Auditor', icon: FileText, badge: 'New' },
    { id: 'batch', label: 'Batch Audit', icon: Layers },
    { id: 'history', label: 'Audit History', icon: Clock },
    { id: 'lineage', label: 'Doctrine Lineage', icon: History, badge: 'Pro' },
    { id: 'benchmark', label: 'Benchmark', icon: BarChart3 },
    { id: 'corpus', label: 'Corpus', icon: BookOpen },
    { id: 'methodology', label: 'Methodology', icon: BookMarked },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div
            onClick={() => onTabChange('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-md group-hover:from-indigo-600 group-hover:to-indigo-800 transition-all">
              <Scale size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wider text-base text-white font-serif">PRAMAN AI</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  v2.0 LegalTech
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Deterministic Evidence Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon size={14} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-400/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 transition-colors border border-slate-700"
              title={darkMode ? 'Switch to Parchment Light Theme' : 'Switch to Midnight Dark Theme'}
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* SC Corpus badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-[11px] font-semibold text-emerald-300">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>SC Corpus Verified</span>
            </div>
          </div>
        </div>

        {/* Mobile / Responsive Nav Bar */}
        <div className="xl:hidden flex items-center gap-1 py-2 overflow-x-auto border-t border-slate-800/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Icon size={13} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
