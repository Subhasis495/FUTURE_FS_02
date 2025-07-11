import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import { AuthProvider } from './contexts/AuthContext';
import { useCart } from './contexts/CartContext';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductListing from './components/ProductListing';
import CategoryFilter from './components/CategoryFilter';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import OrderConfirmation from './components/OrderConfirmation';
import Footer from './components/Footer';
import { CheckoutFormData } from './types';

type AppView = 'products' | 'checkout' | 'confirmation';

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>('products');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderData, setOrderData] = useState<CheckoutFormData | null>(null);
  const [orderNumber, setOrderNumber] = useState('');
  
  const { state: cartState, clearCart } = useCart();
  const { addOrder } = useAuth();

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  const handleOrderSubmit = (data: CheckoutFormData) => {
    // Create order object
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      items: cartState.items,
      total: cartState.total,
      customerInfo: {
        name: data.name,
        email: data.email,
        address: data.address,
        paymentMethod: data.paymentMethod,
      },
      orderDate: new Date(),
      status: 'confirmed' as const,
    };
    
    // Add order to user's order history
    addOrder(newOrder);
    
    // Clear the cart
    clearCart();
    
    setOrderData(data);
    setOrderNumber(newOrder.id);
    setCurrentView('confirmation');
  };

  const handleContinueShopping = () => {
    setCurrentView('products');
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'checkout':
        return (
          <CheckoutForm
            onBack={handleBackToProducts}
            onSubmit={handleOrderSubmit}
          />
        );
      case 'confirmation':
        return (
          <OrderConfirmation
            orderData={orderData!}
            orderNumber={orderNumber}
            onContinueShopping={handleContinueShopping}
          />
        );
      default:
        return (
          <>
            <HeroSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CategoryFilter />
              <ProductListing />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <Navbar onCartClick={handleCartClick} />
      
      <main className="flex-1 pb-16">
        {renderContent()}
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={handleCartClose}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <AppContent />
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;