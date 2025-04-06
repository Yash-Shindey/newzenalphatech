# NewZenAlpha Tech - Premium Ladies Clothing Website

## Overview

This repository contains a modern e-commerce website for NewZenAlpha Tech, a premium ladies' clothing brand. The website showcases elegant designs crafted from the finest fabrics, including formal suits, stitched garments, unstitched fabrics, and casual wear.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Product Showcase**: Beautifully designed product cards with hover effects and quick view options
- **Shopping Cart**: Fully functional cart with add, remove, and quantity adjustment features
- **Category Navigation**: Easy browsing by product categories
- **Shop Page**: Advanced filtering and sorting capabilities
- **Interactive Elements**: Sliders, testimonials, and countdown timers
- **Modern UI Components**: Using shadcn/ui components library for a consistent look and feel

## Technology Stack

- **React**: Frontend library for building the user interface
- **TypeScript**: Type safety for better development experience
- **Vite**: Fast build tool and development server
- **React Router**: For handling navigation within the application
- **Context API**: For state management (used for cart functionality)
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Lucide React**: Icon library
- **React Query**: For data fetching and state management
- **Recharts**: For any data visualizations

## Project Structure

```
src/
├── components/         # UI components
│   ├── ui/             # Base UI components from shadcn/ui
│   ├── cart/           # Cart-related components
│   ├── home/           # Homepage-specific components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── products/       # Product-related components
├── contexts/           # React Context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and data models
├── pages/              # Top-level page components
└── App.tsx             # Main application component
```

## Key Components

### Home Page Components

- **HeroSlider**: A full-width image slider showcasing featured collections
- **CategoryShowcase**: Grid display of product categories with hover effects
- **FeaturedProducts**: Display of bestselling products
- **OfferBanner**: Promotional banner with countdown timer for sales
- **TestimonialSlider**: Customer reviews slider with rating visualization
- **Newsletter**: Email sign-up form for marketing communications

### Shop Page Features

- **Filtering**: By category, price range, and size
- **Sorting**: By price, popularity, and recency
- **Pagination**: For browsing through large product collections
- **View Toggle**: Switch between grid and list views

### Cart Functionality

- **CartDrawer**: Slide-in drawer showing cart contents
- **Cart Context**: Global state management for cart items
- **Quantity Control**: Easily adjust product quantities
- **Price Calculation**: Automatic subtotal calculation

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Yash-Shindey/newzenalphatech
cd newzenalphatech
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Building for Production

```bash
npm run build
# or
yarn build
```

This will generate optimized files in the `dist` directory ready for deployment.

## Deployment

The project can be deployed to any static hosting service:

1. Build the project as mentioned above
2. Upload the contents of the `dist` directory to your hosting provider

## Customization

### Theme Colors

The main colors are configured in the `tailwind.config.ts` file and can be easily changed:

```typescript
colors: {
  zenalpha: {
    navy: '#1a3a63',    // Primary brand color
    gold: '#d4af37',    // Accent color
    beige: '#f5f5f0',   // Background color
    charcoal: '#333333',
    lightgray: '#f0f0f0'
  }
}
```

### Product Data

Product information is stored in `src/lib/data.ts` and can be replaced with your actual products. In a production environment, this would likely be fetched from an API.

## Design Principles

- **Clean Aesthetics**: Minimalist design with elegant typography
- **Visual Hierarchy**: Clear distinction between primary and secondary elements
- **Consistent Branding**: Cohesive color scheme and styling throughout
- **Intuitive Navigation**: Simple and straightforward user journeys
- **Performance Focused**: Optimized images and code splitting for fast loading

## Browser Support

The application supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Credits

- Fonts: Inter (sans-serif) and Playfair Display (serif) from Google Fonts
- Icons: Lucide React icon library
- UI Components: Based on shadcn/ui and Radix UI

## License

This project is licensed under the MIT License - see the LICENSE file for details.
