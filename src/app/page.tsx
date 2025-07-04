import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ChannelsShowcase from '@/components/ChannelsShowcase';
import Reviews from '@/components/Reviews';
import Pricing from '@/components/Pricing';
import Films from '@/components/Films';
import Counter from '@/components/Counter';
import Series from '@/components/Series';
import Channels from '@/components/Channels';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      {/* Global Background Effects */}
      <div className="fixed inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#f04f24]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Content with proper z-index */}
      <div className="relative z-10">
        <Header />
        <Hero />
        
        <SectionDivider variant="minimal" />
        <About />
        
        <SectionDivider />
        <Services />
        
        <SectionDivider variant="minimal" />
        <ChannelsShowcase />
        
        <SectionDivider />
        <Reviews />
        
        <SectionDivider variant="accent" />
        <Pricing />
        
        <SectionDivider />
        <Films />
        
        <SectionDivider variant="accent" />
        <Counter />
        
        <SectionDivider />
        <Series />
        
        <SectionDivider variant="minimal" />
        <Channels />
        
        <SectionDivider variant="accent" />
        <Footer />
      </div>
    </main>
  );
}
