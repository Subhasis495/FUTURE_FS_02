import React, { useState } from 'react';
import { User, LogOut, ShoppingBag, Heart, Settings, ChevronDown, Package, Calendar, CreditCard, MapPin, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useProducts } from '../contexts/ProductContext';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const { state, logout, removeFromWishlist } = useAuth();
  const { products } = useProducts();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    onClose();
  };
  
  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'confirmed': return 'text-blue-600 bg-blue-100';
      case 'shipped': return 'text-purple-600 bg-purple-100';
      case 'delivered': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isOpen || !state.user) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      
      {/* Profile Dropdown */}
      <div className="fixed top-16 right-4 bg-gray-800 rounded-2xl shadow-2xl w-80 z-50 border border-gray-700">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">{state.user.name}</h3>
              <p className="text-sm text-gray-400">{state.user.email}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-700">
          {[
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'orders', label: 'Orders', icon: ShoppingBag },
            { id: 'wishlist', label: 'Wishlist', icon: Heart },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-400">Name</label>
                <p className="text-white mt-1">{state.user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">Email</label>
                <p className="text-white mt-1">{state.user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">Member Since</label>
                <p className="text-white mt-1">January 2024</p>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {state.orders.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <h4 className="font-medium text-white mb-2">No Orders Yet</h4>
                  <p className="text-sm text-gray-400">Your order history will appear here</p>
                </div>
              ) : (
                state.orders.map((order) => (
                  <div key={order.id} className="border border-gray-600 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 text-gray-400" />
                        <span className="font-medium text-white">#{order.id}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(order.orderDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CreditCard className="h-4 w-4" />
                        <span>₹{order.total.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                      <div className="flex items-start space-x-1">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{order.customerInfo.address}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</span>
                      {order.items.length <= 2 && (
                        <span className="ml-2">
                          {order.items.map(item => getProductById(item.product.id)?.name).join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {state.wishlist.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <h4 className="font-medium text-white mb-2">No Wishlist Items</h4>
                  <p className="text-sm text-gray-400">Save items you love for later</p>
                </div>
              ) : (
                state.wishlist.map((productId) => {
                  const product = getProductById(productId);
                  if (!product) return null;
                  
                  return (
                    <div key={productId} className="flex items-center space-x-3 p-3 border border-gray-600 rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm line-clamp-1">{product.name}</h4>
                        <p className="text-sm text-gray-400">₹{product.price.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => removeFromWishlist(productId)}
                        className="p-1 text-red-400 hover:text-red-300 hover:bg-red-900 rounded-full transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 text-red-400 hover:text-red-300 font-medium py-2 px-4 rounded-lg hover:bg-red-900 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;