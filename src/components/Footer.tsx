import React from 'react';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CreditCard,
  Shield,
  Truck,
  RotateCcw,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xnnvkbab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      {/* Customer Support Section */}
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={50}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Customer Support</h2>
              <p className="text-blue-200 text-lg">We're here to help you 24/7</p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Support */}
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-blue-200 mb-2">+91 9785462586</p>
                <p className="text-blue-200 text-sm">24/7 Support Available</p>
              </div>
            </AnimatedSection>

            {/* Email Support */}
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-200 mb-2">supporturbancart@gmail.com</p>
                <p className="text-blue-200 text-sm">Response within 2 hours</p>
              </div>
            </AnimatedSection>

            {/* Live Chat */}
            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-blue-200 mb-2">Chat with our experts on WhatsApp</p>
                <p className="text-blue-200 text-sm">+91 9785462586 Available 9 AM - 9 PM</p>
              </div>
            </AnimatedSection>

            {/* Visit Store */}
            <AnimatedSection animation="fadeInUp" delay={500}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Store</h3>
                <p className="text-blue-200 mb-2">12, Park Street</p>
                <p className="text-blue-200 text-sm">Kolkata, West Bengal</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-gray-400 text-lg">Have a question or feedback? We'd love to hear from you!</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 transform focus:scale-105"
                      placeholder="Enter your name"
                    />
                  </div>
                
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 transform focus:scale-105"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 transform focus:scale-105"
                    placeholder="What's this about?"
                  />
                </div>
              
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 transform focus:scale-105 resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
              
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-300 bg-green-900 bg-opacity-30 p-4 rounded-lg border border-green-800 animate-pulse">
                    <CheckCircle className="h-5 w-5" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
              
                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-300 bg-red-900 bg-opacity-30 p-4 rounded-lg border border-red-800 animate-pulse">
                    <AlertCircle className="h-5 w-5" />
                    <span>Sorry, there was an error sending your message. Please try again.</span>
                  </div>
                )}
              
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <AnimatedSection animation="fadeInLeft" delay={100}>
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">UrbanCart</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Your trusted online shopping destination for quality products at unbeatable prices. 
                  Shop with confidence and enjoy exceptional customer service.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Links */}
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['About Us', 'Contact Us', 'FAQ', 'Shipping Info', 'Returns', 'Size Guide', 'Track Order', 'Careers'].map((link, index) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 inline-block"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Categories */}
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
                <ul className="space-y-2">
                  {['Electronics', 'Fashion', 'Food & Beverages', 'Home & Garden', 'Sports & Fitness', 'Books & Media', 'Beauty & Personal Care'].map((category, index) => (
                    <li key={category}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 inline-block"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Customer Service */}
            <AnimatedSection animation="fadeInRight" delay={400}>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 hover:transform hover:translate-x-2 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-blue-300" />
                    <div>
                      <p className="text-gray-400">+91 9785462586</p>
                      <p className="text-gray-500 text-sm">24/7 Support</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 hover:transform hover:translate-x-2 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-blue-300" />
                    <div>
                      <p className="text-gray-400">supporturbancart@gmail.com</p>
                      <p className="text-gray-500 text-sm">Quick Response</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 hover:transform hover:translate-x-2 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-blue-300" />
                    <div>
                      <p className="text-gray-400">12, Park Street</p>
                      <p className="text-gray-500 text-sm">Kolkata, West Bengal</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection animation="scaleIn" delay={100}>
              <div className="flex items-center space-x-3 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Free Shipping</h5>
                  <p className="text-gray-500 text-sm">On orders over ₹999</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="flex items-center space-x-3 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Secure Payment</h5>
                  <p className="text-gray-500 text-sm">100% Protected</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={300}>
              <div className="flex items-center space-x-3 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <RotateCcw className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Easy Returns</h5>
                  <p className="text-gray-500 text-sm">30-day return policy</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={400}>
              <div className="flex items-center space-x-3 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">24/7 Support</h5>
                  <p className="text-gray-500 text-sm">Always here to help</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" delay={100}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © {currentYear} UrbanCart. All rights reserved. | Privacy Policy | Terms of Service
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  );
};

export default Footer;