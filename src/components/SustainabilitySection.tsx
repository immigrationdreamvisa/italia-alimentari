import React from 'react';
import { SUSTAINABILITY_PILLARS } from '../data/companyData';
import { Package, ShieldCheck, Zap, Recycle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SustainabilitySectionProps {
  onOpenCharter?: () => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onOpenCharter }) => {
  const { t } = useLanguage();
  const icons = [Package, Zap, ShieldCheck, Recycle];

  return (
    <section id="sustainability" className="py-24 md:py-32 bg-[#FAF4E7] border-b border-[#151515]/6 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              {t.sustainability.label}
            </span>
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] leading-tight">
            {t.sustainability.title}{' '}
            <span className="italic font-serif text-[#EAB600]">
              {t.sustainability.titleHighlight}
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            {t.sustainability.description}
          </p>
        </div>

        {/* 4 Focused Manufacturing & Packaging Sustainability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-14">
          {t.sustainability.pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.title}
                className="bg-white border border-[#151515]/8 rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF4E7] text-[#151515] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#EAB600]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#777D45] bg-[#F6EBD5] px-2.5 py-1 rounded">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#151515] mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#68645B] leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#151515]/6 text-[11px] font-sans font-bold text-[#151515] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span>Audited Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Packaging Feature Highlight Banner */}
        <div className="bg-[#FFFDF8] border border-[#151515]/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center shrink-0">
              <Package className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-[#151515]">
                The Eco-Tray Innovation: Paper-Bottom MAP Technology
              </h4>
              <p className="text-xs text-[#68645B] mt-0.5">
                Our recyclable FSC-certified paper tray eliminates 75% of fossil plastics while guaranteeing the same 90-day chilled shelf life.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#FAF4E7] text-[#151515] border border-[#151515]/10">
              <span className="w-2 h-2 rounded-full bg-[#777D45]" />
              FSC Certified · 100% Recyclable Paper Base
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
