import React from 'react';
import {
  Scale,
  FileCheck,
  Sparkles,
  ArrowRight,
  GitCompare,
  AlertTriangle,
} from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface LandingHeroProps {
  onStartVerify: () => void;
  onExplorePresets: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onStartVerify, onExplorePresets }) => {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow-2xs">
          <Scale size={14} className="text-indigo-600 dark:text-indigo-400" />
          <span>Intelligent Legal Quote Verification & Evidence Platform</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Every Legal Quote.{' '}
          <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-400 decoration-wavy decoration-2 sm:decoration-3 underline-offset-8">
            Verified with
          </span>
          <br />
          <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-400 decoration-wavy decoration-2 sm:decoration-3 underline-offset-8">
            Evidence.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
          AI systems hallucinate court citations. Legal briefs omit essential qualifications. Praman AI mathematically verifies quotations against authentic Indian court judgments, computes word-level Myers diffs, detects party submission conflations, and certifies results with downloadable evidence certificates.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onStartVerify}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-indigo-500/25 transition-all cursor-pointer"
          >
            <span>Verify a Legal Quote</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onExplorePresets}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
          >
            <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span>Interactive Live Presets</span>
          </button>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
            <FileCheck size={20} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">Proof-Carrying Verification</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Every verification anchors directly to a verified paragraph in the court judgment record. Never rely on unsupported LLM opinions.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            <GitCompare size={20} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">Word-Level Explainable Diff</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Pinpoints exact additions, deletions, and substitutions. Alerts users to critical modal shifts like reversing <i>shall</i> into <i>may</i>.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
            <AlertTriangle size={20} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">Context & Attribution Integrity</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Detects whether a quote is merely an argument submitted by party counsel, a minority dissenting opinion, or an excerpt omitting statutory caveats.
          </p>
        </div>
      </div>

      {/* Live Sample Teaser Card */}
      <div className="bg-[#0c1322] border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-900/60 pb-4">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest">
              SAMPLE LIVE VERIFICATION AUDIT
            </div>
            <div className="text-base font-bold">Justice K.S. Puttaswamy v. Union of India (2017) 10 SCC 1</div>
          </div>
          <StatusBadge status="Exact Match" size="md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2 backdrop-blur-xs">
            <div className="text-indigo-300 font-semibold uppercase text-[10px]">Submitted Quotation</div>
            <p className="font-serif italic leading-relaxed text-slate-200">
              "Privacy is the constitutional core of human dignity. Privacy has both positive and negative contents. The negative content restrains the State from committing an intrusion upon the life and personal liberty of a citizen."
            </p>
          </div>

          <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/30 space-y-2 backdrop-blur-xs">
            <div className="text-emerald-300 font-semibold uppercase text-[10px]">
              Original Verified Record (Para 298, Page 265)
            </div>
            <p className="font-serif italic leading-relaxed text-emerald-100">
              "Privacy is the constitutional core of human dignity. Privacy has both positive and negative contents. The negative content restrains the State from committing an intrusion upon the life and personal liberty of a citizen."
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-indigo-200 pt-2 border-t border-indigo-900/50">
          <span>Alignment: 100% Verbatim • Para 298 Verified • Judicial Ratio Holding</span>
          <button
            onClick={onStartVerify}
            className="text-white hover:text-indigo-300 underline font-semibold flex items-center gap-1 cursor-pointer"
          >
            Try Your Own Quotation Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
