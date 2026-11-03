import React from 'react';
import { X, ArrowRight, Award, ShieldCheck, Heart, Crown } from 'lucide-react';
import { BrandItem } from '../data/companyData';

interface BrandModalProps {
  brand: BrandItem | null;
  onClose: () => void;
  onRequestInfo: (brandName: string) => void;
}

export const BrandModal: React.FC<BrandModalProps> = ({ brand, onClose, onRequestInfo }) => {
  if (!brand) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-8">
        
        {/* Brand Header */}
        <div className="p-8 bg-[#FAF4E7] border-b border-[#151515]/8 flex items-start justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#777D45] block mb-1">
              {brand.founded}
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#151515]">
              {brand.name}
            </h3>
            <p className="text-xs font-semibold text-[#E9B800] uppercase tracking-wider mt-1">
              {brand.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white text-[#68645B] hover:text-[#151515] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] mb-2">
              Brand Identity & Mission
            </h4>
            <p className="text-sm text-[#151515] font-sans leading-relaxed">
              {brand.description}
            </p>
          </div>

          <div className="bg-[#FAF4E7] p-5 rounded-xl border border-[#151515]/6">
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#151515] mb-2">
              Historical Heritage:
            </h4>
            <p className="text-xs text-[#68645B] leading-relaxed">
              {brand.heritage}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] mb-2">
              Signature Assortment:
            </h4>
            <p className="text-xs text-[#151515] font-semibold bg-[#F5EEDF] p-3 rounded-lg">
              {brand.specialty}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#FAF4E7] border-t border-[#151515]/8 flex items-center justify-between">
          <span className="text-xs text-[#68645B]">Part of Italia Alimentari & Cremonini Group</span>
          <button
            onClick={() => {
              onRequestInfo(brand.name);
              onClose();
            }}
            className="px-5 py-2.5 bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors flex items-center gap-1.5"
          >
            <span>Request Brand Lineup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
