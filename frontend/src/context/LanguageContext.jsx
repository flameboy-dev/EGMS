import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  // Default to English on initial page load / refresh
  useEffect(() => {
    setLanguage('en');
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  // Helper translation function
  const t = (text) => {
    if (language === 'en') return text;
    return translations[text] || text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
