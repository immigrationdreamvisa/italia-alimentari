import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { ItaliaAlimentariLogo } from './ItaliaAlimentariLogo';
import { handleImageError } from '../utils/imageUtils';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    {
      title: 'Chapter 01: The Italian Food Valley',
      location: 'Busseto & Parma, Emilia-Romagna',
      description: 'The journey begins in the historic curing lofts of Busseto, where regional microclimates allow Prosciutto di Parma and Culatello di Zibello to cure naturally.',
      image: '/images/artisan_curing_cellar_1793429018781.jpg'
    },
    {
      title: 'Chapter 02: 60 Years of Artisan Curing',
      location: 'Busseto Heritage Cellars (Est. 1962)',
      description: 'Master curers inspect whole hams using antique horse-bone needles. Mortadella Gran Ibis is slow-baked in traditional dry air stoves following the protected Bologna IGP canon.',
      image: '/images/traditional_deli_meats_1793428037900.jpg'
    },
    {
      title: 'Chapter 03: Cleanroom Slicing Science',
      location: 'Gazoldo degli Ippoliti (Mantova)',
      description: 'Within ISO-certified cleanrooms, ultra-high-speed stainless lines slice cured hams at near-zero temperatures, locking in aromas and creating airy folded slices.',
      image: '/images/modern_production_plant_1793428040629.jpg'
    },
    {
      title: 'Chapter 04: Reaching 50+ Nations',
      location: 'Global Cold Chain Logistics',
      description: 'From Milan and Paris to Tokyo and New York, authentic Italian taste is delivered with absolute freshness, verified traceability, and eco-friendly recyclable trays.',
      image: '/images/hero_charcuterie_1793428038233.jpg'
    }
  ];

  const activeChap = chapters[currentChapter];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/85 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#151515] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-10 text-left my-8">
        
        {/* Cinema Screen Frame */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center">
          <img
            src={activeChap.image}
            alt={activeChap.title}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isPlaying ? 'scale-105 opacity-90' : 'scale-100 opacity-60'
            }`}
            onError={handleImageError}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/60" />

          {/* Top Bar Controls */}
          <div className="absolute top-4 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ItaliaAlimentariLogo variant="dark" size="sm" showTagline={false} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
              <span className="text-[11px] uppercase tracking-widest font-mono text-white/70">
                Corporate Docuseries
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Play/Pause Overlay indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center shadow-xl">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Bottom Video HUD Content */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[11px] uppercase font-mono text-[#FFC900] tracking-wider block mb-1">
              {activeChap.location}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              {activeChap.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-sans leading-relaxed line-clamp-2">
              {activeChap.description}
            </p>
          </div>
        </div>

        {/* Video Control Bar & Chapter Stepper */}
        <div className="p-6 bg-[#1A1A1A] border-t border-white/10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] flex items-center justify-center font-bold transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => setCurrentChapter((prev) => (prev + 1) % chapters.length)}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-sans text-white/80 transition-colors"
              >
                Next Chapter
              </button>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FFC900]" />}
            </button>
          </div>

          {/* Interactive Chapter Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentChapter(idx)}
                className={`p-2.5 rounded-lg text-left text-xs transition-colors border ${
                  currentChapter === idx
                    ? 'bg-white/10 border-[#FFC900] text-white font-bold'
                    : 'bg-white/5 border-transparent text-white/60 hover:text-white hover:bg-white/8'
                }`}
              >
                <span className="block text-[10px] text-[#FFC900] font-mono">0{idx + 1}</span>
                <span className="truncate block font-serif">{chap.title.split(': ')[1]}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
