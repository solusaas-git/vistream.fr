'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Tv } from 'lucide-react';

export default function Channels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const channels = [
    { id: 1, src: '/images/ch1.webp', name: 'TF1' },
    { id: 2, src: '/images/ch2.webp', name: 'France 2' },
    { id: 3, src: '/images/ch3.webp', name: 'M6' },
    { id: 4, src: '/images/ch4.webp', name: 'Canal+' },
    { id: 5, src: '/images/ch5.webp', name: 'Arte' },
    { id: 6, src: '/images/ch6.webp', name: 'France 24' },
    { id: 7, src: '/images/ch7.webp', name: 'Eurosport' },
    { id: 8, src: '/images/ch8.webp', name: 'Discovery' },
  ];

  // Create extended array for seamless loop
  const extendedChannels = [...channels, ...channels, ...channels];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollElement.scrollWidth / 3) {
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

  // Second carousel with reversed animation
  useEffect(() => {
    const scrollElement = scrollRef2.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPosition = scrollElement.scrollWidth / 3;

    const scroll = () => {
      scrollPosition -= 1;
      if (scrollPosition <= 0) {
        scrollPosition = scrollElement.scrollWidth / 3;
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
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">

      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-[#f04f24]/10 backdrop-blur-sm border border-[#f04f24]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Tv className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
            <span className="text-xs sm:text-sm font-medium text-white/90">Nos Chaînes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
            Chaînes Partenaires
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Plus de <span className="text-[#f04f24] font-bold">152,000 chaînes</span> du monde entier disponibles en HD, Full HD et 4K
          </p>
        </motion.div>
      </div>

      {/* Full Width Channels Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full"
      >
        <div 
          ref={scrollRef}
          className="flex items-center gap-3 sm:gap-4 lg:gap-6 overflow-x-hidden py-4 sm:py-6 lg:py-8"
          style={{ scrollBehavior: 'unset' }}
        >
          {extendedChannels.map((channel, index) => (
            <div
              key={`${channel.id}-${Math.floor(index / channels.length)}`}
              className="flex-shrink-0"
            >
              {/* Channel Card - Responsive sizing */}
              <div className="relative w-24 sm:w-32 lg:w-36 h-16 sm:h-20 lg:h-24 bg-white/30 backdrop-blur-md border border-white/40 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={channel.src}
                  alt={channel.name}
                  className="w-20 sm:w-28 lg:w-32 h-12 sm:h-16 lg:h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Second Carousel with Reversed Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative w-full"
      >
        <div 
          ref={scrollRef2}
          className="flex items-center gap-3 sm:gap-4 lg:gap-6 overflow-x-hidden py-4 sm:py-6 lg:py-8"
          style={{ scrollBehavior: 'unset' }}
        >
          {extendedChannels.map((channel, index) => (
            <div
              key={`second-${channel.id}-${Math.floor(index / channels.length)}`}
              className="flex-shrink-0"
            >
              {/* Channel Card - Responsive sizing */}
              <div className="relative w-24 sm:w-32 lg:w-36 h-16 sm:h-20 lg:h-24 bg-white/30 backdrop-blur-md border border-white/40 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={channel.src}
                  alt={channel.name}
                  className="w-20 sm:w-28 lg:w-32 h-12 sm:h-16 lg:h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">152K+</div>
            <p className="text-gray-300 text-xs sm:text-sm">Chaînes Mondiales</p>
          </div>
          <div className="w-px h-8 sm:h-10 lg:h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">4K</div>
            <p className="text-gray-300 text-xs sm:text-sm">Qualité Ultra HD</p>
          </div>
          <div className="w-px h-8 sm:h-10 lg:h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">24/7</div>
            <p className="text-gray-300 text-xs sm:text-sm">Diffusion Continue</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 