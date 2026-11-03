import React, { useState } from 'react';
import { BRANDS_DATA, BrandItem } from '../data/companyData';
import { Crown, Award, ShieldCheck, HeartHandshake, ArrowRight, Check } from 'lucide-react';

interface BrandsPageProps {
  onSelectBrand: (brand: BrandItem) => void;
  onRequestBrandInfo: (brandName: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({
  onSelectBrand,
  onRequestBrandInfo
}) => {
  const [activeBrandId, setActiveBrandId] = useState<string>('ibis-1962');

  const brandIcons: Record<string, any> = {
    Crown,
    Award,
    ShieldCheck,
    HeartHandshake
  };

  const selectedBrand = BRANDS_DATA.find((b) => b.id === activeBrandId) || BRANDS_DATA[0];
  const Icon = brandIcons[selectedBrand.iconName] || Crown;

  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Proprietary Heritage Brands ({BRANDS_DATA.length})
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-tight mb-4">
            A Portfolio of{' '}
            <span className="italic font-serif text-[#EAB600]">
              Italian Excellence.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            Each brand in the Italia Alimentari portfolio preserves a specific culinary tradition, from landmark mortadella to daily charcuterie staples and regional artisan cures.
          </p>
        </div>

        {/* Brand Selector Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {BRANDS_DATA.map((brand) => {
            const BIcon = brandIcons[brand.iconName] || Crown;
            const isSelected = brand.id === activeBrandId;

            return (
              <button
                key={brand.id}
                onClick={() => setActiveBrandId(brand.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#151515] text-white border-[#FFC900] shadow-xl'
                    : 'bg-[#FAF4E7] text-[#151515] border-[#151515]/8 hover:border-[#151515]/20'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-[#FFC900] text-[#151515]' : 'bg-white text-[#151515]'
                }`}>
                  <BIcon className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-lg">{brand.name}</h3>
                <span className={`text-[10px] uppercase font-sans font-semibold tracking-wider block mt-1 ${
                  isSelected ? 'text-[#FFC900]' : 'text-[#777D45]'
                }`}>
                  {brand.founded}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Brand Spotlight */}
        <div className="bg-[#FAF4E7] border border-[#151515]/10 rounded-3xl p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#151515] text-[#FFC900] flex items-center justify-center shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#151515]">
                    {selectedBrand.name}
                  </h2>
                  <span className="text-xs font-sans font-bold text-[#777D45] uppercase tracking-wider">
                    {selectedBrand.tagline}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#151515] font-sans leading-relaxed">
                {selectedBrand.description}
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#151515]/6">
                <span className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] block mb-1">
                  Heritage:
                </span>
                <p className="text-xs text-[#151515] leading-relaxed">
                  {selectedBrand.heritage}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] block mb-2.5">
                  Signature Products & Assortment:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedBrand.productsList.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#151515] bg-white p-2.5 rounded-lg border border-[#151515]/6">
                      <Check className="w-3.5 h-3.5 text-[#777D45] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onRequestBrandInfo(selectedBrand.name)}
                  className="px-6 py-3 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Brand Presentation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectBrand(selectedBrand)}
                  className="px-5 py-3 bg-white border border-[#151515]/10 text-xs text-[#151515] font-bold uppercase rounded hover:bg-[#FAF4E7] transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={
                  selectedBrand.id === 'ibis-1962'
                    ? '/src/assets/images/traditional_deli_meats_1793428037900.jpg'
                    : selectedBrand.id === 'corte-buona'
                    ? '/src/assets/images/sliced_deli_meats_1793428038740.jpg'
                    : selectedBrand.id === 'montana'
                    ? '/src/assets/images/chef_plating_charcuterie_1793429017594.jpg'
                    : '/src/assets/images/hero_charcuterie_1793428038233.jpg'
                }
                alt={selectedBrand.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
