import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getWomensProducts } from "@/data/products";
import heartChain from "@/assets/images/women/heart chain.jpg";

const WomenCollection = () => {
  const allProducts = getWomensProducts();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Jewelry", "Bags", "Footwear"];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Collection Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-neutral-900">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            src={heartChain}
            alt="Women's Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container-custom relative z-10 text-center text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block text-neutral-400"
            >
              Elegance Defined
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-5xl md:text-7xl font-light mb-6"
            >
              Women's <span className="italic">Collection</span>
            </motion.h1>
          </div>
        </section>

        {/* Toolbar */}
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-neutral-100 py-6">
          <div className="container-custom flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative py-2 whitespace-nowrap ${
                    selectedCategory === category ? "text-black" : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-black"
                    />
                  )}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                {filteredProducts.length} Pieces
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container-custom">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-40"
                >
                  <p className="font-serif text-2xl text-neutral-400 italic">No pieces found in this category.</p>
                  <Button 
                    variant="link" 
                    onClick={() => handleCategoryChange("All")}
                    className="mt-4 uppercase tracking-widest text-[10px] font-bold"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WomenCollection;
