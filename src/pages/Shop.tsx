
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/products/ProductCard';
import { Filter, SlidersHorizontal, Grid, List, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Shop = () => {
  // Filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // View settings
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('newest');
  const [itemsPerPage, setItemsPerPage] = useState('12');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter the products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    
    // Price filter
    const price = product.salePrice || product.price;
    if (price < priceRange[0] || price > priceRange[1]) {
      return false;
    }
    
    // Size filter
    if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) {
      return false;
    }
    
    return true;
  });
  
  // Sort the filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case 'price-high-low':
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      case 'most-popular':
        return b.reviewCount - a.reviewCount;
      case 'newest':
      default:
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
    }
  });
  
  // Pagination
  const itemsPerPageInt = parseInt(itemsPerPage);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPageInt);
  const startIndex = (currentPage - 1) * itemsPerPageInt;
  const endIndex = startIndex + itemsPerPageInt;
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);
  
  // Toggle a category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };
  
  // Toggle a size selection
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
    setCurrentPage(1);
  };
  
  // Reset all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 200]);
    setSelectedSizes([]);
    setCurrentPage(1);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold mb-8">Shop All Products</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                    Clear All
                  </Button>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id} className="flex items-center">
                        <Checkbox 
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={() => toggleCategory(category.name)}
                        />
                        <label 
                          htmlFor={`category-${category.id}`}
                          className="ml-2 text-sm flex-grow cursor-pointer"
                        >
                          {category.name}
                        </label>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-4">Price Range</h4>
                  <Slider
                    value={priceRange}
                    min={0}
                    max={200}
                    step={5}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Size */}
                <div>
                  <h4 className="font-medium mb-3">Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className={`border rounded px-3 py-1 text-sm transition-colors ${
                          selectedSizes.includes(size)
                            ? 'border-zenalpha-navy bg-zenalpha-navy text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => toggleSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="flex-grow">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Filter className="w-4 h-4 mr-2" /> Filter Products
              </Button>
            </div>
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-medium">{paginatedProducts.length}</span> of{' '}
                  <span className="font-medium">{sortedProducts.length}</span> products
                </p>
              </div>
              
              <div className="flex items-center flex-wrap gap-3">
                {/* View Mode Toggle */}
                <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value as 'grid' | 'list')}>
                  <ToggleGroupItem value="grid" aria-label="Grid view">
                    <Grid className="w-4 h-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="list" aria-label="List view">
                    <List className="w-4 h-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
                
                {/* Sort Options */}
                <div className="flex items-center space-x-2">
                  <label htmlFor="sort" className="text-sm">Sort:</label>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-36">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Items Per Page */}
                <div className="flex items-center space-x-2">
                  <label htmlFor="items-per-page" className="text-sm">Show:</label>
                  <Select value={itemsPerPage} onValueChange={(value) => {
                    setItemsPerPage(value);
                    setCurrentPage(1);
                  }}>
                    <SelectTrigger className="w-20">
                      <SelectValue placeholder="12" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="36">36</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Products Grid/List */}
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or browse all products.</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4">
                    <div className="sm:w-48 h-48 shrink-0">
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        {product.salePrice ? (
                          <>
                            <span className="text-red-500 font-medium mr-2">${product.salePrice}</span>
                            <span className="text-gray-500 line-through">${product.price}</span>
                          </>
                        ) : (
                          <span className="font-medium">${product.price}</span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <div className="mt-auto flex justify-between items-end">
                        <span className={`text-sm ${
                          product.stockStatus === 'In Stock' 
                            ? 'text-green-600' 
                            : product.stockStatus === 'Low Stock' 
                            ? 'text-orange-500' 
                            : 'text-red-500'
                        }`}>
                          {product.stockStatus}
                        </span>
                        <Button>Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    // Show first, last, current, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="icon"
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      );
                    } else if (
                      (page === 2 && currentPage > 3) ||
                      (page === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={page}>...</span>;
                    }
                    return null;
                  })}
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Filter Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-white p-4 overflow-auto lg:hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium">Filters</h3>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h4 className="font-medium mb-3">Categories</h4>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id} className="flex items-center">
                      <Checkbox 
                        id={`mobile-category-${category.id}`}
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={() => toggleCategory(category.name)}
                      />
                      <label 
                        htmlFor={`mobile-category-${category.id}`}
                        className="ml-2 text-sm flex-grow cursor-pointer"
                      >
                        {category.name}
                      </label>
                      <span className="text-xs text-gray-500">({category.count})</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <Slider
                  value={priceRange}
                  min={0}
                  max={200}
                  step={5}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              
              {/* Size */}
              <div>
                <h4 className="font-medium mb-3">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className={`border rounded px-3 py-1 text-sm transition-colors ${
                        selectedSizes.includes(size)
                          ? 'border-zenalpha-navy bg-zenalpha-navy text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <Button 
                variant="outline" 
                className="w-1/2"
                onClick={clearFilters}
              >
                Clear All
              </Button>
              <Button 
                className="w-1/2"
                onClick={() => setIsSidebarOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
