'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, BadgeCheck, Quote, Users, MessageSquare, Heart } from 'lucide-react';

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const reviews = [
    {
      name: t('reviews.review1.name'),
      text: t('reviews.review1.text'),
      verified: t('reviews.review1.verified'),
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: t('reviews.review2.name'),
      text: t('reviews.review2.text'),
      verified: t('reviews.review2.verified'),
      rating: 5,
      avatar: '👩‍🎨',
    },
    {
      name: t('reviews.review3.name'),
      text: t('reviews.review3.text'),
      verified: t('reviews.review3.verified'),
      rating: 5,
      avatar: '👨‍🔧',
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 sm:top-20 right-8 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 bg-[#f04f24] rounded-full blur-2xl" />
        <div className="absolute bottom-12 sm:bottom-20 left-8 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-blue-500 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-[#f04f24]/10 backdrop-blur-sm border border-[#f04f24]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <Users className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
            <span className="text-xs sm:text-sm font-medium text-white/90">Avis Clients</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            {t('reviews.title')}
          </h2>
        </motion.div>

        {/* Compact Reviews Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-8 lg:px-20">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Modern Review Card */}
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f04f24]/5 to-blue-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-bl from-[#f04f24]/5 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full" />
                  
                  {/* Enhanced Quote Icon */}
                  <div className="absolute -top-2 sm:-top-4 right-4 sm:right-8 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#f04f24] rounded-xl blur-sm opacity-40" />
                      <div className="relative bg-gradient-to-r from-[#f04f24] to-[#ff6b47] rounded-xl p-2 sm:p-3 shadow-xl border border-white/20">
                        <Quote className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Header Section */}
                  <div className="relative z-10 mb-4 sm:mb-6 lg:mb-8 pt-4 sm:pt-6">
                    <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                      {/* Enhanced Avatar with Status Ring */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#f04f24] to-[#ff6b47] rounded-full blur-sm opacity-75" />
                        <div className="relative w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-[#f04f24] to-[#ff6b47] rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl shadow-xl border-2 border-white/20 group-hover:scale-105 transition-transform duration-300">
                          {reviews[currentReview].avatar}
                        </div>
                        {/* Status Indicator */}
                        <div className="absolute -bottom-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-green-400 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                          <BadgeCheck className="h-2 sm:h-3 w-2 sm:w-3 text-white" />
                        </div>
                      </div>
                      
                      {/* Enhanced User Info */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-2 sm:mb-3">
                          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 tracking-tight">
                            {reviews[currentReview].name}
                          </h4>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                            {/* Enhanced Star Rating */}
                            <div className="flex items-center space-x-1 bg-yellow-400/20 rounded-full px-2 sm:px-3 py-1 border border-yellow-400/30">
                              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <Star className="h-3 sm:h-4 w-3 sm:w-4 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                              <span className="text-xs sm:text-sm font-medium text-yellow-400 ml-1">5.0</span>
                            </div>
                            
                            {/* Verified Badge */}
                            <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-2 sm:px-3 py-1 border border-green-500/30">
                              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                              <span className="text-xs sm:text-sm font-medium text-green-300">{reviews[currentReview].verified}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Review Text Section */}
                  <div className="relative z-10">
                    {/* Text Container with Enhanced Design */}
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                      {/* Review Text */}
                      <p className="text-sm sm:text-base lg:text-lg text-gray-100 leading-relaxed font-light tracking-wide">
                        {reviews[currentReview].text}
                      </p>
                    </div>
                    
                    {/* Review Metadata */}
                    <div className="flex items-center mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full" />
                          <span>Client vérifié</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-white/20" />
                        <span>Décembre 2024</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl">
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#f04f24]/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                         style={{ background: 'linear-gradient(45deg, transparent, rgba(240, 79, 36, 0.1), transparent, rgba(59, 130, 246, 0.1), transparent)' }} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation with Arrows and Indicators */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6">
            {/* Left Arrow */}
            <motion.button
              onClick={prevReview}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-4 sm:h-5 w-4 sm:w-5" />
            </motion.button>
            
            {/* Indicators */}
            <div className="flex justify-center space-x-2 sm:space-x-3">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToReview(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 ${
                  index === currentReview 
                      ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-[#f04f24] rounded-full' 
                      : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 hover:bg-white/50 rounded-full'
                }`}
              />
            ))}
            </div>
            
            {/* Right Arrow */}
            <motion.button
              onClick={nextReview}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5" />
            </motion.button>
          </div>

          {/* Compact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center items-center space-x-3 sm:space-x-6 lg:space-x-8 mt-6 sm:mt-8"
          >
            <div className="text-center min-w-0 flex-1 max-w-[100px] sm:max-w-[120px]">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1">
                <div className="p-0.5 sm:p-1 bg-yellow-400/20 rounded-full">
                  <Star className="h-3 sm:h-4 w-3 sm:w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">5.0</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">Note Moyenne</p>
            </div>
            <div className="w-px h-4 sm:h-6 lg:h-8 bg-white/20" />
            <div className="text-center min-w-0 flex-1 max-w-[100px] sm:max-w-[120px]">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1">
                <div className="p-0.5 sm:p-1 bg-[#f04f24]/20 rounded-full">
                  <MessageSquare className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
                </div>
                <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">2.8K+</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">Avis Positifs</p>
            </div>
            <div className="w-px h-4 sm:h-6 lg:h-8 bg-white/20" />
            <div className="text-center min-w-0 flex-1 max-w-[100px] sm:max-w-[120px]">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1">
                <div className="p-0.5 sm:p-1 bg-green-400/20 rounded-full">
                  <Heart className="h-3 sm:h-4 w-3 sm:w-4 text-green-400" />
                </div>
                <span className="text-sm sm:text-lg lg:text-xl font-bold text-white">98%</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 