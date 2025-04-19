
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar transition-all duration-300 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-medium">LUXORA</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/men" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">Men</Link>
            <Link to="/women" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">Women</Link>
            <Link to="/new-arrivals" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">New Arrivals</Link>
            <Link to="/collections" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">Collections</Link>
          </div>
          
          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/account">
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4">
              <Button variant="ghost" size="icon" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background absolute top-full left-0 right-0 border-t border-border/50 animate-fade-in">
          <div className="container-custom py-4 space-y-4">
            <Link 
              to="/men" 
              className="block py-2 text-sm uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Men
            </Link>
            <Link 
              to="/women" 
              className="block py-2 text-sm uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Women
            </Link>
            <Link 
              to="/new-arrivals" 
              className="block py-2 text-sm uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link 
              to="/collections" 
              className="block py-2 text-sm uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Link to="/account">
                <Button variant="ghost" size="icon" aria-label="Account">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/wishlist">
                <Button variant="ghost" size="icon" aria-label="Wishlist">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
