# UrbanCart - Modern E-commerce Platform

A beautiful, fully-featured e-commerce platform built with React, TypeScript, and Tailwind CSS. UrbanCart offers a seamless shopping experience with modern animations, responsive design, and comprehensive functionality.

![UrbanCart Preview](https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200)

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse through multiple categories with high-quality product images
- **Smart Search**: Real-time search functionality across product names, descriptions, and categories
- **Category Filtering**: Filter products by Electronics, Fashion, Food & Beverages, Home & Garden, Sports & Fitness, Books & Media, and Beauty & Personal Care
- **Shopping Cart**: Add, remove, and modify quantities with persistent cart storage
- **Wishlist**: Save favorite products for later (requires login)
- **Product Ratings**: Visual star ratings for each product

### 🔐 User Authentication
- **User Registration**: Create new accounts with email validation
- **Secure Login**: Authentication with demo credentials available
- **User Profile**: View and manage personal information
- **Order History**: Track all previous orders with detailed information
- **Wishlist Management**: Add/remove products from personal wishlist

### 🛒 Checkout & Orders
- **Secure Checkout**: Complete order form with validation
- **Multiple Payment Methods**: Credit Card, Debit Card, PayPal, Cash on Delivery
- **Order Confirmation**: Detailed order summary with tracking information
- **Tax Calculation**: Automatic tax calculation (8% rate)
- **Free Shipping**: Free shipping on orders over ₹999

### 🎨 Design & UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark theme with blue accents
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Loading States**: Elegant loading indicators throughout the app
- **Hover Effects**: Interactive hover states for better user feedback

### 📞 Customer Support
- **Contact Form**: Integrated contact form with Formspree
- **Multiple Contact Methods**: Phone, email, live chat, and physical store location
- **24/7 Support**: Round-the-clock customer service information
- **FAQ Section**: Comprehensive help and support information

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/urbancart.git
   cd urbancart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### UI & Icons
- **Lucide React** - Beautiful, customizable SVG icons
- **Custom Animations** - Scroll-triggered animations and transitions
- **Responsive Grid** - CSS Grid and Flexbox for layouts

### State Management
- **React Context API** - Global state management for cart, auth, and products
- **useReducer** - Complex state logic management
- **Local Storage** - Persistent storage for cart and user data

### Form Handling
- **Native React Forms** - Custom form validation and handling
- **Formspree** - Contact form backend service

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedSection.tsx    # Scroll animation wrapper
│   ├── Cart.tsx              # Shopping cart sidebar
│   ├── CategoryFilter.tsx    # Product category filter
│   ├── CheckoutForm.tsx      # Checkout form component
│   ├── Footer.tsx            # Site footer with contact form
│   ├── Header.tsx            # Site header with navigation
│   ├── HeroSection.tsx       # Landing page hero
│   ├── LoginModal.tsx        # Authentication modal
│   ├── Navbar.tsx            # Main navigation bar
│   ├── OrderConfirmation.tsx # Order success page
│   ├── ProductCard.tsx       # Individual product display
│   ├── ProductListing.tsx    # Product grid layout
│   └── UserProfile.tsx       # User profile dropdown
├── contexts/            # React Context providers
│   ├── AuthContext.tsx       # Authentication state
│   ├── CartContext.tsx       # Shopping cart state
│   └── ProductContext.tsx    # Product filtering state
├── data/               # Static data and mock data
│   └── products.ts           # Product catalog data
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.ts # Scroll animation logic
├── types/              # TypeScript type definitions
│   └── index.ts              # Shared interfaces
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and animations
```

## 🎯 Key Components

### Authentication System
- **Mock Authentication**: Demo login system with predefined users
- **Persistent Sessions**: User sessions saved to localStorage
- **Protected Features**: Wishlist and order history require authentication

### Shopping Cart
- **Real-time Updates**: Cart updates immediately with visual feedback
- **Quantity Management**: Increase, decrease, or remove items
- **Price Calculation**: Automatic subtotal, tax, and shipping calculation
- **Persistent Storage**: Cart contents saved between sessions

### Product Management
- **Dynamic Filtering**: Real-time search and category filtering
- **Inventory Status**: Out-of-stock handling and display
- **Product Ratings**: Star rating system with visual feedback
- **Image Optimization**: Responsive images with proper aspect ratios

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Background**: Dark Gray (#111827, #1F2937)
- **Surface**: Medium Gray (#374151, #4B5563)
- **Text**: White (#FFFFFF) and Light Gray (#D1D5DB)
- **Accent**: Various colors for categories and status indicators

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable with proper contrast
- **Interactive Elements**: Hover states and transitions

### Animations
- **Scroll Animations**: Elements animate in as they enter viewport
- **Hover Effects**: Subtle transformations on interactive elements
- **Loading States**: Smooth loading indicators
- **Micro-interactions**: Button clicks, form interactions

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch Friendly**: Large touch targets for mobile users
- **Optimized Images**: Responsive images for different screen sizes

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality. The contact form uses Formspree with a public endpoint.

### Demo Credentials
For testing the authentication system:
- **Email**: john@example.com
- **Password**: password123

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

### Other Platforms
The built application is a static site that can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Images**: Product images sourced from Pexels and various e-commerce platforms
- **Icons**: Lucide React icon library
- **Inspiration**: Modern e-commerce platforms and design systems
- **Community**: React and TypeScript communities for best practices

## 📞 Support

For support and questions:
- **Email**: supporturbancart@gmail.com
- **Phone**: +91 9785462586
- **Address**: 12, Park Street, Kolkata, West Bengal

---

**UrbanCart** - Your trusted online shopping destination for quality products at unbeatable prices. 🛍️✨