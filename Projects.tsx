import React, { useEffect, useState } from 'react';
import { FolderOpen, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Internal Maps for FEAT",
      description: "Used by 800+ visitors to navigate the campus and find rooms accurately — reduced time confusion and increased efficiency.",
      tech: ["JavaScript", "Dijkstra's Algorithm", "React"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-gold to-yellow-500"
    },
    {
      title: "Subway Surfer Hand Gesture Control",
      description: "A reimagined version of the popular game using computer vision — players can control the game with hand movements.",
      tech: ["OpenCV", "Python", "Mediapipe"],
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-yellow-400 to-gold"
    },
    {
      title: "Student Mental Health Detection System",
      description: "Helped psychiatrists detect early symptoms in 272 students using survey data and machine learning models.",
      tech: ["Scikit-learn", "Pandas", "Logistic Regression"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-gold to-amber-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <FolderOpen className="text-gold" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Projects</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gold/20 shadow-2xl hover:shadow-gold/20 hover:bg-gray-900/70 transition-all duration-300 hover:-translate-y-2 transform-gpu"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)'
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="text-white" size={20} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gold/20 text-gold/90 rounded-full text-xs font-medium hover:bg-gold/30 transition-colors duration-300 border border-gold/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;