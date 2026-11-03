import React from 'react';
import { SUSTAINABILITY_PILLARS } from '../data/companyData';
import { Package, Zap, ShieldCheck, Recycle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SustainabilityPageProps {
  onOpenCharter?: () => void;
  onContact: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({
  onOpenCharter,
  onContact
}) => {
  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Environmental & Industrial Governance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-tight mb-4">
            Good Food for a{' '}
            <span className="italic font-serif text-[#EAB600]">
              Better Tomorrow.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            Our sustainability model focuses directly on factory efficiency, circular packaging materials, reduced carbon footprint in cold storage, and non-GMO animal welfare.
          </p>
        </div>

        {/* The 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SUSTAINABILITY_PILLARS.map((p) => (
            <div key={p.title} className="p-7 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#777D45] bg-[#F6EBD5] px-2.5 py-1 rounded inline-block mb-3">
                  {p.metric}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#151515] mb-2">{p.title}</h3>
                <p className="text-xs text-[#68645B] leading-relaxed font-sans">{p.description}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#151515]/6 flex items-center gap-1.5 text-xs text-[#151515] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#777D45]" />
                <span>Audited Progress</span>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive 1: Packaging Revolution */}
        <div className="bg-white border border-[#151515]/10 rounded-3xl p-8 sm:p-12 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#EAB600] font-bold block">
                Circular Materials
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#151515]">
                Pioneering the Paper-Bottom Eco Tray
              </h2>
              <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed font-sans">
                Conventional deli packaging relies on heavy multi-layer unrecyclable fossil plastics. Italia Alimentari developed a patented paper-bottom tray manufactured from FSC-certified sustainable wood pulp. The paper and thin barrier film are easily separable by consumers, allowing 75% of the package to be recycled in household paper bins.
              </p>
              <div className="space-y-2 text-xs text-[#151515] pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span><strong>75% Plastic Reduction:</strong> Certified by European recyclability institutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span><strong>90-Day Freshness:</strong> Same modified atmosphere protective barrier as traditional plastics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span><strong>FSC Certified:</strong> Responsibly managed renewable forestry sources</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-[#FAF4E7] bg-[#FAF4E7]">
              <img
                src="/src/assets/images/sustainable_fsc_paper_packaging.jpg"
                alt="Recyclable FSC-certified paper-bottom charcuterie tray"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Deep Dive 2: Renewable Energy & Clean Operations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl">
            <h3 className="text-2xl font-serif font-bold text-[#151515] mb-3">
              Photovoltaic Power at Gazoldo
            </h3>
            <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed mb-4">
              Our central manufacturing plant in Gazoldo features extensive solar panel coverage across refrigeration warehouse roofs, directly generating clean electricity for cold storage compression systems.
            </p>
            <span className="text-xs font-mono font-bold text-[#777D45]">
              ISO 50001 Energy Management Certified
            </span>
          </div>

          <div className="p-8 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl">
            <h3 className="text-2xl font-serif font-bold text-[#151515] mb-3">
              Heat Recovery & Water Chilling Loops
            </h3>
            <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed mb-4">
              Thermal energy released during chilling loops is captured via heat exchangers to preheat facility sanitization water, drastically reducing fossil fuel usage.
            </p>
            <span className="text-xs font-mono font-bold text-[#777D45]">
              Closed-Loop Thermal Efficiency
            </span>
          </div>
        </div>

        {/* ESG Inquiries Bar */}
        <div className="bg-[#151515] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-1">
              Sustainability & Quality Commitments
            </h3>
            <p className="text-xs text-white/70">
              Verified corporate metrics and Cremonini Group ESG governance reports.
            </p>
          </div>
          <button
            onClick={onContact}
            className="px-6 py-3.5 bg-[#FFC900] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded hover:bg-[#EAB600] transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Inquire on ESG Standards</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

      </div>
    </div>
  );
};
