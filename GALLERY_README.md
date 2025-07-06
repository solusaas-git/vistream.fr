# InfiniteGallery Component

A modern, responsive infinite scrolling image gallery built with React, TypeScript, and Tailwind CSS.

## Features

✅ **Infinite Scroll Behavior** - Uses `react-infinite-scroll-component` for seamless scrolling
✅ **Responsive Grid Layout** - Adapts from 2 to 5 columns based on screen size
✅ **Optimized Loading** - Loads 10 new images per scroll with simulated API delays
✅ **Loading States** - Shows spinner while loading and skeleton placeholders initially
✅ **Smooth Animations** - Fade-in animations using Framer Motion
✅ **Image Lazy Loading** - Images load on-demand with loading state tracking
✅ **Hover Effects** - Interactive hover states with search icon overlay
✅ **Dark Mode Support** - Fully compatible with dark/light themes
✅ **TypeScript Support** - Full type safety and IntelliSense
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS

## Installation

Install the required dependencies:

```bash
npm install react-infinite-scroll-component framer-motion lucide-react
```

## Usage

### Basic Usage

```tsx
import InfiniteGallery from '@/components/InfiniteGallery';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <InfiniteGallery />
    </div>
  );
}
```

### With Custom Styling

```tsx
import InfiniteGallery from '@/components/InfiniteGallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <InfiniteGallery className="max-w-7xl mx-auto" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes to apply to the gallery container |

## Grid Breakpoints

The responsive grid adapts based on screen size:

- **Mobile (default)**: 2 columns
- **Small (sm)**: 3 columns  
- **Large (lg)**: 4 columns
- **Extra Large (xl)**: 5 columns

## Image Sources

Currently uses Unsplash for demo images with the following categories:
- Nature
- Landscape  
- Architecture

Each image is 800x600 pixels with a unique signature to ensure variety.

## Customization

### Changing Image Categories

Modify the `generateImageData` function in `InfiniteGallery.tsx`:

```tsx
const generateImageData = (count: number, startIndex: number): ImageData[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `image-${startIndex + index}`,
    url: `https://source.unsplash.com/800x600/?cats,dogs,animals&sig=${startIndex + index}`,
    alt: `Gallery image ${startIndex + index + 1}`,
    loaded: false,
  }));
};
```

### Adjusting Load Count

Change the number of images loaded per scroll:

```tsx
const fetchMoreImages = async () => {
  // Change from 10 to your desired number
  const newImages = generateImageData(20, images.length);
  // ...
};
```

### Modifying Grid Layout

Update the grid classes in the render method:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
```

## Demo

Visit `/gallery` to see the component in action with a full demo page.

## Performance Considerations

- **Image Loading**: Images are loaded on-demand with loading state tracking
- **Scroll Performance**: Uses `react-infinite-scroll-component` for optimized scrolling
- **Animation Performance**: Framer Motion animations are GPU-accelerated
- **Memory Management**: Consider implementing image cleanup for very long scrolling sessions

## Dependencies

- `react-infinite-scroll-component`: Infinite scroll functionality
- `framer-motion`: Smooth animations
- `lucide-react`: Icons
- `tailwindcss`: Styling

## Browser Support

Supports all modern browsers that support:
- CSS Grid
- CSS Flexbox
- ES6+ JavaScript features
- Intersection Observer API (for infinite scroll)

## Future Enhancements

- [ ] Add image lightbox/modal view
- [ ] Implement masonry layout option
- [ ] Add search and filter functionality
- [ ] Support for custom image sources/APIs
- [ ] Add image download functionality
- [ ] Implement favorites/bookmarking
- [ ] Add keyboard navigation support 