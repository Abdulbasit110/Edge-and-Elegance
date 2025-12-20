import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowLeft, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useWishlist } from '@/context/WishlistContext';
import { toast } from '@/components/ui/sonner';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to collection`, {
      style: { borderRadius: 0, background: '#000', color: '#fff' }
    });
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <h1 className="font-serif text-5xl font-light mb-4">My Wishlist</h1>
              <p className="text-neutral-400 font-light tracking-widest uppercase text-[10px]">
                {wishlist.length} Pieces Saved
              </p>
            </div>
            {wishlist.length > 0 && (
              <Button 
                variant="ghost" 
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 hover:text-black p-0 h-auto"
                onClick={() => {
                  wishlist.forEach(item => removeFromWishlist(item.id));
                  toast.info('Wishlist cleared');
                }}
              >
                Clear All
              </Button>
            )}
          </motion.div>
          
          <AnimatePresence mode="wait">
            {wishlist.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-40 border-y border-neutral-100"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mx-auto mb-8">
                  <Heart className="w-6 h-6 text-neutral-200" />
                </div>
                <h2 className="font-serif text-2xl mb-4 italic text-neutral-400">Your collection is empty</h2>
                <p className="text-neutral-500 mb-10 max-w-xs mx-auto font-light leading-relaxed">
                  Explore our curated pieces and save your favorites here.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/men">
                    <Button className="rounded-none bg-black text-white px-8 py-6 uppercase tracking-widest text-[10px] font-bold h-auto">Shop Men</Button>
                  </Link>
                  <Link to="/women">
                    <Button variant="outline" className="rounded-none px-8 py-6 uppercase tracking-widest text-[10px] font-bold h-auto">Shop Women</Button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-12">
                <div className="hidden md:grid grid-cols-12 gap-8 pb-6 border-b border-neutral-100 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-2 text-right">Actions</div>
                </div>
                
                <div className="divide-y divide-neutral-100">
                  {wishlist.map((product, idx) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center group"
                    >
                      <div className="md:col-span-6">
                        <div className="flex items-center gap-6">
                          <Link to={`/product/${product.id}`} className="block w-24 aspect-[3/4] overflow-hidden bg-neutral-50 flex-shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </Link>
                          <div>
                            <Link 
                              to={`/product/${product.id}`}
                              className="text-lg font-serif hover:italic transition-all block mb-1"
                            >
                              {product.name}
                            </Link>
                            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                              {product.category} — {product.gender}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <span className="text-sm font-medium">Rs.{product.price.toLocaleString()}</span>
                      </div>
                      
                      <div className="md:col-span-2">
                        <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">In Stock</span>
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="flex justify-end items-center gap-4">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="text-neutral-300 hover:text-red-500 hover:bg-transparent transition-colors"
                            onClick={() => removeFromWishlist(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button 
                            className="bg-black text-white rounded-none px-6 py-4 h-auto text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-800"
                            onClick={() => handleAddToCart(product.name)}
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-8 border-t border-neutral-100">
                  <Link to="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold group">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Collection
                  </Link>
                  <Button 
                    className="w-full sm:w-auto bg-black text-white rounded-none px-12 py-6 h-auto text-xs uppercase tracking-[0.2em] font-medium"
                    onClick={() => {
                      wishlist.forEach(item => handleAddToCart(item.name));
                    }}
                  >
                    Add All to Bag
                  </Button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
