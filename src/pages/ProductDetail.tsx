import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  Truck,
  Package,
  CreditCard,
  Plus,
  Minus,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { toast } from "@/components/ui/sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [quantity, setQuantity] = useState(1);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container-custom py-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
            <p className="text-neutral-500 mb-8 max-w-md mx-auto">
              The piece you are looking for has been moved or is no longer in our collection.
            </p>
            <Link to="/">
              <Button className="rounded-none bg-black text-white hover:bg-neutral-800 px-8 py-6 uppercase tracking-widest text-xs">
                Return to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart`, {
      style: { borderRadius: 0, background: '#000', color: '#fff' }
    });
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex text-[10px] uppercase tracking-[0.2em] font-medium mb-12"
          >
            <Link to="/" className="text-neutral-400 hover:text-black transition-colors">Home</Link>
            <span className="mx-3 text-neutral-300">/</span>
            <Link to={`/${product.gender}`} className="text-neutral-400 hover:text-black transition-colors">{product.gender}</Link>
            <span className="mx-3 text-neutral-300">/</span>
            <span className="text-black">{product.name}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            {/* Product Images */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                {/* Thumbnails */}
                <div className="col-span-2 hidden md:flex flex-col gap-4">
                  {product.images.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`aspect-[3/4] overflow-hidden border transition-all duration-300 ${
                        selectedImage === index ? "border-black" : "border-neutral-100 opacity-60"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="col-span-12 md:col-span-10 relative group aspect-[3/4] overflow-hidden bg-neutral-50">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={handlePrevImage}
                      className="bg-white/80 backdrop-blur-md rounded-none hover:bg-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={handleNextImage}
                      className="bg-white/80 backdrop-blur-md rounded-none hover:bg-white"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-5 flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-2 block">
                      {product.category}
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight">
                      {product.name}
                    </h1>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleWishlistToggle}
                    className="hover:bg-transparent"
                  >
                    <Heart
                      className={`h-6 w-6 transition-colors duration-300 ${
                        isInWishlist(product.id) ? "fill-black text-black" : "text-neutral-300"
                      }`}
                    />
                  </Button>
                </div>

                <div className="flex items-baseline gap-4 mb-10">
                  <span className="text-2xl font-semibold tracking-tight">
                    Rs.{product.price.toLocaleString()}
                  </span>
                  {product.actualPrice && (
                    <span className="text-lg text-neutral-400 line-through font-light">
                      Rs.{parseInt(product.actualPrice).toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-neutral-600 font-light leading-relaxed mb-10 text-lg">
                  {product.description}
                </p>

                {/* Colors */}
                <div className="mb-10">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-neutral-400 mb-4">
                    Finish / Color
                  </h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <motion.button
                        key={color}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border transition-all ${
                          selectedColor === color ? "border-black scale-110" : "border-neutral-200"
                        }`}
                        style={{ backgroundColor: color.toLowerCase().replace(" ", "") }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <div className="flex items-center border border-neutral-200 h-14 px-4 gap-8">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-neutral-400 hover:text-black transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-4 text-center font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-neutral-400 hover:text-black transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <Button
                    className="flex-grow h-14 bg-black text-white rounded-none hover:bg-neutral-800 uppercase tracking-[0.2em] text-xs font-medium gap-3"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Collection
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-neutral-100">
                  {[
                    { icon: <Truck className="w-4 h-4" />, text: "Free Global Delivery" },
                    { icon: <Package className="w-4 h-4" />, text: "Luxury Packaging" },
                    { icon: <CreditCard className="w-4 h-4" />, text: "Secure Checkout" },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400">
                        {badge.icon}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Detailed Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full flex justify-center gap-12 bg-transparent border-b border-neutral-100 rounded-none h-auto p-0 mb-12">
                {["details", "materials", "shipping"].map((tab) => (
                  <TabsTrigger 
                    key={tab}
                    value={tab}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-0 py-4 uppercase tracking-[0.3em] text-[10px] font-bold transition-all"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="max-w-3xl mx-auto">
                <TabsContent value="details" className="mt-0 outline-none">
                  <div className="prose prose-neutral prose-sm max-w-none">
                    <p className="text-lg font-light leading-loose text-neutral-600">
                      {product.description}
                    </p>
                    <ul className="mt-8 space-y-3 list-none p-0">
                      <li className="flex gap-4 items-center text-sm font-light">
                        <span className="w-24 uppercase tracking-widest text-[10px] font-bold text-neutral-400">Category</span>
                        <span>{product.category}</span>
                      </li>
                      <li className="flex gap-4 items-center text-sm font-light">
                        <span className="w-24 uppercase tracking-widest text-[10px] font-bold text-neutral-400">Gender</span>
                        <span className="capitalize">{product.gender}</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="materials" className="mt-0 outline-none">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Primary Materials</h4>
                      <ul className="space-y-4">
                        {product.materials.map((m, i) => (
                          <li key={i} className="text-sm font-light flex items-center gap-3">
                            <div className="w-1 h-1 bg-black rounded-full" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Care Instructions</h4>
                      <p className="text-sm font-light text-neutral-600 leading-relaxed">
                        To maintain the timeless beauty of your Edge & Elegance piece, 
                        we recommend storing it in the provided luxury pouch and avoiding 
                        direct contact with abrasive surfaces.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="shipping" className="mt-0 outline-none">
                  <div className="bg-neutral-50 p-10 text-center">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">World-Class Delivery</h4>
                    <p className="text-sm font-light text-neutral-600 max-w-md mx-auto leading-loose">
                      We offer complimentary express shipping globally. Your piece will be 
                      carefully packaged in our signature box and dispatched within 24 hours.
                    </p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>

          {/* Related Items */}
          {relatedProducts.length > 0 && (
            <div className="mt-32">
              <div className="flex items-end justify-between mb-16">
                <div>
                  <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-4">Complements</h2>
                  <h3 className="font-serif text-4xl font-light">Complete The Look</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
