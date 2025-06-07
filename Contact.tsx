import React, { useEffect, useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Mail className="text-gold" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Contact</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Contact Content */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects and discuss new opportunities. 
              Feel free to reach out for partnerships, project discussions, or just to say hello!
            </p>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="mailto:sujalfeat@gmail.com"
                className="group flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-lg rounded-3xl border border-gold/20 hover:bg-gray-900/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20 min-w-[280px]"
              >
                <div className="p-4 bg-gradient-to-r from-gold to-yellow-500 rounded-2xl">
                  <Mail className="text-black" size={32} />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">Email</div>
                  <div className="text-gold group-hover:text-yellow-400 transition-colors duration-300">
                    sujalfeat@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sujalzade"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-lg rounded-3xl border border-gold/20 hover:bg-gray-900/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20 min-w-[280px]"
              >
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-gold rounded-2xl">
                  <Linkedin className="text-black" size={32} />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">LinkedIn</div>
                  <div className="text-gold group-hover:text-yellow-400 transition-colors duration-300">
                    linkedin.com/in/sujalzade
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-gold/20">
            <p className="text-white/60">
              © 2025 Sujal Zade. Built with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;