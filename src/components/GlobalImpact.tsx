import React from 'react';
import { STATS_DATA, StatItem } from '../data/companyData';
import { Globe, Award, Factory, CheckCircle2 } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

export const GlobalImpact: React.FC = () => {
  const iconList = [Globe, Factory, Award, CheckCircle2];

  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-[#151515] text-white">
      {/* Background Image: Master Italian Ham Aging Cellar with Dramatic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/artisan_curing_cellar_1793429018781.jpg"
          alt="Artisan cured prosciutto cellar"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#151515]/90 via-[#151515]/80 to-[#151515]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Uppercase Section Kicker */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-5 h-[1.5px] bg-[#FFC900]" />
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#FFC900]">
            Scale & Quality Without Compromise
          </span>
          <span className="w-5 h-[1.5px] bg-[#FFC900]" />
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-6">
          A Global <span className="italic font-serif text-[#FFC900]">Presence.</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#FAF4E7]/70 font-sans leading-relaxed mb-16">
          Rooted in Italy, trusted across the world. Our verified industrial numbers reflect continuous investment in food safety, precision cold chain and artisan curing standards.
        </p>

        {/* Verified Figures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10 pt-4">
          {STATS_DATA.map((stat, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center px-6 py-4 text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC900] mb-5 group-hover:bg-[#FFC900] group-hover:text-[#151515] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Oversized Serif Number */}
                <span className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight mb-2 tabular-nums">
                  {stat.number}
                </span>

                {/* Small Elegant Label */}
                <span className="text-sm uppercase tracking-wider font-sans font-semibold text-[#FFC900] mb-2">
                  {stat.label}
                </span>

                {/* Context Subtext */}
                <p className="text-xs text-white/60 font-sans max-w-[200px] leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/60">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
            BRCGS Packaging & Food Safety Grade AA
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
            IFS Food Higher Level Certified
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
            Consorzio del Prosciutto di Parma & Culatello DOP
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
            USDA & Canadian CFIA Export Authorization
          </span>
        </div>

      </div>
    </section>
  );
};
