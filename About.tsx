import React, { useEffect, useState } from 'react';
import { User } from 'lucide-react';

const About = () => {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <User className="text-gold" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">About Me</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Content Card */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gold/20 shadow-2xl hover:bg-gray-900/70 transition-all duration-300 hover:shadow-gold/10">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center">
              Hi, I'm <span className="text-gold font-semibold">Sujal Zade</span> — a second-year AI & ML student passionate about solving real-world problems with code, design, and vision. I bring together AI, creativity, and entrepreneurial thinking to build impactful tech.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">800+</div>
                <div className="text-white/70">Users Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">272</div>
                <div className="text-white/70">Students Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">10+</div>
                <div className="text-white/70">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;