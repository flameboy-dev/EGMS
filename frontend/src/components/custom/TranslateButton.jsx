import React, { useState, useRef, useEffect } from 'react';
import { Languages, ChevronUp, Check, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
];

export default function TranslateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const activeLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <div ref={dropdownRef} className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end select-none font-poppins">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-48 overflow-hidden rounded-2xl border-2 border-[#191A23] bg-white p-1.5 shadow-[0_6px_0_0_#191A23] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="px-3 py-2 border-b border-[#191A23]/10 text-xs font-fredoka font-semibold text-[#1E3F20] flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-[#1E3F20]" />
              Select Language
            </span>
          </div>

          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E3F20] text-white font-semibold shadow-xs'
                      : 'text-[#1E3F20] hover:bg-[#F6FAEF]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </span>
                  {isSelected && <Check className="h-4 w-4 text-[#B9FF66]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Sticky Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Translate website language"
        className="group flex items-center gap-2.5 rounded-full border-2 border-[#191A23] bg-white px-4 py-2.5 text-[#1E3F20] shadow-[0_4px_0_0_#191A23] transition-all hover:-translate-y-0.5 hover:bg-[#F6FAEF] hover:shadow-[0_6px_0_0_#191A23] active:translate-y-0.5 active:shadow-[0_2px_0_0_#191A23] cursor-pointer"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E3F20] text-white transition-transform group-hover:scale-110">
          <Languages className="h-4 w-4" />
        </div>

        <div className="flex items-center gap-1.5 font-fredoka font-medium text-sm sm:text-base">
          <span>{activeLangObj.nativeName}</span>
        </div>

        <ChevronUp
          className={`h-4 w-4 text-[#1E3F20] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
}
