import React, { useEffect, useState } from 'react';
import { Settings, Code, Briefcase, Users, Palette, Brain } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimatedSkills(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Python", percentage: 80, icon: Code, color: "from-gold to-yellow-500" },
    { name: "Entrepreneurship", percentage: 80, icon: Briefcase, color: "from-yellow-400 to-gold" },
    { name: "Project Management", percentage: 80, icon: Users, color: "from-gold to-amber-500" },
    { name: "ReactJS", percentage: 75, icon: Settings, color: "from-amber-400 to-gold" },
    { name: "UI/UX Design", percentage: 70, icon: Palette, color: "from-gold to-yellow-400" },
    { name: "Machine Learning", percentage: 85, icon: Brain, color: "from-yellow-500 to-gold" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Settings className="text-gold" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Skills</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gold/20 shadow-xl hover:bg-gray-900/70 transition-all duration-300 hover:shadow-gold/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color}`}>
                      <Icon className="text-black" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <div className="text-gold text-sm">{skill.percentage}%</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: animatedSkills ? `${skill.percentage}%` : '0%',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                    <div className="absolute right-0 -top-8 text-gold text-sm font-medium">
                      {animatedSkills ? `${skill.percentage}%` : '0%'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;