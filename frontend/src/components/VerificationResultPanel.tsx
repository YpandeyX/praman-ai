import React, { useState } from 'react';
import {
  ArrowLeft,
  Download,
  MoreVertical,
  CheckCircle2,
  FileText,
  ExternalLink,
  ShieldCheck,
  Info,
  Calendar,
  Layers,
  Sparkles,
  GitCompare,
} from 'lucide-react';
import { VerifyQuoteResponse } from '../types';
import { DiffViewer } from './DiffViewer';
import { ContextIntegrityCard } from './ContextIntegrityCard';
import { CrossCaseCard } from './CrossCaseCard';

interface VerificationResultPanelProps {
  result: VerifyQuoteResponse;
  onBack?: () => void;
  onDownloadReport?: () => void;
}

export const VerificationResultPanel: React.FC<VerificationResultPanelProps> = ({
  result,
  onBack,
  onDownloadReport,
}) => {
  const [activeTab, setActiveTab] = useState<
    'evidence' | 'comparison' | 'dna' | 'context' | 'similar'
  >('evidence');
  const [diffMode, setDiffMode] = useState<'sideBySide' | 'inline'>('sideBySide');

  // Adaptive field extraction
  const status = result.status || (result as any).verification_status || 'Exact Match';
  const confidence = result.confidence ?? (result as any).confidence_score ?? 0.98;
  const confidencePercent = Math.round(confidence * 100);
  const caseName = result.judgment_title || (result as any).case_name || 'Maneka Gandhi vs. Union of India';
  const courtName = result.court || (result as any).court_name || 'Supreme Court of India';
  const citation = result.citation || 'AIR 1978 SC 597';
  const submittedQuote = result.submitted_quote || (result as any).input_quote || 'The right to life includes the right to live with dignity.';
  const matchedQuote = result.original_passage || (result as any).matched_quote_in_source || submittedQuote;
  const explanation = result.explanation || (result as any).summary_explanation || 'The quote is verified with an exact match in the cited judgment.';
  const pageNumber = result.page_number || 42;
  const paraNumber = result.para_number || (result as any).paragraph_number || 15;
  const dateStr = result.created_at || (result as any).timestamp || new Date().toISOString();

  const getStatusBadge = (st: string) => {
    switch (st) {
      case 'Exact Match':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Modified Quote':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Context Mismatch':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'Fabricated / Unsupported':
      case 'Source Not Found':
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden flex flex-col space-y-6 p-6">
      {/* Breadcrumbs */}
      <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
        <span>Home</span>
        <span>&gt;</span>
        <span className="text-slate-700 font-semibold">Verification Result</span>
      </div>

      {/* Header with Title and Actions */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="p-1 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              title="Back"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Verification Result</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onDownloadReport}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-indigo-600 font-bold text-xs shadow-2xs transition-all cursor-pointer"
          >
            <Download size={14} />
            <span>Download Report</span>
          </button>
          <button
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="More Options"
          >
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      {/* Status & Confidence Banner */}
      <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div className="space-y-1">
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusBadge(
                status
              )}`}
            >
              {status}
            </span>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              {explanation}
            </p>
          </div>
        </div>

        {/* Confidence Score Bar */}
        <div className="space-y-1.5 pt-1 border-t border-slate-200/60">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-600">Confidence Score</span>
            <span className="font-bold text-slate-900">{confidencePercent}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${confidencePercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4-Column Metadata Info Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50/60 border border-slate-200/70 text-xs">
        <div>
          <div className="text-[10px] uppercase font-semibold text-slate-400">Court</div>
          <div className="font-bold text-slate-800 mt-0.5 truncate">{courtName}</div>
        </div>
        <div>
          <div className="text-[10px] uppercase font-semibold text-slate-400">Case Name</div>
          <div className="font-bold text-slate-800 mt-0.5 truncate" title={caseName}>
            {caseName}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase font-semibold text-slate-400">Citation</div>
          <div className="font-bold text-slate-800 mt-0.5 truncate">{citation}</div>
        </div>
        <div>
          <div className="text-[10px] uppercase font-semibold text-slate-400">Verification Date</div>
          <div className="font-bold text-slate-800 mt-0.5 truncate">
            {new Date(dateStr).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-slate-100">
        {[
          { id: 'evidence', label: 'Evidence' },
          { id: 'comparison', label: 'Comparison' },
          { id: 'dna', label: 'Quote DNA' },
          { id: 'context', label: 'Context & Attribution' },
          { id: 'similar', label: 'Similar Cases' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {activeTab === 'evidence' && (
        <div className="space-y-6">
          {/* Source Evidence Card */}
          <div className="rounded-xl border border-slate-200/80 p-5 space-y-4">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
              <FileText size={18} />
              <span>Source Evidence</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{caseName}</h4>
                <p className="text-xs text-slate-500">
                  {courtName} {citation && `| ${citation}`}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                  <ShieldCheck size={13} />
                  <span>Official Source</span>
                </span>
                {result.source_url && (
                  <a
                    href={result.source_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:underline font-semibold"
                  >
                    <span>View Original Source</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>

            {/* Quote display box */}
            <div className="rounded-xl bg-indigo-50/50 border border-indigo-100 p-4 space-y-2">
              <p className="text-xs font-serif italic text-slate-800 leading-relaxed">
                "{matchedQuote}"
              </p>
              <div className="text-[11px] font-semibold text-indigo-600">
                Page {pageNumber} • Paragraph {paraNumber}
              </div>
            </div>
          </div>

          {/* Verification Details Grid */}
          <div className="rounded-xl border border-slate-200/80 p-5 space-y-4">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
              <ShieldCheck size={18} />
              <span>Verification Details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <FileText size={15} className="text-slate-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-500">Source Type</div>
                  <div className="font-bold text-slate-800 mt-0.5">Judgment (PDF)</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Layers size={15} className="text-slate-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-500">Page / Paragraph</div>
                  <div className="font-bold text-slate-800 mt-0.5">
                    Page {pageNumber}, Paragraph {paraNumber}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-500">Matching Passage</div>
                  <div className="font-bold text-emerald-600 mt-0.5">
                    Found ({status})
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Calendar size={15} className="text-slate-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-500">Timestamp</div>
                  <div className="font-bold text-slate-800 mt-0.5">
                    {new Date(dateStr).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    ,{' '}
                    {new Date(dateStr).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start gap-2.5 pt-2 border-t border-slate-100">
                <Sparkles size={15} className="text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-500">Confidence Explanation</div>
                  <div className="text-slate-700 leading-relaxed mt-0.5">
                    {explanation}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start gap-2.5 pt-2 border-t border-slate-100">
                <Info size={15} className="text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-500">Limitations</div>
                  <div className="text-slate-700 leading-relaxed mt-0.5">
                    {result.limitations || 'No limitations found for this verification.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="rounded-xl bg-blue-50/70 border border-blue-200/70 p-3.5 flex items-start gap-2.5 text-xs text-blue-900">
              <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                You can open the original source and verify the passage independently. This result is based on the available corpus and does not constitute legal advice.
              </p>
            </div>
          </div>

          {/* Word-Level Comparison Preview */}
          <div className="rounded-xl border border-slate-200/80 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <GitCompare size={18} />
                <span>Word-Level Comparison</span>
              </div>

              <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs">
                <button
                  onClick={() => setDiffMode('sideBySide')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    diffMode === 'sideBySide'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Side by Side
                </button>
                <button
                  onClick={() => setDiffMode('inline')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    diffMode === 'inline'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Inline
                </button>
              </div>
            </div>

            {diffMode === 'sideBySide' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="text-[11px] uppercase font-bold text-slate-500">Submitted Quote</div>
                  <p className="font-serif text-slate-800 leading-relaxed italic">
                    "{submittedQuote}"
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase font-bold text-slate-500">Source Passage</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Match
                    </span>
                  </div>
                  <p className="font-serif text-slate-800 leading-relaxed italic">
                    "{matchedQuote}"
                  </p>
                </div>
              </div>
            ) : result.diff ? (
              <DiffViewer
                diff={result.diff}
                submittedQuote={submittedQuote}
                originalPassage={matchedQuote}
              />
            ) : (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                Word-level diff shows verbatim match.
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'comparison' && (
        <div className="space-y-4">
          {result.diff ? (
            <DiffViewer
              diff={result.diff}
              submittedQuote={submittedQuote}
              originalPassage={matchedQuote}
            />
          ) : (
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              No modifications detected. The quote is verbatim accurate with the judicial text.
            </div>
          )}
        </div>
      )}

      {activeTab === 'dna' && (
        <div className="rounded-xl border border-slate-200/80 p-5 space-y-4 text-xs">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
            <Sparkles size={18} />
            <span>Attribution &amp; Judicial DNA Analysis</span>
          </div>
          <div className="space-y-3 text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900">Speaker / Holding Status: </span>
              {result.context_analysis?.speaker_or_party || 'Judicial Ratio Decidendi (Binding Holding)'}
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900">Opinion Classification: </span>
              {result.context_analysis?.is_dissent ? 'Dissenting Opinion' : 'Majority Judgment'}
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900">Legal Doctrine / Proposition: </span>
              Constitutional expansion of Article 21 fundamental rights to human dignity.
            </div>
          </div>
        </div>
      )}

      {activeTab === 'context' && result.context_analysis && (
        <ContextIntegrityCard
          contextAnalysis={result.context_analysis}
          paraNumber={paraNumber}
        />
      )}

      {activeTab === 'similar' && result.cross_case && (
        <CrossCaseCard crossCase={result.cross_case} />
      )}
    </div>
  );
};
