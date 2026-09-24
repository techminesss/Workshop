import React from 'react';
import { X, Wrench, CheckCircle2, ShieldAlert, Laptop } from 'lucide-react';
import { SyllabusModule } from '../types';

interface ModuleDetailModalProps {
  module: SyllabusModule | null;
  onClose: () => void;
  onReserveClick: () => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  onClose,
  onReserveClick,
}) => {
  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0f0f14] border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-zinc-800 bg-zinc-950/80">
          <div>
            <span className="inline-block text-xs font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-full mb-2">
              {module.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {module.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800 cursor-pointer shrink-0 ml-3"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-sm text-zinc-300">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Overview &amp; Practical Purpose
            </h4>
            <p className="leading-relaxed text-zinc-300">
              {module.description}
            </p>
          </div>

          {/* Tools Used */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
              <Wrench className="w-4 h-4" />
              Software &amp; Tools Used in This Lab
            </h4>
            <div className="flex flex-wrap gap-2">
              {module.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-mono font-semibold text-zinc-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Practical Learning Outcomes */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
              <CheckCircle2 className="w-4 h-4" />
              Hands-On Exercises You Will Perform
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {module.learningOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Demo Scenario */}
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/25">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
              <ShieldAlert className="w-4 h-4" />
              Live Demonstration Scenario
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              {module.liveDemoScenario}
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between gap-4">
          <span className="text-xs text-zinc-400">
            Included in the 3-hour masterclass.
          </span>
          <button
            onClick={() => {
              onClose();
              onReserveClick();
            }}
            className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider shadow-md cursor-pointer"
          >
            Reserve Free Seat
          </button>
        </div>
      </div>
    </div>
  );
};
