import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist, state: authState } = useAuth();

  const handleAddToCart = () => {
    addItem(product);
  };
  
  const handleWishlistToggle = () => {
    if (!authState.isAuthenticated) {
      // You could show a login modal here
      alert('Please login to add items to wishlist');
      return;
    }
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  
  const inWishlist = isInWishlist(product.id);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group border border-gray-700 hover:border-gray-600 transform hover:-translate-y-3 hover:scale-105">
      <div className="relative overflow-hidden bg-gray-700 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
        />
        
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
            inWishlist
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-gray-800 bg-opacity-80 text-gray-300 hover:bg-opacity-100 hover:text-red-500'
          }`}
        >
          <Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} />
        </button>
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-blue-400 transition-colors duration-200">
            {product.name}
          </h3>
          <span className="bg-blue-900 text-blue-300 text-xs font-medium px-2 py-1 rounded-full ml-2 flex-shrink-0 group-hover:bg-blue-800 transition-all duration-300 transform group-hover:scale-105">
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-400 ml-2 font-medium">
            ({product.rating})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-105">
            ₹{product.price.toLocaleString()}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-110 ${
              product.inStock
                ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-xl'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;