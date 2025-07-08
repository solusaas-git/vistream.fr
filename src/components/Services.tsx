'use client';

import { useTranslations } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Tv, PlayCircle, Headphones, ArrowRight, Sparkles } from 'lucide-react';

export default function Services() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Tv,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      image: '/images/icon-1.png',
      gradient: 'from-[#f04f24] to-[#ff6b47]',
      delay: 0.2
    },
    {
      icon: PlayCircle,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      image: '/images/icon-2.png',
      gradient: 'from-blue-500 to-cyan-400',
      delay: 0.4
    },
    {
      icon: Headphones,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      image: '/images/icon-3.png',
      gradient: 'from-purple-500 to-pink-400',
      delay: 0.6
    },
  ];

  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 sm:top-32 left-8 sm:left-32 w-32 sm:w-48 h-32 sm:h-48 bg-[#f04f24] rounded-full blur-2xl" />
        <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-32 w-24 sm:w-40 h-24 sm:h-40 bg-blue-500 rounded-full blur-2xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 sm:top-20 right-8 sm:right-20 w-2 sm:w-3 h-2 sm:h-3 bg-[#f04f24] rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 sm:bottom-32 left-8 sm:left-20 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#f04f24]/10 backdrop-blur-sm border border-[#f04f24]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Sparkles className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
            <span className="text-xs sm:text-sm font-medium text-white/90">Nos Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('services.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Découvrez notre gamme complète de services Vistream Streaming premium
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 hover:bg-white/15">
                {/* Header with Icon and Title */}
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={48}
                      height={48}
                        className="w-12 h-12 brightness-0 invert"
                    />
                  </div>
                    <div className={`absolute -top-1 -right-1 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <ArrowRight className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-white" />
                  </div>
                </div>
                
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-100 transition-colors flex-1">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Hover Effect Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className={`h-full bg-gradient-to-r ${service.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl max-w-md sm:max-w-none mx-auto">
            <div className="flex items-center space-x-2 text-white">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-[#f04f24]" />
              <span className="font-medium text-sm sm:text-base">Prêt à commencer ?</span>
            </div>
            <button className="bg-gradient-to-r from-[#f04f24] to-[#ff6b47] hover:from-[#d63e1e] hover:to-[#f04f24] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center">
              <span>Voir nos offres</span>
              <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 