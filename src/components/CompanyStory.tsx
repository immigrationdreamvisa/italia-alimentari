import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, HeartHandshake } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface CompanyStoryProps {
  onOpenStoryModal: () => void;
}

export const CompanyStory: React.FC<CompanyStoryProps> = ({ onOpenStoryModal }) => {
  const [activeTab, setActiveTab] = useState<'tradition' | 'innovation'>('tradition');

  return (
    <section id="company" className="py-24 bg-[#FAF4E7]/60 border-y border-[#151515]/6 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#777D45]">
                Our Philosophy & Heritage
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] leading-[1.15] mb-6">
              Rooted in Tradition.{' '}
              <span className="italic text-[#E9B800] block mt-1">
                Driven by Innovation.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed mb-6">
              Born in the heart of Italy&apos;s renowned Food Valley, Italia Alimentari is the specialized charcuterie division of the Cremonini Group. For over six decades, our master curers have united ancestral artisan knowledge with cleanroom slicing technologies to bring authentic Italian deli specialties to tables across the globe.
            </p>

            <p className="text-sm sm:text-base text-[#68645B] font-sans leading-relaxed mb-8">
              From our slow curing cellars in Busseto (Parma) to high-speed slicing centers in Gazoldo degli Ippoliti and alpine curing lofts in Valtellina, every phase is governed by uncompromising supply chain ethics and rigorous food safety traceability.
            </p>

            {/* Interactive Pillar Tabs */}
            <div className="flex items-center gap-2 mb-8 p-1.5 bg-[#F5EEDF] rounded-lg max-w-xs">
              <button
                onClick={() => setActiveTab('tradition')}
                className={`flex-1 py-2 text-xs font-sans font-semibold rounded transition-colors ${
                  activeTab === 'tradition'
                    ? 'bg-[#FFFFFF] text-[#151515] shadow-xs'
                    : 'text-[#68645B] hover:text-[#151515]'
                }`}
              >
                Curing Tradition
              </button>
              <button
                onClick={() => setActiveTab('innovation')}
                className={`flex-1 py-2 text-xs font-sans font-semibold rounded transition-colors ${
                  activeTab === 'innovation'
                    ? 'bg-[#FFFFFF] text-[#151515] shadow-xs'
                    : 'text-[#68645B] hover:text-[#151515]'
                }`}
              >
                Modern Slicing
              </button>
            </div>

            {/* Dynamic Pillar Content */}
            <div className="mb-8 min-h-[90px] border-l-2 border-[#FFC900] pl-4">
              {activeTab === 'tradition' && (
                <div className="space-y-1.5">
                  <h4 className="text-sm font-serif font-bold text-[#151515]">Time, Sea Salt & Pure Air</h4>
                  <p className="text-xs text-[#68645B] leading-relaxed">
                    Long, patient cellar maturation adhering to strict DOP Parma and IGP Bologna specifications. No shortcuts, artificial colorings, or rapid aging.
                  </p>
                </div>
              )}
              {activeTab === 'innovation' && (
                <div className="space-y-1.5">
                  <h4 className="text-sm font-serif font-bold text-[#151515]">ISO Cleanrooms & Modified Atmosphere</h4>
                  <p className="text-xs text-[#68645B] leading-relaxed">
                    Sub-zero sterile slicing lines that capture the authentic organoleptic profile of fresh cold cuts without crushing the delicate meat fibres.
                  </p>
                </div>
              )}
            </div>

            {/* Button */}
            <div>
              <button
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#151515] hover:bg-[#252525] text-white text-xs uppercase font-sans font-bold tracking-wider rounded transition-all duration-200"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#FFC900]" />
              </button>
            </div>

          </div>

          {/* Right Arched & Overlapping Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Primary Large Arch Card - Countryside */}
              <div className="col-span-8 relative">
                <div className="aspect-[3/4] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-xl border-4 border-[#FFFFFF] bg-[#FFFDF8]">
                  <img
                    src="/images/italian_countryside_1793428037750.jpg"
                    alt="Sunlit hills and vineyards of Emilia-Romagna and Lombardy"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <span className="text-[10px] tracking-widest uppercase font-mono text-[#FFC900]">The Food Valley</span>
                    <p className="text-sm font-serif italic text-white/95">Emilia-Romagna & Lombardy</p>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Stack - Production & Craft */}
              <div className="col-span-4 flex flex-col gap-4 -ml-6 z-10">
                
                {/* Secondary Image Card */}
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-3 border-[#FFFFFF] bg-[#FAF4E7]">
                  <img
                    src="/images/modern_production_plant_1793428040629.jpg"
                    alt="Cleanroom slicing line at Italia Alimentari"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    onError={handleImageError}
                  />
                </div>

                {/* Floating Fact Card */}
                <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#151515]/10 shadow-md text-left">
                  <div className="w-7 h-7 rounded bg-[#FAF4E7] flex items-center justify-center text-[#777D45] mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#777D45]" />
                  </div>
                  <div className="text-lg font-serif font-bold text-[#151515]">1962</div>
                  <div className="text-[11px] text-[#68645B] leading-tight">
                    Curing excellence since the founding of Ibis in Busseto.
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
