
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zenalpha-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center mr-2">
                <span className="text-zenalpha-navy font-bold text-xs">NZ</span>
              </div>
              <span className="font-serif font-bold text-xl">
                NewZenAlpha Tech
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium ladies' clothing for the modern woman. Elegant designs crafted with the finest fabrics.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-300 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-300 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-zenalpha-gold shrink-0" />
                <span className="text-gray-300">123 Fashion Street, Design District, NY 10001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-zenalpha-gold shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-zenalpha-gold shrink-0" />
                <a href="mailto:info@newzenalpha.com" className="text-gray-300 hover:text-white transition-colors">
                  info@newzenalpha.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l outline-none text-gray-800"
                />
                <button 
                  type="submit"
                  className="bg-zenalpha-gold text-gray-800 px-4 py-2 rounded-r font-medium hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our{' '}
                <Link to="/privacy" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} NewZenAlpha Tech. All rights reserved.
            </p>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm mr-2">Payment Methods:</span>
              <CreditCard className="w-8 h-5 text-gray-300" />
              <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="PayPal" className="h-5 w-auto opacity-70" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968144.png" alt="Apple Pay" className="h-5 w-auto opacity-70" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-5 w-auto opacity-70" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="MasterCard" className="h-5 w-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
