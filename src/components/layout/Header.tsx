
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { categories } from '@/lib/data';
import CartDrawer from '@/components/cart/CartDrawer';

const Header = () => {
  const { cartCount, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll event to shrink header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 bg-zenalpha-navy flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xs">NZ</span>
          </div>
          <span className={`font-serif font-bold text-zenalpha-navy transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
            NewZenAlpha Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-zenalpha-navy font-medium">Home</Link>

          <Link to="/shop" className="text-gray-700 hover:text-zenalpha-navy font-medium">Shop</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-gray-700 hover:text-zenalpha-navy font-medium">
                Categories <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {categories.map((category) => (
                <DropdownMenuItem key={category.id}>
                  <Link to={`/category/${category.slug}`} className="w-full">
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/new-arrivals" className="text-gray-700 hover:text-zenalpha-navy font-medium">New Arrivals</Link>
          
          <Link to="/sale" className="text-gray-700 hover:text-zenalpha-navy font-medium">Sale</Link>
          
          <Link to="/feedback" className="text-gray-700 hover:text-zenalpha-navy font-medium">Feedback</Link>
          
          <Link to="/about" className="text-gray-700 hover:text-zenalpha-navy font-medium">About Us</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleSearch} className="text-gray-700 hover:text-zenalpha-navy">
            <Search className="w-5 h-5" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-700 hover:text-zenalpha-navy">
                <User className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Link to="/login" className="w-full">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/register" className="w-full">Register</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/account" className="w-full">My Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/orders" className="w-full">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/wishlist" className="w-full">Wishlist</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            onClick={toggleCart} 
            className="text-gray-700 hover:text-zenalpha-navy relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-zenalpha-navy text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-700 hover:text-zenalpha-navy lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Search Bar Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <div className="container mx-auto flex items-center">
            <Input 
              className="flex-grow" 
              placeholder="Search for products..." 
              autoFocus
            />
            <Button variant="ghost" size="icon" onClick={toggleSearch} className="ml-2">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-24 animate-fade-in lg:hidden">
          <div className="container mx-auto px-4">
            <button 
              onClick={toggleMobileMenu} 
              className="absolute top-5 right-5 text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col space-y-6 py-6">
              <Link to="/" className="text-lg font-medium" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/shop" className="text-lg font-medium" onClick={toggleMobileMenu}>Shop</Link>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Categories</h3>
                <div className="pl-4 space-y-3">
                  {categories.map((category) => (
                    <Link 
                      key={category.id} 
                      to={`/category/${category.slug}`} 
                      className="block text-gray-600 hover:text-zenalpha-navy"
                      onClick={toggleMobileMenu}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/new-arrivals" className="text-lg font-medium" onClick={toggleMobileMenu}>New Arrivals</Link>
              <Link to="/sale" className="text-lg font-medium" onClick={toggleMobileMenu}>Sale</Link>
              <Link to="/feedback" className="text-lg font-medium" onClick={toggleMobileMenu}>Feedback</Link>
              <Link to="/about" className="text-lg font-medium" onClick={toggleMobileMenu}>About Us</Link>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Account</h3>
                <div className="pl-4 space-y-3">
                  <Link 
                    to="/login" 
                    className="block text-gray-600 hover:text-zenalpha-navy"
                    onClick={toggleMobileMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="block text-gray-600 hover:text-zenalpha-navy"
                    onClick={toggleMobileMenu}
                  >
                    Register
                  </Link>
                  <Link 
                    to="/account" 
                    className="block text-gray-600 hover:text-zenalpha-navy"
                    onClick={toggleMobileMenu}
                  >
                    My Account
                  </Link>
                  <Link 
                    to="/orders" 
                    className="block text-gray-600 hover:text-zenalpha-navy"
                    onClick={toggleMobileMenu}
                  >
                    Orders
                  </Link>
                  <Link 
                    to="/wishlist" 
                    className="block text-gray-600 hover:text-zenalpha-navy"
                    onClick={toggleMobileMenu}
                  >
                    Wishlist
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer />
    </header>
  );
};

export default Header;
