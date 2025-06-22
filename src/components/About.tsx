
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code, Palette } from "lucide-react";

const About = () => {
  const skills = [
    { name: "WordPress Development", level: 95 },
    { name: "Web Design", level: 90 },
    { name: "Digital Marketing", level: 85 },
    { name: "Graphic Design", level: 80 },
    { name: "Video Editing", level: 75 },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate web designer and developer with a strong foundation in creating 
            digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="prose prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm Bayzid Bostami Muaz, a dedicated web designer and developer with 6 years 
                of professional experience. My journey in the digital world has been driven by 
                a passion for creating beautiful, functional websites that help businesses 
                establish their online presence.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Specializing in WordPress development, I combine technical expertise with 
                creative design to deliver comprehensive digital solutions. My skill set 
                extends beyond web development to include digital marketing strategies, 
                graphic design, and video editing.
              </p>
            </div>

            {/* Education & Experience Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-gray-700/50 border-gray-600 hover:border-purple-500/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="h-6 w-6 text-purple-400 mr-3" />
                    <h3 className="font-semibold text-white">Education</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    HSC from Agricultural University College, Mymensingh
                  </p>
                  <p className="text-purple-400 text-sm">2 Years</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700/50 border-gray-600 hover:border-purple-500/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Briefcase className="h-6 w-6 text-purple-400 mr-3" />
                    <h3 className="font-semibold text-white">Experience</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Web Designer & Developer at Digital Amplifyr
                  </p>
                  <p className="text-purple-400 text-sm">5 Years (Until 2025)</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-purple-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Expertise */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <Code className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white">Web Development</h4>
                <p className="text-gray-400 text-sm">WordPress Expert</p>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <Palette className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white">Creative Design</h4>
                <p className="text-gray-400 text-sm">Graphics & Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
