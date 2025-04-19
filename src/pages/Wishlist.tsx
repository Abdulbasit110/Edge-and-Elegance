
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useWishlist } from '@/context/WishlistContext';
import { toast } from '@/components/ui/sonner';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          <h1 className="font-serif text-3xl mb-8">My Wishlist</h1>
          
          {wishlist.length === 0 ? (
            <div className="text-center py-16 bg-white border border-neutral-100 rounded-lg">
              <h2 className="text-2xl font-medium mb-4">Your wishlist is empty</h2>
              <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
                Browse our collections and add your favorite items to your wishlist to keep track of pieces you love.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/men">
                  <Button variant="outline">Shop Men's Collection</Button>
                </Link>
                <Link to="/women">
                  <Button variant="outline">Shop Women's Collection</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-neutral-100 rounded-lg overflow-hidden">
              <div className="min-w-full">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-neutral-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-neutral-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-neutral-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-neutral-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {wishlist.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-16 w-16 flex-shrink-0">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="h-16 w-16 object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <Link 
                                to={`/product/${product.id}`}
                                className="text-sm font-medium text-neutral-900 hover:text-gold transition-colors"
                              >
                                {product.name}
                              </Link>
                              <p className="text-sm text-neutral-500 capitalize">
                                {product.gender === 'men' ? "Men's" : "Women's"}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 capitalize">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex items-center gap-1"
                              onClick={() => handleAddToCart(product.name)}
                            >
                              <ShoppingCart className="h-4 w-4" />
                              <span className="hidden sm:inline">Add to Cart</span>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => removeFromWishlist(product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 border-t border-neutral-200 bg-neutral-50">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <Link to="/">
                      <Button variant="outline">Continue Shopping</Button>
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
                      onClick={() => {
                        wishlist.forEach(item => removeFromWishlist(item.id));
                        toast.info('All items removed from wishlist');
                      }}
                    >
                      Clear Wishlist
                    </Button>
                    <Button
                      onClick={() => {
                        wishlist.forEach(item => {
                          handleAddToCart(item.name);
                        });
                        toast.success('All items added to cart');
                      }}
                    >
                      Add All to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
