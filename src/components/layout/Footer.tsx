import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  ArrowRight,
  ExternalLink,
  Heart
} from 'lucide-react';

const Footer = () => {
  const products = [
    { name: 'AMIGO ERP', description: 'Enterprise Resource Planning' },
    { name: 'AMIGO HRM', description: 'Human Resource Management' },
    { name: 'AMIGO IoT', description: 'Internet of Things Solutions' },
    { name: 'AMIGO VMS', description: 'Vendor Management System' },
    { name: 'AMIGO E-COM', description: 'E-commerce Platform' },
    { name: 'AMIGO IMS', description: 'Inventory Management' },
    { name: 'AMIGO WMS', description: 'Warehouse Management' },
    { name: 'AMIGO Edify', description: 'Educational Solutions' },
    { name: 'AMIGO Trading', description: 'Trading Platform' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', path: '#' },
    { name: 'API Reference', path: '#' },
    { name: 'Support Center', path: '#' },
    { name: 'System Status', path: '#' },
    { name: 'Release Notes', path: '#' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto container-padding py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest insights on digital transformation and technology trends in Australia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <div className="text-xl font-bold">Sanadi Technologies</div>
                <div className="text-sm text-gray-400">Australia</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Customized e-commerce web application and ERP software development company, 
              now serving Australian businesses with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <div className="space-y-3">
              {products.slice(0, 6).map((product, index) => (
                <Link
                  key={index}
                  to="/products"
                  className="block group"
                >
                  <div className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    {product.name}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {product.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.path}
                  className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
                >
                  {resource.name}
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto container-padding py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email Us</h4>
                <div className="space-y-1">
                  <a 
                    href="mailto:info@sanaditechnologies.com.au" 
                    className="block text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    info@sanaditechnologies.com.au
                  </a>
                  <a 
                    href="mailto:australia@sanaditechnologies.com" 
                    className="block text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    australia@sanaditechnologies.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Call Us</h4>
                <a 
                  href="tel:+61-2-8000-0000" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +61 2 8000 0000
                </a>
                <div className="text-xs text-gray-500 mt-1">Australian Business Hours</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Visit Us</h4>
                <div className="text-gray-300 text-sm">
                  Level 10, 123 Collins Street<br />
                  Melbourne, VIC 3000<br />
                  Australia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-gray-400">
              <span>Copyright © 2025 Sanadi Technologies Pvt. Ltd.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> in Australia
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;