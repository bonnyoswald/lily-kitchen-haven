
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  User, 
  Heart, 
  Menu, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="text-primary mr-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" 
                    fill="#2A5D3B" fillOpacity="0.2" />
                  <path d="M16 5C16 5 12 10 12 16C12 22 16 27 16 27C16 27 20 22 20 16C20 10 16 5 16 5Z" 
                    fill="#2A5D3B" stroke="#2A5D3B" strokeWidth="1.5" />
                  <path d="M7 14C7 14 11.5 15.5 16 15.5C20.5 15.5 25 14 25 14C25 14 22.5 20 16 20C9.5 20 7 14 7 14Z" 
                    fill="#2A5D3B" stroke="#2A5D3B" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="font-montserrat font-bold text-xl text-charcoal">
                Lily Kitchen<span className="text-primary">Haven</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-montserrat text-charcoal hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-montserrat text-charcoal hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="font-montserrat text-charcoal hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-montserrat text-charcoal hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons on the right */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-charcoal hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="text-charcoal hover:text-primary transition-colors hidden sm:block">
              <Heart size={20} />
            </Link>
            <Link to="/account" className="text-charcoal hover:text-primary transition-colors hidden sm:block">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-charcoal hover:text-primary transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <button className="md:hidden text-charcoal" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pt-4 pb-2 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white py-1 px-3 text-sm rounded-md">
                Search
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="font-montserrat text-charcoal hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-md">
                Home
              </Link>
              <Link to="/shop" className="font-montserrat text-charcoal hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-md">
                Shop
              </Link>
              <Link to="/about" className="font-montserrat text-charcoal hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-md">
                About
              </Link>
              <Link to="/contact" className="font-montserrat text-charcoal hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-md">
                Contact
              </Link>
              <Link to="/wishlist" className="font-montserrat text-charcoal hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-md sm:hidden">
                Wishlist
              </Link>
              <Link to="/account" className="font-montserrat text-charcoal hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-md sm:hidden">
                My Account
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
