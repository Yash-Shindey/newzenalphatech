
import { Link } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductCard from '@/components/products/ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  // Get only featured products
  const featuredProducts = products.filter(product => product.isFeatured);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title mb-0">Our Bestsellers</h2>
          <Link to="/shop" className="text-zenalpha-navy hover:text-zenalpha-gold flex items-center font-medium transition-colors">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
