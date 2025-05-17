import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
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
    actualPrice:string
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

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`}>
        <div className="product-card-img-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-img"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleWishlistToggle}
          className="wishlist-btn"
          aria-label={
            isInWishlist(product.id)
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <Heart
            className={`h-5 w-5 ${
              isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </Button>
        <div className="product-card-content">
          <h3 className="product-card-title">{product.name}</h3>
          {product.actualPrice &&<del className="product-card-price">Rs.{product.actualPrice}</del>}
          <p className="product-card-price">Rs.{product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
