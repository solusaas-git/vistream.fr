'use client';

import { useState } from 'react';
import { useTranslations, useLanguage } from '@/lib/LanguageContext';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <header className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-3 sm:px-4">
        <div className="bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl shadow-black/25 backdrop-saturate-150">
          <div className="px-4 sm:px-6">
            <nav className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-black rounded-lg p-1.5 sm:p-2">
              <img src="/images/logo.svg" alt="Vistream" className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">{t('header.logo')}</span>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#f04f24] transition-colors font-medium lg:font-bold drop-shadow-lg text-sm lg:text-base"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#f04f24] transition-colors font-medium lg:font-bold drop-shadow-lg text-sm lg:text-base"
            >
              {t('nav.services')}
            </button>
            <Link
              href="/channels"
              className="text-white hover:text-[#f04f24] transition-colors font-medium lg:font-bold drop-shadow-lg text-sm lg:text-base"
            >
              {t('nav.packages')}
            </Link>
            <button
              onClick={() => scrollToSection('tarifs')}
              className="text-white hover:text-[#f04f24] transition-colors font-medium lg:font-bold drop-shadow-lg text-sm lg:text-base"
            >
              {t('nav.pricing')}
            </button>
          </div>

          {/* Right Side: Language + CTA */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* Language Switcher with Flags */}
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-1.5 lg:space-x-2 text-white hover:text-[#f04f24] transition-colors font-medium lg:font-bold drop-shadow-lg text-sm lg:text-base"
            >
              <img 
                src={language === 'fr' ? '/images/language-en-us.svg' : '/images/language-fr.svg'} 
                alt={language === 'fr' ? 'English' : 'Français'} 
                className="h-3.5 w-5 lg:h-4 lg:w-6 object-cover rounded-sm"
              />
              <span>{language === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('tarifs')}
              className="bg-[#f04f24] hover:bg-[#d63e1e] text-white px-3 py-1.5 lg:px-6 lg:py-2 rounded-lg font-semibold transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white drop-shadow-lg p-2 -m-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/30 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/30 shadow-2xl shadow-black/50 backdrop-saturate-150 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 p-4 sm:p-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#f04f24] transition-colors text-left font-semibold drop-shadow-lg py-3 px-3 -mx-3 rounded-lg hover:bg-white/20 active:bg-white/30"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#f04f24] transition-colors text-left font-semibold drop-shadow-lg py-3 px-3 -mx-3 rounded-lg hover:bg-white/20 active:bg-white/30"
              >
                {t('nav.services')}
              </button>
              <Link
                href="/channels"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#f04f24] transition-colors text-left font-semibold drop-shadow-lg py-3 px-3 -mx-3 rounded-lg hover:bg-white/20 active:bg-white/30 block"
              >
                {t('nav.packages')}
              </Link>
              <button
                onClick={() => scrollToSection('tarifs')}
                className="text-white hover:text-[#f04f24] transition-colors text-left font-semibold drop-shadow-lg py-3 px-3 -mx-3 rounded-lg hover:bg-white/20 active:bg-white/30"
              >
                {t('nav.pricing')}
              </button>
              
              <div className="border-t border-white/30 pt-3 space-y-3">
                <button
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  className="flex items-center space-x-2 text-white hover:text-[#f04f24] transition-colors font-semibold drop-shadow-lg py-3 px-3 -mx-3 rounded-lg hover:bg-white/20 active:bg-white/30"
                >
                  <img 
                    src={language === 'fr' ? '/images/language-en-us.svg' : '/images/language-fr.svg'} 
                    alt={language === 'fr' ? 'English' : 'Français'} 
                    className="h-4 w-6 object-cover rounded-sm"
                  />
                  <span>{language === 'fr' ? 'EN' : 'FR'}</span>
                </button>
                
                <button
                  onClick={() => {
                    scrollToSection('tarifs');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#f04f24] hover:bg-[#d63e1e] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg text-center"
                >
                  {t('nav.cta')}
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
    </>
  );
} 