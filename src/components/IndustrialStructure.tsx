import React from 'react';
const stabilimentiMondoImg = '/images/italia_alimentari_stabilimenti_mondo.png';

export const IndustrialStructure: React.FC = () => {
  return (
    <section id="structure" className="py-20 md:py-28 bg-[#FFFDF8] relative text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Global Footprint & Facilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] leading-tight">
            An International{' '}
            <span className="italic font-serif text-[#E9B800]">
              Network.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#68645B] font-sans leading-relaxed">
            State-of-the-art curing and slicing facilities across Italy&apos;s most prestigious food territories, paired with commercial hubs and production branches worldwide.
          </p>
        </div>

        {/* Official Contact Us World Map - Only Map */}
        <div className="bg-white border border-[#151515]/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm flex items-center justify-center overflow-hidden">
          <img
            src={stabilimentiMondoImg}
            alt="Italia Alimentari - An International Network of Production Plants and Global Branches"
            className="w-full h-auto max-w-5xl object-contain select-none"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
};

export default IndustrialStructure;
