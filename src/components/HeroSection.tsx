import React from 'react';
import AnimatedSection from './AnimatedSection';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to UrbanCart
          </h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={400}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover amazing products at unbeatable prices. Shop with confidence and 
            enjoy fast, secure delivery.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;