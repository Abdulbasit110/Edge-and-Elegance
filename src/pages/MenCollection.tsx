import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getMensProducts } from "@/data/products";
import menImage from "@/assets/men cover.jpg";
const MenCollection = () => {
  const allProducts = getMensProducts();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["All", "Jewelry", "Leather Goods", "Bags", "Footwear"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const priceRanges = [
    "All",
    "Under $100",
    "$100 - $200",
    "$200 - $300",
    "Over $300",
  ];
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    applyFilters(category, selectedPriceRange);
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range);
    applyFilters(selectedCategory, range);
  };

  const applyFilters = (category: string, priceRange: string) => {
    let filtered = allProducts;

    // Apply category filter
    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply price range filter
    if (priceRange !== "All") {
      if (priceRange === "Under $100") {
        filtered = filtered.filter((product) => product.price < 100);
      } else if (priceRange === "$100 - $200") {
        filtered = filtered.filter(
          (product) => product.price >= 100 && product.price <= 200
        );
      } else if (priceRange === "$200 - $300") {
        filtered = filtered.filter(
          (product) => product.price > 200 && product.price <= 300
        );
      } else if (priceRange === "Over $300") {
        filtered = filtered.filter((product) => product.price > 300);
      }
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28">
        {/* Hero Banner */}
        <div className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={menImage}
            // src="https://images.unsplash.com/photo-1493752603190-08518c63f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Men's Collection"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              Men's Collection
            </h1>
            <p className="text-lg max-w-xl text-center">
              Sophisticated accessories for the modern gentleman.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-12">
          <div className="container-custom">
            {/* Filter Button for Mobile */}
            <div className="md:hidden mb-6">
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-between"
              >
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter Products
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isFilterOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters */}
              <div
                className={`w-full md:w-64 ${
                  isFilterOpen ? "block" : "hidden"
                } md:block`}
              >
                <div className="bg-white p-6 border border-neutral-200 rounded-lg">
                  <h3 className="font-medium text-lg mb-4">Filters</h3>

                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="font-medium text-sm uppercase tracking-wider mb-3">
                      Category
                    </h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={`category-${category}`}
                            name="category"
                            checked={selectedCategory === category}
                            onChange={() => handleCategoryChange(category)}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider mb-3">
                      Price Range
                    </h4>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <div key={range} className="flex items-center">
                          <input
                            type="radio"
                            id={`price-${range}`}
                            name="price"
                            checked={selectedPriceRange === range}
                            onChange={() => handlePriceRangeChange(range)}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`price-${range}`}
                            className="text-sm cursor-pointer"
                          >
                            {range}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-neutral-600">
                        No products found with the selected filters.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                          setSelectedCategory("All");
                          setSelectedPriceRange("All");
                          setFilteredProducts(allProducts);
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MenCollection;
