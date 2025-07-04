'use client';

// Modern Neon Blurred Section Divider Component
export default function SectionDivider({ variant = 'default' }: { variant?: 'default' | 'accent' | 'minimal' }) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'accent':
        return {
          primaryColor: '#f04f24',
          secondaryColor: '#ff6b47',
          glowColor: 'rgba(240, 79, 36, 0.4)',
          intensity: 'high'
        };
      case 'minimal':
        return {
          primaryColor: '#06b6d4',
          secondaryColor: '#0891b2',
          glowColor: 'rgba(6, 182, 212, 0.3)',
          intensity: 'low'
        };
      default:
        return {
          primaryColor: '#8b5cf6',
          secondaryColor: '#a78bfa',
          glowColor: 'rgba(139, 92, 246, 0.35)',
          intensity: 'medium'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <>
      <style jsx>{`
        @keyframes neonPulse {
          0%, 100% { 
            opacity: 0.7;
            filter: blur(2px);
            transform: scaleX(0.9);
          }
          50% { 
            opacity: 1;
            filter: blur(1px);
            transform: scaleX(1.1);
          }
        }
        
        @keyframes neonFlow {
          0% { 
            transform: translateX(-100%);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-3px) rotate(180deg);
            opacity: 0.9;
          }
        }
        
        .neon-pulse {
          animation: neonPulse 4s ease-in-out infinite;
        }
        
        .neon-flow {
          animation: neonFlow 6s ease-in-out infinite;
        }
        
        .particle-float {
          animation: particleFloat 8s ease-in-out infinite;
        }
      `}</style>
      
      <div className="relative py-6 overflow-hidden">
        {/* Main Neon Blur Container */}
        <div className="relative h-3 mx-auto max-w-4xl flex items-center justify-center">
          
          {/* Background Blur Layer */}
          <div 
            className="absolute inset-0 rounded-full blur-md neon-pulse"
            style={{
              background: `linear-gradient(90deg, transparent, ${styles.glowColor}, transparent)`,
              filter: 'blur(4px)',
              height: '6px'
            }}
          />
          
          {/* Primary Neon Line */}
          <div 
            className="absolute inset-0 h-0.5 top-1/2 transform -translate-y-1/2 rounded-full neon-pulse"
            style={{
              background: `linear-gradient(90deg, transparent, ${styles.primaryColor}, ${styles.secondaryColor}, ${styles.primaryColor}, transparent)`,
              boxShadow: `0 0 8px ${styles.glowColor}, 0 0 16px ${styles.glowColor}`,
              filter: 'blur(0.5px)',
            }}
          />
          
          {/* Secondary Glow Effect */}
          <div 
            className="absolute inset-0 h-1 top-1/2 transform -translate-y-1/2 rounded-full opacity-50"
            style={{
              background: `linear-gradient(90deg, transparent, ${styles.glowColor}, transparent)`,
              filter: 'blur(3px)',
            }}
          />
          
          {/* Flowing Neon Particles */}
          <div 
            className="absolute w-2 h-2 rounded-full neon-flow"
            style={{
              background: `radial-gradient(circle, ${styles.primaryColor}, transparent)`,
              boxShadow: `0 0 6px ${styles.primaryColor}`,
              filter: 'blur(1px)',
              animationDelay: '0s'
            }}
          />
          
          <div 
            className="absolute w-1.5 h-1.5 rounded-full neon-flow"
            style={{
              background: `radial-gradient(circle, ${styles.secondaryColor}, transparent)`,
              boxShadow: `0 0 4px ${styles.secondaryColor}`,
              filter: 'blur(0.5px)',
              animationDelay: '2s'
            }}
          />
          
          {/* Floating Neon Dots */}
          <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
            <div 
              className="w-1 h-1 rounded-full particle-float"
              style={{
                background: styles.primaryColor,
                boxShadow: `0 0 4px ${styles.primaryColor}`,
                filter: 'blur(0.5px)',
                animationDelay: '1s'
              }}
            />
          </div>
          
          <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2">
            <div 
              className="w-1 h-1 rounded-full particle-float"
              style={{
                background: styles.secondaryColor,
                boxShadow: `0 0 3px ${styles.secondaryColor}`,
                filter: 'blur(0.3px)',
                animationDelay: '3s'
              }}
            />
          </div>
          
          {/* Center Neon Core */}
          <div 
            className="absolute w-3 h-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${styles.primaryColor}30, ${styles.secondaryColor}15, transparent)`,
              boxShadow: `0 0 10px ${styles.glowColor}`,
              filter: 'blur(1px)',
            }}
          />
          
        </div>
        
        {/* Side Neon Extensions */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <div 
            className="w-8 h-px opacity-50"
            style={{
              background: `linear-gradient(90deg, transparent, ${styles.primaryColor}50)`,
              boxShadow: `0 0 3px ${styles.primaryColor}30`,
              filter: 'blur(0.5px)',
            }}
          />
        </div>
        
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <div 
            className="w-8 h-px opacity-50"
            style={{
              background: `linear-gradient(90deg, ${styles.primaryColor}50, transparent)`,
              boxShadow: `0 0 3px ${styles.primaryColor}30`,
              filter: 'blur(0.5px)',
            }}
          />
        </div>
        
        {/* Ambient Glow Background */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `radial-gradient(ellipse at center, ${styles.glowColor}, transparent 60%)`,
            filter: 'blur(8px)',
          }}
        />
        
      </div>
    </>
  );
} 