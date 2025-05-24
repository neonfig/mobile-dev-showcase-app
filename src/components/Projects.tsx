
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FoodieHub - Food Delivery App",
      description: "A full-featured food delivery application with real-time tracking, payment integration, and restaurant management system.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      features: ["Real-time tracking", "Payment gateway", "Push notifications", "Restaurant dashboard"],
      downloads: "100K+",
      rating: 4.8,
      github: "#",
      demo: "#"
    },
    {
      title: "TaskMaster - Productivity Suite",
      description: "Cross-platform productivity app with project management, time tracking, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["Flutter", "Firebase", "GraphQL", "Redux"],
      features: ["Offline sync", "Team collaboration", "Time tracking", "Analytics"],
      downloads: "50K+",
      rating: 4.6,
      github: "#",
      demo: "#"
    },
    {
      title: "FitTracker - Health & Fitness",
      description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      technologies: ["iOS Native", "SwiftUI", "Core Data", "HealthKit"],
      features: ["HealthKit integration", "Custom workouts", "Nutrition tracking", "Social challenges"],
      downloads: "75K+",
      rating: 4.9,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Featured Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects That Made Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing mobile applications that deliver exceptional user experiences and business value
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-gray-200 overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Project Stats */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{project.rating}</span>
                  </div>
                  <Badge variant="secondary">{project.downloads} downloads</Badge>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
