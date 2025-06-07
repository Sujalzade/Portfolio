import React, { useEffect, useState } from 'react';
import { Download, Code, Brain, Rocket, Cpu, Database, Globe } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techIcons = [
    { Icon: Code, delay: '0s' },
    { Icon: Brain, delay: '0.5s' },
    { Icon: Rocket, delay: '1s' },
    { Icon: Cpu, delay: '1.5s' },
    { Icon: Database, delay: '2s' },
    { Icon: Globe, delay: '2.5s' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map(({ Icon, delay }, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: delay,
            }}
          >
            <Icon size={24} className="text-gold" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Sujal Zade"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent mb-4">
          Sujal Zade
        </h1>
        
        <h2 className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
          Building Tech that Solves Real Problems
        </h2>
        
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Turning Imagination into Action through Innovation & AI
        </p>

        {/* CTA Button */}
        <button className="group bg-gradient-to-r from-gold to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-400 hover:to-gold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3">
          <Download size={20} className="group-hover:animate-bounce" />
          Download Resume
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;