import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import menImage from "@/assets/men cover.jpg";
import heartChain from "@/assets/images/women/heart chain.jpg";
import video from "@/assets/images/women/intro.mp4";

const Index = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const newArrivals = getNewArrivals().slice(0, 3);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover scale-105"
          />
          <div className="container-custom relative z-20 text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                New Collection
              </span>
              <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
                Edge & <span className="italic">Elegance</span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 font-light leading-relaxed">
                Redefining modern luxury through meticulously crafted accessories 
                that bridge the gap between bold character and refined grace.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/men">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-black hover:text-white transition-all duration-500 rounded-none px-10 h-14 text-sm tracking-widest uppercase"
                  >
                    Shop Men
                  </Button>
                </Link>
                <Link to="/women">
                  <Button
                    size="lg"
                    className="bg-transparent text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-500 rounded-none px-10 h-14 text-sm tracking-widest uppercase backdrop-blur-sm"
                  >
                    Shop Women
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
          </motion.div>
        </section>

        {/* Featured Collections Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-neutral-400 mb-4">
                Curated Selection
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl">The Collections</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Men's Collection */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={menImage}
                    alt="Men's Collection"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-center p-8 text-white">
                  <h3 className="font-serif text-4xl mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Men</h3>
                  <Link to="/men">
                    <Button className="bg-white text-black hover:bg-black hover:text-white rounded-none px-8 py-6 opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-widest uppercase text-xs">
                      View Collection
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Women's Collection */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={heartChain}
                    alt="Women's Collection"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-center p-8 text-white">
                  <h3 className="font-serif text-4xl mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Women</h3>
                  <Link to="/women">
                    <Button className="bg-white text-black hover:bg-black hover:text-white rounded-none px-8 py-6 opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-widest uppercase text-xs">
                      View Collection
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-32 bg-neutral-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-neutral-400 mb-4">
                  Signature Pieces
                </h2>
                <h3 className="font-serif text-4xl md:text-5xl">Featured Products</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link to="/men" className="text-sm font-medium uppercase tracking-widest border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
                  View All Products
                </Link>
              </motion.div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {featuredProducts.map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-white/40"></div>
                  <span className="text-xs uppercase tracking-[0.4em] text-white/60">Our Philosophy</span>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl mb-10 leading-tight">
                  Handcrafted <br />
                  <span className="italic">With Soul</span>
                </h2>
                <div className="space-y-8 text-lg font-light text-white/70 leading-relaxed">
                  <p>
                    Every EDGE & ELEGANCE piece is a dialogue between tradition 
                    and the avant-garde. We don't just create accessories; we 
                    forge identity through silver, gold, and time.
                  </p>
                  <p>
                    Our artisans spend hours on each detail, ensuring that what 
                    you wear is not just a product, but a masterpiece that tells 
                    your story without a single word.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] relative z-10 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 w-full h-full border border-white/10 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* New Arrivals with horizontal scroll feel */}
        <section className="py-32 bg-white">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-neutral-400 mb-4">
                Freshly Arrived
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl">New Arrivals</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {newArrivals.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Markers */}
        <section className="py-20 border-t border-neutral-100">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Global Shipping", desc: "Premium delivery worldwide" },
                { label: "Secure Payment", desc: "100% encrypted checkout" },
                { label: "2 Year Warranty", desc: "Quality guaranteed" },
                { label: "Premium Packaging", desc: "Luxury box included" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">{item.label}</h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-tighter">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
