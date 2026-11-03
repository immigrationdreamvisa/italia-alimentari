import React, { useState } from 'react';
import { RECIPES_DATA, RecipeItem } from '../data/companyData';
import { Clock, ChefHat, ArrowUpRight, Check, Utensils, Wine, Thermometer, Award, Send, Eye } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface RecipesPageProps {
  onSelectRecipe: (r: RecipeItem) => void;
  onRequestProduct: (productName: string) => void;
}

export const RecipesPage: React.FC<RecipesPageProps> = ({
  onSelectRecipe,
  onRequestProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRecipe, setActiveRecipe] = useState<RecipeItem>(RECIPES_DATA[0]);

  const categories = [
    { id: 'all', label: `All Recipes (${RECIPES_DATA.length})` },
    { id: 'Gourmet Panini', label: `Gourmet Panini (${RECIPES_DATA.filter(r => r.category === 'Gourmet Panini').length})` },
    { id: 'Classic Regional Pasta', label: `Regional Pasta (${RECIPES_DATA.filter(r => r.category === 'Classic Regional Pasta').length})` },
    { id: 'Antipasti & Crudi', label: `Antipasti & Crudi (${RECIPES_DATA.filter(r => r.category === 'Antipasti & Crudi').length})` },
    { id: 'Aperitivo Boards', label: `Aperitivo (${RECIPES_DATA.filter(r => r.category === 'Aperitivo Boards' || r.category.includes('Pinsa')).length})` }
  ];

  const filteredRecipes = RECIPES_DATA.filter((r) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'Aperitivo Boards') {
      return r.category === 'Aperitivo Boards' || r.category.includes('Pinsa');
    }
    return r.category === selectedCategory;
  });

  const handleCardClick = (recipe: RecipeItem) => {
    setActiveRecipe(recipe);
    const el = document.getElementById('specific-food-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left font-sans antialiased">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* ========================================================================= */}
        {/* PAGE HEADER                                                               */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Italian Gastronomy & Serving Guides ({RECIPES_DATA.length})
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-tight mb-4">
            Italian Flavors &{' '}
            <span className="italic font-serif text-[#EAB600]">
              Inspiration.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            Elevate everyday dining with recipes developed by Italian master salumi specialists, featuring authentic regional charcuterie, artisan breads, and pairing wines.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SPECIFIC SECTION: DEDICATED FOOD DETAILS & MASTERCLASS (USER REQUEST)     */}
        {/* ========================================================================= */}
        <div id="specific-food-details" className="mb-20 bg-white border border-[#151515]/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm text-left scroll-mt-28">
          
          {/* Section Header */}
          <div className="pb-6 mb-8 border-b border-[#151515]/8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#FFC900]" />
                <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-[#777D45]">
                  Specific Food Details & Culinary Specs
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151515]">
                {activeRecipe.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#68645B] mt-1 font-sans">
                Authentic formulation, certified Italian pork cuts, and master culinary preparation
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="px-3 py-1 bg-[#FAF4E7] border border-[#151515]/8 text-xs font-mono font-bold text-[#151515] rounded-full">
                {activeRecipe.category}
              </span>
              <button
                onClick={() => onSelectRecipe(activeRecipe)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#151515] hover:bg-[#333333] text-white text-xs font-bold uppercase rounded-full transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Modal View</span>
              </button>
            </div>
          </div>

          {/* Food Details Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 5 Cols: Large Dish Photography & Food Specifications */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Dish Photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#FAF4E7] border border-[#151515]/10">
                <img
                  src={activeRecipe.image}
                  alt={activeRecipe.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-mono text-[11px] bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded">
                    <Clock className="w-3.5 h-3.5 text-[#FFC900]" />
                    {activeRecipe.prepTime}
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold bg-[#FFC900] text-[#151515] px-2.5 py-1 rounded">
                    {activeRecipe.difficulty}
                  </span>
                </div>
              </div>

              {/* Specific Food Characteristics Card */}
              <div className="bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl p-5 space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#151515]/8">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#777D45]">
                    Charcuterie Profile
                  </span>
                  <span className="text-[10px] font-mono text-[#151515] font-semibold">
                    100% Italian Origin
                  </span>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] text-[#68645B] uppercase font-mono block">Featured Deli Cut:</span>
                    <strong className="text-sm font-serif font-bold text-[#151515]">
                      {activeRecipe.featuredProduct}
                    </strong>
                    {activeRecipe.originRegion && (
                      <span className="text-[11px] text-[#777D45] block">
                        {activeRecipe.originRegion}
                      </span>
                    )}
                  </div>

                  {activeRecipe.curingAge && (
                    <div className="pt-1">
                      <span className="text-[10px] text-[#68645B] uppercase font-mono block">Curing Discipline:</span>
                      <span className="text-xs text-[#151515] font-medium block">
                        {activeRecipe.curingAge}
                      </span>
                    </div>
                  )}

                  {activeRecipe.servingTemp && (
                    <div className="pt-1 flex items-start gap-2">
                      <Thermometer className="w-4 h-4 text-[#EAB600] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-[#68645B] uppercase font-mono block">Serving Temp:</span>
                        <span className="text-xs text-[#151515]">{activeRecipe.servingTemp}</span>
                      </div>
                    </div>
                  )}

                  {activeRecipe.pairingNote && (
                    <div className="pt-1 flex items-start gap-2">
                      <Wine className="w-4 h-4 text-[#8A2432] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-[#68645B] uppercase font-mono block">Sommelier Pairing:</span>
                        <span className="text-xs text-[#151515]">{activeRecipe.pairingNote}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sample Order Button */}
                <div className="pt-3 border-t border-[#151515]/8">
                  <button
                    onClick={() => onRequestProduct(activeRecipe.featuredProduct)}
                    className="w-full py-2.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs font-bold font-sans uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    <span>Order Commercial Sample</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Detailed Ingredients & Step-by-Step Culinary Preparation */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Recipe Description */}
              <div className="p-4 bg-[#FAF4E7]/60 rounded-xl border-l-3 border-[#FFC900] text-sm text-[#5A554C] leading-relaxed">
                <p>{activeRecipe.description}</p>
              </div>

              {/* SPECIFIC INGREDIENTS SECTION */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#EAB600]" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#151515]">
                    Specific Ingredients & Portions
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeRecipe.ingredients.map((ing) => (
                    <div
                      key={ing}
                      className="flex items-start gap-2.5 text-xs text-[#151515] bg-[#FAF4E7]/40 p-3 rounded-xl border border-[#151515]/6"
                    >
                      <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#777D45] shrink-0 shadow-2xs mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SPECIFIC PREPARATION STEPS SECTION */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-[#EAB600]" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#151515]">
                    Chef&apos;s Step-by-Step Preparation Method
                  </h3>
                </div>

                <ol className="space-y-2.5">
                  {activeRecipe.instructions.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#151515]/8 text-xs shadow-2xs"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#151515] text-[#FFC900] font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed text-[#151515]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Chef Recommendation Tip */}
              {activeRecipe.chefTip && (
                <div className="p-4 bg-[#FAF4E7] rounded-xl border border-[#151515]/8 text-xs text-[#5A554C]">
                  <strong className="text-[#151515] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Master Taster & Chef Recommendation:
                  </strong>
                  <p className="italic">&ldquo;{activeRecipe.chefTip}&rdquo;</p>
                </div>
              )}

              {/* Quality & Nutritional Tags */}
              {activeRecipe.nutritionalHighlights && (
                <div className="pt-2 flex items-center gap-2 flex-wrap">
                  {activeRecipe.nutritionalHighlights.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-[#FAF4E7] border border-[#151515]/8 text-[#151515]"
                    >
                      <Check className="w-3 h-3 text-[#777D45]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              )}

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* RECIPES CATALOGUE & SELECTION GRID                                        */}
        {/* ========================================================================= */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#151515]">
              Explore Complete Italian Recipe Collection
            </h3>
            <p className="text-xs text-[#68645B] mt-0.5">
              Select any dish to inspect its specific food details and preparation method
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#151515] text-[#FFC900] shadow-xs'
                    : 'bg-[#FAF4E7] text-[#68645B] hover:text-[#151515]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => {
            const isCurrentActive = activeRecipe.id === recipe.id;
            return (
              <div
                key={recipe.id}
                onClick={() => handleCardClick(recipe)}
                className={`group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1.5 border ${
                  isCurrentActive ? 'border-[#FFC900] ring-2 ring-[#FFC900]/30' : 'border-[#151515]/10'
                }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF4E7]">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[#151515] text-[10px] font-sans font-bold uppercase tracking-wider rounded">
                      {recipe.category}
                    </span>
                    {isCurrentActive && (
                      <span className="px-2.5 py-1 bg-[#FFC900] text-[#151515] text-[10px] font-mono font-bold uppercase tracking-wider rounded shadow-xs">
                        Active Details
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[#FFC900]" />
                      {recipe.prepTime}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#FFC900] bg-[#151515]/80 px-2 py-0.5 rounded">
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] text-[#777D45] uppercase tracking-wider font-semibold block mb-1">
                      Featured: {recipe.featuredProduct}
                    </span>

                    <h3 className="text-xl font-serif font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors leading-snug mb-3">
                      {recipe.title}
                    </h3>

                    <p className="text-xs text-[#68645B] leading-relaxed mb-4 font-sans line-clamp-2">
                      {recipe.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#151515]/8 flex items-center justify-between text-xs font-sans font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors">
                    <span className="uppercase tracking-wider">Inspect Food Details</span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF4E7] group-hover:bg-[#FFC900] text-[#151515] flex items-center justify-center transition-all group-hover:rotate-45 shadow-xs shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default RecipesPage;
