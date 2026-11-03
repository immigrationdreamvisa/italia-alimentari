import React from 'react';
import { X, Check, Award, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProductItem } from '../data/companyData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestSample: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestSample
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-8">
        
        {/* Header with image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#FAF4E7]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-[#151515]/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#151515]/60 hover:bg-[#151515] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#FFC900] font-bold block mb-1">
              {product.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {product.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-288px)] overflow-y-auto">
          
          <div>
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] mb-2">
              Product Overview & Craftsmanship
            </h4>
            <p className="text-sm text-[#151515] font-sans leading-relaxed">
              {product.details}
            </p>
          </div>

          {/* Key Product Highlights */}
          <div className="bg-[#FAF4E7] p-5 rounded-xl border border-[#151515]/6">
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#151515] mb-3">
              Certified Selections & Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 text-xs text-[#151515]">
                  <Check className="w-3.5 h-3.5 text-[#777D45] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Packaging Formats */}
          <div>
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] mb-2.5">
              Available Packaging & Distribution Formats:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.formats.map((fmt) => (
                <span
                  key={fmt}
                  className="px-3 py-1.5 bg-[#FFFFFF] border border-[#151515]/10 text-xs font-sans text-[#151515] rounded-md font-medium"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>

          {/* Consortia & Certifications */}
          <div>
            <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] mb-2.5">
              Quality Certifications:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 bg-[#F5EEDF] text-[#777D45] text-xs font-semibold rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#FAF4E7] border-t border-[#151515]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#68645B]">
            <span>Private Label & Custom Cutting available on request</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onRequestSample(product.title);
                onClose();
              }}
              className="flex-1 sm:flex-initial px-6 py-3 bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Request Specs & Samples</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
