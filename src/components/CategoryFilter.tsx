import React from 'react';
import { useProducts } from '../contexts/ProductContext';
import { categories } from '../data/products';
import AnimatedSection from './AnimatedSection';

const CategoryFilter: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useProducts();

  return (
    <AnimatedSection animation="fadeInUp" delay={100}>
      <div className="bg-gray-800 rounded-2xl shadow-sm p-6 mb-8 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <AnimatedSection key={category} animation="scaleIn" delay={index * 50}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                }`}
              >
                {category}
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CategoryFilter;