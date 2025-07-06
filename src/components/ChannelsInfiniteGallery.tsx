'use client';

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader2, Tv } from 'lucide-react';

interface ChannelsInfiniteGalleryProps {
  channels: string[];
  className?: string;
}

const ChannelsInfiniteGallery: React.FC<ChannelsInfiniteGalleryProps> = ({ 
  channels, 
  className = '' 
}) => {
  const [displayedChannels, setDisplayedChannels] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const ITEMS_PER_LOAD = 6;

  // Load initial channels
  useEffect(() => {
    if (channels.length === 0) return;
    
    const initialChannels = channels.slice(0, ITEMS_PER_LOAD);
    setDisplayedChannels(initialChannels);
    
    if (initialChannels.length >= channels.length) {
      setHasMore(false);
    }
  }, [channels]);

  // Fetch more channels
  const fetchMoreChannels = async () => {
    if (loading || displayedChannels.length >= channels.length) return;
    
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newChannels = channels.slice(displayedChannels.length, displayedChannels.length + ITEMS_PER_LOAD);
    setDisplayedChannels(prev => [...prev, ...newChannels]);
    setLoading(false);
    
    if (displayedChannels.length + newChannels.length >= channels.length) {
      setHasMore(false);
    }
  };

  // Polished channel card with enhanced styling
  const ChannelCard = ({ filename }: { filename: string }) => {
    return (
      <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#f04f24]/10">
        <div className="aspect-[16/12] p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={`/images/nos bouquets/${filename}`}
              alt={`Channel ${filename.replace(/\.[^/.]+$/, "")}`}
              className="max-w-full max-h-full object-contain filter drop-shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-2xl"
              style={{ 
                maxWidth: '90%',
                maxHeight: '90%'
              }}
            />
          </div>
        </div>
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      </div>
    );
  };

  // Enhanced loading spinner
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-8">
      <div className="relative">
        <Loader2 className="h-8 w-8 animate-spin text-[#f04f24] drop-shadow-lg" />
        <div className="absolute inset-0 h-8 w-8 rounded-full border-2 border-[#f04f24]/20 animate-pulse" />
      </div>
      <span className="ml-3 text-white/80 text-sm font-medium">Chargement des chaînes...</span>
    </div>
  );

  if (channels.length === 0) {
    return (
      <div className={`${className}`}>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center text-white shadow-xl">
          <div className="bg-white/10 rounded-full p-4 w-fit mx-auto mb-4">
            <Tv className="h-12 w-12 text-white/60" />
          </div>
          <p className="text-lg font-medium">Aucune chaîne disponible pour le moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <InfiniteScroll
        dataLength={displayedChannels.length}
        next={fetchMoreChannels}
        hasMore={hasMore}
        loader={<LoadingSpinner />}
        endMessage={
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#f04f24]/10 to-orange-500/10 backdrop-blur-md border border-[#f04f24]/20 rounded-full px-6 py-3 shadow-lg">
              <Tv className="h-5 w-5 text-[#f04f24]" />
              <span className="text-white font-semibold">
                {channels.length} chaînes disponibles
              </span>
            </div>
          </div>
        }
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {displayedChannels.map((filename, index) => (
            <ChannelCard key={`${filename}-${index}`} filename={filename} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ChannelsInfiniteGallery; 