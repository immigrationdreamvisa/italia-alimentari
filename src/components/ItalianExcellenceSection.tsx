import React from 'react';
import {
  ArrowRight,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Feather
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { handleImageError } from '../utils/imageUtils';

interface ItalianExcellenceSectionProps {
  onDiscoverHeritage?: () => void;
  onExploreWorld: () => void;
}

export const ItalianExcellenceSection: React.FC<ItalianExcellenceSectionProps> = ({
  onDiscoverHeritage,
  onExploreWorld
}) => {
  const { t } = useLanguage();

  return (
    <section
      id="taste-of-excellence"
      className="bg-[#FFFDF8] text-[#151515] py-20 sm:py-28 lg:py-36 border-b border-[#151515]/8 overflow-hidden relative"
      aria-label="A Taste of Italian Excellence"
    >
      {/* Anchor for backwards compatibility with any #products navigation links */}
      <span id="products" className="absolute -top-24 left-0 pointer-events-none" aria-hidden="true" />

      {/* Decorative ambient background glows */}
      <div
        className="absolute top-20 right-0 w-[550px] h-[550px] bg-[#FAF4E7]/90 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-[#F6EBD5]/40 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ========================================================================= */}
        {/* SECTION HEADER: Editorial Title & Subtitle                               */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-bold text-[#68645B]">
              {t.excellence.label}
            </span>
            <span className="w-6 h-[1.5px] bg-[#FFC900]" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif font-bold text-[#151515] leading-[1.08] tracking-tight">
            {t.excellence.title}{' '}
            <span className="italic font-serif text-[#EAB600] font-normal">
              {t.excellence.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#5A554C] font-sans font-normal leading-relaxed max-w-2xl mx-auto">
            {t.excellence.description}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PART A: Large Editorial Hero                                             */}
        {/* ========================================================================= */}
        <div className="mb-24 sm:mb-32 lg:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Stunning Hero Food Photography */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FAF4E7] group">
                <img
                  src="/images/charcuterie_board_masterpiece.jpg"
                  alt="Authentic Italian charcuterie craftsmanship with whole Prosciutto, Mortadella, and Salame"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  onError={handleImageError}
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                {/* Floating caption chip on image */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-left text-white">
                  <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-md border border-white/25 rounded-md text-[10px] font-mono uppercase tracking-widest text-[#FFC900] font-bold mb-2">
                    Busseto Curing Cellars · Parma
                  </span>
                  <p className="text-sm sm:text-base font-serif italic text-white/95 leading-snug max-w-lg">
                    &ldquo;Cured with Cervia marine sea salt, fragrant mountain botanicals, and the unhurried patience of time.&rdquo;
                  </p>
                </div>
              </div>

              {/* Decorative accent stamp */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white border border-[#151515]/10 rounded-2xl p-4 shadow-xl items-center gap-3 max-w-[230px] text-left">
                <div className="w-10 h-10 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center font-bold shrink-0 shadow-xs">
                  <Award className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#777D45] font-bold block">
                    Consorzio Certified
                  </span>
                  <span className="text-xs font-serif font-bold text-[#151515] leading-tight block">
                    DOP & IGP Guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#777D45] font-bold block">
                  Emilian Heritage · Global Reach
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#151515] leading-tight tracking-tight">
                  Centuries of Heritage, Sliced for the World.
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#5A554C] font-sans leading-relaxed">
                In the fertile plains of the Italian Food Valley, charcuterie is never merely manufactured—it is cultivated. From our historic aging cellars in Busseto to the crisp alpine microclimates of Valtellina, Italia Alimentari unites ancestral curing recipes with state-of-the-art cleanroom technology.
              </p>

              <p className="text-xs sm:text-sm text-[#68645B] font-sans leading-relaxed border-l-2 border-[#FFC900] pl-4 italic">
                &ldquo;Perfection requires no haste. Only heavy selected Italian pork thighs, pure marine sea salt, and unhurried cellar rest.&rdquo;
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART B: Italian Craftsmanship Story (Asymmetrical Layout)                 */}
        {/* ========================================================================= */}
        <div className="mb-24 sm:mb-32 lg:mb-40 pt-12 border-t border-[#151515]/8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Content */}
            <div className="lg:col-span-6 flex flex-col text-left space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#FFC900]" />
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#777D45]">
                  The Craftsmanship Journey
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#151515] leading-tight tracking-tight">
                The Sacred Discipline of Patient Curing.
              </h3>

              <p className="text-sm sm:text-base text-[#5A554C] font-sans leading-relaxed">
                True gastronomic excellence cannot be rushed. Our master curers observe natural climatic variations—hot, humid summers that encourage gentle salt penetration, followed by cold, damp winters along the Po River that temper the meat to melt-in-the-mouth tenderness.
              </p>

              {/* 3 Craft Pillars with Subtle Micro-Treatments */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 bg-[#FAF4E7]/70 rounded-xl border border-[#151515]/6 text-left">
                  <div className="w-6 h-6 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#151515]">
                      100% Certified Italian Pork & Beef
                    </h4>
                    <p className="text-xs text-[#68645B] mt-0.5 leading-relaxed">
                      Rigorous selection from audited Italian breeding farms adhering to strict ClassyFarm animal welfare protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-[#FAF4E7]/70 rounded-xl border border-[#151515]/6 text-left">
                  <div className="w-6 h-6 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#151515]">
                      Artisanal Sea Salt & Natural Seasonings
                    </h4>
                    <p className="text-xs text-[#68645B] mt-0.5 leading-relaxed">
                      Hand-rubbed with marine sea salt from Cervia, crushed Tellicherry black peppercorns, and Bronte pistachios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-[#FAF4E7]/70 rounded-xl border border-[#151515]/6 text-left">
                  <div className="w-6 h-6 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#151515]">
                      Cleanroom Slicing & Sustainable Packaging
                    </h4>
                    <p className="text-xs text-[#68645B] mt-0.5 leading-relaxed">
                      Medical-grade ISO cleanroom slicing preventing fat smear, sealed in 100% recyclable FSC paper trays.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Asymmetric Photographic Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FAF4E7] group">
                <img
                  src="/images/artisan_handsalting_prosciutto.jpg"
                  alt="Master salumiere hand-salting fresh prosciutto in aging cellars"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC900] font-bold block mb-1">
                    Ancestral Microclimates
                  </span>
                  <p className="text-base font-serif italic text-white/95">
                    Over 24 months of slow breathing in wooden aging cellars.
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Image: Cleanroom Lab */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#FFFDF8]">
                <img
                  src="/images/sustainable_fsc_paper_packaging.jpg"
                  alt="Sustainable FSC certified paper packaging for charcuterie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[9px] font-mono text-white/90 text-left font-bold uppercase tracking-wider">
                  Eco-Friendly Clean Trays
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART C: Our Heritage & Expertise (3 Distinctive Editorial Highlights)      */}
        {/* ========================================================================= */}
        <div className="mb-24 sm:mb-32 lg:mb-40 pt-12 border-t border-[#151515]/8">
          <div className="max-w-3xl mb-12 text-left">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[1.5px] bg-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
                Three Pillars of Distinction
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] tracking-tight">
              Our Heritage & Expertise.
            </h3>
            <p className="text-sm sm:text-base text-[#5A554C] font-sans mt-3">
              Three founding principles that distinguish Italia Alimentari as a premier international ambassador of Italian gastronomic tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Highlight 1: Italian Food Heritage */}
            <div className="bg-[#FAF4E7]/60 border border-[#151515]/8 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:bg-[#FAF4E7] hover:border-[#FFC900]/60 transition-all duration-300 group shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-serif italic text-[#FFC900] font-bold">
                    01
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#151515]/8 flex items-center justify-center text-[#151515] group-hover:bg-[#FFC900] transition-colors shadow-xs">
                    <Award className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                <h4 className="text-xl font-serif font-bold text-[#151515] mb-3 group-hover:text-[#EAB600] transition-colors">
                  Italian Food Heritage
                </h4>

                <p className="text-xs sm:text-sm text-[#5A554C] leading-relaxed font-sans mb-6">
                  Deeply embedded in the lands of Giuseppe Verdi and the Rhaetian Alps. Proud guardians of Consorzio del Prosciutto di Parma DOP, Mortadella Bologna IGP, and Bresaola della Valtellina IGP recipe disciplines.
                </p>
              </div>

              <div className="pt-4 border-t border-[#151515]/8 flex items-center gap-2 text-[11px] font-mono text-[#777D45] font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#777D45]" />
                <span>60+ Years Regional Lineage</span>
              </div>
            </div>

            {/* Highlight 2: Artisanal Craftsmanship */}
            <div className="bg-[#FAF4E7]/60 border border-[#151515]/8 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:bg-[#FAF4E7] hover:border-[#FFC900]/60 transition-all duration-300 group shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-serif italic text-[#FFC900] font-bold">
                    02
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#151515]/8 flex items-center justify-center text-[#151515] group-hover:bg-[#FFC900] transition-colors shadow-xs">
                    <Sparkles className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                <h4 className="text-xl font-serif font-bold text-[#151515] mb-3 group-hover:text-[#EAB600] transition-colors">
                  Artisanal Craftsmanship
                </h4>

                <p className="text-xs sm:text-sm text-[#5A554C] leading-relaxed font-sans mb-6">
                  Master curing without shortcuts: hand-trussing, hand-rubbed sea salt, gentle aromatic beechwood smoke, and slow air stoves. Every single cut is organoleptically verified by certified master tasters.
                </p>
              </div>

              <div className="pt-4 border-t border-[#151515]/8 flex items-center gap-2 text-[11px] font-mono text-[#777D45] font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#777D45]" />
                <span>Hand-Trussed & Slow-Aged</span>
              </div>
            </div>

            {/* Highlight 3: Quality & Innovation */}
            <div className="bg-[#FAF4E7]/60 border border-[#151515]/8 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:bg-[#FAF4E7] hover:border-[#FFC900]/60 transition-all duration-300 group shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-serif italic text-[#FFC900] font-bold">
                    03
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#151515]/8 flex items-center justify-center text-[#151515] group-hover:bg-[#FFC900] transition-colors shadow-xs">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                <h4 className="text-xl font-serif font-bold text-[#151515] mb-3 group-hover:text-[#EAB600] transition-colors">
                  Quality & Innovation
                </h4>

                <p className="text-xs sm:text-sm text-[#5A554C] leading-relaxed font-sans mb-6">
                  BRCGS Grade AA and IFS Higher Level accredited. Positive pressure laminar cleanrooms, real-time gas chromatography (&lt;0.5% oxygen), and eco-sustainable paper bottom trays reducing plastic by 75%.
                </p>
              </div>

              <div className="pt-4 border-t border-[#151515]/8 flex items-center gap-2 text-[11px] font-mono text-[#777D45] font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#777D45]" />
                <span>12,000+ Annual Lab Analyses</span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART E: Final CTA (Full-Width Editorial Banner)                           */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-[#151515] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-center md:text-left border border-white/10">
          {/* Subtle warm glow background accent */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC900]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFC900] font-bold block">
                The Heritage of Italian Gastronomy
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Discover the Art of Italian Food.
              </h3>

              <p className="text-sm sm:text-base text-white/70 font-sans max-w-xl leading-relaxed">
                From gastronomy counters in Milan to Michelin-starred dining rooms across the globe, experience the unmatched taste of genuine Italian charcuterie.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <button
                onClick={onExploreWorld}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.98] cursor-pointer shrink-0"
              >
                <span>{t.excellence.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ItalianExcellenceSection;

