import React, { useState } from 'react';
import { PRODUCTS_DATA, ProductItem } from '../data/companyData';
import { ArrowUpRight, Package, ArrowRight, Check, Sparkles } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenCatalogue: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onOpenCatalogue
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Specialties (${PRODUCTS_DATA.length})` },
    { id: 'traditional', label: `Traditional Deli (${PRODUCTS_DATA.filter(p => p.category === 'traditional').length})` },
    { id: 'sliced', label: `Cleanroom Sliced (${PRODUCTS_DATA.filter(p => p.category === 'sliced').length})` },
    { id: 'snacks', label: `Snacks & Panini (${PRODUCTS_DATA.filter(p => p.category === 'snacks').length})` },
    { id: 'bacon', label: `Bacon & Pancetta (${PRODUCTS_DATA.filter(p => p.category === 'bacon').length})` }
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="products" className="py-20 md:py-28 bg-[#FFFDF8] border-b border-[#151515]/6 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[1.5px] bg-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
                Craftsmanship & Innovation
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] uppercase tracking-tight">
              Our Product <span className="italic font-serif text-[#EAB600] lowercase font-semibold">Specialties</span>
            </h2>

            <p className="mt-3 text-base text-[#68645B] font-sans leading-relaxed">
              Explore authentic Italian cured specialties, crafted with 100% selected Italian meats, patient cellar curing, and cleanroom slicing technology.
            </p>
          </div>

          <button
            onClick={onOpenCatalogue}
            className="self-start md:self-end inline-flex items-center gap-2 px-5 py-3 border border-[#151515]/20 hover:border-[#151515] text-[#151515] text-xs uppercase font-sans font-semibold tracking-wider rounded transition-colors bg-[#FAF4E7]/60 hover:bg-[#FAF4E7] cursor-pointer"
          >
            <Package className="w-3.5 h-3.5 text-[#FFC900]" />
            <span>Request Full Catalogue</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#151515] text-[#FFC900] shadow-sm'
                  : 'bg-[#FAF4E7] text-[#68645B] hover:text-[#151515] hover:bg-[#FAF4E7]/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Upgraded Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer flex flex-col bg-white border border-[#151515]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#FFC900]/70 transition-all duration-300 hover:-translate-y-2 text-left"
            >
              {/* Premium Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF4E7]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={handleImageError}
                />
                
                {/* Visual Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/70 via-transparent to-black/25 pointer-events-none" />
                
                {/* Top Left: Category Badge with Glowing Dot */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#151515]/75 backdrop-blur-md text-white border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span className="text-[9px] uppercase font-mono font-bold tracking-wider">
                    {product.category}
                  </span>
                </div>

                {/* Top Right: Certification Chip */}
                {product.certifications[0] && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-white/90 text-[#151515] shadow-xs">
                    {product.certifications[0]}
                  </span>
                )}

                {/* Bottom Left: Formats Label */}
                <div className="absolute bottom-3 left-3 max-w-[70%]">
                  <span className="text-[10px] text-white/90 font-sans font-medium truncate block">
                    {product.formats[0]}
                  </span>
                </div>

                {/* Circular Action Button */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center shadow-lg transform group-hover:rotate-45 group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Refined Content Area */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#777D45] uppercase tracking-wider block mb-1">
                    {product.subtitle}
                  </span>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors mb-2 leading-snug">
                    {product.title}
                  </h3>

                  <p className="text-xs text-[#68645B] leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-3.5 border-t border-[#151515]/8 space-y-1.5">
                  {product.highlights.slice(0, 2).map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-[11px] text-[#151515]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900] shrink-0" />
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                  
                  <div className="pt-2 text-[11px] text-[#EAB600] font-sans font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect formats & cuts</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
