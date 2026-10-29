import React from 'react';
import {
  Scale,
  Home,
  Search,
  Layers,
  Clock,
  BookOpen,
  BarChart3,
  HelpCircle,
  Settings,
  ShieldCheck,
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onTabChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'verify', label: 'Verify Quote', icon: Search },
    { id: 'batch', label: 'Batch Audit', icon: Layers },
    { id: 'history', label: 'Audit History', icon: Clock },
    { id: 'corpus', label: 'Landmark Corpus', icon: BookOpen },
    { id: 'benchmark', label: 'Benchmark & Eval', icon: BarChart3 },
    { id: 'methodology', label: 'Methodology', icon: HelpCircle },
  ];

  return (
    <aside className="w-64 bg-[#080d19] text-slate-300 flex flex-col shrink-0 min-h-screen border-r border-slate-800/80 select-none">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800/60">
        <div
          onClick={() => onTabChange('home')}
          className="flex items-start gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 shrink-0 group-hover:bg-indigo-500 transition-colors">
            <Scale size={20} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold tracking-wider text-base text-white">PRAMAN AI</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Intelligent Legal Quote Verification &amp; Evidence Platform
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-white' : 'text-slate-400'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Decorative Evidence Trust Card */}
      <div className="px-4 py-3">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-indigo-950/40 to-slate-900 border border-indigo-900/40 p-4 text-xs">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center mb-2.5 border border-indigo-500/30">
            <ShieldCheck size={16} />
          </div>
          <h4 className="font-bold text-white text-xs mb-1">
            Trusted. Transparent.<br />Evidence Based.
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Verify legal quotes with real sources and verifiable evidence.
          </p>
          {/* Subtle wave vector at bottom */}
          <div className="absolute -bottom-1 -right-2 opacity-20 pointer-events-none text-indigo-400">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
              <path
                d="M0 20 C 30 5, 60 35, 90 20 C 105 12, 115 25, 120 22 L 120 40 L 0 40 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Settings & Help Links */}
      <div className="p-4 border-t border-slate-800/60 space-y-1 text-xs">
        <button
          onClick={() => onTabChange('methodology')}
          className="w-full flex items-center gap-3 px-3.5 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 font-medium transition-colors cursor-pointer"
        >
          <Settings size={15} />
          <span>Settings</span>
        </button>
        <button
          onClick={() => onTabChange('methodology')}
          className="w-full flex items-center gap-3 px-3.5 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 font-medium transition-colors cursor-pointer"
        >
          <HelpCircle size={15} />
          <span>Help &amp; Support</span>
        </button>
      </div>
    </aside>
  );
};
