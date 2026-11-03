import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { ItaliaAlimentariLogo } from './ItaliaAlimentariLogo';
import { useLanguage } from '../context/LanguageContext';

export type PageId =
  | 'home'
  | 'company'
  | 'products'
  | 'solutions'
  | 'quality'
  | 'structure'
  | 'brands'
  | 'recipes'
  | 'news'
  | 'contacts';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenContact: (defaultTab?: string) => void;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenContact,
  currentLanguage,
  onLanguageChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { t, language, setLanguage } = useLanguage();

  const navItems: Array<{ id: PageId; label: string }> = [
    { id: 'quality', label: t.nav.quality },
    { id: 'recipes', label: t.nav.recipes },
    { id: 'contacts', label: t.nav.contacts }
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'IT', label: 'Italiano' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'FR', label: 'Français' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-[#8C9094]/98 backdrop-blur-md shadow-md border-b border-[#7B8085] text-white'
        : 'bg-[#8C9094] backdrop-blur-sm border-b border-[#7B8085] text-white'
        }`}
    >
      {/* Unified Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20 sm:h-22">

          {/* Left: Authentic Italia Alimentari White Logo + Brand Emblems */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group text-left cursor-pointer transition-opacity hover:opacity-95"
              aria-label="Italia Alimentari Home"
            >
              <ItaliaAlimentariLogo variant="dark" size="lg" />
            </button>

            {/* Vertical Divider */}
            <div className="hidden lg:block border-l border-white/40 h-9 ml-2" />

            {/* Brand Badges Matching Official Site Header */}
            <div className="hidden xl:flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold text-white bg-white/15 border border-white/20 uppercase tracking-tight">
                Corte Buona
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold text-white bg-white/15 border border-white/20 uppercase tracking-tight">
                ibis
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold text-white bg-white/15 border border-white/20 uppercase tracking-tight">
                Montagna
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold text-white bg-white/15 border border-white/20 uppercase tracking-tight">
                Spanino
              </span>
            </div>
          </div>

          {/* Center: Main Navigation Links with Generous Spacing, Authentic White Text & Bottom Underline */}
          <nav
            className="hidden lg:flex items-center gap-8 md:gap-10 xl:gap-14 text-sm font-sans font-bold uppercase tracking-wider text-white"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative px-2 py-2 whitespace-nowrap transition-colors cursor-pointer ${isActive
                    ? 'text-white'
                    : 'text-white/85 hover:text-white'
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-6 sm:-bottom-7 left-0 right-0 h-[3px] bg-white rounded-t-xs" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions (Language Selector + Get in Touch) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white hover:text-[#FFC900] transition-colors rounded hover:bg-white/10 cursor-pointer uppercase font-mono"
                aria-label="Language selector"
              >
                <Globe className="w-3.5 h-3.5 text-white/90" />
                <span>{currentLanguage}</span>
              </button>

              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-[#767C84] border border-white/20 rounded-lg shadow-xl py-1.5 z-50 text-left">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setLanguage(lang.code as any);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${language === lang.code
                          ? 'bg-white/20 text-[#FFC900] font-bold'
                          : 'text-white hover:text-white hover:bg-white/10'
                          }`}
                      >
                        <span>{lang.label}</span>
                        <span className="text-[10px] text-white/70 font-mono">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Yellow CTA Button - Navigates directly to Contacts Page at top */}
            <button
              onClick={() => {
                onNavigate('contacts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs uppercase font-sans font-bold tracking-wider rounded transition-all duration-200 shadow-xs active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] sm:top-[80px] bg-[#8C9094] border-b border-[#7B8085] shadow-2xl px-6 py-6 transition-all max-h-[85vh] overflow-y-auto text-white">
          <nav className="flex flex-col space-y-2 text-base font-sans font-bold uppercase tracking-wider text-white text-left">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-2.5 px-1 border-b border-white/15 text-left transition-colors flex items-center justify-between cursor-pointer ${currentPage === item.id ? 'text-[#FFC900] font-bold' : 'text-white/90 hover:text-white'
                  }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#FFC900]" />
                )}
              </button>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-white/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('contacts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3 bg-[#FFC900] text-[#151515] text-xs font-bold uppercase tracking-wider rounded text-center shadow-xs cursor-pointer"
            >
              {t.nav.getInTouch}
            </button>
            <div className="flex items-center justify-between text-xs text-white/70 pt-2">
              <span>Gruppo Cremonini · Italian Food Valley</span>
              <span>BRCGS & IFS Certified</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
