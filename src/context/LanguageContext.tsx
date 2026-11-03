import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationSchema, Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ia_selected_language');
      if (saved && (saved === 'IT' || saved === 'EN' || saved === 'DE' || saved === 'FR')) {
        return saved as Language;
      }
    } catch {
      // fallback
    }
    return 'IT';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('ia_selected_language', lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.IT
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;

