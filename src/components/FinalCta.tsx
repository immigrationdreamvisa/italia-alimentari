import React from 'react';
import { Mail, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { handleImageError } from '../utils/imageUtils';

interface FinalCtaProps {
  onContact: () => void;
  onWorkWithUs: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onContact, onWorkWithUs }) => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF4E7] relative overflow-hidden border-t border-[#151515]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="bg-[#FFFDF8] border border-[#151515]/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Food Vignette Arch Frame (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-[#FFFFFF] bg-[#FAF4E7]">
                <img
                  src="/images/italian_countryside_1793428037750.jpg"
                  alt="Italia Alimentari Gazoldo degli Ippoliti and Emilian terroir"
                  className="w-full h-full object-cover transform hover:scale-108 transition-transform duration-700"
                  onError={handleImageError}
                />
              </div>

              {/* Decorative Pill/Note */}
              <div className="absolute -bottom-4 -right-4 bg-[#151515] text-white p-3.5 rounded-xl shadow-md border-2 border-[#FFFDF8] text-left">
                <span className="text-[10px] uppercase font-mono text-[#FFC900] tracking-wider block">
                  {t.cta.headquarters}
                </span>
                <span className="text-xs font-serif font-bold text-white">
                  Gazoldo degli Ippoliti (MN)
                </span>
              </div>
            </div>

            {/* Right Headline & Dual CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1.5px] bg-[#FFC900]" />
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
                  {t.cta.label}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#151515] uppercase tracking-tight leading-tight mb-5">
                {t.cta.title}{' '}
                <span className="italic font-serif text-[#E9B800] block lowercase font-semibold">
                  {t.cta.titleHighlight}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed mb-9 max-w-xl">
                {t.cta.description}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onContact}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-all duration-200 shadow-sm active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4 stroke-[2.5]" />
                  <span>{t.cta.contactBtn}</span>
                </button>

                <button
                  onClick={onWorkWithUs}
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[#151515] hover:bg-[#252525] text-white text-xs uppercase font-sans font-bold tracking-wider rounded transition-all duration-200"
                >
                  <Briefcase className="w-4 h-4 text-[#FFC900]" />
                  <span>{t.cta.careersBtn}</span>
                </button>
              </div>

              {/* Direct Reach Bar */}
              <div className="mt-10 pt-6 border-t border-[#151515]/8 flex flex-wrap items-center gap-6 text-xs text-[#68645B]">
                <div>
                  <span className="font-semibold text-[#151515]">Gazoldo Hub: </span>
                  <a href="tel:+3903766801" className="text-[#151515] hover:text-[#EAB600] font-medium transition-colors">
                    +39 0376 6801
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-[#151515]">Busseto Plant: </span>
                  <a href="tel:+390524930311" className="text-[#151515] hover:text-[#EAB600] font-medium transition-colors">
                    +39 0524 930311
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-[#151515]">Email: </span>
                  <a href="mailto:info@italiaalimentari.it" className="text-[#151515] hover:text-[#EAB600] transition-colors">
                    info@italiaalimentari.it
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-[#151515]">PEC: </span>
                  <a href="mailto:info@pec.italiaalimentari.it" className="text-[#151515] hover:text-[#EAB600] transition-colors">
                    info@pec.italiaalimentari.it
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
