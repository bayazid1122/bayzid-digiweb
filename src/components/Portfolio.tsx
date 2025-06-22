
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "SK Future Tech Agency Website",
      description: "A cutting-edge agency website featuring modern design principles, advanced animations, and optimized performance. Built with custom WordPress development and seamless user experience.",
      technologies: ["WordPress", "Custom CSS", "JavaScript", "PHP"],
      image: "/lovable-uploads/edd63c08-73fb-4efb-b5e8-a95be9ae2a6b.png",
      liveUrl: "#",
      category: "Web Development",
      featured: true,
      metrics: { performance: "98%", clients: "50+", rating: "5.0" }
    },
    {
      id: 2,
      title: "E-commerce Solution",
      description: "Comprehensive online store with advanced payment integration, inventory management, and mobile-optimized shopping experience.",
      technologies: ["WordPress", "WooCommerce", "Payment Gateway", "SEO"],
      image: "/lovable-uploads/edd63c08-73fb-4efb-b5e8-a95be9ae2a6b.png",
      liveUrl: "#",
      category: "E-commerce",
      featured: false,
      metrics: { performance: "95%", clients: "30+", rating: "4.9" }
    },
    {
      id: 3,
      title: "Corporate Identity Design",
      description: "Complete brand transformation including logo design, visual identity, and comprehensive marketing materials for modern businesses.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy"],
      image: "/lovable-uploads/edd63c08-73fb-4efb-b5e8-a95be9ae2a6b.png",
      liveUrl: "#",
      category: "Graphic Design",
      featured: false,
      metrics: { performance: "100%", clients: "25+", rating: "5.0" }
    },
    {
      id: 4,
      title: "Digital Marketing Campaign",
      description: "Multi-platform digital strategy including social media management, content creation, and performance analytics for maximum ROI.",
      technologies: ["Social Media", "Video Editing", "Analytics", "Content Strategy"],
      image: "/lovable-uploads/edd63c08-73fb-4efb-b5e8-a95be9ae2a6b.png",
      liveUrl: "#",
      category: "Digital Marketing",
      featured: true,
      metrics: { performance: "92%", clients: "40+", rating: "4.8" }
    }
  ];

  const categories = ["All", "Web Development", "E-commerce", "Graphic Design", "Digital Marketing"];

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Star className="w-4 h-4 mr-2" />
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My Creative <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover some of my finest work in web development, design, and digital marketing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                index === 0 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-purple-500/50 hover:bg-purple-500/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className={`bg-gray-800/30 border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 group overflow-hidden backdrop-blur-sm ${project.featured ? 'ring-1 ring-purple-500/20' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-black rounded-full text-sm font-bold">
                      <Zap className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-purple-600/90 hover:bg-purple-700 text-white backdrop-blur-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-700/30">
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-lg">{project.metrics.performance}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-lg">{project.metrics.clients}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-lg flex items-center justify-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {project.metrics.rating}
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">Rating</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30 hover:border-purple-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25"
          >
            Explore All Projects
            <ExternalLink className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
