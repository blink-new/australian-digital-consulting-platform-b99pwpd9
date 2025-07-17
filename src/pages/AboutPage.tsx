import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe, Award, TrendingUp, Target, Eye, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "3", label: "Countries Served" }
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions to solve complex business challenges."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships and deliver solutions that truly make a difference."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Passion Driven",
      description: "We love what we do, and it shows in the quality of our work and the relationships we build."
    }
  ];

  const timeline = [
    {
      year: "2013",
      title: "Company Founded",
      description: "Sanadi Technologies was established in India with a vision to transform businesses through technology."
    },
    {
      year: "2016",
      title: "AMIGO Suite Launch",
      description: "Launched our flagship AMIGO product suite, revolutionizing business management solutions."
    },
    {
      year: "2019",
      title: "Middle East Expansion",
      description: "Expanded operations to the Middle East, serving clients across the region with localized solutions."
    },
    {
      year: "2022",
      title: "AI & IoT Integration",
      description: "Integrated advanced AI and IoT capabilities into our product offerings, staying ahead of technology trends."
    },
    {
      year: "2025",
      title: "Australian Market Entry",
      description: "Officially launched operations in Australia, bringing our expertise to Australian businesses."
    }
  ];

  const team = [
    {
      name: "Akshath Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Visionary leader with 15+ years in technology and business transformation."
    },
    {
      name: "Sarah Mitchell",
      role: "Australia Country Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Leading our Australian operations with deep local market knowledge."
    },
    {
      name: "David Chen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Technology expert specializing in AI, IoT, and enterprise solutions."
    },
    {
      name: "Emma Thompson",
      role: "Client Success Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Ensuring client success and satisfaction across all our Australian projects."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Sanadi Technologies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to global recognition, we are dedicated to empowering Australian businesses 
              through cutting-edge software, IoT, and AI-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Sanadi Technologies Pvt. Ltd. is a trusted technology partner, committed to transforming 
                businesses with custom-built software solutions, seamless IoT integrations, and advanced AI applications.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Guided by innovation and fueled by a passion for problem-solving, we leverage our expertise to 
                craft intelligent systems that drive efficiency, automate workflows, and enhance decision-making.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With partnerships spanning India, the Middle East, and now expanding to Australia, we are proud to 
                be at the forefront of technology that shapes the future. Our Australian expansion represents our 
                commitment to bringing world-class technology solutions to local businesses.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower Australian businesses with innovative technology solutions that drive growth, 
                enhance efficiency, and create competitive advantages in the digital age. We strive to be 
                the trusted technology partner that transforms ideas into reality.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Eye className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be Australia's leading provider of intelligent business solutions, recognized for our 
                innovation, quality, and commitment to client success. We envision a future where every 
                business, regardless of size, has access to world-class technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients, 
              partners, and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth from a startup to a global technology partner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals driving innovation and delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Australian Businesses Choose Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We bring global expertise with local understanding to deliver solutions that truly work for Australian businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "10+ years of proven expertise",
              "Australian compliance and standards",
              "24/7 local support team",
              "Scalable and secure solutions",
              "Competitive pricing models",
              "Rapid deployment capabilities"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-200 flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Sanadi Technologies for their digital transformation journey.
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

export default AboutPage;