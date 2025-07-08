'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { Zap, Star } from 'lucide-react';

export default function ChannelsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const channels = [
    { id: 1, src: '/images/ch1.webp', category: 'Entertainment' },
    { id: 2, src: '/images/ch2.webp', category: 'News' },
    { id: 3, src: '/images/ch3.webp', category: 'Movies' },
    { id: 4, src: '/images/ch4.webp', category: 'Sports' },
    { id: 5, src: '/images/ch5.webp', category: 'Culture' },
    { id: 6, src: '/images/ch6.webp', category: 'International' },
    { id: 7, src: '/images/ch7.webp', category: 'Sports' },
    { id: 8, src: '/images/ch8.webp', category: 'Discovery' },
  ];

  // Reduced from 3x to 2x for better performance
  const extendedChannels = [...channels, ...channels];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Consistent scroll speed
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
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="chaines" 
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-[#f04f24] rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-blue-500 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 sm:mb-8 px-4"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Zap className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
            <span className="text-xs sm:text-sm font-medium text-white">Diffusion en direct</span>
            <div className="flex space-x-1">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse delay-75" />
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse delay-150" />
            </div>
          </div>
        </motion.div>

        {/* Channels Carousel - Continuous scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient Overlays for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex items-center gap-3 sm:gap-4 lg:gap-6 overflow-x-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
            style={{ scrollBehavior: 'unset' }}
          >
            {extendedChannels.map((channel, index) => (
              <div
                key={`${channel.id}-${Math.floor(index / channels.length)}`}
                className="flex-shrink-0"
              >
                {/* Static channel container */}
                <div className="relative w-24 sm:w-28 lg:w-32 h-16 sm:h-18 lg:h-22 bg-white/35 backdrop-blur-xl border border-white/40 rounded-lg flex items-center justify-center shadow-md">
                  <Image
                    src={channel.src}
                    alt={`Channel ${channel.id}`}
                    width={112}
                    height={72}
                    className="w-20 sm:w-24 lg:w-28 h-12 sm:h-14 lg:h-18 object-contain opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quality indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center items-center space-x-3 sm:space-x-4 lg:space-x-6 mt-6 sm:mt-8 px-4"
        >
          <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
            <Star className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm font-medium">HD/4K Quality</span>
          </div>
          <div className="w-px h-3 sm:h-4 bg-white/20" />
          <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full" />
            <span className="text-xs sm:text-sm font-medium">Live Streaming</span>
          </div>
          <div className="w-px h-3 sm:h-4 bg-white/20" />
          <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
            <Zap className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
            <span className="text-xs sm:text-sm font-medium">Zero Buffer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 