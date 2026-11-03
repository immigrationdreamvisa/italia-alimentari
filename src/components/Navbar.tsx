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
  onOpenSearch?: () => void;
  onOpenContact?: (defaultTab?: string) => void;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currentLanguage,
  onLanguageChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { t, language, setLanguage } = useLanguage();

  // Navigation items matching reference: Quality, Recipes, Contacts
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

  const navigateTo = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#7E858B]/98 backdrop-blur-md shadow-md border-b border-white/20 text-white'
          : 'bg-[#848B91] backdrop-blur-sm border-b border-white/20 text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">

          {/* ========================================================================= */}
          {/* LEFT: Italia Alimentari Logo + Vertical Divider Line                      */}
          {/* ========================================================================= */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center group text-left cursor-pointer transition-opacity hover:opacity-95"
              aria-label="Italia Alimentari Home"
            >
              <ItaliaAlimentariLogo variant="dark" size="xl" />
            </button>

            {/* Vertical Divider */}
            <div className="hidden sm:block border-l border-white/40 h-9 sm:h-10 ml-2" />
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: Navigation Items (Quality, Recipes, Contacts) + Language + CTA     */}
          {/* ========================================================================= */}
          <div className="flex items-center gap-8 md:gap-10 lg:gap-12 xl:gap-14">
            
            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-8 md:gap-10 xl:gap-12 text-[15px] sm:text-[16px] font-sans font-medium text-white"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`relative py-2 whitespace-nowrap transition-colors cursor-pointer ${
                      isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white'
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

            {/* Language Selector Dropdown: Globe + Code */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-bold text-white hover:text-white/80 transition-colors rounded hover:bg-white/10 cursor-pointer uppercase font-sans"
                aria-label="Language selector"
              >
                <Globe className="w-4 h-4 text-white" />
                <span>{currentLanguage}</span>
              </button>

              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-[#6F767D] border border-white/20 rounded-xl shadow-2xl py-1.5 z-50 text-left">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setLanguage(lang.code as any);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                          language === lang.code
                            ? 'bg-white/20 text-[#FFC900] font-bold'
                            : 'text-white hover:bg-white/10'
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

            {/* Yellow CTA Button: GET IN TOUCH ↗ */}
            <button
              onClick={() => navigateTo('contacts')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded transition-all duration-200 shadow-xs active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE DRAWER                                                             */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] bg-[#7E858B] border-b border-[#6E757B] shadow-2xl px-6 py-6 transition-all max-h-[85vh] overflow-y-auto text-white">
          <nav className="flex flex-col space-y-3 text-base font-sans font-bold uppercase tracking-wider text-white text-left">
            <button
              onClick={() => navigateTo('home')}
              className={`py-2 px-1 border-b border-white/15 text-left transition-colors flex items-center justify-between cursor-pointer ${
                currentPage === 'home' ? 'text-white underline decoration-2' : 'text-white/90'
              }`}
            >
              <span>{t.nav.home}</span>
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`py-2 px-1 border-b border-white/15 text-left transition-colors flex items-center justify-between cursor-pointer ${
                  currentPage === item.id ? 'text-white underline decoration-2' : 'text-white/90'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <span className="w-2 h-2 rounded-full bg-white" />
                )}
              </button>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-white/20 flex flex-col gap-3">
            <button
              onClick={() => navigateTo('contacts')}
              className="w-full py-3 bg-[#FFC900] text-[#151515] text-xs font-bold uppercase tracking-wider rounded text-center shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
