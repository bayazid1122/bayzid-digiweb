import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!"
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactMethods = [{
    icon: Mail,
    title: "Email",
    value: "bayzid@gmail.com",
    description: "Send me an email anytime",
    color: "purple"
  }, {
    icon: Phone,
    title: "Phone",
    value: "01888369870",
    description: "Call me during business hours",
    color: "blue"
  }, {
    icon: MapPin,
    title: "Location",
    value: "Mymensingh, Bangladesh",
    description: "Available for local meetings",
    color: "green"
  }];
  const quickStats = [{
    icon: Clock,
    label: "Response Time",
    value: "< 24 Hours"
  }, {
    icon: MessageCircle,
    label: "Project Discussions",
    value: "Free"
  }, {
    icon: Globe,
    label: "Availability",
    value: "24/7 Support"
  }];
  return <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Connect
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Start Your <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your digital vision to life? Let's discuss how we can work together
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickStats.map((stat, index) => <div key={index} className="text-center p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>)}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a website, digital marketing, or creative design services, 
                I'm here to help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => <Card key={index} className={`bg-gray-800/40 border-gray-700/50 hover:border-${method.color}-500/30 transition-all duration-500 group backdrop-blur-sm`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-14 h-14 bg-${method.color}-500/10 rounded-2xl group-hover:bg-${method.color}-500/20 transition-all duration-300`}>
                        <method.icon className={`h-6 w-6 text-${method.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg mb-1">{method.title}</h4>
                        <p className={`text-${method.color}-400 font-semibold text-lg mb-1`}>{method.value}</p>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Additional Info */}
            <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <h4 className="text-xl font-bold text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  6+ years of professional experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  100+ successful projects delivered
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Competitive pricing with quality results
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-3">Send a Message</h4>
                <p className="text-gray-400">Fill out the form below and I'll get back to you soon</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="bg-gray-700/50 border-gray-600/50 text-white focus:border-purple-500/50 focus:ring-purple-500/20 h-12 rounded-xl" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-gray-700/50 border-gray-600/50 text-white focus:border-purple-500/50 focus:ring-purple-500/20 h-12 rounded-xl" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                    Project Subject *
                  </label>
                  <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className="bg-gray-700/50 border-gray-600/50 text-white focus:border-purple-500/50 focus:ring-purple-500/20 h-12 rounded-xl" placeholder="What's your project about?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                    Project Details *
                  </label>
                  <Textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="bg-gray-700/50 border-gray-600/50 text-white focus:border-purple-500/50 focus:ring-purple-500/20 resize-none rounded-xl" placeholder="Tell me about your project requirements, timeline, and budget..." />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Send Message
                  <Send className="ml-3 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-20 border-t border-gray-700/30 mt-20">
          <div className="mb-6">
            <h5 className="text-2xl font-bold text-white mb-2">Bayzid Bostami Muaz</h5>
            <p className="text-purple-400 font-medium">Professional Web Designer & Developer</p>
          </div>
          <p className="text-gray-400">© 2025 All rights reserved. Crafted with passion for digital excellence.</p>
        </div>
      </div>
    </section>;
};
export default Contact;