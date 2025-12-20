import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    gender: "men" | "women";
    actualPrice?: number | string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const formattedActualPrice = product.actualPrice 
    ? typeof product.actualPrice === 'string' 
      ? parseInt(product.actualPrice) 
      : product.actualPrice
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
            whileHover={{ scale: 1.08 }}
          />
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          
          <div className="absolute top-4 right-4 z-20">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleWishlistToggle}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
              aria-label={
                isInWishlist(product.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
            >
              <Heart
                className={`h-4 w-4 transition-colors duration-300 ${
                  isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-black"
                }`}
              />
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
            <Button className="w-full bg-black text-white rounded-none h-12 text-xs tracking-widest uppercase flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </Button>
          </div>
        </div>

        <div className="pt-6 pb-2">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">
            {product.category}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-black">
              Rs.{product.price.toLocaleString()}
            </span>
            {formattedActualPrice && (
              <span className="text-xs text-neutral-400 line-through">
                Rs.{formattedActualPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
