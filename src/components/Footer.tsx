'use client';

import { useTranslations, useLanguage } from '@/lib/LanguageContext';
import { ArrowUp, Mail, Phone, MapPin, Shield, Zap, Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations();
  const { language, setLanguage } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.pricing'), href: '#pricing' },
  ];

  const services = [
    { name: t('footer.services.iptv'), href: '#' },
    { name: t('footer.services.channels'), href: '#' },
    { name: t('footer.services.vod'), href: '#' },
    { name: t('footer.services.support'), href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  const features = [
    { icon: Globe, text: t('footer.features.channels') },
    { icon: Shield, text: t('footer.features.secure') },
    { icon: Zap, text: t('footer.features.streaming') },
    { icon: Globe, text: t('footer.features.multilingual') },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f04f24]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Brand & About */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-3">
                <img src="/images/logo.svg" alt="Vistream" className="h-6 w-6" />
                <h3 className="text-lg font-bold">{t('header.logo')}</h3>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                {t('footer.description')}
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs">
                    <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-3 w-3 text-[#f04f24]" />
                    </div>
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-white/10 hover:bg-[#f04f24]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    <social.icon className="h-4 w-4 text-gray-300 hover:text-[#f04f24]" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Navigation, Services & Contact - Combined Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                
                {/* Quick Links */}
                <div className="hidden sm:block">
                  <h4 className="text-sm sm:text-lg font-bold mb-2 sm:mb-3 text-white">{t('footer.navigation')}</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-[#f04f24] transition-colors duration-300 flex items-center space-x-2 group text-xs sm:text-sm"
                        >
                          <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#f04f24] transition-colors" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="hidden sm:block">
                  <h4 className="text-sm sm:text-lg font-bold mb-2 sm:mb-3 text-white">{t('footer.services.title')}</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {services.map((service, index) => (
                      <li key={index}>
                        <a
                          href={service.href}
                          className="text-gray-300 hover:text-[#f04f24] transition-colors duration-300 flex items-center space-x-2 group text-xs sm:text-sm"
                        >
                          <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#f04f24] transition-colors" />
                          <span>{service.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact & Legal */}
                <div>
                  <h4 className="text-sm sm:text-lg font-bold mb-2 sm:mb-3 text-white">{t('footer.contact.title')}</h4>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#f04f24]" />
                      </div>
                      <span className="text-gray-300 text-xs">{t('footer.contact.email')}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#f04f24]" />
                      </div>
                      <span className="text-gray-300 text-xs">{t('footer.contact.phone')}</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#f04f24]" />
                      </div>
                      <span className="text-gray-300 text-xs">{t('footer.contact.location')}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="container mx-auto px-6 py-3">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-gray-400 text-xs">
                  &copy; {currentYear} {t('footer.copyright')}
                </p>
                <div className="hidden md:flex items-center space-x-2 text-xs text-gray-500">
                  <span>•</span>
                  <span>{t('footer.service')}</span>
                  <span>•</span>
                  <span>{t('footer.location')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-400">{t('footer.status')}</span>
                </div>
                <div className="w-px h-3 bg-white/20" />
                <span className="text-xs text-gray-400">{t('footer.uptime')}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Language Switcher - Fixed Left */}
      <button
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="fixed left-6 bottom-6 z-50 w-12 h-12 bg-white/25 backdrop-blur-xl hover:bg-white/40 border border-white/30 hover:border-white/50 rounded-full shadow-xl shadow-black/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
      >
        <img 
          src={language === 'fr' ? '/images/language-en-us.svg' : '/images/language-fr.svg'} 
          alt={language === 'fr' ? 'English' : 'Français'} 
          className="h-5 w-7 object-cover rounded-sm group-hover:scale-110 transition-transform duration-300"
        />
      </button>

      {/* Back to Top - Fixed Right */}
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 z-50 bg-gradient-to-r from-[#f04f24] to-orange-500 hover:from-[#e04420] hover:to-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
} 