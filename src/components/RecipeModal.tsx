import React from 'react';
import { X, Clock, ChefHat, Check, Wine, Thermometer, Award, Sparkles, Send } from 'lucide-react';
import { RecipeItem } from '../data/companyData';
import { handleImageError } from '../utils/imageUtils';

interface RecipeModalProps {
  recipe: RecipeItem | null;
  onClose: () => void;
  onRequestProduct: (productName: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  onRequestProduct
}) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/80 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-6 sm:my-8 max-h-[92vh] flex flex-col">
        
        {/* ========================================================================= */}
        {/* HERO IMAGE HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#FAF4E7] shrink-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/90 via-[#151515]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#151515]/70 hover:bg-[#151515] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and Category Badges */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FFC900] text-[#151515]">
                {recipe.category}
              </span>
              <span className="flex items-center gap-1 font-mono text-[11px] bg-black/60 px-2.5 py-0.5 rounded text-white/90">
                <Clock className="w-3.5 h-3.5 text-[#FFC900]" />
                {recipe.prepTime}
              </span>
              <span className="text-[10px] uppercase font-mono font-bold text-white bg-white/20 px-2 py-0.5 rounded">
                {recipe.difficulty}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
              {recipe.title}
            </h2>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODAL BODY (Structured into Dedicated Specific Sections)                  */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 font-sans">
          
          {/* General Culinary Description */}
          <p className="text-sm sm:text-base text-[#5A554C] leading-relaxed">
            {recipe.description}
          </p>

          {/* ======================================================================= */}
          {/* SPECIFIC SECTION 1: FOOD & CHARCUTERIE SPECIFICATIONS                   */}
          {/* ======================================================================= */}
          <div className="bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl p-6 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#151515]/8 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#FFC900]" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#777D45]">
                  Specific Food & Charcuterie Details
                </h3>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase bg-[#FFC900]/25 text-[#151515] px-2.5 py-0.5 rounded-full">
                Consorzio Verified Quality
              </span>
            </div>

            {/* Food Spec Key-Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div className="bg-white p-3.5 rounded-xl border border-[#151515]/6">
                <span className="text-[10px] font-mono text-[#68645B] uppercase block">
                  Featured Deli Cut
                </span>
                <strong className="text-sm font-serif font-bold text-[#151515] block mt-0.5">
                  {recipe.featuredProduct}
                </strong>
                {recipe.originRegion && (
                  <span className="text-[11px] text-[#777D45] block mt-0.5">
                    {recipe.originRegion}
                  </span>
                )}
              </div>

              {recipe.curingAge && (
                <div className="bg-white p-3.5 rounded-xl border border-[#151515]/6">
                  <span className="text-[10px] font-mono text-[#68645B] uppercase block">
                    Curing & Cellar Discipline
                  </span>
                  <strong className="text-sm font-serif font-bold text-[#151515] block mt-0.5">
                    {recipe.curingAge}
                  </strong>
                </div>
              )}

              {recipe.servingTemp && (
                <div className="bg-white p-3.5 rounded-xl border border-[#151515]/6 flex items-start gap-2.5">
                  <Thermometer className="w-4 h-4 text-[#EAB600] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-[#68645B] uppercase block">
                      Recommended Serving Temperature
                    </span>
                    <span className="text-xs text-[#151515] font-medium block mt-0.5">
                      {recipe.servingTemp}
                    </span>
                  </div>
                </div>
              )}

              {recipe.pairingNote && (
                <div className="bg-white p-3.5 rounded-xl border border-[#151515]/6 flex items-start gap-2.5">
                  <Wine className="w-4 h-4 text-[#8A2432] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-[#68645B] uppercase block">
                      Sommelier Wine Pairing
                    </span>
                    <span className="text-xs text-[#151515] font-medium block mt-0.5">
                      {recipe.pairingNote}
                    </span>
                  </div>
                </div>
              )}

            </div>

            {/* Chef's Secret Serving Tip */}
            {recipe.chefTip && (
              <div className="p-3.5 bg-white/70 rounded-xl border-l-3 border-[#FFC900] text-xs text-[#5A554C]">
                <strong className="text-[#151515] block mb-0.5 font-sans">
                  Chef&apos;s Gastronomic Recommendation:
                </strong>
                <p className="italic">&ldquo;{recipe.chefTip}&rdquo;</p>
              </div>
            )}

            {/* Nutritional & Quality Badges */}
            {recipe.nutritionalHighlights && (
              <div className="pt-1 flex items-center gap-2 flex-wrap">
                {recipe.nutritionalHighlights.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-white border border-[#151515]/8 text-[#151515]"
                  >
                    <Check className="w-3 h-3 text-[#777D45]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}

          </div>

          {/* ======================================================================= */}
          {/* SPECIFIC SECTION 2: AUTHENTIC INGREDIENTS BREAKDOWN                     */}
          {/* ======================================================================= */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-4 h-[2px] bg-[#FFC900]" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#151515]">
                Ingredients & Measurements
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {recipe.ingredients.map((ing) => (
                <div
                  key={ing}
                  className="flex items-center gap-2.5 text-xs text-[#151515] bg-white p-3 rounded-xl border border-[#151515]/8 shadow-2xs"
                >
                  <div className="w-4 h-4 rounded-full bg-[#FAF4E7] flex items-center justify-center text-[#777D45] shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================================= */}
          {/* SPECIFIC SECTION 3: CHEF'S STEP-BY-STEP PREPARATION METHOD             */}
          {/* ======================================================================= */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-4 h-[2px] bg-[#FFC900]" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#151515]">
                Master Chef Preparation Method
              </h3>
            </div>

            <ol className="space-y-3">
              {recipe.instructions.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#151515]/6 text-xs"
                >
                  <span className="w-6 h-6 rounded-full bg-[#151515] text-[#FFC900] font-mono font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed text-[#151515]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* FOOTER ACTION BAR                                                         */}
        {/* ========================================================================= */}
        <div className="p-5 sm:p-6 bg-[#FAF4E7] border-t border-[#151515]/8 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-left text-xs">
            <span className="text-[10px] font-mono text-[#68645B] uppercase block">
              Culinary Specialty Ingredient:
            </span>
            <strong className="text-sm font-serif font-bold text-[#151515]">
              {recipe.featuredProduct}
            </strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onRequestProduct(recipe.featuredProduct);
                onClose();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs font-bold font-sans uppercase tracking-wider rounded transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Order Sample / Inquire</span>
              <Send className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#151515] hover:bg-[#252525] text-white text-xs font-bold font-sans uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecipeModal;
