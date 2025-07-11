import React, { useState } from 'react';
import { ArrowLeft, CreditCard, MapPin, User, Mail } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { CheckoutFormData } from '../types';

interface CheckoutFormProps {
  onBack: () => void;
  onSubmit: (data: CheckoutFormData) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack, onSubmit }) => {
  const { state } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit-card',
  });
  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof CheckoutFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const taxRate = 0.08;
  const taxAmount = state.total * taxRate;
  const tempTotal = state.total + taxAmount;
  const shippingCost = tempTotal > 999 ? 0 : 99;
  const finalTotal = state.total + shippingCost + taxAmount;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Cart</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Checkout</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                <User className="h-4 w-4" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-600'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                <Mail className="h-4 w-4" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-600'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                <MapPin className="h-4 w-4" />
                <span>Shipping Address</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.address ? 'border-red-500' : 'border-gray-600'
                }`}
                placeholder="Enter your shipping address"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                <CreditCard className="h-4 w-4" />
                <span>Payment Method</span>
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.paymentMethod ? 'border-red-500' : 'border-gray-600'
                }`}
              >
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
              {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
          
          <div className="space-y-4 mb-6">
            {state.items.map((item) => (
              <div key={item.product.id} className="flex items-center space-x-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-white line-clamp-1">{item.product.name}</h4>
                  <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-white">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Subtotal:</span>
              <span className="font-medium text-white">₹{state.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Shipping:</span>
              <span className="font-medium text-white">{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Tax:</span>
              <span className="font-medium text-white">₹{Math.round(taxAmount).toLocaleString()}</span>
            </div>
            <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-white">Total:</span>
                <span className="text-xl font-bold text-white">
                  ₹{Math.round(finalTotal).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;