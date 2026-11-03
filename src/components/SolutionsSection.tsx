import React from 'react';
import { SOLUTIONS_DATA, SolutionItem } from '../data/companyData';
import { Store, UtensilsCrossed, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const { t } = useLanguage();
  const iconMap: Record<string, React.ReactNode> = {
    Store: <Store className="w-5 h-5" />,
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5" />,
    Factory: <Factory className="w-5 h-5" />
  };

  // Dedicated visual backgrounds for each solution category (100% unique images)
  const solutionVisuals = [
    {
      img: '/src/assets/images/sliced_deli_meats_1793428038740.jpg',
      alt: 'Large Retail GDO pre-sliced deli shelves'
    },
    {
      img: '/src/assets/images/foodservice_culinary_prep.jpg',
      alt: 'Food service and culinary chef kitchen preparation'
    },
    {
      img: '/src/assets/images/glazed_crisp_bacon_1793428040147.jpg',
      alt: 'Industrial culinary bacon cuts and customized meat manufacturing'
    }
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-[#FAF4E7] border-y border-[#151515]/6 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              {t.solutions.label}
            </span>
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] leading-tight">
            {t.solutions.title}{' '}
            <span className="italic font-serif text-[#E9B800]">
              {t.solutions.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            {t.solutions.description}
          </p>
        </div>

        {/* 3 Large Visual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((solution, idx) => {
            const visual = solutionVisuals[idx % solutionVisuals.length];
            return (
              <div
                key={solution.id}
                onClick={() => onSelectSolution(solution)}
                className="group cursor-pointer bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#151515]/10 shadow-sm hover:shadow-2xl hover:border-[#FFC900]/70 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Visual Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5EEDF]">
                  <img
                    src={visual.img}
                    alt={visual.alt}
                    className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/75 via-[#151515]/20 to-transparent" />

                  {/* Icon & Badge on top */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#FFFDF8]/90 backdrop-blur-xs text-[#151515] text-[10px] font-sans uppercase font-bold tracking-wider rounded">
                      {t.solutions.items[idx]?.badge || solution.badge}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center shadow-md">
                      {iconMap[solution.icon]}
                    </div>
                  </div>

                  {/* Title overlay in image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white text-left">
                    <h3 className="text-2xl font-serif font-bold group-hover:text-[#FFC900] transition-colors">
                      {t.solutions.items[idx]?.title || solution.title}
                    </h3>
                    <p className="text-xs text-white/80 font-sans mt-0.5">
                      {t.solutions.items[idx]?.tagline || solution.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between text-left">
                  <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed mb-6">
                    {t.solutions.items[idx]?.description || solution.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {(t.solutions.items[idx]?.features || solution.features).map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-[#151515]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#777D45] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Explore Link with Circular Arrow */}
                  <div className="pt-4 border-t border-[#151515]/6 flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-[#151515] group-hover:text-[#E9B800] transition-colors uppercase tracking-wider">
                      {t.solutions.viewSpecs}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF4E7] group-hover:bg-[#FFC900] text-[#151515] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
