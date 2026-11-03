import React from 'react';
import { BRANDS_DATA, BrandItem } from '../data/companyData';
import { ArrowUpRight, Crown, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface BrandsSectionProps {
  onSelectBrand: (brand: BrandItem) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onSelectBrand }) => {
  const brandIcons: Record<string, React.ReactNode> = {
    Crown: <Crown className="w-4 h-4" />,
    Award: <Award className="w-4 h-4" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4" />,
    HeartHandshake: <HeartHandshake className="w-4 h-4" />
  };

  const brandVisuals: Record<string, string> = {
    'ibis-1962': '/src/assets/images/hero_charcuterie_1793428038233.jpg',
    'corte-buona': '/src/assets/images/sliced_deli_meats_1793428038740.jpg',
    'montagna': '/src/assets/images/artisan_curing_cellar_1793429018781.jpg',
    'spanino': '/src/assets/images/italian_snacks_panini_1793428039900.jpg',
    'vitale-deli': '/src/assets/images/chef_plating_charcuterie_1793429017594.jpg',
    'corte-buona-usa': '/src/assets/images/traditional_deli_meats_1793428037900.jpg',
    'cuor-di-terra': '/src/assets/images/gourmet_recipe_spread_1793429018072.jpg',
    'shop-ibis': '/src/assets/images/glazed_crisp_bacon_1793428040147.jpg'
  };

  // Feature top 4 flagship brands on home page
  const featuredBrands = BRANDS_DATA.slice(0, 4);

  return (
    <section id="brands" className="py-24 md:py-32 bg-[#151515] text-white relative overflow-hidden">
      
      {/* Background Accent */}
      <div 
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#FFC900]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#FFC900]">
              Brand Portfolio
            </span>
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            A Portfolio of{' '}
            <span className="italic font-serif text-[#FFC900]">
              Italian Excellence.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            From benchmark mortadella cured in Busseto since 1962 to trusted national charcuterie staples and regional alpine bresaola.
          </p>
        </div>

        {/* 4 Upgraded Brand Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {featuredBrands.map((brand) => {
            const visual = brandVisuals[brand.id] || '/src/assets/images/hero_charcuterie_1793428038233.jpg';
            return (
              <div
                key={brand.id}
                onClick={() => onSelectBrand(brand)}
                className="group cursor-pointer bg-white text-[#151515] border border-white/20 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#FFC900] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left relative"
              >
                {/* Brand Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#222]">
                  <img
                    src={visual}
                    alt={brand.name}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Brand Icon Badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-xs text-[#151515] flex items-center justify-center shadow-md group-hover:bg-[#FFC900] transition-colors">
                    {brandIcons[brand.iconName]}
                  </div>

                  <span className="absolute top-3 right-3 text-[9px] uppercase font-mono font-bold text-white bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
                    {brand.founded}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-mono font-semibold text-[#FFC900] uppercase tracking-wider block">
                      {brand.tagline}
                    </span>
                  </div>
                </div>

                {/* Brand Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#151515] tracking-tight group-hover:text-[#EAB600] transition-colors mb-2">
                      {brand.name}
                    </h3>

                    <p className="text-xs text-[#68645B] leading-relaxed mb-4 font-sans line-clamp-3">
                      {brand.description}
                    </p>
                  </div>

                  {/* Specialty & Circular Arrow Indicator */}
                  <div className="pt-4 border-t border-[#151515]/8 flex items-end justify-between">
                    <div className="max-w-[75%]">
                      <span className="text-[10px] uppercase font-sans font-bold text-[#151515] block mb-0.5">
                        Flagship Cut:
                      </span>
                      <p className="text-[11px] text-[#777D45] font-medium truncate">
                        {brand.productsList[0]}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#FAF4E7] group-hover:bg-[#FFC900] text-[#151515] flex items-center justify-center transition-all group-hover:rotate-45 shadow-xs shrink-0">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
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
