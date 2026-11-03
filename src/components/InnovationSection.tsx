import React from 'react';
import { ArrowUpRight, Cpu, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface InnovationSectionProps {
  onDiscoverInnovation: () => void;
}

export const InnovationSection: React.FC<InnovationSectionProps> = ({ onDiscoverInnovation }) => {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-[#FFFDF8] border-b border-[#151515]/6 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Unique Image of Modern Slicing Equipment & Cleanroom (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FAF4E7]">
              <img
                src="/src/assets/images/sustainable_solar_facility.jpg"
                alt="State-of-the-art Gazoldo industrial facility and automated slicing lines at Italia Alimentari"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC900] font-bold block mb-1">
                  {t.innovation.captionTitle}
                </span>
                <p className="text-sm font-serif italic text-white/95">
                  {t.innovation.captionDesc}
                </p>
              </div>
            </div>

            {/* Quality Badge */}
            <div className="absolute -bottom-5 -right-4 bg-white border border-[#151515]/10 rounded-xl p-4 shadow-xl text-left max-w-[210px]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded bg-[#FFC900] flex items-center justify-center text-[#151515]">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-[#151515]">
                  {t.innovation.badgeTitle}
                </span>
              </div>
              <p className="text-[11px] text-[#68645B] leading-tight">
                {t.innovation.badgeDesc}
              </p>
            </div>
          </div>

          {/* Right: Editorial Content on Manufacturing & Innovation (6 cols) */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
                {t.innovation.label}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] leading-tight mb-6">
              {t.innovation.title}{' '}
              <span className="italic font-serif text-[#EAB600]">
                {t.innovation.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed mb-6">
              {t.innovation.description}
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFC900] flex items-center justify-center text-[#151515] font-bold text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#151515]">ISO Cleanrooms with Laminar Flow</h4>
                  <p className="text-xs text-[#68645B] leading-relaxed">
                    Positive-pressure filtered atmosphere ensures prolonged shelf life without artificial chemical preservatives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFC900] flex items-center justify-center text-[#151515] font-bold text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#151515]">Patented "Fetta Mossa" Slicing</h4>
                  <p className="text-xs text-[#68645B] leading-relaxed">
                    Specialized folding heads create airy, voluminous slice draping just like a traditional Italian salumiere slicing to order.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFC900] flex items-center justify-center text-[#151515] font-bold text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#151515]">Automated Laser Vision & Leak Testing</h4>
                  <p className="text-xs text-[#68645B] leading-relaxed">
                    100% in-line verification of tray sealing hermeticity and residual oxygen levels before packaging.
                  </p>
                </div>
              </div>
            </div>

            {/* Yellow Discover Innovation CTA */}
            <div>
              <button
                onClick={onDiscoverInnovation}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-all duration-200 shadow-xs cursor-pointer"
              >
                <span>{t.innovation.discoverBtn}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
