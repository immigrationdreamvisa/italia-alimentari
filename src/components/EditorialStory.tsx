import React from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Leaf, Clock, Cpu } from 'lucide-react';

interface EditorialStoryProps {
  onOpenCharter: () => void;
}

export const EditorialStory: React.FC<EditorialStoryProps> = ({ onOpenCharter }) => {
  const pillars = [
    {
      num: '01',
      title: 'Premium Raw Materials',
      desc: 'Sourced exclusively from certified Italian livestock farms with strict animal welfare protocols and non-GMO nutrition.'
    },
    {
      num: '02',
      title: 'Master Salumi Tradition',
      desc: 'Slow curing in microclimates of Busseto and Valtellina. Sea salt, mountain air, and natural cellar molds.'
    },
    {
      num: '03',
      title: 'ISO Cleanroom Technology',
      desc: 'Cleanroom slicing chambers with positive air pressure, preventing oxidation and preserving organoleptic purity.'
    },
    {
      num: '04',
      title: 'Sustainable Packaging',
      desc: 'Pioneering recyclable paper-bottom trays and ultra-light films, eliminating hundreds of tons of virgin plastic yearly.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#151515] text-white relative overflow-hidden">
      
      {/* Background Subtle Italian Texture */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC900]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Headline & Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#FFC900]">
                Artisanal Conscience
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.12] mb-6">
              More Than Food.{' '}
              <span className="italic font-serif text-[#FFC900] block mt-1">
                A Way of Life.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#FAF4E7]/70 font-sans leading-relaxed mb-10 max-w-xl">
              In Italy, charcuterie is not merely an industrial product—it is an art form intertwined with land, patience, and communal conviviality. We balance heritage cellar aging with technological excellence.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-12">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs text-[#FFC900] font-bold">{pillar.num}.</span>
                    <h4 className="text-base font-serif font-bold text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Elegant Yellow CTA */}
            <div>
              <button
                onClick={onOpenCharter}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-all duration-200 shadow-md active:scale-[0.98]"
              >
                <span>View Quality Commitments & Standards</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

          {/* Right: Production Visual & Quality Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#252525]">
              <img
                src="/src/assets/images/modern_production_plant_1793428040629.jpg"
                alt="Automated high-speed slicing and quality inspection line"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/90 via-[#151515]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC900] font-bold block mb-1">
                  Quality Assurance Lab
                </span>
                <p className="text-sm font-serif text-white/90">
                  Continuous microbiological testing and laser optical verification on every single slice tray.
                </p>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#FFFFFF] text-[#151515] p-4 rounded-xl shadow-xl border border-white/20 text-left max-w-[220px]">
              <span className="text-2xl font-serif font-bold text-[#151515] block">
                -75%
              </span>
              <span className="text-xs font-sans font-bold text-[#777D45] uppercase tracking-wider block mb-1">
                Plastic Reduction
              </span>
              <p className="text-[11px] text-[#68645B] leading-tight">
                Through our patented Eco-Paper Tray packaging system.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
