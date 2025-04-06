
import { Link } from 'react-router-dom';
import { categories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-zenalpha-beige">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Shop By Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <div key={category.id} className="group overflow-hidden rounded-lg shadow-md">
              <Link to={`/category/${category.slug}`} className="block relative h-80">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 group-hover:bg-opacity-20"></div>
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-serif text-2xl font-semibold mb-2">{category.name}</h3>
                  <p className="opacity-80 mb-4">{category.count} Products</p>
                  
                  <div className="flex items-center text-zenalpha-gold transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-medium mr-2">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
