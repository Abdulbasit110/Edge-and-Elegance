import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import menImage from "@/assets/men cover.jpg";
import heroImage from "@/assets/hero image.jpg";
const Index = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const newArrivals = getNewArrivals().slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={heroImage}
            // src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury fashion accessories"
            className="absolute w-full h-full object-cover"
          />
          <div className="hero-content z-20">
            <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight mb-4 animate-slide-up">
              Elevate Your Style
            </h1>
            <p
              className="text-lg md:text-xl max-w-xl mb-8 opacity-90 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover our curated collection of premium accessories for the
              modern individual.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/men">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 min-w-32"
                >
                  Shop Men
                </Button>
              </Link>
              <Link to="/women">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 min-w-32"
                >
                  Shop Women
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Collections Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-16">
              Featured Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Men's Collection */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] group">
                <img
                  src={menImage}
                  // src="https://images.unsplash.com/photo-1614846384571-1e31923418a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Men's Collection"
                  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6 text-white">
                  <h3 className="font-serif text-3xl mb-4">Men's Collection</h3>
                  <p className="text-white/80 text-center mb-6 max-w-xs">
                    Sophisticated accessories for the modern gentleman.
                  </p>
                  <Link to="/men">
                    <Button className="bg-white text-black hover:bg-white/90">
                      Explore Collection
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Women's Collection */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] group">
                <img
                  // src={menImage}
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Women's Collection"
                  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6 text-white">
                  <h3 className="font-serif text-3xl mb-4">
                    Women's Collection
                  </h3>
                  <p className="text-white/80 text-center mb-6 max-w-xs">
                    Elegant accessories for the contemporary woman.
                  </p>
                  <Link to="/women">
                    <Button className="bg-white text-black hover:bg-white/90">
                      Explore Collection
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-neutral-100">
          <div className="container-custom">
            <h2 className="section-title text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/products">
                <Button variant="outline" className="group">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center">New Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/new-arrivals">
                <Button variant="outline" className="group">
                  View All New Arrivals
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-20 bg-neutral-900 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">
                  Handcrafted With Love
                </h2>
                <p className="text-white/80 mb-4">
                  Every EDGE & ELEGANCE piece is meticulously crafted by skilled
                  artisans using the finest materials sourced from around the
                  world. Our commitment to quality and craftsmanship ensures
                  each item is made to last a lifetime.
                </p>
                <p className="text-white/80 mb-6">
                  We believe in the power of accessories to transform not just
                  an outfit, but how you feel. Our designs blend timeless
                  elegance with contemporary style, creating pieces that stand
                  the test of time.
                </p>
                {/* <Link to="/our-story">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black group"
                  >
                    Our Story
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link> */}
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Craftsmanship"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        {/* <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center">
              <h2 className="font-serif text-3xl mb-4">Join Our Community</h2>
              <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about new
                collections, exclusive offers, and styling tips. Plus, enjoy 10%
                off your first order.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
                <Button className="whitespace-nowrap">Subscribe</Button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
