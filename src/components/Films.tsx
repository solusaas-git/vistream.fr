'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

export default function Films() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const films = [
    { id: 1, image: '/images/f1.jpg', title: 'Squid Game', year: '2024', rating: '8.9' },
    { id: 2, image: '/images/f2.jpg', title: 'The Night Agent', year: '2024', rating: '8.1' },
    { id: 3, image: '/images/f3.jpg', title: 'Ginny & Georgia', year: '2024', rating: '7.8' },
    { id: 4, image: '/images/f4.jpg', title: 'K.O.', year: '2024', rating: '8.4' },
    { id: 5, image: '/images/f5.jpg', title: 'Olympo', year: '2024', rating: '7.9' },
    { id: 6, image: '/images/f6.jpg', title: 'Savage', year: '2024', rating: '8.2' },
    { id: 7, image: '/images/f7.jpg', title: 'The Crown', year: '2024', rating: '8.7' },
    { id: 8, image: '/images/f8.jpg', title: 'Stranger Things', year: '2024', rating: '9.1' },
    { id: 9, image: '/images/f9.jpg', title: 'Wednesday', year: '2024', rating: '8.5' },
  ];

  // Create extended array for seamless looping
  const extendedFilms = [...films, ...films];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, films.length - itemsPerView);

  // Calculate exact scroll distance to show complete posters - responsive
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 200; // Mobile
      if (window.innerWidth < 1024) return 240; // Tablet
      return 288; // Desktop
    }
    return 288;
  };

  const getGap = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 16; // Mobile
      if (window.innerWidth < 1024) return 24; // Tablet
      return 48; // Desktop
    }
    return 48;
  };

  const cardWidth = getCardWidth();
  const gap = getGap();
  const cardPadding = 32;
  const itemWidth = cardWidth + gap + cardPadding;

  // Auto-scroll functionality
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement || isPaused) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.3; // Slower speed for films
      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollElement.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);
  
  const scrollToNext = () => {
    setIsPaused(true);
    if (currentIndex < maxIndex) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollToPosition(nextIndex * itemWidth);
    }
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  const scrollToPrev = () => {
    setIsPaused(true);
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollToPosition(prevIndex * itemWidth);
    }
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  const scrollToPosition = (position: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: position,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <section className="relative py-12 sm:py-16 lg:py-20">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 opacity-3 overflow-hidden">
          <div className="absolute top-12 sm:top-20 right-8 sm:right-20 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-[#f04f24] rounded-full blur-3xl" />
          <div className="absolute bottom-12 sm:bottom-20 left-8 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500 rounded-full blur-3xl" />
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#f04f24]/10 backdrop-blur-sm border border-[#f04f24]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
              <TrendingUp className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Top Films</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
              {t('films.title')}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl">
              {t('films.description')}
            </p>
          </div>
        </motion.div>

        {/* Netflix-Style Carousel with Auto-scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group/carousel"
        >
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex items-start gap-4 sm:gap-6 lg:gap-12 pb-4 sm:pb-6 pr-32 sm:pr-48 lg:pr-64 overflow-x-hidden scrollbar-hide"
              style={{ 
                scrollBehavior: 'unset',
                scrollSnapType: 'none',
                WebkitOverflowScrolling: 'touch',
                overflowY: 'visible'
              }}
            >
              {extendedFilms.map((film, index) => (
                <motion.div
                  key={`${film.id}-${Math.floor(index / films.length)}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: (index % films.length) * 0.1 }}
                  className="flex-shrink-0 relative group/card cursor-pointer"
                >
                  {/* Container with proper spacing for numbers */}
                  <div className="relative px-2 sm:px-3 lg:px-4 pt-4 sm:pt-6 lg:pt-8">
                    {/* Large Ranking Number - Responsive sizing */}
                    <div className="absolute top-[6px] sm:top-[8px] lg:top-[10px] -right-2 sm:-right-3 lg:-right-4 z-[100]">
                      <div className="text-4xl sm:text-6xl lg:text-8xl font-black transition-all duration-300 group-hover/card:text-[#f04f24]" 
                           style={{ 
                             WebkitTextStroke: '2px #ffffff',
                             color: '#111827',
                             textShadow: '0 0 0 transparent',
                             fontWeight: '900'
                           }}>
                        {(index % films.length) + 1}
                      </div>
                    </div>
                    
                    {/* Netflix-Style Card - Responsive sizing */}
                    <div className="relative w-48 sm:w-56 lg:w-72 h-72 sm:h-84 lg:h-[432px] rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 group-hover/card:shadow-lg group-hover/card:shadow-[#f04f24]/30">
                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-transparent group-hover/card:border-[#f04f24]/50 transition-all duration-300 z-10" />
                      {/* Film Poster */}
                      <img
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover/card:brightness-110"
                      />
                      
                      {/* Top Trending Badge */}
                      {(index % films.length) < 3 && (
                        <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 bg-gradient-to-r from-[#f04f24] to-orange-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-xs sm:text-sm font-bold">
                          #{(index % films.length) + 1} Trending
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Spacer for last poster number visibility */}
              <div className="flex-shrink-0 w-24 sm:w-32 lg:w-48"></div>
            </div>
          </div>
          
          {/* Navigation with Arrows and Progress Indicator */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
            {/* Left Arrow */}
            <motion.button
              onClick={scrollToPrev}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 sm:p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
                currentIndex === 0 
                  ? 'bg-white/5 border-white/10 text-gray-500 cursor-not-allowed opacity-50' 
                  : 'bg-white/10 border-white/20 hover:bg-[#f04f24]/20 hover:border-[#f04f24]/50 text-white opacity-90 hover:opacity-100'
              }`}
            >
              <ChevronLeft className="h-4 sm:h-5 w-4 sm:w-5" />
            </motion.button>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 sm:space-x-3">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsPaused(true);
                    setCurrentIndex(index);
                    scrollToPosition(index * itemWidth);
                    setTimeout(() => setIsPaused(false), 3000);
                  }}
                  className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#f04f24] w-6 sm:w-8 lg:w-10' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={scrollToNext}
              disabled={currentIndex === maxIndex}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 sm:p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
                currentIndex === maxIndex 
                  ? 'bg-white/5 border-white/10 text-gray-500 cursor-not-allowed opacity-50' 
                  : 'bg-white/10 border-white/20 hover:bg-[#f04f24]/20 hover:border-[#f04f24]/50 text-white opacity-90 hover:opacity-100'
              }`}
            >
              <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
} 