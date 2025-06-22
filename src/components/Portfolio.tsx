
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "SK Future Tech Agency Website",
      description: "A modern, responsive agency website built with WordPress, featuring custom design elements and optimized for performance.",
      technologies: ["WordPress", "Custom CSS", "JavaScript", "PHP"],
      image: "/lovable-uploads/edd63c08-73fb-4efb-b5e8-a95be9ae2a6b.png",
      liveUrl: "#",
      category: "Web Development"
    },
    {
      id: 2,
      title: "E-commerce Solution",
      description: "Full-featured e-commerce website with payment integration, inventory management, and responsive design.",
      technologies: ["WordPress", "WooCommerce", "Payment Gateway", "SEO"],
      image: "/lovable-uploads/edd63c08-73fb-4efb-b5e8-a95be9ae2a6b.png",
      liveUrl: "#",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "Corporate Identity Design",
      description: "Complete branding package including logo design, business cards, and marketing materials for a tech startup.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy"],
      image: "/lovable-uploads/edd63c08-73fb-4efb-b5e8-a95be9ae2a6b.png",
      liveUrl: "#",
      category: "Graphic Design"
    },
    {
      id: 4,
      title: "Digital Marketing Campaign",
      description: "Comprehensive digital marketing strategy including social media management and video content creation.",
      technologies: ["Social Media", "Video Editing", "Analytics", "Content Strategy"],
      image: "/lovable-uploads/edd63c08-73fb-4efb-b5e8-a95be9ae2a6b.png",
      liveUrl: "#",
      category: "Digital Marketing"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-purple-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing some of my best work in web development, design, and digital marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
