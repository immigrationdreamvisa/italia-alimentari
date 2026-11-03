import React from 'react';
import { X, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import { NewsItem } from '../data/companyData';

interface NewsModalProps {
  news: NewsItem | null;
  onClose: () => void;
  onContactPress: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ news, onClose, onContactPress }) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-8">
        
        {/* News Hero Image */}
        <div className="relative h-60 w-full overflow-hidden bg-[#FAF4E7]">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#151515]/60 hover:bg-[#151515] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#FFC900] font-bold block mb-1">
              {news.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              {news.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-3 text-xs text-[#68645B] border-b border-[#151515]/8 pb-3">
            <span>Published: {news.date}</span>
            <span>·</span>
            <span>{news.readTime}</span>
            <span>·</span>
            <span>Official Corporate Press Release</span>
          </div>

          <p className="text-sm font-semibold text-[#151515] leading-relaxed">
            {news.summary}
          </p>

          <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed font-sans">
            {news.content}
          </p>

          <div className="p-4 bg-[#FAF4E7] rounded-xl border border-[#151515]/6 text-xs text-[#151515]">
            <span className="font-bold block mb-1">Press Inquiries:</span>
            <span>For editorial imagery, interview requests with our master curers or facility tours, contact press@italiaalimentari.it</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#FAF4E7] border-t border-[#151515]/8 flex items-center justify-between">
          <span className="text-xs text-[#68645B]">Italia Alimentari Communications</span>
          <button
            onClick={() => {
              onClose();
              onContactPress();
            }}
            className="px-5 py-2.5 bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors flex items-center gap-1.5"
          >
            <span>Contact Press Office</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
