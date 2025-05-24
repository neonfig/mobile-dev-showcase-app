
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Status Badge */}
        <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border-blue-200">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Available for new projects
        </Badge>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Mobile App Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional mobile experiences with <span className="font-semibold text-blue-600">React Native</span>, <span className="font-semibold text-purple-600">Flutter</span>, and native technologies
          </p>
        </div>

        {/* Tech Icons */}
        <div className="flex justify-center items-center space-x-8 py-8">
          <div className="flex items-center space-x-2 text-blue-600">
            <Smartphone className="w-6 h-6" />
            <span className="font-medium">iOS</span>
          </div>
          <div className="flex items-center space-x-2 text-green-600">
            <Smartphone className="w-6 h-6" />
            <span className="font-medium">Android</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-600">
            <Code className="w-6 h-6" />
            <span className="font-medium">Cross-Platform</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 font-medium">Apps Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">1M+</div>
            <div className="text-gray-600 font-medium">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">5+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
