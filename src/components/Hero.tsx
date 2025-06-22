
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Sparkles, Code, Palette } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 right-1/4 animate-bounce delay-700">
          <Code className="w-8 h-8 text-purple-400/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-1000">
          <Palette className="w-6 h-6 text-pink-400/30" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-bounce delay-300">
          <Sparkles className="w-7 h-7 text-blue-400/30" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Enhanced Profile Image with Glow Effect */}
          <div className="relative mx-auto w-48 h-48 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center">
                <span className="text-7xl font-bold text-white drop-shadow-lg">BM</span>
              </div>
            </div>
            {/* Rotating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/30 animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>

          {/* Enhanced Main Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Greeting with Typing Effect Styling */}
            <div className="space-y-2">
              <p className="text-lg text-purple-300 font-medium tracking-wider uppercase">
                Welcome to my digital world
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Bayzid Bostami Muaz
                </span>
              </h1>
            </div>
            
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-light leading-relaxed">
                Professional Web Designer & Developer
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            
            {/* Enhanced Description with Better Typography */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                With <span className="font-semibold text-purple-300">6 years of experience</span> in web design and development, 
                I specialize in creating stunning WordPress websites and providing comprehensive digital solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                  WordPress Expert
                </span>
                <span className="px-3 py-1 bg-pink-600/20 text-pink-300 rounded-full border border-pink-500/30">
                  Digital Marketing
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                  Graphic Design
                </span>
                <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-500/30">
                  Video Editing
                </span>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button 
                onClick={scrollToAbout}
                size="lg" 
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Discover My Journey
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Download CV
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Stats or Metrics Section */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">6+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">100+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
