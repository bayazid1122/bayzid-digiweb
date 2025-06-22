
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, TrendingUp, Video, Smartphone, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "WordPress Development",
      description: "Custom WordPress websites with responsive design, optimized performance, and user-friendly content management systems.",
      features: ["Custom Theme Development", "Plugin Integration", "E-commerce Setup", "Performance Optimization"]
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Modern, visually appealing web designs that capture your brand essence and provide excellent user experience.",
      features: ["UI/UX Design", "Responsive Layouts", "Brand Integration", "User Experience Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services for promotional content, tutorials, and marketing materials.",
      features: ["Promotional Videos", "Tutorial Creation", "Social Media Content", "Motion Graphics"]
    },
    {
      icon: Smartphone,
      title: "Responsive Development",
      description: "Ensure your website looks perfect on all devices with mobile-first responsive development approach.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Performance Tuning", "Touch-friendly Interface"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your website's search engine rankings with comprehensive SEO strategies and optimization techniques.",
      features: ["On-page SEO", "Technical SEO", "Keyword Research", "Local SEO"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive web development and digital marketing solutions to help your business thrive online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-700/50 border-gray-600 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-4 group-hover:bg-purple-600/30 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-bold text-white">Ready to Start Your Project?</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Let's discuss how I can help bring your vision to life with professional web development and digital marketing solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
