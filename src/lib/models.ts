
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  price: number;
  salePrice?: number;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  description: string;
  specs: { [key: string]: string };
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
}

export interface ProductColor {
  name: string;
  value: string;
}

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  count: number;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  color: string;
  size: ProductSize;
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  isVerifiedPurchase: boolean;
  sentiment: 'positive' | 'neutral' | 'negative';
  helpfulCount: number;
}

export interface SliderItem {
  id: string;
  image: string;
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonLink: string;
}

export interface BannerOffer {
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonLink: string;
  background: string;
  expiryDate: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  customerImage: string;
  rating: number;
  comment: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}
