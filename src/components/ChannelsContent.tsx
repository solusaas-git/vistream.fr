'use client';

import { useTranslations } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { 
  Tv, 
  Trophy, 
  PlayCircle, 
  Shield, 
  Monitor, 
  Users, 
  Clock, 
  Globe, 
  Award,
  Star,
  Crown
} from 'lucide-react';
import ChannelsInfiniteGallery from './ChannelsInfiniteGallery';

export default function ChannelsContent() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // All channels from nos bouquets folder
  const allChannels = [
    '68304461.png', '94770785.png', 'CHN43FN_40041_20240806-nNBF.png', '68304540.png', '68304482.png',
    'CHN43FN_593_20240205-0lbS.png', '68304537.png', 'CHN43FN_40036_20231128-tGUm.png', 'CHN43FN_40181_08102021.png',
    'CHN43FN_40026_20211018.png', 'CHN43FN_40058_20211018.png', '95900544.png', 'CHN43FN_40069_20181001.png',
    'CHERIE25_640x480-lZ_O.png', 'CHN43FN_40225_20240514-EnFX.png', '68304423.png', '40013_CHN43FN.webp',
    '68304598.png', 'CHN43FN_292_20211002-2.png', 'CHN43FN__Paris_Premiere_20220415.png', '93985307.png',
    '68304427.png', '68304530.png', '79159009.png', 'CHN43FN_40239_20230814.png', '68304632 (1).png',
    '91743977-nua6-7hIN.png', 'CHN43FN_40090_20240410-oaYT.png', 'RTL9_myCANAL_640x480.png', 'CHN43FN_40056_20211018.png',
    '68304590.png', '68304628.png', '68304467.png', 'CHN43FN_40010_20250120-iKuN.png', 'CHN43FN_40008_20240703-ySKY.png',
    'CHN43FN_259_29082023.png', 'CHN43FN_899_29082023.png', 'CHN43FN_491_29082023.png', 'CHN43FN_900_29082023.png',
    'CHN43FN_id_date-1-1.png', 'CHN43FN_177_29082023 (1).png', 'CHN43FN_19_29082023 (1).png', '68304547.png',
    'CHN43FN_40210_05142024-UWhF.png', 'CHN43FN_40053_20240514-vThC.png', 'CHN43FN_40014_20240514-gyS9.png',
    'CHN43FN_301_29082023.png', 'CHN43FN_40200_20250603-vL1l.png', 'CHN43FN_40087.png', 'canalplus-logo-v2.svg',
    'LALIGA_BLANC.png', 'LOGOUEFA_CONFERENCE_LEAGUE.png', 'LOGOUEFA.png', 'LOGO_EUROPA_LEAGUE.png',
    '68304448.png', '68304632.png', 'CHN43FN_19_29082023.png', 'CHN43FN_177_29082023.png', 'logo_cplus.svg'
  ];

  // Sports channels data
  const sportsChannels = [
    {
      name: 'La Liga',
      logo: '/images/sport/LALIGA_BLANC.png',
      description: 'Football espagnol premium'
    },
    {
      name: 'UEFA Champions League',
      logo: '/images/sport/LOGOUEFA.png',
      description: 'Compétition européenne'
    },
    {
      name: 'UEFA Europa League',
      logo: '/images/sport/LOGO_EUROPA_LEAGUE.png',
      description: 'Coupe européenne'
    },
    {
      name: 'UEFA Conference League',
      logo: '/images/sport/LOGOUEFA_CONFERENCE_LEAGUE.png',
      description: 'Nouvelle compétition UEFA'
    },
    {
      name: 'Canal+ Sport',
      logo: '/images/sport/CANAL PLUS SPORT.png',
      description: 'Sports premium'
    },
    {
      name: 'Canal+ Foot',
      logo: '/images/sport/CANAL PLUS FOOT.png',
      description: 'Football premium'
    },
    {
      name: 'BeIN Sports',
      logo: '/images/sport/BEIN SPORT.png',
      description: 'Sports internationaux'
    },
    {
      name: 'Eurosport',
      logo: '/images/sport/EUROSPORT.png',
      description: 'Sports européens'
    },
    {
      name: 'Canal+',
      logo: '/images/sport/logo_cplus.svg',
      description: 'Chaîne premium'
    }
  ];

  // Premium streaming services
  const premiumServices = [
    {
      name: 'Netflix',
      logo: '/images/ch1.webp',
      description: 'Séries et films originaux'
    },
    {
      name: 'Amazon Prime Video',
      logo: '/images/ch2.webp',
      description: 'Contenu premium'
    },
    {
      name: 'Disney+',
      logo: '/images/ch3.webp',
      description: 'Famille et blockbusters'
    },
    {
      name: 'Apple TV+',
      logo: '/images/ch4.webp',
      description: 'Créations originales'
    },
    {
      name: 'HBO Max',
      logo: '/images/ch5.webp',
      description: 'Séries premium'
    },
    {
      name: 'Canal+',
      logo: '/images/ch6.webp',
      description: 'Cinéma et séries'
    }
  ];

  // French TV channels
  const frenchChannels = [
    {
      name: 'TF1',
      logo: '/images/ch7.webp',
      description: 'Première chaîne française'
    },
    {
      name: 'France 2',
      logo: '/images/ch8.webp',
      description: 'Service public'
    },
    {
      name: 'M6',
      logo: '/images/ch1.webp',
      description: 'Divertissement'
    },
    {
      name: 'Arte',
      logo: '/images/ch2.webp',
      description: 'Culture franco-allemande'
    },
    {
      name: 'France 5',
      logo: '/images/ch3.webp',
      description: 'Éducation et culture'
    },
    {
      name: 'TMC',
      logo: '/images/ch4.webp',
      description: 'Cinéma et séries'
    }
  ];

  // Features data
  const features = [
    {
      icon: Monitor,
      title: 'Tous vos appareils',
      description: 'PC, Mobile, Console, Smart TV, Apple TV, décodeur'
    },
    {
      icon: Users,
      title: 'Multi-utilisateurs',
      description: '2 écrans simultanés avec le même compte'
    },
    {
      icon: Clock,
      title: 'Contrôle du Live',
      description: 'Revenez jusqu\'à 8 heures en arrière'
    },
    {
      icon: Globe,
      title: 'Contenu global',
      description: 'Chaînes et contenus du monde entier'
    },
    {
      icon: Shield,
      title: 'Espace sécurisé',
      description: 'Contrôle parental et espace enfants'
    },
    {
      icon: Award,
      title: 'Qualité 4K UHD',
      description: 'Ultra haute résolution et son Dolby Atmos'
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        
                 {/* Hero Section */}
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-12 sm:mb-16"
         >
           <div className="inline-flex items-center space-x-2 bg-[#f04f24]/10 backdrop-blur-sm border border-[#f04f24]/20 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
             <Tv className="h-4 w-4 text-[#f04f24]" />
             <span className="text-xs sm:text-sm font-medium text-white/90">{t('nav.packages')}</span>
           </div>
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
             {t('channels.title')}
           </h1>
           <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
             {t('channels.subtitle')}
           </p>
         </motion.div>

                 {/* Sports Section */}
         <motion.section
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mb-16 sm:mb-20"
         >
           <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
             <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-[#f04f24]" />
             <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('channels.sports.title')}</h2>
           </div>
           <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
             {t('channels.sports.description')}
           </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {sportsChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div className="w-12 h-9 sm:w-16 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Image 
                      src={channel.logo} 
                      alt={channel.name}
                      width={48}
                      height={32}
                      className="w-9 h-6 sm:w-12 sm:h-8 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">{channel.name}</h3>
                    <p className="text-xs text-gray-400 hidden sm:block">{channel.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

                 {/* Premium Streaming Section */}
         <motion.section
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mb-16 sm:mb-20"
         >
           <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
             <PlayCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#f04f24]" />
             <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('channels.streaming.title')}</h2>
           </div>
           <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
             {t('channels.streaming.description')}
           </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {premiumServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div className="w-12 h-9 sm:w-16 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Image 
                      src={service.logo} 
                      alt={service.name}
                      width={48}
                      height={32}
                      className="w-9 h-6 sm:w-12 sm:h-8 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">{service.name}</h3>
                    <p className="text-xs text-gray-400 hidden sm:block">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

                 {/* French Channels Section */}
         <motion.section
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="mb-16 sm:mb-20"
         >
           <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
             <Tv className="h-6 w-6 sm:h-8 sm:w-8 text-[#f04f24]" />
             <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('channels.french.title')}</h2>
           </div>
           <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
             {t('channels.french.description')}
           </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {frenchChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div className="w-12 h-9 sm:w-16 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Image 
                      src={channel.logo} 
                      alt={channel.name}
                      width={48}
                      height={32}
                      className="w-9 h-6 sm:w-12 sm:h-8 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">{channel.name}</h3>
                    <p className="text-xs text-gray-400 hidden sm:block">{channel.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

                 {/* Features Section */}
         <motion.section
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="mb-16 sm:mb-20"
         >
           <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
             <Star className="h-6 w-6 sm:h-8 sm:w-8 text-[#f04f24]" />
             <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('channels.features.title')}</h2>
           </div>
           <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
             {t('channels.features.description')}
           </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#f04f24]/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#f04f24]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
                 </motion.section>

         {/* All Channels Section with Infinite Scrolling */}
         <motion.section
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 1 }}
           className="mb-16 sm:mb-20"
         >
           <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
             <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-[#f04f24]" />
             <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('channels.allChannels.title')}</h2>
           </div>
           <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
             {t('channels.allChannels.description')}
           </p>
           
           {/* Channels Infinite Gallery */}
           <ChannelsInfiniteGallery 
             channels={allChannels}
             className="max-w-7xl mx-auto"
           />
         </motion.section>

         {/* CTA Section */}
         <motion.section
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 1 }}
           className="text-center"
         >
           <div className="bg-gradient-to-r from-[#f04f24]/20 to-orange-500/20 backdrop-blur-sm border border-[#f04f24]/30 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
             <div className="flex items-center justify-center space-x-2 mb-4">
               <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-[#f04f24]" />
               <h2 className="text-xl sm:text-2xl font-bold text-white">{t('channels.cta.title')}</h2>
             </div>
             <p className="text-gray-300 mb-6 text-base sm:text-lg">
               {t('channels.cta.description')}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button 
                 onClick={() => window.location.href = '/#tarifs'}
                 className="bg-[#f04f24] hover:bg-[#d63e1e] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
               >
                 {t('channels.cta.pricing')}
               </button>
               <button 
                 onClick={() => window.location.href = '/'}
                 className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
               >
                 {t('channels.cta.home')}
               </button>
             </div>
           </div>
         </motion.section>

      </div>
    </div>
  );
} 