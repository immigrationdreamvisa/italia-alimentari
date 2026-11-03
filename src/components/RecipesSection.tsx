import React from 'react';
import { RECIPES_DATA, RecipeItem } from '../data/companyData';
import { ArrowUpRight, Clock, ChefHat, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { handleImageError } from '../utils/imageUtils';

interface RecipesSectionProps {
  onSelectRecipe: (recipe: RecipeItem) => void;
  onViewAllRecipes: () => void;
}

export const RecipesSection: React.FC<RecipesSectionProps> = ({
  onSelectRecipe,
  onViewAllRecipes
}) => {
  const { t } = useLanguage();
  return (
    <section id="recipes" className="py-24 md:py-32 bg-[#FAF4E7]/50 border-b border-[#151515]/6 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[1.5px] bg-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
                {t.recipes.label}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] leading-tight">
              {t.recipes.title}{' '}
              <span className="italic font-serif text-[#EAB600]">
                {t.recipes.titleHighlight}
              </span>
            </h2>

            <p className="mt-3 text-base text-[#68645B] font-sans leading-relaxed">
              {t.recipes.description}
            </p>
          </div>

          <button
            onClick={onViewAllRecipes}
            className="self-start md:self-end inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors shadow-xs cursor-pointer"
          >
            <span>{t.recipes.viewAllBtn}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 3 Food Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECIPES_DATA.slice(0, 3).map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => onSelectRecipe(recipe)}
              className="group cursor-pointer bg-white border border-[#151515]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#FFC900]/70 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-2"
            >
              {/* Recipe Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF4E7]">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/75 via-transparent to-black/25 pointer-events-none" />

                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#151515]/75 backdrop-blur-md text-white border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  <span className="text-[9px] uppercase font-mono font-bold tracking-wider">
                    {recipe.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-mono text-[11px] bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Clock className="w-3 h-3 text-[#FFC900]" />
                    {recipe.prepTime}
                  </span>
                  <span className="text-[9px] uppercase font-mono font-bold text-[#151515] bg-[#FFC900] px-2 py-0.5 rounded shadow-xs">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              {/* Recipe Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#777D45] uppercase tracking-wider block mb-1">
                    Featured Cut: {recipe.featuredProduct}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors leading-snug mb-3">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-[#68645B] leading-relaxed mb-4 line-clamp-2">
                    {recipe.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#151515]/8 flex items-center justify-between text-xs font-sans font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors">
                  <span className="uppercase tracking-wider">Inspect Recipe Steps</span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF4E7] group-hover:bg-[#FFC900] text-[#151515] flex items-center justify-center transition-all group-hover:rotate-45 shadow-xs shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Master Chef Craftsmanship Spotlight (Pure Editorial Photography - Zero Video) */}
        <div className="mt-12 bg-[#151515] text-white rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col lg:flex-row items-center gap-8 text-left shadow-xl relative overflow-hidden">
          <div className="relative w-full lg:w-48 aspect-square rounded-2xl overflow-hidden shrink-0 border-2 border-[#FFC900] shadow-lg bg-black">
            <img
              src="/images/executive_chef_culinary_art.jpg"
              alt="Executive Chef Plating Italian Charcuterie with Precision"
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FFC900] text-[#151515]">
              PARMA ACADEMY
            </span>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <ChefHat className="w-4 h-4 text-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#FFC900]">
                Master Chef Craftsmanship • L&apos;Arte Gastronomica
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 leading-tight">
              Culinary Artistry with Authentic Salumi.
            </h3>

            <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed mb-4 max-w-3xl">
              &ldquo;Authentic Italian cuisine relies entirely on the sacred integrity of the cured meats. When the Prosciutto di Parma, Pancetta, and Mortadella Bologna IGP are cured with patient artisan mastery in Busseto, the chef&apos;s role is simple elevation.&rdquo;
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60">
              <span className="text-white font-bold">Chef Matteo Bellini</span>
              <span>•</span>
              <span>Executive Culinary Director, Parma</span>
              <span>•</span>
              <span className="text-[#FFC900]">100% Certified Italian Pork Chain</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
