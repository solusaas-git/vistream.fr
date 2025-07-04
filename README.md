# Vistream - Next.js Vistream Streaming Website

This is a modern Next.js 15 conversion of the original PHP-based Vistream Streaming website.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Internationalization**: Full bilingual support (French/English) using next-intl
- **Responsive Design**: Mobile-first responsive design with modern UI/UX
- **Smooth Animations**: Framer Motion animations replacing the original WOW.js
- **Interactive Components**: Modern React components with smooth transitions

## 📋 Converted Sections

### ✅ Completed Components
1. **Header** - Navigation with mobile menu and language switcher
2. **Hero** - Carousel with 3 slides showcasing main features
3. **About** - Company information with image and description
4. **Services** - 3 service cards (Vistream Streaming Premium, VOD & Series, 24/7 Support)
5. **Channels Showcase** - Infinite scrolling channel logos
6. **Reviews** - Customer testimonials with ratings and verification badges
7. **Pricing** - 3 subscription plans with interactive carousel
8. **Films** - Movie showcase with infinite horizontal scroll
9. **Counter** - Animated statistics (152k+ channels, 26k+ films, 3.5k+ series)
10. **Series** - TV series showcase with reverse scrolling
11. **Channels** - Additional channel showcase section
12. **Footer** - Fixed language switcher and back-to-top button

### 🎨 Original PHP Sections Converted
- `index.php` → `/app/[locale]/page.tsx`
- `sections/about.php` → `About.tsx`
- `sections/services.php` → `Services.tsx`
- `sections/noschaines.php` → `ChannelsShowcase.tsx`
- `sections/avis.php` → `Reviews.tsx`
- `sections/tarifs.php` → `Pricing.tsx`
- `sections/films.php` → `Films.tsx`
- `sections/counter.php` → `Counter.tsx`
- `sections/series.php` → `Series.tsx`
- `sections/chaines.php` → `Channels.tsx`

## 🌐 Internationalization

The website supports both French and English languages:
- **French**: `/fr` (default)
- **English**: `/en`

All content is stored in JSON files:
- `messages/fr.json` - French translations
- `messages/en.json` - English translations

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Build Tool**: Turbopack (Next.js 15)

## 📦 Dependencies

### Core Dependencies
- `next`: 15.x
- `react`: 18.x
- `typescript`: 5.x
- `tailwindcss`: 3.x

### Additional Libraries
- `next-intl`: Internationalization
- `framer-motion`: Animations
- `lucide-react`: Icons
- `clsx` & `tailwind-merge`: Utility classes

## 🎯 Key Improvements Over PHP Version

1. **Performance**: Static generation and modern bundling
2. **SEO**: Built-in Next.js SEO optimizations
3. **Mobile Experience**: Better mobile navigation and touch interactions
4. **Accessibility**: Improved keyboard navigation and screen reader support
5. **Development Experience**: TypeScript, hot reload, and modern tooling
6. **Animations**: Smooth, performant animations using Framer Motion
7. **Code Organization**: Modular component-based architecture

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Locale-specific layout
│   │   └── page.tsx         # Main page with all sections
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx            # Hero carousel
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services section
│   ├── ChannelsShowcase.tsx # Channel logos
│   ├── Reviews.tsx         # Testimonials
│   ├── Pricing.tsx         # Subscription plans
│   ├── Films.tsx           # Movie showcase
│   ├── Counter.tsx         # Statistics
│   ├── Series.tsx          # TV series showcase
│   ├── Channels.tsx        # Additional channels
│   └── Footer.tsx          # Footer with utilities
├── lib/
│   └── utils.ts            # Utility functions
├── i18n.ts                 # Internationalization config
├── middleware.ts           # Next.js middleware
└── messages/
    ├── fr.json             # French translations
    └── en.json             # English translations
```

## 🎨 Assets

All original assets have been preserved:
- Images: `/public/images/`
- Icons: `/public/images/`
- Channel logos: `/public/images/ch*.webp`
- Movie posters: `/public/images/f*.jpg`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Features Highlights

- **Smooth Scrolling**: All navigation links use smooth scrolling
- **Auto-playing Carousels**: Hero slides and content carousels auto-advance
- **Infinite Scrolling**: Channel logos and content scroll infinitely
- **Responsive Design**: Optimized for all screen sizes
- **Language Switching**: Instant language switching with persistent routing
- **Animated Counters**: Statistics animate when scrolled into view
- **Interactive Elements**: Hover effects and smooth transitions throughout

## 📱 Mobile Optimization

- Responsive navigation with hamburger menu
- Touch-friendly carousels and interactions
- Optimized typography and spacing for mobile
- Fast loading with Next.js optimizations

---

**Original PHP Website Successfully Converted to Modern Next.js 15 Application** ✨
