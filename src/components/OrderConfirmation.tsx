import React from 'react';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { CheckoutFormData } from '../types';

interface OrderConfirmationProps {
  orderData: CheckoutFormData;
  orderNumber: string;
  onContinueShopping: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderData, orderNumber, onContinueShopping }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center border border-gray-700">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">Order Confirmed!</h2>
          <p className="text-gray-400">Thank you for your purchase</p>
        </div>

        <div className="bg-gray-700 rounded-lg p-6 mb-6">
          <div className="text-left space-y-3">
            <h3 className="text-lg font-semibold text-white mb-4">Order Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Order Number:</p>
                <p className="font-medium text-white">#{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Payment Method:</p>
                <p className="font-medium text-white capitalize">{orderData.paymentMethod.replace('-', ' ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Customer Name:</p>
                <p className="font-medium text-white">{orderData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email:</p>
                <p className="font-medium text-white">{orderData.email}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Shipping Address:</p>
              <p className="font-medium text-white">{orderData.address}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-900 border border-blue-700 rounded-lg p-4">
            <p className="text-blue-200 text-sm">
              <strong>What's next?</strong> You'll receive an email confirmation shortly with tracking information.
              Your order will be processed and shipped within 1-2 business days.
            </p>
          </div>

          <button
            onClick={onContinueShopping}
            className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Continue Shopping</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;