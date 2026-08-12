import React, { useEffect, useState, useRef } from 'react';
import { Languages, ChevronUp, Check, Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
];

export default function TranslateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef(null);

  // Helper to read cookie
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  // Helper to set google translate cookie
  const setTranslateCookie = (langCode) => {
    const cookieValue = `/en/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    if (window.location.hostname !== 'localhost') {
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname};`;
    }
  };

  useEffect(() => {
    // Check initial cookie state
    const cookieVal = getCookie('googtrans');
    if (cookieVal && cookieVal.includes('/bn')) {
      setCurrentLang('bn');
    } else {
      setCurrentLang('en');
    }

    // Define global callback for Google Translate initialization
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'bn,en',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Load Google Translate script over HTTPS dynamically
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Close dropdown on click outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const triggerTranslation = (langCode) => {
    setTranslateCookie(langCode);

    const tryApply = (el) => {
      if (!el) return false;
      const hasOption = Array.from(el.options || []).some((opt) => opt.value === langCode);
      if (hasOption) {
        el.value = langCode;
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('input', { bubbles: true }));
        if (typeof el.onchange === 'function') {
          el.onchange();
        }
        return true;
      }
      return false;
    };

    const selectEl = document.querySelector('.goog-te-combo');
    if (tryApply(selectEl)) {
      return;
    }

    // Poll up to 15 times for Google Translate select element & options to be populated
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const el = document.querySelector('.goog-te-combo');
      if (tryApply(el) || attempts >= 15) {
        clearInterval(interval);
        if (attempts >= 15 && !tryApply(el)) {
          // Reliable fallback if Google script DOM binding fails
          window.location.reload();
        }
      }
    }, 150);
  };

  const handleSelectLanguage = (langCode) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    setCurrentLang(langCode);
    triggerTranslation(langCode);
    setIsOpen(false);
  };

  const activeLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div ref={dropdownRef} className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end select-none font-poppins">
      {/* Google Translate element container (visually hidden offscreen so script can mount select) */}
      <div 
        id="google_translate_element" 
        style={{ position: 'fixed', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }} 
      />

      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-48 overflow-hidden rounded-2xl border-2 border-[#191A23] bg-white p-1.5 shadow-[0_6px_0_0_#191A23] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="px-3 py-2 border-b border-[#191A23]/10 text-xs font-fredoka font-semibold text-[#1E3F20] flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-[#1E3F20]" />
              Select Language
            </span>
            <span className="text-[10px] bg-[#B9FF66] px-1.5 py-0.5 rounded border border-[#191A23] font-sans font-bold">
              Google
            </span>
          </div>

          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = currentLang === lang.code;
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
