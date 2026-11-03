import React, { useState, useMemo } from 'react';
import { X, Search, ArrowUpRight, Package, Store, Factory, Building2 } from 'lucide-react';
import { PRODUCTS_DATA, BRANDS_DATA, SOLUTIONS_DATA, LOCATIONS_DATA } from '../data/companyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (p: any) => void;
  onSelectBrand?: (b: any) => void;
  onSelectSolution?: (s: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectBrand,
  onSelectSolution
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    const results: Array<{
      type: 'Product' | 'Brand' | 'Solution' | 'Facility';
      title: string;
      desc: string;
      item: any;
    }> = [];

    PRODUCTS_DATA.forEach((p) => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.highlights.some((h) => h.toLowerCase().includes(q))
      ) {
        results.push({ type: 'Product', title: p.title, desc: p.subtitle, item: p });
      }
    });

    BRANDS_DATA.forEach((b) => {
      if (
        b.name.toLowerCase().includes(q) ||
        b.tagline.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.specialty.toLowerCase().includes(q)
      ) {
        results.push({ type: 'Brand', title: b.name, desc: b.tagline, item: b });
      }
    });

    SOLUTIONS_DATA.forEach((s) => {
      if (
        s.title.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
      ) {
        results.push({ type: 'Solution', title: s.title, desc: s.tagline, item: s });
      }
    });

    LOCATIONS_DATA.forEach((l) => {
      if (
        l.name.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q) ||
        l.specialization.toLowerCase().includes(q)
      ) {
        results.push({ type: 'Facility', title: l.name, desc: l.location, item: l });
      }
    });

    return results;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div className="fixed inset-0 bg-[#151515]/70 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-2xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#151515]/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#E9B800] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, plants, certifications (e.g. Mortadella, Busseto, GDO)..."
            className="flex-1 bg-transparent text-sm sm:text-base font-sans text-[#151515] placeholder-[#68645B]/60 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#FAF4E7] text-[#68645B] hover:text-[#151515]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        {!query && (
          <div className="p-5 bg-[#FAF4E7]/50 border-b border-[#151515]/6">
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#68645B] block mb-2.5">
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                'Prosciutto di Parma DOP',
                'Mortadella Gran Ibis',
                'Cleanroom Sliced Trays',
                'Busseto Production Plant',
                'Eco-Friendly Paper Tray',
                'Large Retail (GDO)',
                'Food Service Formats'
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-[#FFFFFF] border border-[#151515]/10 hover:border-[#E9B800] text-xs text-[#151515] rounded transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-4 sm:p-5 space-y-2">
          {query.trim() && searchResults.length === 0 && (
            <div className="py-10 text-center text-[#68645B]">
              <p className="text-sm">No exact matches found for &quot;{query}&quot;.</p>
              <p className="text-xs text-[#68645B]/80 mt-1">
                Try searching for general terms like &quot;deli&quot;, &quot;Parma&quot;, &quot;sliced&quot; or &quot;retail&quot;.
              </p>
            </div>
          )}

          {searchResults.map((res, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (res.type === 'Product' && onSelectProduct) onSelectProduct(res.item);
                if (res.type === 'Brand' && onSelectBrand) onSelectBrand(res.item);
                if (res.type === 'Solution' && onSelectSolution) onSelectSolution(res.item);
                onClose();
              }}
              className="p-3.5 bg-[#FFFFFF] hover:bg-[#FAF4E7] border border-[#151515]/6 rounded-xl cursor-pointer transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#F5EEDF] flex items-center justify-center text-[#151515] shrink-0">
                  {res.type === 'Product' && <Package className="w-4 h-4 text-[#E9B800]" />}
                  {res.type === 'Brand' && <Store className="w-4 h-4 text-[#777D45]" />}
                  {res.type === 'Solution' && <Factory className="w-4 h-4 text-[#151515]" />}
                  {res.type === 'Facility' && <Building2 className="w-4 h-4 text-[#E9B800]" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#151515] group-hover:text-[#E9B800] transition-colors">
                      {res.title}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#FAF4E7] text-[#68645B]">
                      {res.type}
                    </span>
                  </div>
                  <p className="text-xs text-[#68645B] line-clamp-1">{res.desc}</p>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-[#68645B] group-hover:text-[#151515] transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
