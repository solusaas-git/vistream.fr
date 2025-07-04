'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Star, ArrowDown } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const t = useTranslations();

  const slides = [
    {
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      description: t('hero.slide1.description'),
      btn1: t('hero.slide1.btn1'),
      btn2: t('hero.slide1.btn2'),
    },
    {
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      description: t('hero.slide2.description'),
      btn1: t('hero.slide2.btn1'),
      btn2: t('hero.slide2.btn2'),
    },
    {
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      description: t('hero.slide3.description'),
      btn1: t('hero.slide3.btn1'),
      btn2: t('hero.slide3.btn2'),
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen h-screen flex items-start justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: 'url(/images/Vistream-hero-background.jpeg)' }}
        animate={{ scale: 1.05 + currentSlide * 0.01 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Sophisticated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#f04f24] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-24 sm:bottom-32 left-8 sm:left-20 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#f04f24] rounded-full animate-pulse opacity-50" />
      </div>

             {/* Main Content Container */}
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
         <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[55vh]">
           {/* Content Section */}
           <div className="max-w-4xl text-center w-full">
            <AnimatePresence mode="wait">
                              <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    staggerChildren: 0.1
                  }}
                  className="text-white space-y-6 sm:space-y-8"
                >
                                 {/* Badge */}
                 <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.2 }}
                   className="inline-flex items-center justify-center space-x-2 bg-[#f04f24]/20 backdrop-blur-sm border border-[#f04f24]/30 rounded-full px-3 sm:px-4 py-2 mx-auto"
                 >
                  <Star className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-[#f04f24] fill-current" />
                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    <span className="hidden sm:inline">Premium Vistream Streaming Service</span>
                    <span className="sm:hidden">Premium Streaming</span>
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 sm:space-y-4"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block text-white drop-shadow-lg">
                      {slides[currentSlide].title}
                    </span>
                    <span className="block bg-gradient-to-r from-[#f04f24] to-[#ff6b47] bg-clip-text text-transparent drop-shadow-lg">
                      {slides[currentSlide].subtitle}
                    </span>
                  </h1>
                </motion.div>

                                 {/* Description */}
                 <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 }}
                   className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0"
                 >
                   {slides[currentSlide].description}
                 </motion.p>
 
                 {/* Action Buttons */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.7 }}
                   className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center px-4 sm:px-0"
                 >
                  <button
                    onClick={() => scrollToSection('services')}
                    className="group relative bg-[#f04f24] hover:bg-white text-white hover:text-[#f04f24] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-2xl shadow-[#f04f24]/25 hover:shadow-[#f04f24]/40 hover:-translate-y-1 transform"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Play className="h-4 sm:h-5 w-4 sm:w-5 group-hover:scale-110 transition-transform" />
                      <span>{slides[currentSlide].btn1}</span>
                    </span>
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('tarifs')}
                    className="group relative border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 transform hover:shadow-xl"
                  >
                    <span className="relative z-10">{slides[currentSlide].btn2}</span>
                    <div className="absolute inset-0 bg-white rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                                 </motion.div>
               </motion.div>
             </AnimatePresence>
           </div>
         </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:flex absolute left-4 lg:left-8 top-[45%] sm:top-[40%] transform -translate-y-1/2 z-30 bg-black/20 backdrop-blur-md hover:bg-[#f04f24]/80 border border-white/20 hover:border-[#f04f24] text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#f04f24]/25 items-center justify-center"
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:flex absolute right-4 lg:right-8 top-[45%] sm:top-[40%] transform -translate-y-1/2 z-30 bg-black/20 backdrop-blur-md hover:bg-[#f04f24]/80 border border-white/20 hover:border-[#f04f24] text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#f04f24]/25 items-center justify-center"
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>
      
      {/* Enhanced Slide Indicators with Mobile Navigation */}
      <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center justify-center space-x-4 sm:space-x-6">
          
          {/* Mobile Left Arrow */}
          <motion.button
            onClick={prevSlide}
            whileTap={{ scale: 0.9 }}
            className="sm:hidden text-white/80 hover:text-[#f04f24] transition-colors duration-300 p-2"
          >
            <ChevronLeft className="h-6 w-6 drop-shadow-2xl" strokeWidth={2.5} />
          </motion.button>
          
          {/* Slide Indicators */}
          <div className="flex space-x-3 sm:space-x-4">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div className={`w-8 sm:w-12 h-1.5 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'bg-[#f04f24] shadow-lg shadow-[#f04f24]/50' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}>
                  {index === currentSlide && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#f04f24] to-[#ff6b47] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 6, ease: "linear" }}
                      key={currentSlide}
                    />
                  )}
                </div>
                <span className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  {index + 1}
                </span>
              </motion.button>
            ))}
          </div>
          
          {/* Mobile Right Arrow */}
          <motion.button
            onClick={nextSlide}
            whileTap={{ scale: 0.9 }}
            className="sm:hidden text-white/80 hover:text-[#f04f24] transition-colors duration-300 p-2"
          >
            <ChevronRight className="h-6 w-6 drop-shadow-2xl" strokeWidth={2.5} />
          </motion.button>
          
        </div>
      </div>

      {/* Scroll Indicator - Compact */}
      <motion.button
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-20 sm:bottom-24 lg:bottom-28 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer group gap-1"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-white/70 group-hover:text-[#f04f24] text-xs font-medium tracking-wider transition-colors duration-300 hidden sm:block">
          SCROLL
        </span>
        <ArrowDown className="h-5 w-5 text-white/70 group-hover:text-[#f04f24] transition-colors duration-300" />
      </motion.button>
    </section>
  );
} 