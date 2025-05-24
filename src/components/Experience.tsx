
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Mobile Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading mobile development team for enterprise applications. Architected and delivered 5+ mobile apps serving 100K+ users.",
      achievements: [
        "Reduced app crash rate by 60% through performance optimization",
        "Led team of 6 developers across iOS and Android platforms",
        "Implemented CI/CD pipeline reducing deployment time by 40%"
      ],
      technologies: ["React Native", "iOS", "Android", "GraphQL", "AWS"]
    },
    {
      title: "Mobile App Developer",
      company: "StartupHub Inc",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed cross-platform mobile applications for various startup clients, from MVP to production-ready apps.",
      achievements: [
        "Built 8 mobile apps from concept to App Store/Play Store",
        "Achieved 4.5+ star rating across all published applications",
        "Collaborated with design team to implement pixel-perfect UIs"
      ],
      technologies: ["Flutter", "React Native", "Firebase", "Node.js"]
    },
    {
      title: "Junior iOS Developer",
      company: "Mobile Innovations LLC",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Specialized in native iOS development, working on consumer-facing applications with focus on user experience.",
      achievements: [
        "Contributed to 3 apps with 500K+ combined downloads",
        "Implemented core features using Swift and UIKit",
        "Participated in code reviews and mentored interns"
      ],
      technologies: ["Swift", "UIKit", "Core Data", "Xcode"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Professional Journey</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building mobile excellence through continuous learning and impactful contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-16 w-full">
                  <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                          <div className="flex items-center text-blue-600 mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {exp.type}
                          </Badge>
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm font-medium">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
