
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code, Palette, Star, TrendingUp, Award } from "lucide-react";

const About = () => {
  const skills = [
    { name: "WordPress Development", level: 95, color: "purple" },
    { name: "Web Design", level: 90, color: "pink" },
    { name: "Digital Marketing", level: 85, color: "blue" },
    { name: "Graphic Design", level: 80, color: "indigo" },
    { name: "Video Editing", level: 75, color: "cyan" },
  ];

  const achievements = [
    { icon: Award, label: "WordPress Expert", description: "Certified Professional" },
    { icon: Star, label: "Top Rated", description: "Client Satisfaction" },
    { icon: TrendingUp, label: "Growth Focused", description: "Results Driven" }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Code className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Crafting Digital <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional websites that make a lasting impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Palette className="w-6 h-6 text-purple-400 mr-3" />
                    My Journey
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    I'm Bayzid Bostami Muaz, a dedicated web designer and developer with 6 years 
                    of professional experience. My journey began with a passion for creating 
                    beautiful, functional websites that help businesses establish their online presence.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Specializing in WordPress development, I combine technical expertise with 
                    creative design to deliver comprehensive digital solutions that drive results.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 group backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300">
                      <GraduationCap className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white">Education</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent mt-1"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    HSC from Agricultural University College, Mymensingh
                  </p>
                  <p className="text-purple-400 text-sm font-medium mt-2">2 Years</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-pink-500/30 transition-all duration-500 group backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-pink-500/10 rounded-xl group-hover:bg-pink-500/20 transition-colors duration-300">
                      <Briefcase className="h-6 w-6 text-pink-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white">Experience</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-transparent mt-1"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Web Designer & Developer at Digital Amplifyr
                  </p>
                  <p className="text-pink-400 text-sm font-medium mt-2">5 Years (Until 2025)</p>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl mb-3 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <achievement.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">{achievement.label}</h4>
                  <p className="text-gray-400 text-xs">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center lg:justify-start">
                <Code className="w-7 h-7 text-purple-400 mr-3" />
                Technical Expertise
              </h3>
            </div>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold text-lg">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-${skill.color}-400 font-bold`}>{skill.level}%</span>
                      <div className={`w-2 h-2 bg-${skill.color}-400 rounded-full animate-pulse`}></div>
                    </div>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full"></div>
                    <div 
                      className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full relative overflow-hidden transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-${skill.color}-500/20`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Competencies */}
            <div className="mt-12 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/30">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    <Code className="h-8 w-8 text-purple-400" />
                  </div>
                  <h5 className="font-bold text-white mb-2">Web Development</h5>
                  <p className="text-gray-400 text-sm">WordPress Specialist</p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <Palette className="h-8 w-8 text-blue-400" />
                  </div>
                  <h5 className="font-bold text-white mb-2">Creative Design</h5>
                  <p className="text-gray-400 text-sm">Graphics & Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
