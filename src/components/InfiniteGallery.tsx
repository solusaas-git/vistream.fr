'use client';

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ImageData {
  id: string;
  url: string;
  alt: string;
  loaded: boolean;
}

interface InfiniteGalleryProps {
  className?: string;
}

const InfiniteGallery: React.FC<InfiniteGalleryProps> = ({ className = '' }) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Generate random image data with Unsplash
  const generateImageData = (count: number, startIndex: number): ImageData[] => {
    return Array.from({ length: count }, (_, index) => ({
      id: `image-${startIndex + index}`,
      url: `https://source.unsplash.com/800x600/?nature,landscape,architecture&sig=${startIndex + index}`,
      alt: `Gallery image ${startIndex + index + 1}`,
      loaded: false,
    }));
  };

  // Load initial images
  useEffect(() => {
    const initialImages = generateImageData(10, 0);
    setImages(initialImages);
    setInitialLoading(false);
  }, []);

  // Fetch more images
  const fetchMoreImages = async () => {
    if (loading) return;
    
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newImages = generateImageData(10, images.length);
    setImages(prevImages => [...prevImages, ...newImages]);
    setLoading(false);
    
    // Stop infinite scroll after 100 images (demo purposes)
    if (images.length >= 100) {
      setHasMore(false);
    }
  };

  // Handle image load
  const handleImageLoad = (imageId: string) => {
    setImages(prevImages =>
      prevImages.map(img =>
        img.id === imageId ? { ...img, loaded: true } : img
      )
    );
  };

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg aspect-[4/3] w-full"></div>
  );

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-8">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      <span className="ml-2 text-gray-600 dark:text-gray-300">Loading more images...</span>
    </div>
  );

  // Image card component
  const ImageCard = ({ image }: { image: ImageData }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700">
        {!image.loaded && (
          <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg"></div>
        )}
        <img
          src={image.url}
          alt={image.alt}
          onLoad={() => handleImageLoad(image.id)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            image.loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {image.loaded && (
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (initialLoading) {
    return (
      <div className={`${className}`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreImages}
        hasMore={hasMore}
        loader={<LoadingSpinner />}
        endMessage={
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              🎉 You've reached the end of the gallery!
            </p>
          </div>
        }
        className="overflow-visible"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <AnimatePresence>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </AnimatePresence>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteGallery; 