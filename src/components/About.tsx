'use client';

import { useTranslations } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Play, Shield, Zap, Globe, CreditCard, Sparkles } from 'lucide-react';

export default function About() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: t('counter.channels.number'), label: t('counter.channels.text') },
    { number: t('counter.films.number'), label: t('counter.films.text') },
    { number: t('counter.series.number'), label: t('counter.series.text') }
  ];

  const features = [
    { icon: Shield, title: "Sécurisé" },
    { icon: Zap, title: "Ultra Rapide" },
    { icon: Globe, title: "International" }
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-[#f04f24] rounded-full blur-2xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 bg-blue-500 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#f04f24]/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Image
                  src="/images/about-img.jpg"
                  alt="About Vistream"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-xl"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  <div className="bg-[#f04f24] rounded-full p-3 sm:p-4 shadow-xl">
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white fill-current" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            <div>
              <div className="text-center mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center space-x-2 bg-[#f04f24]/10 backdrop-blur-sm border border-[#f04f24]/20 rounded-full px-4 py-2 mb-6"
                >
                  <Sparkles className="h-4 w-4 text-[#f04f24]" />
                  <span className="text-sm font-medium text-white/90">{t('about.tag')}</span>
                </motion.div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                {t('about.title')}
              </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                {t('about.description')}
              </p>
            </div>

            {/* Compact Features */}
            <div className="flex gap-2 sm:gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-white/3 backdrop-blur-xl border border-white/5 rounded-lg px-2.5 sm:px-3 py-2 hover:bg-white/5 transition-all duration-300 flex-1"
                >
                  <feature.icon className="h-4 w-4 text-[#f04f24] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-white font-medium truncate">{feature.title}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-center"
            >
              <button
                onClick={() => scrollToSection('tarifs')}
                className="bg-gradient-to-r from-[#f04f24] to-[#ff6b47] hover:from-[#d63e1e] hover:to-[#f04f24] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base inline-flex items-center gap-2"
              >
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                {t('about.btn')}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Compact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              className="text-center bg-white/3 backdrop-blur-xl border border-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/5 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 