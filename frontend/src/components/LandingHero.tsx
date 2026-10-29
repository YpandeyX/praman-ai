import React from 'react';
import {
  Scale,
  ShieldCheck,
  FileCheck,
  Search,
  Sparkles,
  ArrowRight,
  GitCompare,
  FileText,
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
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700">
          <Scale size={14} />
          Intelligent Legal Quote Verification & Evidence Platform
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Every Legal Quote.{' '}
          <span className="text-indigo-600 underline decoration-indigo-400 decoration-wavy">
            Verified with Evidence.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          AI systems hallucinate court citations. Legal briefs omit essential qualifications. Praman AI mathematically verifies quotations against authentic Indian court judgments, computes word-level Myers diffs, detects party submission conflations, and certifies results with downloadable evidence certificates.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onStartVerify}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>Verify a Legal Quote</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onExplorePresets}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm shadow-xs transition-all"
          >
            <Sparkles size={16} className="text-indigo-600" />
            <span>Interactive Live Presets</span>
          </button>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <FileCheck size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Proof-Carrying Verification</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every verification anchors directly to a verified paragraph in the court judgment record. Never rely on unsupported LLM opinions.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <GitCompare size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Word-Level Explainable Diff</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pinpoints exact additions, deletions, and substitutions. Alerts users to critical modal shifts like reversing <i>shall</i> into <i>may</i>.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
            <AlertTriangle size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Context & Attribution Integrity</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Detects whether a quote is merely an argument submitted by party counsel, a minority dissenting opinion, or an excerpt omitting statutory caveats.
          </p>
        </div>
      </div>

      {/* Live Sample Teaser Card */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-800/60 pb-4">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-widest">
              Sample Live Verification Audit
            </div>
            <div className="text-base font-bold">Justice K.S. Puttaswamy v. Union of India (2017) 10 SCC 1</div>
          </div>
          <StatusBadge status="Exact Match" size="md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2 backdrop-blur-xs">
            <div className="text-indigo-300 font-semibold uppercase text-[10px]">Submitted Quotation</div>
            <p className="font-serif italic leading-relaxed text-slate-100">
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

        <div className="flex flex-wrap items-center justify-between text-xs text-indigo-200 pt-2 border-t border-indigo-800/50">
          <span>Alignment: 100% Verbatim • Para 298 Verified • Judicial Ratio Holding</span>
          <button
            onClick={onStartVerify}
            className="text-white hover:text-indigo-200 underline font-semibold flex items-center gap-1"
          >
            Try Your Own Quotation Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
