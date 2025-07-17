import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Brain, 
  Cpu, 
  Settings, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  Users,
  Clock,
  Award,
  Target,
  Sparkles
} from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="h-16 w-16 text-white" />,
      title: "Custom Software Development",
      description: "We specialize in building bespoke software tailored to your unique business needs. Whether it's ERP, HRM, or E-commerce platforms, we deliver scalable solutions that drive growth.",
      features: [
        "Enterprise Resource Planning (ERP) Systems",
        "Human Resource Management (HRM) Solutions",
        "E-commerce Platforms",
        "Customer Relationship Management (CRM)",
        "Inventory Management Systems",
        "Custom Web Applications"
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET", "PHP"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-blue-600",
      stats: { projects: "200+", satisfaction: "99%" }
    },
    {
      icon: <Brain className="h-16 w-16 text-white" />,
      title: "AI & Machine Learning Solutions",
      description: "Unlock the power of data with our AI and ML services. From predictive analytics to intelligent automation, we help you make data-driven decisions with ease.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Recommendation Systems",
        "Chatbots and Virtual Assistants",
        "Process Automation"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Azure AI", "AWS ML"],
      image: "https://images.unsplash.com/photo-1677442136019-1d865c7e8fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-purple-600",
      stats: { projects: "150+", satisfaction: "98%" }
    },
    {
      icon: <Cpu className="h-16 w-16 text-white" />,
      title: "IoT Integration",
      description: "Revolutionize your operations with IoT-enabled systems. From integrating sensors to developing real-time monitoring dashboards, we connect your business to the future.",
      features: [
        "Sensor Integration",
        "Real-time Monitoring Dashboards",
        "Industrial IoT Solutions",
        "Smart Building Systems",
        "Asset Tracking",
        "Predictive Maintenance"
      ],
      technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "Azure IoT", "MQTT", "LoRaWAN"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-green-600",
      stats: { projects: "100+", satisfaction: "97%" }
    },
    {
      icon: <Settings className="h-16 w-16 text-white" />,
      title: "DevOps Support",
      description: "Optimize your development cycle with our DevOps expertise. We help businesses transition to microservices, implement CI/CD pipelines, and enhance operational efficiency.",
      features: [
        "CI/CD Pipeline Implementation",
        "Cloud Migration Services",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring and Logging",
        "Security Integration"
      ],
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "Terraform"],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500 to-orange-600",
      stats: { projects: "80+", satisfaction: "100%" }
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Faster Time to Market",
      description: "Our agile development approach ensures rapid delivery without compromising quality.",
      metric: "50% Faster"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Enterprise Security",
      description: "Built-in security measures and compliance with Australian data protection standards.",
      metric: "100% Secure"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Dedicated Support",
      description: "24/7 Australian support team to ensure your systems run smoothly.",
      metric: "24/7 Support"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes for reliable solutions.",
      metric: "99.9% Uptime"
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Discovery", 
      description: "Understanding your business needs and requirements",
      icon: <Target className="h-6 w-6" />
    },
    { 
      step: "02", 
      title: "Planning", 
      description: "Creating detailed project roadmap and architecture",
      icon: <Users className="h-6 w-6" />
    },
    { 
      step: "03", 
      title: "Development", 
      description: "Agile development with regular client feedback",
      icon: <Code className="h-6 w-6" />
    },
    { 
      step: "04", 
      title: "Deployment", 
      description: "Seamless launch with ongoing support and maintenance",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-mesh">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50"></div>
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Comprehensive Technology Solutions
            </div>
            <h1 className="heading-xl text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-body-lg text-gray-600 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations 
              and drive digital innovation across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
                  <div className={`mb-8 p-4 rounded-2xl bg-gradient-to-r ${service.color} inline-block`}>
                    {service.icon}
                  </div>
                  
                  <h2 className="heading-md text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-body text-gray-600 mb-8">{service.description}</p>
                  
                  {/* Stats */}
                  <div className="flex space-x-8 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{service.stats.projects}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{service.stats.satisfaction}</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                  >
                    Get Started with {service.title.split(' ')[0]}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-fade-in`}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="image-premium w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-2xl shadow-2xl">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{service.stats.satisfaction}</div>
                        <div className="text-xs text-gray-600">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-lg text-gray-900 mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-body-lg text-gray-600 max-w-4xl mx-auto">
              We deliver more than just technology solutions – we provide strategic partnerships 
              that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="card-premium text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-lg text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-body-lg text-gray-600 max-w-4xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div 
                key={index} 
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-8">
                  <div className="bg-gradient-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto text-white text-xl font-bold group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-blue-600">{process.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="animate-slide-up">
            <h2 className="heading-lg text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-body-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can transform your business and drive growth in the Australian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center font-semibold group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;