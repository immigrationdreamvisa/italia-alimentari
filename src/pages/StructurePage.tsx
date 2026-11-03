import React from 'react';
import { IndustrialStructure } from '../components/IndustrialStructure';
import { Factory, ShieldCheck, Truck, Snowflake } from 'lucide-react';

interface StructurePageProps {
  onContact: () => void;
}

export const StructurePage: React.FC<StructurePageProps> = ({ onContact }) => {
  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Manufacturing Infrastructure & Logistics
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-tight mb-4">
            Industrial Structure &{' '}
            <span className="italic font-serif text-[#EAB600]">
              Global Network.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            With 5 specialized production facilities across Italy’s most prestigious charcuterie territories and direct distribution subsidiaries worldwide, our cold chain operates with uncompromising precision.
          </p>
        </div>

        {/* 3 Main Italian Production Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#EAB600]">PARMA FACILITY</span>
              <span className="text-[10px] uppercase font-bold text-[#777D45] bg-white px-2 py-0.5 rounded">35,000 sqm</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#151515] mb-2">Busseto (Parma)</h3>
            <p className="text-xs text-[#68645B] leading-relaxed mb-4">
              Dedicated to slow cellar curing of Prosciutto di Parma DOP, Culatello di Zibello, and traditional Mortadella preparation.
            </p>
            <div className="text-[11px] text-[#151515] font-semibold space-y-1 mb-3">
              <p>• 1,200,000 hams aged annually</p>
              <p>• BRC Grade AA & USDA Approved</p>
            </div>
            <div className="pt-2 border-t border-[#151515]/8 text-[11px] text-[#68645B] space-y-0.5">
              <p className="text-[#151515]">Via Europa 14, 43011 Busseto (PR), Italy</p>
              <p>Tel: <a href="tel:+390524930311" className="font-semibold text-[#151515] hover:text-[#EAB600] transition-colors">+39 0524 930311</a></p>
              <p>PEC: <a href="mailto:info@pec.italiaalimentari.it" className="hover:text-[#EAB600] transition-colors underline decoration-[#68645B]/30">info@pec.italiaalimentari.it</a></p>
            </div>
          </div>

          <div className="p-7 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#EAB600]">CENTRAL HEADQUARTERS</span>
              <span className="text-[10px] uppercase font-bold text-[#777D45] bg-white px-2 py-0.5 rounded">52,000 sqm</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#151515] mb-2">Gazoldo degli Ippoliti</h3>
            <p className="text-xs text-[#68645B] leading-relaxed mb-4">
              State-of-the-art ISO cleanrooms for ultra-high-speed slicing, MAP packaging, snacks assembly, and centralized cold logistics.
            </p>
            <div className="text-[11px] text-[#151515] font-semibold space-y-1 mb-3">
              <p>• 100M+ pre-sliced trays yearly</p>
              <p>• Photovoltaic powered cold storage</p>
            </div>
            <div className="pt-2 border-t border-[#151515]/8 text-[11px] text-[#68645B] space-y-0.5">
              <p className="text-[#151515]">Via Marconi 3, 46040 Gazoldo degli Ippoliti (MN), Italy</p>
              <p>Tel: <a href="tel:+3903766801" className="font-semibold text-[#151515] hover:text-[#EAB600] transition-colors">+39 0376 6801</a></p>
              <p>Email: <a href="mailto:info@italiaalimentari.it" className="hover:text-[#EAB600] transition-colors underline decoration-[#68645B]/30">info@italiaalimentari.it</a></p>
            </div>
          </div>

          <div className="p-7 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#EAB600]">VALTELLINA FACILITY</span>
              <span className="text-[10px] uppercase font-bold text-[#777D45] bg-white px-2 py-0.5 rounded">18,000 sqm</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#151515] mb-2">Postalesio (Sondrio)</h3>
            <p className="text-xs text-[#68645B] leading-relaxed mb-4">
              Alpine air curing facility dedicated exclusively to Bresaola della Valtellina IGP and prime air-dried beef specialties.
            </p>
            <div className="text-[11px] text-[#151515] font-semibold space-y-1">
              <p>• 500,000 kg Bresaola IGP cured</p>
              <p>• Microclimate mountain air drying</p>
            </div>
          </div>
        </div>

        {/* Cold Chain Logistics & Quality Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white border border-[#151515]/10 rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FAF4E7] text-[#151515] flex items-center justify-center shrink-0">
              <Snowflake className="w-5 h-5 text-[#EAB600]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#151515]">Unbroken Cold Chain</h4>
              <p className="text-xs text-[#68645B] mt-1 leading-relaxed">Continuous telemetric temperature monitoring (0°C to +4°C) from slicing to retail delivery.</p>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#151515]/10 rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FAF4E7] text-[#151515] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-[#EAB600]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#151515]">Direct Global Dispatch</h4>
              <p className="text-xs text-[#68645B] mt-1 leading-relaxed">Dedicated logistics hubs in Paris, Frankfurt, New York, and Tokyo with daily refrigerated routes.</p>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#151515]/10 rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FAF4E7] text-[#151515] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#EAB600]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#151515]">EDI & Traceability</h4>
              <p className="text-xs text-[#68645B] mt-1 leading-relaxed">Full Electronic Data Interchange integration with major international retail supply chains.</p>
            </div>
          </div>
        </div>

        {/* Embedded World Map Section */}
        <div className="pt-8">
          <IndustrialStructure />
        </div>

      </div>
    </div>
  );
};
