'use client';

import { useTranslations } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Tv, Film, PlayCircle, Shield, Zap, Crown, CreditCard, Trophy } from 'lucide-react';

export default function Pricing() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const plans = [
    {
      title: t('pricing.plan1.title'),
      price: t('pricing.plan1.price'),
      decimal: t('pricing.plan1.decimal'),
      originalPrice: t('pricing.plan1.originalPrice'),
      originalDecimal: t('pricing.plan1.originalDecimal'),
      period: t('pricing.plan1.period'),
      btn: t('pricing.plan1.btn'),
      url: 'https://www.vistream.net/auth/signup?plan=abonnement-1-mois',
      popular: false,
      savings: '40%',
      color: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30',
      buttonColor: 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
    },
    {
      title: t('pricing.plan2.title'),
      price: t('pricing.plan2.price'),
      decimal: t('pricing.plan2.decimal'),
      originalPrice: t('pricing.plan2.originalPrice'),
      originalDecimal: t('pricing.plan2.originalDecimal'),
      period: t('pricing.plan2.period'),
      btn: t('pricing.plan2.btn'),
      url: 'https://www.vistream.net/auth/signup?plan=abonnement-12-mois',
      popular: true,
      savings: '33%',
      color: 'from-[#f04f24]/20 to-orange-500/20',
      borderColor: 'border-[#f04f24]/50',
      buttonColor: 'from-[#f04f24] to-orange-500 hover:from-[#d63e1e] hover:to-[#f04f24]',
    },
    {
      title: t('pricing.plan3.title'),
      price: t('pricing.plan3.price'),
      decimal: t('pricing.plan3.decimal'),
      originalPrice: t('pricing.plan3.originalPrice'),
      originalDecimal: t('pricing.plan3.originalDecimal'),
      period: t('pricing.plan3.period'),
      btn: t('pricing.plan3.btn'),
      url: 'https://www.vistream.net/auth/signup?plan=abonnement-24-mois',
      popular: false,
      savings: '34%',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      buttonColor: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
    },
  ];

  const features = [
    {
      icon: Trophy,
      title: t('pricing.features.sport'),
      description: t('pricing.features.sportDesc'),
      channels: [
        '/images/sport/LALIGA_BLANC.png',
        '/images/sport/LOGOUEFA.png',
        '/images/sport/LOGO_EUROPA_LEAGUE.png',
        '/images/sport/LOGOUEFA_CONFERENCE_LEAGUE.png',
        '/images/sport/EUROSPORT.png',
        '/images/sport/BEIN SPORT.png',
        '/images/sport/CANAL PLUS FOOT.png',
        '/images/sport/CANAL PLUS SPORT.png',
        '/images/sport/logo_cplus.svg'
      ],
    },
    {
      icon: Tv,
      title: t('pricing.features.channels'),
      description: '152K+ chaînes mondiales en HD/4K',
      channels: ['/images/ch1.webp', '/images/ch2.webp', '/images/ch5.webp'],
    },
    {
      icon: Film,
      title: t('pricing.features.cinema'),
      description: t('pricing.features.cinemaDesc'),
    },
    {
      icon: PlayCircle,
      title: t('pricing.features.series'),
      description: t('pricing.features.seriesDesc'),
    },
  ];

  const additionalFeatures = [
    { icon: Shield, text: 'Support 24/7' },
    { icon: Zap, text: 'Streaming Ultra Rapide' },
    { icon: Crown, text: 'Qualité Premium' },
  ];

  return (
    <section id="tarifs" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 sm:top-20 right-8 sm:right-20 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-[#f04f24] rounded-full blur-2xl" />
        <div className="absolute bottom-12 sm:bottom-20 left-8 sm:left-20 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-blue-500 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-purple-500 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-[#f04f24]/10 backdrop-blur-sm border border-[#f04f24]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <CreditCard className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
            <span className="text-xs sm:text-sm font-medium text-white/90">Tarifs</span>
            </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
              {t('pricing.title')}
            </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              {t('pricing.subtitle')}
            </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
            >
              {/* Popular Badge */}
                              {plan.popular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#f04f24] to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-xl border border-white/20">
                      <div className="flex items-center space-x-1">
                      <Star className="h-2 sm:h-3 w-2 sm:w-3 fill-white" />
                        <span>Populaire</span>
                      </div>
                    </div>
                  </div>
                )}

              {/* Savings Badge */}
                              {plan.savings && (
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 z-20">
                  <div className="bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                      -{plan.savings}
                    </div>
                  </div>
                )}

              {/* Main Card */}
              <div className={`relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border ${plan.borderColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 overflow-hidden h-full`}>
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                        {plan.title}
                      </h3>
                      
                      {/* Price Display */}
                    <div className="mb-3 sm:mb-4">
                        {/* Original Price (Crossed Out) */}
                        <div className="flex items-baseline justify-center mb-1">
                        <span className="text-sm sm:text-base lg:text-lg text-gray-400 line-through">
                            {plan.originalPrice}
                          </span>
                        <span className="text-xs sm:text-sm text-gray-400 line-through">
                            {plan.originalDecimal}
                          </span>
                        <span className="text-xs sm:text-sm text-gray-400 line-through ml-1">
                            {plan.period}
                          </span>
                        </div>
                        
                        {/* Promotional Price */}
                        <div className="flex items-baseline justify-center mb-1">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            {plan.price}
                          </span>
                        <span className="text-sm sm:text-base lg:text-lg text-gray-300">
                            {plan.decimal}
                          </span>
                        <span className="text-sm sm:text-base lg:text-lg text-[#f04f24] font-semibold ml-1">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href={plan.url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      className={`block w-full bg-gradient-to-r ${plan.buttonColor} text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mb-4 sm:mb-6 text-center text-sm sm:text-base`}
                      >
                        {plan.btn}
                      </motion.a>
                    </div>

                  {/* Features List */}
                  <div className="space-y-3 sm:space-y-4">
                      {features.map((feature, featureIndex) => (
                        <div key={featureIndex}>
                          <div className="flex items-center space-x-2 mb-2">
                          <div className="flex-shrink-0 w-5 sm:w-6 h-5 sm:h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                            <Check className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-green-400" />
                            </div>
                            <div className="flex items-center space-x-2">
                            <feature.icon className="h-3 sm:h-4 w-3 sm:w-4 text-[#f04f24]" />
                            <span className="font-medium text-white text-xs sm:text-sm">{feature.title}</span>
                            </div>
                          </div>
                          
                          {feature.channels && (
                          <div className={`${feature.icon === Trophy ? 'flex flex-wrap gap-1' : 'flex space-x-1'} ml-6 sm:ml-8 mb-2`}>
                            {feature.icon === Trophy ? (
                              // Show all sport logos with wrapping
                              feature.channels.map((channel, channelIndex) => (
                                <img
                                  key={channelIndex}
                                  src={channel}
                                  alt={`Sport ${channelIndex + 1}`}
                                  className="w-10 sm:w-12 lg:w-14 h-6 sm:h-8 lg:h-9 object-contain bg-white/10 backdrop-blur-sm rounded border border-white/20"
                                />
                              ))
                            ) : (
                              // Show 3 channels with counter for non-sport categories
                              <>
                                {feature.channels.slice(0, 3).map((channel, channelIndex) => (
                                  <img
                                    key={channelIndex}
                                    src={channel}
                                  alt={`Channel ${channelIndex + 1}`}
                                    className="w-10 sm:w-12 lg:w-14 h-6 sm:h-8 lg:h-9 object-contain bg-white/10 backdrop-blur-sm rounded border border-white/20"
                                />
                              ))}
                                <div className="flex items-center justify-center w-10 sm:w-12 lg:w-14 h-6 sm:h-8 lg:h-9 bg-white/10 backdrop-blur-sm rounded border border-white/20 text-xs text-gray-300">
                                +149K
                              </div>
                              </>
                            )}
                            </div>
                          )}
                          
                        <p className="text-gray-300 text-xs ml-6 sm:ml-8">
                            {feature.description}
                          </p>
                        </div>
                      ))}

                    {/* Additional Features */}
                    <div className="pt-2 sm:pt-3 border-t border-white/10">
                      <div className="space-y-1.5 sm:space-y-2">
                          {additionalFeatures.map((addFeature, addIndex) => (
                            <div key={addIndex} className="flex items-center space-x-2">
                            <div className="flex-shrink-0 w-4 sm:w-5 h-4 sm:h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                              <addFeature.icon className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-blue-400" />
                              </div>
                              <span className="text-xs text-gray-300">{addFeature.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{t('pricing.guarantee.title')}</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
              {t('pricing.guarantee.description')}
            </p>
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="h-3 w-3 text-green-400" />
                <span>{t('pricing.guarantee.secure')}</span>
              </div>
              <div className="w-px h-2 sm:h-3 bg-white/20" />
              <div className="flex items-center space-x-1">
                <Zap className="h-3 w-3 text-blue-400" />
                <span>{t('pricing.guarantee.instant')}</span>
              </div>
              <div className="w-px h-2 sm:h-3 bg-white/20" />
              <div className="flex items-center space-x-1">
                <Crown className="h-3 w-3 text-[#f04f24]" />
                <span>{t('pricing.guarantee.support')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 