'use client';

import { useTranslations } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Counter() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState({ channels: 0, films: 0, series: 0 });

  const finalCounts = {
    channels: 152000,
    films: 26000,
    series: 3500
  };

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const intervals = 60;
    const stepTime = duration / intervals;

    const timer = setInterval(() => {
      setCounts(prev => ({
        channels: Math.min(prev.channels + finalCounts.channels / intervals, finalCounts.channels),
        films: Math.min(prev.films + finalCounts.films / intervals, finalCounts.films),
        series: Math.min(prev.series + finalCounts.series / intervals, finalCounts.series)
      }));
    }, stepTime);

    setTimeout(() => {
      clearInterval(timer);
      setCounts(finalCounts);
    }, duration);

    return () => clearInterval(timer);
  }, [isInView, finalCounts]);

  const formatNumber = (num: number) => {
    return Math.floor(num).toLocaleString();
  };

  const stats = [
    {
      number: formatNumber(counts.channels),
      text: t('counter.channels.text'),
      prefix: '+',
    },
    {
      number: formatNumber(counts.films),
      text: t('counter.films.text'),
      prefix: '+',
    },
    {
      number: formatNumber(counts.series),
      text: t('counter.series.text'),
      prefix: '+',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
      {/* Distinctive but unified background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f04f24]/20 via-gray-900/50 to-gray-800/50"></div>
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-[#f04f24] rounded-full blur-3xl" />
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-red-500 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-colors duration-300 group">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 group-hover:text-[#f04f24] transition-colors duration-300">
                  <span className="text-lg sm:text-xl lg:text-2xl">{stat.prefix}</span>
                  {stat.number}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200">
                  {stat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 