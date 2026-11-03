import React from 'react';
import { SOLUTIONS_DATA, SolutionItem } from '../data/companyData';
import { Store, UtensilsCrossed, Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface SolutionsPageProps {
  onSelectSolution: (s: SolutionItem) => void;
  onRequestProposal: (title: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onSelectSolution,
  onRequestProposal
}) => {
  const icons: Record<string, any> = {
    Store,
    UtensilsCrossed,
    Factory
  };

  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Market Channels & Partnerships
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-tight mb-4">
            Tailored Business{' '}
            <span className="italic font-serif text-[#EAB600]">
              Solutions.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            Whether supplying global supermarket chains with private label ranges, Michelin-level hospitality with pre-sliced deli logs, or industrial processors with precision meat ingredients, we engineer dedicated solutions.
          </p>
        </div>

        {/* 3 Channels In-Depth */}
        <div className="space-y-12 mb-16">
          {SOLUTIONS_DATA.map((sol, idx) => {
            const Icon = icons[sol.icon] || Store;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={sol.id}
                className={`bg-[#FAF4E7]/60 border border-[#151515]/8 rounded-3xl p-6 sm:p-10 flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Visual */}
                <div className="w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white shrink-0">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    onError={handleImageError}
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FFC900] text-[#151515] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#777D45] uppercase tracking-wider">
                        {sol.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-[#151515] mb-2">
                      {sol.title}
                    </h2>
                    <p className="text-xs font-semibold text-[#EAB600] uppercase tracking-wide mb-4">
                      {sol.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed mb-6 font-sans">
                      {sol.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {sol.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-[#151515]">
                          <CheckCircle2 className="w-4 h-4 text-[#777D45] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#151515]/8">
                    <button
                      onClick={() => onRequestProposal(sol.title)}
                      className="px-6 py-3 bg-[#151515] hover:bg-[#252525] text-white text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Request Channel Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFC900]" />
                    </button>
                    <button
                      onClick={() => onSelectSolution(sol)}
                      className="px-5 py-3 bg-white border border-[#151515]/10 text-xs text-[#151515] font-bold uppercase rounded hover:bg-[#FAF4E7] transition-colors cursor-pointer"
                    >
                      View Specs
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Private Label Section */}
        <div className="bg-[#151515] text-white rounded-3xl p-8 sm:p-12 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFC900] block mb-2 font-bold">
              Turnkey Private Label & Co-Packing
            </span>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">
              Your Brand with Authentic Italian Quality
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-sans">
              We manage recipe formulation, slice thickness, bespoke MAP gas ratios, eco-tray sourcing, and regulatory labeling compliance for European and global private labels.
            </p>
            <button
              onClick={() => onRequestProposal('Private Label Project')}
              className="px-6 py-3 bg-[#FFC900] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded hover:bg-[#EAB600] transition-colors cursor-pointer"
            >
              Consult with Private Label Director
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
