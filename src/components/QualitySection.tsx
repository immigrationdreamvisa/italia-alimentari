import React from 'react';
import { QUALITY_STANDARDS } from '../data/companyData';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { handleImageError } from '../utils/imageUtils';

interface QualitySectionProps {
  onExploreQuality: () => void;
  onExploreSolutions: () => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({
  onExploreQuality,
  onExploreSolutions
}) => {
  const { t } = useLanguage();
  return (
    <section id="quality" className="py-24 md:py-32 bg-[#FAF4E7]/70 border-b border-[#151515]/6 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              {t.quality.label}
            </span>
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] leading-tight">
            {t.quality.title}{' '}
            <span className="italic font-serif text-[#EAB600]">
              {t.quality.titleHighlight}
            </span>
          </h2>
          <p className="mt-3 text-base text-[#68645B] font-sans">
            {t.quality.description}
          </p>
        </div>

        {/* 3-Column Asymmetrical Composition (Left: Quality Pillars, Center: Chef Plating Image, Right: Solutions Intro) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Quality Pillars (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            {t.quality.standards.map((std, idx) => (
              <div key={std.title} className="bg-white/80 border border-[#151515]/8 rounded-xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    ✓
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#151515]">
                    {std.title}
                  </h4>
                </div>
                <p className="text-xs text-[#68645B] leading-relaxed pl-10 font-sans">
                  {std.description}
                </p>
              </div>
            ))}

            <button
              onClick={onExploreQuality}
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#151515] hover:text-[#EAB600] transition-colors self-start pl-2 pt-2 cursor-pointer"
            >
              <span>{t.quality.viewCertificationsBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center Column: Large Professional Food Preparation Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-t-[120px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FFFDF8]">
              <img
                src="/images/hero_prosciutto_rosette.jpg"
                alt="Finely sliced Prosciutto di Parma rosettes displaying artisanal curing and texture"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC900] font-bold block mb-1">
                  Artisanal Precision
                </span>
                <p className="text-sm font-serif italic text-white/95">
                  Every cut and slice is inspected to maintain the authentic organoleptic profile.
                </p>
              </div>
            </div>

            {/* Quality Stamp */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#151515] text-white flex flex-col items-center justify-center border-4 border-[#FFFDF8] shadow-lg text-center p-2">
              <span className="text-[8px] font-mono text-[#FFC900] tracking-widest">BRCGS</span>
              <span className="text-sm font-serif font-bold text-white">AA</span>
              <span className="text-[8px] text-white/70">GRADE</span>
            </div>
          </div>

          {/* Right Column: Tailored Solutions Introduction (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6 bg-white border border-[#151515]/10 rounded-2xl p-6 text-left shadow-xs">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#777D45] font-bold block mb-2">
                Tailored Solutions
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#151515] mb-3 leading-snug">
                Engineered for Global Food Professionals
              </h3>
              <p className="text-xs text-[#68645B] leading-relaxed mb-4">
                We develop bespoke deli solutions for large retail supermarket chains, culinary foodservice operators, and industrial pizza and ready-meal manufacturers.
              </p>

              <div className="space-y-2 text-xs text-[#151515] pt-2 border-t border-[#151515]/6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span>Large Retail (GDO) Co-Packing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span>Ho.Re.Ca. Interleaved Trays</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span>B2B Industrial Meat Ingredients</span>
                </div>
              </div>
            </div>

            <button
              onClick={onExploreSolutions}
              className="w-full py-3 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>{t.quality.exploreSolutionsBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Quality Verification & Cleanroom Gallery (Real Non-Duplicated Facilities & Labs) */}
        <div className="mt-16 pt-12 border-t border-[#151515]/8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#777D45] font-bold block mb-1">
                Real Food Science & Field Verification
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515]">
                Behind the Cleanroom & Cellar Doors
              </h3>
            </div>
            <span className="text-xs text-[#68645B] font-sans">
              100% authentic production facilities across the Italian Food Valley
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Laboratory Spectrometry */}
            <div className="bg-white border border-[#151515]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 text-left group">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF4E7]">
                <img
                  src="/images/laboratory_spectrometry_quality.jpg"
                  alt="Quality assurance specialist performing spectrometry and microbiological inspection"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#151515]/80 text-[#FFC900] border border-[#FFC900]/30 backdrop-blur-xs">
                  IN-HOUSE LABS
                </span>
                <span className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">
                  12,000+ Annual Analyses
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-serif font-bold text-base text-[#151515] mb-1.5 group-hover:text-[#EAB600] transition-colors">
                  Spectrometry & Microbiological Control
                </h4>
                <p className="text-xs text-[#68645B] leading-relaxed">
                  Continuous gas chromatography and laser optical inspection verifying residual oxygen below 0.5% in cleanroom MAP trays.
                </p>
                <div className="mt-3 pt-3 border-t border-[#151515]/6 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#777D45]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#777D45]" />
                  <span>ISO 17025 Standard Compliance</span>
                </div>
              </div>
            </div>

            {/* Card 2: Alpine Microclimate */}
            <div className="bg-white border border-[#151515]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 text-left group">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF4E7]">
                <img
                  src="/images/alpine_valtellina_facility.jpg"
                  alt="Alpine Valtellina facility utilizing natural high-altitude microclimate"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#151515]/80 text-[#FFC900] border border-[#FFC900]/30 backdrop-blur-xs">
                  VALTELLINA FACILITY
                </span>
                <span className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">
                  Postalesio (Sondrio)
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-serif font-bold text-base text-[#151515] mb-1.5 group-hover:text-[#EAB600] transition-colors">
                  Alpine Breeze Air-Curing Disciplines
                </h4>
                <p className="text-xs text-[#68645B] leading-relaxed">
                  Natural high-altitude ventilation and unhurried alpine maturation for certified Bresaola della Valtellina IGP charcuterie.
                </p>
                <div className="mt-3 pt-3 border-t border-[#151515]/6 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#777D45]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#777D45]" />
                  <span>CSQA Audited & DOP Disciplinary</span>
                </div>
              </div>
            </div>

            {/* Card 3: Busseto Heritage Cellars */}
            <div className="bg-white border border-[#151515]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 text-left group">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF4E7]">
                <img
                  src="/images/busseto_heritage_estate.jpg"
                  alt="Historic Busseto estate and microclimate aging cellars in the Parma Food Valley"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#151515]/80 text-[#FFC900] border border-[#FFC900]/30 backdrop-blur-xs">
                  PARMA FOOD VALLEY
                </span>
                <span className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">
                  Busseto Production Hub
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-serif font-bold text-base text-[#151515] mb-1.5 group-hover:text-[#EAB600] transition-colors">
                  Centuries-Old Busseto Curing Cellars
                </h4>
                <p className="text-xs text-[#68645B] leading-relaxed">
                  Heavy 100% Italian pork thighs rest under carefully regulated humidity and seasonal cellar drafts for 24 months.
                </p>
                <div className="mt-3 pt-3 border-t border-[#151515]/6 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#777D45]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#777D45]" />
                  <span>Consorzio del Prosciutto di Parma DOP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
