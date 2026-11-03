import React from 'react';
import { X, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';

interface CharterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CharterModal: React.FC<CharterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-8">
        
        {/* Header */}
        <div className="p-8 bg-[#FAF4E7] border-b border-[#151515]/8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Leaf className="w-4 h-4 text-[#777D45]" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#777D45] font-bold">
                Corporate Responsibility & ESG
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515]">
              Sustainability & Quality Charter
            </h3>
            <p className="text-xs text-[#68645B] mt-1">
              Our verified commitments across supply chain integrity, animal welfare, and eco-packaging.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white text-[#68645B] hover:text-[#151515] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-[#151515]/8 rounded-xl">
              <span className="text-xs font-serif font-bold text-[#151515] block mb-1">
                Eco-Packaging Transition
              </span>
              <p className="text-xs text-[#68645B] leading-relaxed">
                Replacement of multi-layer unrecyclable plastics with FSC-certified recyclable paper base trays.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#151515]/8 rounded-xl">
              <span className="text-xs font-serif font-bold text-[#151515] block mb-1">
                Photovoltaic Energy
              </span>
              <p className="text-xs text-[#68645B] leading-relaxed">
                Solar roof installations generating renewable electric power for the Gazoldo refrigeration systems.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#151515]/8 rounded-xl">
              <span className="text-xs font-serif font-bold text-[#151515] block mb-1">
                Animal Welfare Standards
              </span>
              <p className="text-xs text-[#68645B] leading-relaxed">
                Direct audits across partner farms adhering strictly to ClassyFarm and European welfare indices.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#151515]/8 rounded-xl">
              <span className="text-xs font-serif font-bold text-[#151515] block mb-1">
                Water & Byproduct Recycling
              </span>
              <p className="text-xs text-[#68645B] leading-relaxed">
                Closed-loop chilling water recovery and circular fat/byproduct valorization for biofuel.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF4E7] rounded-xl border border-[#151515]/6 text-xs text-[#68645B]">
            <p>
              Audited according to ISO 14001 and ISO 50001 energy standards. Approved by the Cremonini Group Sustainability Committee.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#FAF4E7] border-t border-[#151515]/8 flex items-center justify-between">
          <span className="text-xs text-[#68645B]">Official Document · 2026 Edition</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#151515] hover:bg-[#333333] text-white text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};
