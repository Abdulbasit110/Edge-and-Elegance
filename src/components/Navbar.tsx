import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
          isScrolled 
            ? "py-4 bg-white/80 backdrop-blur-lg shadow-sm border-b border-neutral-100" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Desktop Nav - Left */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group relative text-[10px] uppercase tracking-[0.3em] font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl md:text-2xl font-serif font-light tracking-[0.2em] relative z-10"
            >
              EDGE & <span className="italic">ELEGANCE</span>
            </Link>

            {/* Icons - Right */}
            <div className="flex items-center space-x-2 md:space-x-6">
              <Button variant="ghost" size="icon" className="hover:bg-transparent group">
                <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
              </Button>
              <Link to="/wishlist">
                <Button variant="ghost" size="icon" className="hover:bg-transparent group">
                  <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </Link>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-transparent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
            >
              <div className="container-custom py-12 flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-2xl font-serif tracking-widest hover:italic transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-12 h-[1px] bg-neutral-200" />
                <Link to="/wishlist" className="text-xs uppercase tracking-[0.3em]">
                  My Wishlist
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
