import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Brain, 
  Cpu, 
  Settings, 
  CheckCircle, 
  Users, 
  Globe, 
  Award, 
  TrendingUp,
  Sparkles,
  Zap,
  Shield,
  Star,
  Play,
  ChevronRight
} from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your unique business needs. From ERP to e-commerce platforms, we build scalable applications that drive growth.",
      features: ["Enterprise Applications", "Cloud Solutions", "API Development"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: "AI & Machine Learning",
      description: "Unlock the power of data with our AI and ML services. From predictive analytics to intelligent automation, we help you make data-driven decisions.",
      features: ["Predictive Analytics", "Process Automation", "Data Intelligence"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Cpu className="h-12 w-12 text-green-600" />,
      title: "IoT Integration",
      description: "Revolutionize your operations with IoT-enabled systems. From sensor integration to real-time monitoring dashboards, we connect your business.",
      features: ["Smart Sensors", "Real-time Monitoring", "Industrial IoT"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Settings className="h-12 w-12 text-orange-600" />,
      title: "DevOps Support",
      description: "Optimize your development cycle with our DevOps expertise. We help businesses implement CI/CD pipelines and enhance operational efficiency.",
      features: ["CI/CD Pipelines", "Cloud Migration", "Infrastructure"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const industries = [
    {
      title: "Warehouse Management",
      description: "Smart Warehousing for a Smarter Future",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "40% Efficiency Increase"
    },
    {
      title: "Agriculture Sector",
      description: "Modernizing Farms with Technology",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "30% Yield Improvement"
    },
    {
      title: "Retail & E-commerce",
      description: "Revolutionizing Customer Experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "50% Sales Growth"
    },
    {
      title: "Healthcare Technology",
      description: "Digital Health Solutions for Australia",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "60% Process Optimization"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description: "10+ years of expertise in cutting-edge technology solutions",
      metric: "50+ Specialists"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "User-Friendly Solutions",
      description: "Customizable and intuitive technology that your team will love",
      metric: "99% Satisfaction"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Global Presence",
      description: "Trusted by businesses across India, Middle East, and now Australia",
      metric: "3 Countries"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Scalable & Secure",
      description: "Enterprise-grade solutions that grow with your business",
      metric: "100% Uptime"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CTO, TechCorp Australia",
      content: "Sanadi Technologies transformed our operations with their AI-powered solutions. The results exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Chen",
      role: "Operations Manager, AgriTech Solutions",
      content: "Their IoT integration helped us increase efficiency by 40%. Outstanding technical expertise and support.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Emma Thompson",
      role: "CEO, RetailMax",
      content: "The custom ERP solution streamlined our entire business process. Highly recommend their services.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-mesh">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50"></div>
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Now Serving Australia
              </div>
              
              <h1 className="heading-xl text-gray-900">
                Transforming
                <span className="text-gradient block">Ideas</span>
                into
                <span className="text-gradient block">Digital</span>
                Solutions
              </h1>
              
              <p className="text-body-lg text-gray-600 max-w-2xl">
                Empowering Australian businesses with tailored software, AI-driven tools, and IoT integration. 
                Your trusted technology partner for digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579389248774-07907f421a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Digital Solutions"
                  className="image-premium w-full"
                />
                <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl shadow-2xl animate-float">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Projects Delivered</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass-effect p-4 rounded-2xl shadow-2xl animate-pulse-slow">
                  <div className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    <span className="text-lg font-bold text-gray-900">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-lg text-gray-900 mb-6">
              Excellence in Tailored Technology Solutions
            </h2>
            <p className="text-body-lg text-gray-600 max-w-4xl mx-auto">
              From our humble beginnings to global recognition, we are dedicated to empowering Australian businesses 
              through cutting-edge software, IoT, and AI-driven solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1610702876884-0f8473590287?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="image-premium w-full"
              />
            </div>
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-body text-gray-700">
                Sanadi Technologies Pvt. Ltd. is a trusted technology partner, committed to transforming 
                businesses with custom-built software solutions, seamless IoT integrations, and advanced AI applications.
              </p>
              <p className="text-body text-gray-700">
                Guided by innovation and fueled by a passion for problem-solving, we leverage our expertise to 
                craft intelligent systems that drive efficiency, automate workflows, and enhance decision-making.
              </p>
              <p className="text-body text-gray-700">
                With partnerships spanning India, the Middle East, and now expanding to Australia, we are proud to 
                be at the forefront of technology that shapes the future.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
              >
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-lg text-gray-900 mb-6">What We Do?</h2>
            <p className="text-body-lg text-gray-600 max-w-4xl mx-auto">
              We provide customers and clients the ultimate solution to their requirements and craft their ideas. 
              The service offered by the company in the form of skills, amenities, and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-premium group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`mb-6 p-3 rounded-xl bg-gradient-to-r ${service.color} inline-block`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-lg text-gray-900 mb-6">
              Transforming Industries with Smart, Scalable Solutions
            </h2>
            <p className="text-body-lg text-gray-600 max-w-4xl mx-auto">
              AMIGO ERP and IoT systems are designed to adapt and excel across diverse industries, 
              streamlining operations and enhancing productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl hover-lift">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                      {industry.stats}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-sm opacity-90">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-lg text-white mb-6">
              Why Australian Businesses Trust Sanadi Technologies
            </h2>
            <p className="text-body-lg text-blue-100 max-w-4xl mx-auto">
              We provide customers and clients with the ultimate solution to their requirements and craft their ideas. 
              The service offered by the company is in the form of skills, amenities, and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-effect w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-sm font-semibold text-blue-200 mb-2">{item.metric}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-lg text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-body-lg text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it. Here's what Australian businesses say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card-premium animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="animate-slide-up">
            <h2 className="heading-lg text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-body-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of Australian businesses that trust Sanadi Technologies for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="btn-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;