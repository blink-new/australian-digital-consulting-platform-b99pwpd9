import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Cpu, Eye, ShoppingCart, Package, Warehouse, GraduationCap, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      name: "AMIGO ERP",
      title: "Enterprise Resource Planning",
      description: "Comprehensive ERP solution that integrates all your business processes into a single, unified system for maximum efficiency.",
      features: [
        "Financial Management",
        "Supply Chain Management",
        "Manufacturing Planning",
        "Project Management",
        "Reporting & Analytics",
        "Multi-location Support"
      ],
      industries: ["Manufacturing", "Retail", "Services", "Healthcare"]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      name: "AMIGO HRM",
      title: "Human Resource Management",
      description: "Complete HR solution to manage your workforce, from recruitment to retirement, with Australian compliance built-in.",
      features: [
        "Employee Management",
        "Payroll Processing",
        "Leave Management",
        "Performance Tracking",
        "Recruitment Portal",
        "Australian Tax Compliance"
      ],
      industries: ["All Industries", "Government", "Education", "Corporate"]
    },
    {
      icon: <Cpu className="h-12 w-12 text-blue-600" />,
      name: "AMIGO IoT",
      title: "Internet of Things Platform",
      description: "Smart IoT platform that connects devices, collects data, and provides actionable insights for operational excellence.",
      features: [
        "Device Management",
        "Real-time Monitoring",
        "Data Analytics",
        "Alert Systems",
        "Remote Control",
        "Predictive Maintenance"
      ],
      industries: ["Manufacturing", "Agriculture", "Smart Cities", "Healthcare"]
    },
    {
      icon: <Eye className="h-12 w-12 text-blue-600" />,
      name: "AMIGO VMS",
      title: "Visitor Management System",
      description: "Modern visitor management solution ensuring security and compliance while providing a seamless visitor experience.",
      features: [
        "Digital Check-in/out",
        "ID Verification",
        "Badge Printing",
        "Host Notifications",
        "Visitor Analytics",
        "Security Integration"
      ],
      industries: ["Corporate", "Healthcare", "Education", "Government"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
      name: "AMIGO E-COM",
      title: "E-commerce Platform",
      description: "Full-featured e-commerce solution designed for Australian businesses with integrated payment gateways and logistics.",
      features: [
        "Multi-vendor Support",
        "Australian Payment Gateways",
        "Inventory Management",
        "Order Processing",
        "Customer Management",
        "Mobile Responsive"
      ],
      industries: ["Retail", "Fashion", "Electronics", "Food & Beverage"]
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      name: "AMIGO IMS",
      title: "Inventory Management System",
      description: "Advanced inventory management with real-time tracking, automated reordering, and comprehensive reporting.",
      features: [
        "Real-time Tracking",
        "Automated Reordering",
        "Barcode Scanning",
        "Multi-location Support",
        "Supplier Management",
        "Cost Analysis"
      ],
      industries: ["Retail", "Manufacturing", "Wholesale", "Healthcare"]
    },
    {
      icon: <Warehouse className="h-12 w-12 text-blue-600" />,
      name: "AMIGO WMS",
      title: "Warehouse Management System",
      description: "Optimize warehouse operations with intelligent routing, automated picking, and real-time inventory visibility.",
      features: [
        "Warehouse Layout Optimization",
        "Pick & Pack Management",
        "Shipping Integration",
        "Labor Management",
        "Quality Control",
        "Performance Analytics"
      ],
      industries: ["Logistics", "E-commerce", "Manufacturing", "Distribution"]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      name: "AMIGO Edify",
      title: "Learning Management System",
      description: "Comprehensive LMS for educational institutions and corporate training with Australian curriculum support.",
      features: [
        "Course Management",
        "Student Portal",
        "Assessment Tools",
        "Progress Tracking",
        "Virtual Classrooms",
        "Certification Management"
      ],
      industries: ["Education", "Corporate Training", "Healthcare", "Government"]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      name: "AMIGO Trading",
      title: "Trading Management System",
      description: "Specialized trading platform for commodity trading, financial services, and investment management.",
      features: [
        "Portfolio Management",
        "Risk Assessment",
        "Trade Execution",
        "Market Analysis",
        "Compliance Reporting",
        "Client Management"
      ],
      industries: ["Financial Services", "Commodity Trading", "Investment", "Banking"]
    }
  ];

  const benefits = [
    {
      title: "Australian Compliance",
      description: "All products are designed with Australian regulations and standards in mind."
    },
    {
      title: "Scalable Architecture",
      description: "Grow your business without worrying about system limitations."
    },
    {
      title: "Cloud & On-Premise",
      description: "Flexible deployment options to suit your business needs."
    },
    {
      title: "24/7 Support",
      description: "Dedicated Australian support team for all your needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AMIGO <span className="text-blue-600">Product Suite</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive business solutions designed to streamline operations, enhance productivity, 
              and drive growth for Australian businesses across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-4">{product.title}</h4>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Key Features:</h5>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Industries:</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((industry, industryIndex) => (
                      <span key={industryIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center block font-semibold"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AMIGO Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Australian businesses with local compliance, support, and understanding of the market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Seamless Integration Across All Products
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                All AMIGO products are designed to work together seamlessly, providing a unified business management experience. 
                Share data across systems, eliminate silos, and get a complete view of your business operations.
              </p>
              <div className="space-y-4">
                {[
                  "Single sign-on across all products",
                  "Unified reporting and analytics",
                  "Real-time data synchronization",
                  "Centralized user management",
                  "Consistent user experience"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Integration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how AMIGO products can streamline your operations and drive growth. 
            Schedule a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center font-semibold"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;