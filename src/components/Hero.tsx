import React from 'react';
import { ArrowDown, Sparkles, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onDiscoverStory?: () => void;
  onWatchStory?: () => void;
  onExploreQuality?: () => void;
  onExploreProducts?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverStory, onWatchStory, onExploreQuality, onExploreProducts }) => {
  const { t } = useLanguage();
  const handleStory = onDiscoverStory || onWatchStory;
  const handleExplore = onExploreQuality || onExploreProducts;
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FFFDF8]">
      {/* Subtle Warm Background Glow */}
      <div 
        className="absolute top-12 right-0 w-[550px] h-[550px] bg-[#FAF4E7]/80 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#F6EBD5]/50 rounded-full blur-2xl -z-10 pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content - 7 cols on lg */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Small uppercase label */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-[1.5px] bg-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
                {t.hero.label}
              </span>
            </div>

            {/* Reference-Matched Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[70px] font-serif font-bold text-[#151515] leading-[1.06] tracking-tight mb-6">
              {t.hero.title1}<br />
              {t.hero.title2}{' '}
              <span className="text-[#EAB600] italic font-serif font-semibold">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#68645B] max-w-xl font-sans leading-relaxed mb-8">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={handleExplore}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-all duration-200 shadow-xs hover:shadow active:scale-[0.98] cursor-pointer"
              >
                <span>{t.hero.exploreCta}</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={handleStory}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FAF4E7] hover:bg-[#F6EBD5] text-[#151515] text-xs uppercase font-sans font-semibold tracking-wider rounded border border-[#151515]/10 transition-all duration-200 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#151515] text-[#FFC900] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span>{t.hero.storyCta}</span>
              </button>
            </div>

            {/* Three Minimal Trust Indicators (Strictly Food & Quality) */}
            <div className="pt-6 border-t border-[#151515]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 text-xs text-[#151515]">
                <div className="w-5 h-5 rounded-full bg-[#FFC900] flex items-center justify-center text-[#151515] shrink-0 font-bold text-[10px]">
                  ✓
                </div>
                <span className="font-semibold">{t.hero.trust1}</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#151515]">
                <div className="w-5 h-5 rounded-full bg-[#FFC900] flex items-center justify-center text-[#151515] shrink-0 font-bold text-[10px]">
                  ✓
                </div>
                <span className="font-semibold">{t.hero.trust2}</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#151515]">
                <div className="w-5 h-5 rounded-full bg-[#FFC900] flex items-center justify-center text-[#151515] shrink-0 font-bold text-[10px]">
                  ✓
                </div>
                <span className="font-semibold">{t.hero.trust3}</span>
              </div>
            </div>

          </div>

          {/* Right Asymmetrical Food Composition with Slide Indicator - 5 cols on lg */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Main Arch-shaped Image Frame - Authentic Italian Deli Food Only */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#FAF4E7]">
              <img
                src="/src/assets/images/hero_charcuterie_1793428038233.jpg"
                alt="Gourmet Italian charcuterie board with prosciutto, salami and olives"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Scrim gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/75 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption inside Frame */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#FFC900] font-bold mb-1">
                  100% Italian Mastery
                </p>
                <p className="text-sm font-serif italic text-white/95">
                  Prosciutto di Parma DOP, Mortadella & dry cured salamis
                </p>
              </div>
            </div>

            {/* Overlapping Circular Mask with Traditional Cured Salumi */}
            <div className="absolute -bottom-5 -left-6 sm:-left-3 w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl border-4 border-[#FFFFFF] bg-[#FAF4E7]">
              <img
                src="/src/assets/images/pinsa_mortadella_pistachio.jpg"
                alt="Artisanal Mortadella and pistachio specialty"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Small Floating Quality Card */}
            <div className="absolute top-8 -left-6 sm:-left-4 bg-[#FFFFFF] border border-[#151515]/10 rounded-xl p-3.5 shadow-xl max-w-[190px] text-left">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-5 h-5 rounded bg-[#FFC900] flex items-center justify-center text-[#151515]">
                  <Award className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-[#151515]">
                  Certified Quality
                </span>
              </div>
              <p className="text-[11px] text-[#68645B] leading-tight">
                BRC Grade AA & IFS Food certified curing & cleanroom slicing.
              </p>
            </div>

            {/* Vertical Slide Indicator (from Reference Image) */}
            <div className="hidden xl:flex flex-col items-center gap-2 absolute -right-8 top-1/2 -translate-y-1/2 text-xs font-mono text-[#68645B]">
              <span className="font-bold text-[#151515]">01</span>
              <div className="w-[1.5px] h-12 bg-[#FFC900]" />
              <span>04</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
