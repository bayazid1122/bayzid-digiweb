
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, Video, Smartphone, Search, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "WordPress Development",
      description: "Custom WordPress websites with responsive design, optimized performance, and user-friendly content management systems tailored to your business needs.",
      features: ["Custom Theme Development", "Plugin Integration", "E-commerce Setup", "Performance Optimization"],
      price: "Starting at $1,200",
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Modern, visually stunning web designs that capture your brand essence and provide exceptional user experiences across all devices.",
      features: ["UI/UX Design", "Responsive Layouts", "Brand Integration", "User Experience Optimization"],
      price: "Starting at $800",
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies designed to boost your online presence and drive sustainable business growth.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      price: "Starting at $600/month",
      popular: false,
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services for promotional content, tutorials, and engaging marketing materials that captivate your audience.",
      features: ["Promotional Videos", "Tutorial Creation", "Social Media Content", "Motion Graphics"],
      price: "Starting at $400",
      popular: false,
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Responsive Development",
      description: "Ensure your website delivers perfect experiences across all devices with mobile-first responsive development approach.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Performance Tuning", "Touch-friendly Interface"],
      price: "Starting at $500",
      popular: false,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your website's search engine rankings with comprehensive SEO strategies and advanced optimization techniques.",
      features: ["On-page SEO", "Technical SEO", "Keyword Research", "Local SEO"],
      price: "Starting at $400/month",
      popular: false,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What I <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development and digital marketing solutions designed to elevate your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`bg-gray-800/40 border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm ${service.popular ? 'ring-2 ring-purple-500/30 transform scale-105' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <CardContent className="p-8 space-y-6 relative">
                {/* Service Icon */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>
                
                {/* Service Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pt-6 border-t border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.price}
                      </div>
                      <div className="text-gray-500 text-sm">Professional Rate</div>
                    </div>
                    <Button 
                      size="sm"
                      className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 text-white`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-8 p-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl backdrop-blur-sm border border-gray-700/30">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your vision to life with professional web development and strategic digital marketing solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25"
            >
              Start Your Project
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/50 px-12 py-6 rounded-2xl text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
