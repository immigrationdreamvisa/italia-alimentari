import React, { useState } from 'react';
import { PRODUCTS_DATA, ProductItem } from '../data/companyData';
import { ArrowUpRight, Package, Check, Filter } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface ProductsPageProps {
  onSelectProduct: (p: ProductItem) => void;
  onRequestCatalogue: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onRequestCatalogue
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
                Product Catalog & Specialties
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-tight">
              Italian Deli Meats &{' '}
              <span className="italic font-serif text-[#EAB600]">
                Food Solutions.
              </span>
            </h1>
            <p className="mt-3 text-base text-[#68645B] font-sans leading-relaxed">
              Explore our complete range of certified Italian charcuterie, from traditional slow-aged whole hams to modern cleanroom sliced trays and high-protein aperitivo snack kits.
            </p>
          </div>

          <button
            onClick={onRequestCatalogue}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors self-start md:self-end cursor-pointer shrink-0"
          >
            <Package className="w-4 h-4 stroke-[2.2]" />
            <span>Request Trade Catalogue</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: 'all', label: `All Products (${PRODUCTS_DATA.length})` },
            { id: 'traditional', label: `Traditional Deli Meats (${PRODUCTS_DATA.filter(p => p.category === 'traditional').length})` },
            { id: 'sliced', label: `Cleanroom Sliced Trays (${PRODUCTS_DATA.filter(p => p.category === 'sliced').length})` },
            { id: 'snacks', label: `Snacks & Ready-to-Eat (${PRODUCTS_DATA.filter(p => p.category === 'snacks').length})` },
            { id: 'bacon', label: `Bacon & Pancetta (${PRODUCTS_DATA.filter(p => p.category === 'bacon').length})` }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#151515] text-[#FFC900] shadow-xs'
                  : 'bg-[#FAF4E7] text-[#68645B] hover:text-[#151515]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer bg-white border border-[#151515]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="sm:w-2/5 relative aspect-square sm:aspect-auto overflow-hidden bg-[#FAF4E7]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  onError={handleImageError}
                />
              </div>

              {/* Product Content */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#777D45] uppercase font-bold tracking-wider block mb-1">
                    {product.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#68645B] leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-1 mb-4">
                    {product.highlights.slice(0, 3).map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[#151515]">
                        <Check className="w-3.5 h-3.5 text-[#777D45] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#151515]/8 flex items-center justify-between text-xs font-sans font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors">
                  <span className="uppercase tracking-wider">Inspect Formats & Specs</span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF4E7] group-hover:bg-[#FFC900] text-[#151515] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Consortia Trust Bar */}
        <div className="bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl p-6 sm:p-8 text-center">
          <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#68645B] block mb-2">
            Protected Designation of Origin (DOP) & Indication of Geographic Protection (IGP)
          </span>
          <p className="text-xs sm:text-sm text-[#151515] max-w-2xl mx-auto leading-relaxed">
            Italia Alimentari works under strict compliance with the Consorzio del Prosciutto di Parma, Consorzio Mortadella Bologna IGP, and Consorzio Bresaola della Valtellina.
          </p>
        </div>

      </div>
    </div>
  );
};
