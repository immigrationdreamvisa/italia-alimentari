import React from 'react';
import { X, Award, ShieldCheck, Factory, HeartHandshake, ArrowRight } from 'lucide-react';
import { ItaliaAlimentariLogo } from './ItaliaAlimentariLogo';

interface CompanyStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactPress: () => void;
}

export const CompanyStoryModal: React.FC<CompanyStoryModalProps> = ({
  isOpen,
  onClose,
  onContactPress
}) => {
  if (!isOpen) return null;

  const milestones = [
    {
      year: '1962',
      title: 'Artisan Foundations in Busseto',
      desc: 'Founded in the lands of maestro Giuseppe Verdi in the heart of Parma, pioneering traditional mortadella and culatello craftsmanship.'
    },
    {
      year: '1985',
      title: 'Mortadella Gran Ibis Born',
      desc: 'Creation of the legendary Mortadella Gran Ibis, awarded benchmark status for flavor, hand-tied casing, and pistachio selection.'
    },
    {
      year: '1998',
      title: 'Joining Gruppo Cremonini',
      desc: 'Italia Alimentari is established as the premier cured meats and deli foods division of the Cremonini Group, reinforcing supply chain vertical integration.'
    },
    {
      year: '2008',
      title: 'Cleanroom Center in Gazoldo',
      desc: 'Inauguration of Europe’s most technologically advanced cleanroom slicing facility in Gazoldo degli Ippoliti (Mantova).'
    },
    {
      year: '2018',
      title: 'Alpine Bresaola & Global Export',
      desc: 'Integration of the Postalesio plant in Valtellina for Bresaola IGP, achieving USDA and Japanese MAFF export certifications.'
    },
    {
      year: '2026',
      title: 'Sustainable Cold Chain & Eco-Tray',
      desc: '100 million packs produced annually, 50+ countries served, and wide-scale rollout of recyclable paper-bottom MAP trays.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-8">
        
        {/* Header */}
        <div className="relative h-64 w-full overflow-hidden bg-[#151515]">
          <img
            src="/src/assets/images/busseto_heritage_estate.jpg"
            alt="Historic Italia Alimentari founding estate in Busseto"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/40" />
          
          <div className="absolute top-4 left-6">
            <ItaliaAlimentariLogo variant="dark" size="sm" />
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC900] font-bold block mb-1">
              Historic Timeline & Heritage
            </span>
            <h3 className="text-3xl font-serif font-bold text-white">
              The Italia Alimentari Story
            </h3>
            <p className="text-xs text-white/80 font-sans mt-0.5">
              Over six decades of passion, patient cellar aging, and industrial precision.
            </p>
          </div>
        </div>

        {/* Timeline Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-260px)] overflow-y-auto">
          <p className="text-sm text-[#151515] font-sans leading-relaxed">
            Italia Alimentari unites the deepest regional traditions of Italian charcuterie with the organizational and technological strength of the Cremonini Group. With dedicated production sites in the historic gastronomic capitals of Emilia-Romagna and Lombardy, we preserve centuries-old recipes while guaranteeing total food safety.
          </p>

          <div className="pt-2">
            <span className="text-xs uppercase font-sans font-bold tracking-wider text-[#68645B] block mb-4">
              Key Historic Milestones:
            </span>
            <div className="space-y-4 border-l-2 border-[#FFC900] ml-2 pl-4">
              {milestones.map((m) => (
                <div key={m.year} className="relative group">
                  <span className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#151515] border-2 border-[#FFC900]" />
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#E9B800]">{m.year}</span>
                    <h5 className="font-serif font-bold text-base text-[#151515]">{m.title}</h5>
                  </div>
                  <p className="text-xs text-[#68645B] mt-0.5 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#FAF4E7] border-t border-[#151515]/8 flex items-center justify-between">
          <span className="text-xs text-[#68645B]">Busseto · Gazoldo degli Ippoliti · Postalesio</span>
          <button
            onClick={() => {
              onClose();
              onContactPress();
            }}
            className="px-5 py-2.5 bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-colors flex items-center gap-1.5"
          >
            <span>Partner with Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
