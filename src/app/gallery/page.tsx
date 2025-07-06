'use client';

import InfiniteGallery from '@/components/InfiniteGallery';
import { Camera, Images } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Camera className="h-8 w-8 text-blue-500" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Infinite Gallery
            </h1>
            <Images className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern, responsive infinite scrolling image gallery powered by React and Unsplash. 
            Scroll down to load more beautiful images automatically.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Infinite Scroll</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Automatically loads 10 new images as you scroll down
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Responsive Grid</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Adapts from 2 to 5 columns based on screen size
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Smooth Animations</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Fade-in animations and skeleton loading states
            </p>
          </div>
        </div>

        {/* Gallery */}
        <InfiniteGallery className="max-w-7xl mx-auto" />

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">
            Images powered by{' '}
            <a 
              href="https://unsplash.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 