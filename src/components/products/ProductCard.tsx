
import { Link } from 'react-router-dom';
import { Product } from '@/lib/models';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';
import RatingStars from './RatingStars';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Default to first color and size options
    addToCart(product.id, 1, product.colors[0].name, product.sizes[0]);
  };

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative pb-[125%] overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Second Image on Hover */}
            {product.images.length > 1 && (
              <img 
                src={product.images[1]} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </div>
          
          {/* Quick View */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-white text-zenalpha-navy shadow-md hover:bg-zenalpha-gold hover:text-white"
            >
              <Eye className="w-4 h-4 mr-1" /> Quick View
            </Button>
          </div>
          
          {/* Tags */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="text-xs bg-zenalpha-navy text-white px-2 py-1 rounded">
                New
              </span>
            )}
            {product.isOnSale && (
              <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                Sale
              </span>
            )}
          </div>
        </Link>
        
        {/* Wishlist Button */}
        <button 
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-zenalpha-gold hover:text-white transition-colors"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.slug}`} className="block">
          <h3 className="font-medium text-gray-800 hover:text-zenalpha-navy transition-colors mb-1 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="mb-2">
          <RatingStars rating={product.rating} size="sm" />
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center mb-3">
          {product.salePrice ? (
            <>
              <span className="text-red-500 font-medium mr-2">{formatPrice(product.salePrice)}</span>
              <span className="text-gray-500 line-through text-sm">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="font-medium">{formatPrice(product.price)}</span>
          )}
        </div>
        
        {/* Color Options */}
        <div className="flex mb-3 space-x-1">
          {product.colors.map((color) => (
            <div 
              key={color.name} 
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
        
        {/* Stock Status */}
        <div className="flex justify-between items-center">
          <span className={`text-xs ${
            product.stockStatus === 'In Stock' 
              ? 'text-green-600' 
              : product.stockStatus === 'Low Stock' 
              ? 'text-orange-500' 
              : 'text-red-500'
          }`}>
            {product.stockStatus}
          </span>
          
          {/* Add to Cart */}
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            disabled={product.stockStatus === 'Out of Stock'}
            className="text-xs"
          >
            <ShoppingBag className="w-3 h-3 mr-1" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
