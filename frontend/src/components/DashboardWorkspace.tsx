import React, { useState } from 'react';
import {
  FileCheck,
  Search,
  UploadCloud,
  Layers,
  Clock,
  BookOpen,
  BarChart3,
  ArrowRight,
  Sparkles,
  GitCompare,
  FileText,
  ShieldCheck,
  CheckCircle2,
  X,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { SampleQuotePreset, VerifyQuoteRequest } from '../types';

interface DashboardWorkspaceProps {
  onVerify: (data: VerifyQuoteRequest, pdfFile?: File | null) => Promise<void>;
  loading: boolean;
  error: string | null;
  onClearError: () => void;
  onSelectRecent: (preset: SampleQuotePreset) => void;
  onNavigateTab: (tab: string) => void;
  presets: SampleQuotePreset[];
}

export const DashboardWorkspace: React.FC<DashboardWorkspaceProps> = ({
  onVerify,
  loading,
  error,
  onClearError,
  onSelectRecent,
  onNavigateTab,
  presets,
}) => {
  // Form fields matching screenshot
  const [quote, setQuote] = useState(
    '"The right to life includes the right to live with dignity."'
  );
  const [caseName, setCaseName] = useState('Maneka Gandhi vs. Union of India');
  const [courtName, setCourtName] = useState('Supreme Court of India');
  const [citation, setCitation] = useState('AIR 1978 SC 597');
  const [judgmentUrl, setJudgmentUrl] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleClear = () => {
    setQuote('');
    setCaseName('');
    setCourtName('');
    setCitation('');
    setJudgmentUrl('');
    setPdfFile(null);
    onClearError();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote.trim()) return;

    onVerify(
      {
        quote: quote.trim(),
        case_name: caseName.trim() || undefined,
        court_name: courtName.trim() || undefined,
        citation: citation.trim() || undefined,
        judgment_url: judgmentUrl.trim() || undefined,
      },
      pdfFile
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPdfFile(file);
    }
  };

  const recentRows = [
    {
      id: '1',
      num: 1,
      quoteShort: 'Right to life includes the right to live...',
      fullQuote: 'The right to life includes the right to live with dignity.',
      caseName: 'Maneka Gandhi vs. Union of India',
      courtCase: 'SC / Maneka Gandhi',
      citation: 'AIR 1978 SC 597',
      court: 'Supreme Court of India',
      status: 'Exact Match',
      statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      date: '12 Sep 2025, 10:24 AM',
    },
    {
      id: '2',
      num: 2,
      quoteShort: 'Bail is the rule and jail is the exception...',
      fullQuote: 'Bail is the rule and jail is the exception in modern penal jurisprudence.',
      caseName: 'State of Rajasthan v. Balchand',
      courtCase: 'SC / Balchand',
      citation: '1977 AIR 2447',
      court: 'Supreme Court of India',
      status: 'Modified Quote',
      statusClass: 'bg-amber-100 text-amber-800 border-amber-300',
      date: '11 Sep 2025, 06:18 PM',
    },
    {
      id: '3',
      num: 3,
      quoteShort: 'Doctrine of basic structure...',
      fullQuote: 'Parliament cannot alter the basic structure or essential framework of the Constitution.',
      caseName: 'Kesavananda Bharati v. State of Kerala',
      courtCase: 'SC / Kesavananda Bharati',
      citation: '(1973) 4 SCC 225',
      court: 'Supreme Court of India',
      status: 'Context Mismatch',
      statusClass: 'bg-rose-100 text-rose-800 border-rose-300',
      date: '10 Sep 2025, 02:32 PM',
    },
    {
      id: '4',
      num: 4,
      quoteShort: 'Every citizen has a right to privacy...',
      fullQuote: 'Every citizen has a right to privacy extending to commercial espionage.',
      caseName: 'Justice K.S. Puttaswamy v. Union of India',
      courtCase: '—',
      citation: '(2017) 10 SCC 1',
      court: 'Supreme Court of India',
      status: 'Source Not Found',
      statusClass: 'bg-slate-100 text-slate-800 border-slate-300',
      date: '09 Sep 2025, 11:07 AM',
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Top Hero Banner Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-50/90 via-blue-50/50 to-indigo-100/70 border border-indigo-100 p-6 sm:p-7 shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-block text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
              AI POWERED LEGAL VERIFICATION
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Verify Legal Quotes.<br />
              <span className="text-indigo-600">Get Real Evidence.</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
              Validate legal quotations with AI, backed by real judgments, trusted sources and transparent evidence.
            </p>

            {/* 4 Feature Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-indigo-200/80 text-[11px] font-semibold text-slate-700 shadow-2xs">
                <FileCheck size={12} className="text-indigo-600" />
                <span>Source Verification</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-indigo-200/80 text-[11px] font-semibold text-slate-700 shadow-2xs">
                <GitCompare size={12} className="text-indigo-600" />
                <span>Word-Level Comparison</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-indigo-200/80 text-[11px] font-semibold text-slate-700 shadow-2xs">
                <Sparkles size={12} className="text-indigo-600" />
                <span>Quote DNA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-indigo-200/80 text-[11px] font-semibold text-slate-700 shadow-2xs">
                <FileText size={12} className="text-indigo-600" />
                <span>Evidence Reports</span>
              </span>
            </div>
          </div>

          {/* Right Side 3D Graphic Cards Illustration */}
          <div className="lg:col-span-4 hidden sm:flex justify-center lg:justify-end relative">
            <div className="relative w-48 h-36">
              {/* Main Document Card */}
              <div className="absolute top-2 right-2 w-36 h-28 rounded-xl bg-white border border-indigo-100 shadow-lg p-3 space-y-2 transform rotate-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                  <ShieldCheck size={14} />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-16 bg-slate-200 rounded"></div>
                  <div className="h-1.5 w-20 bg-slate-100 rounded"></div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute top-0 left-0 bg-white border border-emerald-200 shadow-md rounded-full px-2.5 py-1 flex items-center gap-1.5 text-[10px] font-bold text-emerald-700">
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span>Verified</span>
              </div>

              {/* Floating High Confidence Badge */}
              <div className="absolute bottom-2 left-4 bg-white border border-indigo-200 shadow-md rounded-full px-3 py-1 flex items-center gap-1.5 text-[10px] font-bold text-indigo-700">
                <Sparkles size={12} className="text-indigo-500" />
                <span>High Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Verify a Legal Quote Form Card */}
      <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-2xs space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <FileCheck size={18} />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-base">Verify a Legal Quote</h2>
            <p className="text-xs text-slate-500">
              Enter the details below to verify a legal quotation against authentic sources.
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={15} />
              <span>{error}</span>
            </div>
            <button onClick={onClearError} className="hover:text-rose-900">
              <X size={14} />
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column Form Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Legal Quotation <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    maxLength={1000}
                    placeholder='"The right to life includes the right to live with dignity."'
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-serif"
                    required
                  />
                  <span className="absolute bottom-2.5 right-3 text-[10px] text-slate-400">
                    {quote.length}/1000
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Case / Judgment Name <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={caseName}
                  onChange={(e) => setCaseName(e.target.value)}
                  placeholder="e.g. Maneka Gandhi vs. Union of India"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Court Name <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={courtName}
                  onChange={(e) => setCourtName(e.target.value)}
                  placeholder="e.g. Supreme Court of India"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Right Column Form Fields */}
            <div className="space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Case Citation <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={citation}
                    onChange={(e) => setCitation(e.target.value)}
                    placeholder="e.g. AIR 1978 SC 597"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Judgment URL <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="url"
                    value={judgmentUrl}
                    onChange={(e) => setJudgmentUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Upload Judgment PDF <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 rounded-xl hover:border-indigo-400 bg-slate-50 cursor-pointer transition-all">
                    <UploadCloud size={20} className="text-indigo-600 mb-1" />
                    <span className="text-xs font-medium text-slate-600">
                      {pdfFile ? pdfFile.name : 'Drag & drop or click to upload PDF (max 10MB)'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Form Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleClear}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Clear
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Search size={14} />
                  <span>Verify Quote</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* 3. Recent Verifications Table Card */}
      <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Recent Verifications</h3>
          <button
            onClick={() => onNavigateTab('history')}
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Quote (short)</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Court / Case</th>
                <th className="py-2.5 px-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentRows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => {
                    setQuote(row.fullQuote);
                    setCaseName(row.caseName);
                    setCourtName(row.court);
                    setCitation(row.citation);
                    onSelectRecent({
                      id: row.id,
                      label: row.caseName,
                      category: 'Landmark',
                      case_name: row.caseName,
                      citation: row.citation,
                      court_name: row.court,
                      quote: row.fullQuote,
                      expected_status: row.status,
                      description: row.quoteShort,
                    });
                  }}
                  className="hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-3 text-slate-400 font-mono">{row.num}</td>
                  <td className="py-3 px-3 font-medium text-slate-800 group-hover:text-indigo-600 max-w-xs truncate">
                    {row.quoteShort}
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${row.statusClass}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-600">{row.courtCase}</td>
                  <td className="py-3 px-3 text-slate-400">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Quick Access 4-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => onNavigateTab('batch')}
          className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-2">
            <Layers size={16} />
          </div>
          <h4 className="font-bold text-slate-900 text-xs group-hover:text-indigo-600 flex items-center justify-between">
            <span>Batch Audit</span>
            <ArrowRight size={13} className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
          </h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            Analyze multiple quotes from a document.
          </p>
        </div>

        <div
          onClick={() => onNavigateTab('history')}
          className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-2">
            <Clock size={16} />
          </div>
          <h4 className="font-bold text-slate-900 text-xs group-hover:text-indigo-600 flex items-center justify-between">
            <span>Audit History</span>
            <ArrowRight size={13} className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
          </h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            View and manage past verifications.
          </p>
        </div>

        <div
          onClick={() => onNavigateTab('corpus')}
          className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-2">
            <BookOpen size={16} />
          </div>
          <h4 className="font-bold text-slate-900 text-xs group-hover:text-indigo-600 flex items-center justify-between">
            <span>Landmark Corpus</span>
            <ArrowRight size={13} className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
          </h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            Search verified judgments and cases.
          </p>
        </div>

        <div
          onClick={() => onNavigateTab('benchmark')}
          className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-2">
            <BarChart3 size={16} />
          </div>
          <h4 className="font-bold text-slate-900 text-xs group-hover:text-indigo-600 flex items-center justify-between">
            <span>Benchmark &amp; Eval</span>
            <ArrowRight size={13} className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
          </h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            View model performance (when available).
          </p>
        </div>
      </div>
    </div>
  );
};
