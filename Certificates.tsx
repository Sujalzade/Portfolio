import React, { useEffect, useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('certificates');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: "Google Foundations of Cybersecurity",
      description: "Coursera certification in cybersecurity fundamentals",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Runner-up in RCOEM Submission Round",
      description: "Recognition for outstanding project submission",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Data Visualization",
      description: "Empowering Business with Insights certification",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Ideation Bootcamp Certificate",
      description: "Certification in innovation and ideation processes",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Letter of Appreciation",
      description: "Recognition from Lemon Ideas for contributions",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Financial Accounting Fundamentals",
      description: "Coursera certification in accounting basics",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "IBM Data Analysis with Python",
      description: "Coursera certification in data analysis techniques",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Debate Competition Participation",
      description: "Certificate of participation in inter-college debate",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Patent Industry Connect Participation",
      description: "Certificate for patent workshop participation",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300",
      certImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const openModal = (cert: any) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certificates" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="text-gold" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Certificates</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => openModal(cert)}
                className="group bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gold/20 shadow-xl hover:shadow-gold/20 hover:bg-gray-900/70 transition-all duration-300 hover:-translate-y-1 cursor-pointer transform-gpu"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 215, 0, 0.1)'
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="text-gold" size={18} />
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full bg-black border border-gold/30 rounded-3xl overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-2">{selectedCert.title}</h3>
                  <p className="text-white/70">{selectedCert.description}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/70 hover:text-gold transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Preview</h4>
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full rounded-lg border border-gold/20"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Certificate</h4>
                  <img
                    src={selectedCert.certImage}
                    alt="Certificate"
                    className="w-full rounded-lg border border-gold/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;