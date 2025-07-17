import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Users, DollarSign, CheckCircle } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Melbourne Retail Chain Transformation",
      client: "RetailMax Australia",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "A growing retail chain with 50+ stores across Australia needed to unify their inventory management, streamline operations, and improve customer experience across all locations.",
      solution: "Implemented AMIGO ERP with integrated inventory management, POS systems, and real-time analytics dashboard. Custom e-commerce platform with omnichannel capabilities.",
      results: [
        "40% reduction in inventory costs",
        "60% faster order processing",
        "25% increase in customer satisfaction",
        "Real-time visibility across all stores"
      ],
      technologies: ["AMIGO ERP", "AMIGO E-COM", "React", "Node.js", "PostgreSQL"],
      timeline: "4 months",
      teamSize: "8 developers"
    },
    {
      title: "Smart Agriculture IoT Solution",
      client: "AgroTech Farms",
      industry: "Agriculture",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "Large-scale farming operation needed to optimize water usage, monitor crop health, and predict harvest yields across 10,000+ acres of farmland.",
      solution: "Deployed AMIGO IoT platform with soil moisture sensors, weather stations, and drone integration. AI-powered analytics for predictive farming and automated irrigation systems.",
      results: [
        "30% reduction in water usage",
        "20% increase in crop yield",
        "50% reduction in manual monitoring",
        "Predictive maintenance for equipment"
      ],
      technologies: ["AMIGO IoT", "Python", "TensorFlow", "AWS IoT", "React Dashboard"],
      timeline: "6 months",
      teamSize: "12 specialists"
    },
    {
      title: "Healthcare Management System",
      client: "Sydney Medical Group",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "Multi-location medical practice needed integrated patient management, appointment scheduling, and compliance with Australian healthcare regulations.",
      solution: "Custom healthcare management system with AMIGO HRM integration, patient portal, telemedicine capabilities, and automated compliance reporting.",
      results: [
        "50% reduction in administrative tasks",
        "35% improvement in patient satisfaction",
        "100% compliance with Australian regulations",
        "Seamless telemedicine integration"
      ],
      technologies: ["AMIGO HRM", "Custom Development", "React", "Node.js", "MongoDB"],
      timeline: "5 months",
      teamSize: "10 developers"
    },
    {
      title: "Manufacturing Process Optimization",
      client: "Brisbane Manufacturing Co.",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "Traditional manufacturing company needed to digitize operations, implement predictive maintenance, and optimize production workflows.",
      solution: "Comprehensive digital transformation with AMIGO ERP, IoT sensors for equipment monitoring, AI-powered predictive maintenance, and automated quality control systems.",
      results: [
        "45% reduction in equipment downtime",
        "30% increase in production efficiency",
        "25% reduction in maintenance costs",
        "Real-time production monitoring"
      ],
      technologies: ["AMIGO ERP", "AMIGO IoT", "Machine Learning", "Python", "Industrial IoT"],
      timeline: "8 months",
      teamSize: "15 specialists"
    },
    {
      title: "Educational Institution Digitization",
      client: "Australian University",
      industry: "Education",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "Large university needed to modernize their learning management system, streamline administrative processes, and enhance student experience.",
      solution: "Implemented AMIGO Edify LMS with student portal, automated grading system, virtual classroom integration, and comprehensive analytics dashboard.",
      results: [
        "60% improvement in student engagement",
        "40% reduction in administrative workload",
        "Seamless remote learning capabilities",
        "Enhanced academic performance tracking"
      ],
      technologies: ["AMIGO Edify", "React", "Node.js", "Video Conferencing API", "Analytics"],
      timeline: "6 months",
      teamSize: "12 developers"
    },
    {
      title: "Warehouse Automation Solution",
      client: "LogiFlow Australia",
      industry: "Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "Growing logistics company needed to automate warehouse operations, optimize inventory placement, and improve order fulfillment speed.",
      solution: "Deployed AMIGO WMS with automated picking systems, real-time inventory tracking, route optimization, and integration with major shipping carriers.",
      results: [
        "70% faster order fulfillment",
        "35% reduction in operational costs",
        "99.5% inventory accuracy",
        "Automated carrier integration"
      ],
      technologies: ["AMIGO WMS", "Barcode Systems", "Route Optimization", "API Integration"],
      timeline: "4 months",
      teamSize: "8 developers"
    }
  ];

  const metrics = [
    { icon: <TrendingUp className="h-8 w-8 text-blue-600" />, value: "500+", label: "Projects Completed" },
    { icon: <Users className="h-8 w-8 text-blue-600" />, value: "200+", label: "Happy Clients" },
    { icon: <DollarSign className="h-8 w-8 text-blue-600" />, value: "$50M+", label: "Cost Savings Generated" },
    { icon: <Clock className="h-8 w-8 text-blue-600" />, value: "95%", label: "On-Time Delivery" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped Australian businesses transform their operations, 
              increase efficiency, and achieve remarkable growth through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="text-sm text-gray-500">
                        {study.timeline} • {study.teamSize}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                    <div className="text-lg font-semibold text-blue-600 mb-6">{study.client}</div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions 
              that address specific sector challenges and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Retail & E-commerce", projects: "150+ Projects" },
              { name: "Healthcare", projects: "80+ Projects" },
              { name: "Manufacturing", projects: "120+ Projects" },
              { name: "Agriculture", projects: "60+ Projects" },
              { name: "Education", projects: "90+ Projects" },
              { name: "Logistics", projects: "70+ Projects" },
              { name: "Financial Services", projects: "40+ Projects" },
              { name: "Government", projects: "30+ Projects" },
              { name: "Real Estate", projects: "50+ Projects" }
            ].map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-blue-600 font-medium">{industry.projects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Sanadi Technologies transformed our entire retail operation. The AMIGO ERP system has given us real-time visibility across all our stores and significantly improved our efficiency.",
                author: "Sarah Johnson",
                role: "CEO, RetailMax Australia",
                company: "RetailMax"
              },
              {
                quote: "The IoT solution for our farms has been game-changing. We've reduced water usage by 30% while increasing our crop yields. The ROI was evident within the first season.",
                author: "Michael Chen",
                role: "Operations Director, AgroTech Farms",
                company: "AgroTech"
              },
              {
                quote: "Working with Sanadi has been exceptional. Their team understood our healthcare compliance requirements and delivered a solution that exceeded our expectations.",
                author: "Dr. Emma Wilson",
                role: "Practice Manager, Sydney Medical Group",
                company: "Sydney Medical"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl">
                <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-blue-100 text-sm">{testimonial.role}</div>
                  <div className="text-blue-200 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing list of Australian businesses that have transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;