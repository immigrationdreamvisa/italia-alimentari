import React, { useState } from 'react';
import { Search, ChevronRight, Phone, Mail, ArrowUpRight } from 'lucide-react';
import cremoniniSvg from '../assets/images/cremonini_logo.svg';
import { PageId } from './Navbar';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  currentPage?: PageId;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenSearch?: () => void;
  onOpenContact?: (defaultTab?: string) => void;
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  currentPage = 'home',
  onOpenSearch,
  onOpenContact
}) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenSearch) {
      onOpenSearch();
    }
  };

  const handleNavClick = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks: Array<{ id: PageId; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'quality', label: t.nav.quality },
    { id: 'recipes', label: t.nav.recipes },
    { id: 'contacts', label: t.nav.contacts }
  ];

  return (
    <footer className="bg-[#4A5056] text-white border-t border-[#3F454B] pt-14 pb-10 text-left font-sans antialiased relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 3-COLUMN CORPORATE FOOTER: DETAILS + ALL WEBSITE NAVS + SEARCH/CONTACT    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
          
          {/* COLUMN 1: Official Corporate Details (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div>
              <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-wide uppercase">
                ITALIA ALIMENTARI SPA
              </h3>
              <p className="text-xs text-white/80 mt-0.5">
                {t.footer.companyType}
              </p>
            </div>

            <div className="space-y-3 text-xs text-white/90 leading-relaxed font-sans">
              <div>
                <p>{t.footer.registeredHeadquarters}</p>
                <p className="text-[11px] text-white/75 mt-0.5">
                  <span>Tel: </span>
                  <a
                    href="tel:+390524930311"
                    className="text-white hover:text-[#FFC900] transition-colors font-semibold"
                  >
                    +39 0524 930311
                  </a>
                  <span className="mx-2 text-white/40">·</span>
                  <span>PEC: </span>
                  <a
                    href="mailto:info@pec.italiaalimentari.it"
                    className="text-white/90 hover:text-[#FFC900] transition-colors underline decoration-white/30"
                  >
                    info@pec.italiaalimentari.it
                  </a>
                </p>
              </div>

              <div>
                <p>{t.footer.adminOffices}</p>
                <p className="text-[11px] text-white/75 mt-0.5">
                  <span>Tel: </span>
                  <a
                    href="tel:+3903766801"
                    className="text-white hover:text-[#FFC900] transition-colors font-semibold"
                  >
                    +39 0376 6801
                  </a>
                  <span className="mx-2 text-white/40">·</span>
                  <span>Email: </span>
                  <a
                    href="mailto:info@italiaalimentari.it"
                    className="text-white/90 hover:text-[#FFC900] transition-colors underline decoration-white/30"
                  >
                    info@italiaalimentari.it
                  </a>
                </p>
              </div>
            </div>

            <div className="text-xs text-white/85 leading-relaxed font-sans space-y-0.5 pt-1">
              <p>{t.footer.rea}</p>
              <p>{t.footer.vat}</p>
            </div>

            <div className="text-xs text-white/85 leading-relaxed font-sans pt-1">
              <p>{t.footer.inalcaCoordination}</p>
            </div>

            <div className="text-xs font-sans pt-1">
              <p className="text-white">
                {t.footer.tollFreeLabel}{' '}
                <a
                  href="tel:800826123"
                  className="font-semibold text-white hover:text-[#FFC900] transition-colors underline decoration-white/40 underline-offset-2"
                >
                  800.826.123
                </a>
              </p>
            </div>

            {/* Gruppo Cremonini Official Logo Link */}
            <div className="pt-4">
              <a
                href="https://cremonini.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-90"
                title="Gruppo Cremonini"
              >
                <img
                  src={cremoniniSvg}
                  alt="Gruppo Cremonini"
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* COLUMN 2: All Website Navigation Links (3.5 cols) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4 text-left">
            <h3 className="text-xs font-bold text-white tracking-wider uppercase font-sans">
              {t.footer.siteNav}
            </h3>
            
            <ul className="space-y-2.5 text-xs text-white/85 font-sans">
              {navLinks.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`hover:text-[#FFC900] transition-colors text-left flex items-center gap-1.5 cursor-pointer ${
                        isActive ? 'text-[#FFC900] font-bold' : 'text-white/85'
                      }`}
                    >
                      <ChevronRight className="w-3 h-3 text-white/40" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: Search Form & Quick Contact Hotlines (3.5 cols) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-5 text-left">
            
            {/* Search Box */}
            <form onSubmit={handleSearchSubmit} className="flex items-stretch w-full max-w-sm shadow-xs">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.footer.searchPlaceholder}
                className="w-full bg-white text-[#151515] placeholder-[#767C84] text-xs px-3.5 py-2.5 rounded-l border border-r-0 border-white focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="bg-[#5B636C] hover:bg-[#68707A] text-white px-3.5 flex items-center justify-center rounded-r border border-l-0 border-[#5B636C] cursor-pointer transition-colors"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>

            {/* Direct Quick Assistance Box */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2.5 text-xs text-white/90">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC900] font-bold block">
                {t.footer.directService}
              </span>
              
              <div className="space-y-2 text-xs text-white/80">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FFC900] shrink-0" />
                  <span>Numero Verde: <a href="tel:800826123" className="font-bold text-white hover:text-[#FFC900] transition-colors">800.826.123</a></span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FFC900] shrink-0" />
                  <span>Gazoldo Hub (MN): <a href="tel:+3903766801" className="font-bold text-white hover:text-[#FFC900] transition-colors">+39 0376 6801</a></span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FFC900] shrink-0" />
                  <span>Busseto Plant (PR): <a href="tel:+390524930311" className="font-bold text-white hover:text-[#FFC900] transition-colors">+39 0524 930311</a></span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FFC900] shrink-0" />
                  <span>Email: <a href="mailto:info@italiaalimentari.it" className="font-semibold text-white hover:text-[#FFC900] transition-colors">info@italiaalimentari.it</a></span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FFC900] shrink-0" />
                  <span>PEC: <a href="mailto:info@pec.italiaalimentari.it" className="font-semibold text-white hover:text-[#FFC900] transition-colors underline decoration-white/30">info@pec.italiaalimentari.it</a></span>
                </p>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => handleNavClick('contacts')}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FFC900] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{t.footer.sendDirectMessage}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SUBTLE DIVIDER & COPYRIGHT FOOTER ROW                                     */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
          <p className="font-light">
            © Italia Alimentari S.p.A. – {t.footer.allRights}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
