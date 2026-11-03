import React, { useState } from 'react';
import { NEWS_DATA, NewsItem } from '../data/companyData';
import { ChevronRight, Calendar, Clock } from 'lucide-react';

interface NewsPageProps {
  onSelectNews: (item: NewsItem) => void;
  onContactPress: () => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onSelectNews, onContactPress }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Updates (${NEWS_DATA.length})` },
    { id: 'Innovation & Packaging', label: 'Innovation' },
    { id: 'Brand Heritage', label: 'Heritage' },
    { id: 'Corporate Logistics', label: 'Logistics' },
    { id: 'International Trade Fairs', label: 'Trade Fairs' },
    { id: 'Quality & Food Safety', label: 'Quality' }
  ];

  const filteredNews = NEWS_DATA.filter((n) => {
    if (selectedCategory === 'all') return true;
    return n.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Press, Events & Trade Updates ({NEWS_DATA.length})
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-tight mb-4">
            News &{' '}
            <span className="italic font-serif text-[#EAB600]">
              Insights.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            Read official announcements on sustainable packaging milestones, international food fairs, consortium awards, and cold chain expansions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredNews.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectNews(article)}
              className="group cursor-pointer flex flex-col bg-white border border-[#151515]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 text-left hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF4E7]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#68645B] mb-3 font-sans">
                    <span className="text-[#777D45] font-semibold">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed mb-6 font-sans">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#151515]/6 flex items-center justify-between text-xs font-sans font-bold text-[#151515] group-hover:text-[#EAB600] transition-colors">
                  <span className="uppercase tracking-wider">Read Full Article</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Press Office Info */}
        <div className="p-8 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-serif font-bold text-[#151515]">Media & Journalist Inquiries</h4>
            <p className="text-xs text-[#68645B] mt-0.5">
              Contact our corporate communications team for press kits, high-res photography, and interview requests.
            </p>
          </div>
          <button
            onClick={onContactPress}
            className="px-6 py-3 bg-[#151515] text-white text-xs font-sans font-bold uppercase tracking-wider rounded hover:bg-[#252525] transition-colors cursor-pointer shrink-0"
          >
            Contact Press Office
          </button>
        </div>

      </div>
    </div>
  );
};
