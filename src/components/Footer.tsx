import React, { useState } from 'react';
import { Phone, Mail, Search } from 'lucide-react';
import { PageId } from './Navbar';
import { useLanguage } from '../context/LanguageContext';

const cremoniniSvg = '/images/cremonini_logo.svg';

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

  const handleNavClick = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenSearch) {
      onOpenSearch();
    }
  };

  const navLinks: Array<{ id: PageId; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'quality', label: t.nav.quality },
    { id: 'recipes', label: t.nav.recipes },
    { id: 'contacts', label: t.nav.contacts }
  ];

  return (
    <footer className="bg-[#464C52] text-white pt-14 pb-10 text-left font-sans antialiased border-t border-[#3A4046]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 3-COLUMN CORPORATE FOOTER EXACTLY MATCHING USER'S REFERENCE               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 items-start">
          
          {/* COLUMN 1: Corporate Information (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-xs text-white/80 leading-relaxed font-sans">
            <div>
              <h3 className="text-[15px] font-bold text-white tracking-wide uppercase">
                ITALIA ALIMENTARI SPA
              </h3>
              <p className="text-xs text-white/70 mt-0.5">
                {t.footer.companyType}
              </p>
            </div>

            <div className="pt-2">
              <p>{t.footer.registeredHeadquarters}</p>
              <p className="mt-0.5">
                Tel:{' '}
                <a
                  href="tel:+390524930311"
                  className="text-white hover:text-[#FFC700] transition-colors"
                >
                  +39 0524 930311
                </a>
                {' · '}PEC:{' '}
                <a
                  href="mailto:info@pec.italiaalimentari.it"
                  className="text-white hover:text-[#FFC700] transition-colors"
                >
                  info@pec.italiaalimentari.it
                </a>
              </p>
            </div>

            <div className="pt-1">
              <p>{t.footer.adminOffices}</p>
              <p className="mt-0.5">
                Tel:{' '}
                <a
                  href="tel:+3903766801"
                  className="text-white hover:text-[#FFC700] transition-colors"
                >
                  +39 0376 6801
                </a>
                {' · '}Email:{' '}
                <a
                  href="mailto:info@italiaalimentari.it"
                  className="text-white hover:text-[#FFC700] transition-colors"
                >
                  info@italiaalimentari.it
                </a>
              </p>
            </div>

            <div className="pt-1 text-white/70">
              <p>{t.footer.rea}</p>
              <p>{t.footer.vat}</p>
            </div>

            <div className="pt-1 text-white/70">
              <p>{t.footer.inalcaCoordination}</p>
            </div>

            <div className="pt-1 text-white/90">
              <p>
                {t.footer.tollFreeLabel}{' '}
                <a
                  href="tel:800826123"
                  className="underline font-semibold text-white hover:text-[#FFC700] transition-colors"
                >
                  800.826.123
                </a>
              </p>
            </div>

            <div className="pt-3">
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
                  className="h-9 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Site Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans mb-4">
              {t.footer.siteNav ? t.footer.siteNav.toUpperCase() : 'SITE NAVIGATION'}
            </h4>
            
            <ul className="space-y-3 text-xs font-sans">
              {navLinks.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="group flex items-center gap-2 cursor-pointer transition-colors text-left"
                    >
                      <span
                        className={`transition-colors ${
                          isActive ? 'text-[#FFC700] font-bold' : 'text-white/60 group-hover:text-[#FFC700]'
                        }`}
                      >
                        ›
                      </span>
                      <span
                        className={`transition-colors ${
                          isActive ? 'text-[#FFC700] font-bold' : 'text-white/85 group-hover:text-[#FFC700]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: Search Bar & Direct Customer Service Box (4 cols) */}
          <div className="md:col-span-4 space-y-5 text-left">
            
            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="flex items-center w-full shadow-xs">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={() => onOpenSearch && onOpenSearch()}
                placeholder={t.footer.searchPlaceholder || "Search products, recipes or corporate details"}
                className="w-full bg-white text-gray-800 placeholder-gray-500 text-xs px-3.5 py-2.5 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#2D3339] hover:bg-[#1E2328] text-white px-3.5 py-2.5 rounded-r-md transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-white" />
              </button>
            </form>

            {/* Direct Customer Service Box */}
            <div className="p-5 bg-[#3B4147]/90 border border-white/10 rounded-2xl space-y-2.5 text-xs text-white/90 shadow-sm">
              <h5 className="text-[11px] font-bold text-[#FFC700] tracking-wider uppercase mb-3">
                {t.footer.directService ? t.footer.directService.toUpperCase() : 'DIRECT CUSTOMER SERVICE'}
              </h5>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#FFC700] shrink-0" />
                <span>
                  Numero Verde:{' '}
                  <a
                    href="tel:800826123"
                    className="font-bold text-white hover:text-[#FFC700] transition-colors"
                  >
                    800.826.123
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#FFC700] shrink-0" />
                <span>
                  Gazoldo Hub (MN):{' '}
                  <a
                    href="tel:+3903766801"
                    className="hover:text-[#FFC700] transition-colors"
                  >
                    +39 0376 6801
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#FFC700] shrink-0" />
                <span>
                  Busseto Plant (PR):{' '}
                  <a
                    href="tel:+390524930311"
                    className="hover:text-[#FFC700] transition-colors"
                  >
                    +39 0524 930311
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#FFC700] shrink-0" />
                <span>
                  Email:{' '}
                  <a
                    href="mailto:info@italiaalimentari.it"
                    className="underline hover:text-[#FFC700] transition-colors"
                  >
                    info@italiaalimentari.it
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#FFC700] shrink-0" />
                <span>
                  PEC:{' '}
                  <a
                    href="mailto:info@pec.italiaalimentari.it"
                    className="underline hover:text-[#FFC700] transition-colors"
                  >
                    info@pec.italiaalimentari.it
                  </a>
                </span>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact('general');
                    } else {
                      handleNavClick('contacts');
                    }
                  }}
                  className="text-[#FFC700] hover:text-white font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer group"
                >
                  <span>
                    {t.footer.sendDirectMessage
                      ? t.footer.sendDirectMessage.toUpperCase()
                      : 'SEND DIRECT MESSAGE'}
                  </span>
                  <span className="text-sm font-normal transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 border-t border-white/10 text-xs text-white/60 font-sans">
          <p>© Italia Alimentari S.p.A. – {t.footer.allRights}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
