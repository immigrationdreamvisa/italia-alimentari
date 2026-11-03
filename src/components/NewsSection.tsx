import React from 'react';
import { NEWS_DATA, NewsItem } from '../data/companyData';
import { ArrowUpRight, Calendar, Clock, ChevronRight } from 'lucide-react';

interface NewsSectionProps {
  onSelectNews: (news: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectNews }) => {
  return (
    <section className="py-24 md:py-32 bg-[#FFFDF8] border-b border-[#151515]/6 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
                Editorial & Press
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] leading-tight">
              News &{' '}
              <span className="italic font-serif text-[#E9B800]">
                Insights.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#68645B] font-sans leading-relaxed">
              Updates from our curing cellars, international trade fairs, food safety innovations, and circular packaging milestones.
            </p>
          </div>

          <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#777D45]">
            Emilia-Romagna & Global Press
          </div>
        </div>

        {/* 3 Magazine-Style News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_DATA.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectNews(article)}
              className="group cursor-pointer flex flex-col bg-[#FFFFFF] border border-[#151515]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 text-left hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF4E7]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/30 to-transparent" />
              </div>

              {/* Editorial Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators (anti-slop rule) */}
                  <div className="flex items-center gap-2 text-xs text-[#68645B] mb-3 font-sans">
                    <span className="text-[#777D45] font-semibold">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#151515] group-hover:text-[#E9B800] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                {/* Read Article Trigger */}
                <div className="pt-4 border-t border-[#151515]/6 flex items-center justify-between text-xs font-sans font-bold text-[#151515] group-hover:text-[#E9B800] transition-colors">
                  <span className="uppercase tracking-wider">Read Full Article</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
