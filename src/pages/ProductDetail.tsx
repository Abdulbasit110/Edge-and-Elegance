
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, ArrowLeft, ArrowRight, Truck, Package, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById, products } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';
import { toast } from '@/components/ui/sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container-custom py-24">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
            <p className="text-neutral-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex text-sm">
              <Link to="/" className="text-neutral-500 hover:text-neutral-900">Home</Link>
              <span className="mx-2 text-neutral-400">/</span>
              <Link to={`/${product.gender}`} className="text-neutral-500 hover:text-neutral-900">
                {product.gender === 'men' ? "Men's Collection" : "Women's Collection"}
              </Link>
              <span className="mx-2 text-neutral-400">/</span>
              <Link to={`/${product.gender}/${product.category}`} className="text-neutral-500 hover:text-neutral-900">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
              <span className="mx-2 text-neutral-400">/</span>
              <span className="text-neutral-900">{product.name}</span>
            </nav>
          </div>

          {/* Product Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="relative overflow-hidden aspect-square mb-4">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`w-20 h-20 flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-black' : 'opacity-70'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-serif text-3xl mb-2">{product.name}</h1>
              <p className="text-xl mb-6">${product.price.toFixed(2)}</p>
              <p className="text-neutral-600 mb-8">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Color: <span className="font-normal">{selectedColor}</span></h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedColor === color ? 'ring-2 ring-black ring-offset-2' : ''
                      }`}
                      style={{ 
                        backgroundColor: 
                          color.toLowerCase() === 'gold' ? '#D4AF37' :
                          color.toLowerCase() === 'silver' ? '#C0C0C0' :
                          color.toLowerCase() === 'white gold' ? '#E8E8E8' :
                          color.toLowerCase() === 'yellow gold' ? '#FFDF00' :
                          color.toLowerCase() === 'rose gold' ? '#B76E79' :
                          color.toLowerCase() === 'white pearl' ? '#F5F5F5' :
                          color.toLowerCase() === 'camel' ? '#C19A6B' :
                          color.toLowerCase() === 'navy' ? '#000080' :
                          color.toLowerCase() === 'burgundy' ? '#800020' :
                          color.toLowerCase() === 'tan' ? '#D2B48C' :
                          color.toLowerCase()
                      }}
                    >
                      {selectedColor === color && (
                        <span className={`text-xs ${['White', 'White Pearl', 'White Gold', 'Yellow Gold', 'Tan', 'Camel'].includes(color) ? 'text-black' : 'text-white'}`}>✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex border border-neutral-300 w-32">
                  <button 
                    className="w-10 h-10 flex items-center justify-center border-r border-neutral-300"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <div className="flex-1 h-10 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button 
                    className="w-10 h-10 flex items-center justify-center border-l border-neutral-300"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="flex-1 flex items-center gap-2" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 flex items-center gap-2" 
                  size="lg"
                  onClick={handleWishlistToggle}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>
              </div>

              {/* Features */}
              <div className="border-t border-neutral-200 pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Free Shipping</h4>
                    <p className="text-sm text-neutral-600">On all orders over $100</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Easy Returns</h4>
                    <p className="text-sm text-neutral-600">30-day return policy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Secure Payment</h4>
                    <p className="text-sm text-neutral-600">All major credit cards accepted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-16">
            <Tabs defaultValue="details">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="materials">Materials & Care</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-6 bg-neutral-50 rounded-md">
                <h3 className="font-medium text-lg mb-4">Product Details</h3>
                <p className="mb-4">{product.description}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Category: {product.category}</li>
                  <li>Subcategory: {product.subcategory}</li>
                  <li>Available Colors: {product.colors.join(', ')}</li>
                  {product.category === 'jewelry' && (
                    <li>Perfect for special occasions or everyday elegance</li>
                  )}
                  {product.category === 'bags' && (
                    <li>Features multiple compartments for organization</li>
                  )}
                  {product.category === 'footwear' && (
                    <li>Cushioned insole for all-day comfort</li>
                  )}
                </ul>
              </TabsContent>
              <TabsContent value="materials" className="p-6 bg-neutral-50 rounded-md">
                <h3 className="font-medium text-lg mb-4">Materials & Care</h3>
                <p className="mb-4">This product is crafted using only the finest materials:</p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  {product.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
                <h4 className="font-medium mb-2">Care Instructions:</h4>
                {product.category === 'jewelry' && (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Store in a cool, dry place</li>
                    <li>Clean with a soft, lint-free cloth</li>
                    <li>Avoid contact with perfumes, lotions, and chemicals</li>
                    <li>Remove before swimming or showering</li>
                  </ul>
                )}
                {product.category === 'leather goods' && (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Keep away from direct sunlight and heat</li>
                    <li>Clean with a soft, dry cloth</li>
                    <li>Apply leather conditioner occasionally</li>
                    <li>Avoid contact with water and oils</li>
                  </ul>
                )}
                {product.category === 'bags' && (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Store in the provided dust bag when not in use</li>
                    <li>Keep away from direct sunlight and moisture</li>
                    <li>Clean with a soft, dry cloth</li>
                    <li>For leather bags, apply leather conditioner occasionally</li>
                  </ul>
                )}
                {product.category === 'footwear' && (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Clean with a soft brush or cloth</li>
                    <li>Use shoe trees to maintain shape</li>
                    <li>Allow to dry naturally if wet</li>
                    <li>Apply appropriate polish or conditioner</li>
                  </ul>
                )}
              </TabsContent>
              <TabsContent value="shipping" className="p-6 bg-neutral-50 rounded-md">
                <h3 className="font-medium text-lg mb-4">Shipping & Returns</h3>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Shipping:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Free standard shipping on all orders over $100</li>
                    <li>Standard shipping (5-7 business days): $9.95</li>
                    <li>Express shipping (2-3 business days): $19.95</li>
                    <li>Overnight shipping (1 business day): $29.95</li>
                    <li>International shipping available to select countries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Returns:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Easy 30-day returns for unworn, undamaged items</li>
                    <li>Return shipping is free for domestic orders</li>
                    <li>Items must be returned in original packaging with all tags attached</li>
                    <li>Refunds are processed within 5-7 business days after we receive your return</li>
                    <li>Exchanges are also available</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="section-title">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="product-card">
                    <Link to={`/product/${relatedProduct.id}`}>
                      <div className="product-card-img-container">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name} 
                          className="product-card-img" 
                        />
                      </div>
                      <div className="product-card-content">
                        <h3 className="product-card-title">{relatedProduct.name}</h3>
                        <p className="product-card-price">${relatedProduct.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  </div>
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
