import React, { useEffect, useState } from 'react';
import { Trophy, Medal, Star, X } from 'lucide-react';

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAward, setSelectedAward] = useState<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('awards');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const awards = [
    {
      title: "MGI Ideathon",
      subtitle: "Special Achievement",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400",
      cert: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "achievement",
      icon: Star
    },
    {
      title: "TechAce 2K25",
      subtitle: "Winner in Prezentaire & Project Exhibition",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      cert: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
      cert2: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "winner",
      icon: Trophy
    },
    {
      title: "NEXTGEN EXPO 2K23",
      subtitle: "Runner-Up",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      cert: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "runner-up",
      icon: Medal
    },
    {
      title: "Ideathon IGNITRA 2.0",
      subtitle: "Winner",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "winner",
      icon: Trophy
    },
    {
      title: "Short Film Competition",
      subtitle: "Winner",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "winner",
      icon: Trophy
    },
    {
      title: "Badminton Tournament",
      subtitle: "Winner",
      image: "https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "winner",
      icon: Trophy
    },
    {
      title: "Badminton IGNITRA 2.0",
      subtitle: "Runner-Up",
      image: "https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=400",
      cert: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "runner-up",
      icon: Medal
    }
  ];

  const getGradient = (type: string) => {
    switch (type) {
      case 'winner': return 'from-gold to-yellow-500';
      case 'runner-up': return 'from-gray-300 to-gray-500';
      case 'achievement': return 'from-gold to-amber-500';
      default: return 'from-yellow-400 to-gold';
    }
  };

  const openModal = (award: any) => {
    setSelectedAward(award);
  };

  const closeModal = () => {
    setSelectedAward(null);
  };

  return (
    <section id="awards" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Trophy className="text-gold" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Awards & Achievements</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div
                  key={index}
                  onClick={() => openModal(award)}
                  className="group bg-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gold/20 shadow-2xl hover:shadow-gold/20 hover:bg-gray-900/70 transition-all duration-300 hover:-translate-y-2 cursor-pointer transform-gpu"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 215, 0, 0.1)'
                  }}
                >
                  {/* Award Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${getGradient(award.type)} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${getGradient(award.type)} shadow-lg`}>
                        <Icon className="text-black" size={20} />
                      </div>
                    </div>

                    {/* Certificate Badge */}
                    {award.cert && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-lg">
                          <img src={award.cert} alt="Certificate" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Award Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {award.subtitle}
                    </p>
                    
                    {/* Achievement Type Badge */}
                    <div className="mt-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getGradient(award.type)} text-black text-xs font-medium rounded-full uppercase tracking-wide`}>
                        {award.type.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full bg-black border border-gold/30 rounded-3xl overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gold mb-2">{selectedAward.title}</h3>
                  <p className="text-white/70 text-lg">{selectedAward.subtitle}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/70 hover:text-gold transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Award Image</h4>
                  <img
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    className="w-full rounded-lg border border-gold/20"
                  />
                </div>
                {selectedAward.cert && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Certificate</h4>
                    <img
                      src={selectedAward.cert}
                      alt="Certificate"
                      className="w-full rounded-lg border border-gold/20"
                    />
                  </div>
                )}
                {selectedAward.cert2 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Additional Certificate</h4>
                    <img
                      src={selectedAward.cert2}
                      alt="Additional Certificate"
                      className="w-full rounded-lg border border-gold/20"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Awards;