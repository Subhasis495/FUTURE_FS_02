import React from 'react';
import { Loader2, ShoppingBag } from 'lucide-react';
import ProductCard from './ProductCard';
import { useProducts } from '../contexts/ProductContext';
import AnimatedSection from './AnimatedSection';

const ProductListing: React.FC = () => {
  const { filteredProducts, isLoading, searchTerm, selectedCategory } = useProducts();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-gray-400">Loading products...</p>
        </div>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <AnimatedSection animation="fadeIn">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-gray-400">
              {searchTerm || selectedCategory !== 'All'
                ? 'Try adjusting your search or filter criteria'
                : 'No products available at the moment'}
            </p>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <div className="py-8">
      <AnimatedSection animation="fadeInUp" delay={200}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          <p className="text-gray-400">
            {searchTerm
              ? `${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} for "${searchTerm}"`
              : `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} available`}
          </p>
        </div>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <AnimatedSection
            key={product.id}
            animation="fadeInUp"
            delay={index * 20}
          >
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
      </div>
      
      {/* More Products Coming Soon */}
      <AnimatedSection animation="fadeInUp" delay={filteredProducts.length * 20 + 200}>
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-4xl p-8 border border-gray-700 max-w-md mx-auto">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">More Products Coming Soon!</h3>
            <p className="text-gray-400 text-sm">
              We're constantly adding new amazing products to our collection. Stay tuned for exciting updates!
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProductListing;