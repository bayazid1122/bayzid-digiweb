
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Sparkles, Code, Palette, Star, Users, Award } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.3) 2px, transparent 0), 
                           radial-gradient(circle at 75px 75px, rgba(219, 39, 119, 0.3) 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Modern Floating Icons */}
        <div className="absolute top-1/4 right-1/4 animate-bounce delay-700">
          <div className="p-3 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20">
            <Code className="w-6 h-6 text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-1000">
          <div className="p-3 rounded-full bg-pink-500/10 backdrop-blur-sm border border-pink-500/20">
            <Palette className="w-5 h-5 text-pink-400" />
          </div>
        </div>
        <div className="absolute top-2/3 right-1/3 animate-bounce delay-300">
          <div className="p-3 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-12">
          {/* Modern Profile Section */}
          <div className="relative mx-auto w-56 h-56 group">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 animate-pulse transition-all duration-700"></div>
            
            {/* Main Profile Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5 backdrop-blur-xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:border-white/10">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center relative">
                <span className="text-8xl font-bold text-white drop-shadow-2xl">BM</span>
                
                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Multiple Rotating Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-2 rounded-full border border-dotted border-pink-400/15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>

          {/* Enhanced Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for Projects
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <p className="text-lg text-purple-300 font-medium tracking-wider uppercase opacity-90">
                Welcome to my digital universe
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Bayzid
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-200 font-light">
                Professional Web Designer & Developer
              </h2>
            </div>
            
            {/* Enhanced Description */}
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                With <span className="font-semibold text-purple-300 bg-purple-500/10 px-2 py-1 rounded">6 years of experience</span> in web design and development, 
                I specialize in creating stunning WordPress websites and providing comprehensive digital solutions.
              </p>
              
              {/* Modern Skill Tags */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "WordPress Expert", color: "purple" },
                  { label: "Digital Marketing", color: "pink" },
                  { label: "Graphic Design", color: "blue" },
                  { label: "Video Editing", color: "indigo" }
                ].map((skill, index) => (
                  <span 
                    key={skill.label}
                    className={`px-4 py-2 bg-${skill.color}-600/10 text-${skill.color}-300 rounded-full border border-${skill.color}-500/20 backdrop-blur-sm text-sm font-medium hover:bg-${skill.color}-600/20 hover:border-${skill.color}-500/40 transition-all duration-300 cursor-default`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Modern Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button 
                onClick={scrollToAbout}
                size="lg" 
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 border border-purple-500/20"
              >
                Discover My Journey
                <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-purple-400/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400/50 px-12 py-6 rounded-2xl text-lg font-semibold backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
              >
                Download CV
                <Download className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Modern Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-12 border-t border-gray-700/30">
              {[
                { icon: Award, value: "6+", label: "Years Experience", color: "purple" },
                { icon: Users, value: "100+", label: "Happy Clients", color: "pink" },
                { icon: Star, value: "24/7", label: "Support", color: "blue" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group cursor-default">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 mb-4 group-hover:bg-${stat.color}-500/20 transition-all duration-300`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                  </div>
                  <div className={`text-4xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-400/50 rounded-full flex justify-center relative backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center font-medium">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
