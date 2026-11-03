import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SolutionItem } from '../data/companyData';

interface SolutionModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onRequestProposal: (solutionTitle: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onRequestProposal
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-8">
        
        {/* Header */}
        <div className="p-8 bg-[#FAF4E7] border-b border-[#151515]/8 flex items-start justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#777D45] block mb-1">
              Dedicated Business Channel
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#151515]">
              {solution.title}
            </h3>
            <p className="text-xs font-semibold text-[#E9B800] uppercase tracking-wider mt-1">
              {solution.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white text-[#68645B] hover:text-[#151515] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] mb-2">
              Strategic Value & Channel Proposition
            </h4>
            <p className="text-sm text-[#151515] font-sans leading-relaxed">
              {solution.description}
            </p>
          </div>

          <div className="bg-[#FAF4E7] p-5 rounded-xl border border-[#151515]/6 space-y-3">
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#151515]">
              Core Capabilities & Service Level:
            </h4>
            <div className="space-y-2">
              {solution.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 text-xs text-[#151515]">
                  <CheckCircle2 className="w-4 h-4 text-[#777D45] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-[#68645B] bg-[#F5EEDF] p-4 rounded-lg">
            <span className="font-bold text-[#151515] block mb-1">Cold Chain Assurance:</span>
            <span>Temperature-monitored international dispatch, EDI ordering integration, and dedicated account management.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#FAF4E7] border-t border-[#151515]/8 flex items-center justify-between">
          <span className="text-xs text-[#68645B]">Tailored B2B partnership</span>
          <button
            onClick={() => {
              onRequestProposal(solution.title);
              onClose();
            }}
            className="px-5 py-2.5 bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors flex items-center gap-1.5"
          >
            <span>Request Channel Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
