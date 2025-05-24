
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Frameworks",
      skills: [
        { name: "React Native", level: 95, color: "bg-blue-500" },
        { name: "Flutter", level: 90, color: "bg-cyan-500" },
        { name: "iOS (Swift)", level: 85, color: "bg-orange-500" },
        { name: "Android (Kotlin)", level: 88, color: "bg-green-500" },
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 92, color: "bg-blue-600" },
        { name: "TypeScript", level: 90, color: "bg-blue-700" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 90, color: "bg-red-500" },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Firebase", level: 88, color: "bg-orange-600" },
        { name: "GraphQL", level: 80, color: "bg-pink-500" },
        { name: "Git", level: 90, color: "bg-gray-600" },
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technologies I Master
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional mobile applications across platforms
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux", "MobX", "REST APIs", "WebSockets", "CI/CD", "Jest", "Detox",
              "Fastlane", "App Store Connect", "Google Play Console", "Figma", "Sketch"
            ].map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover:bg-blue-100 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
