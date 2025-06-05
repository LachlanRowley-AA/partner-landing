import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, BarChart3, UserCheck, Palette } from 'lucide-react';

const PartnershipBenefits = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Expand what you can offer",
      description: "Close more sales by providing an additional service for your customers",
      color: "#01E194",
      delay: "delay-100"
    },
    {
      icon: Users,
      title: "Premium Customer Experience",
      description: "Unmatched experience for your customers",
      color: "#01E194",
      delay: "delay-200"
    },
    {
      icon: BarChart3,
      title: "Real-Time Performance Insights",
      description: "Back-end system to track deal progress and conversions",
      color: "#01E194",
      delay: "delay-300"
    },
    {
      icon: UserCheck,
      title: "Dedicated Expert Team",
      description: "Specialised onshore team that don't try to be good at everything",
      color: "#01E194",
      delay: "delay-400"
    },
    {
      icon: Palette,
      title: "Seamless Brand Integration",
      description: "White labelling and subvention plans available",
      color: "#01E194",
      delay: "delay-500"
    }
  ];

  const renderCard = (benefit, index, actualIndex) => {
    const IconComponent = benefit.icon;
    return (
      <div
        key={actualIndex}
        className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${benefit.delay}`}
        onMouseEnter={() => setHoveredCard(actualIndex)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div 
          className="relative backdrop-blur-lg rounded-sm p-8 h-full border transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
          style={{ 
            backgroundColor: '#F6F6F6', 
            borderColor: '#01E194', 
            borderWidth: '2px',
            boxShadow: hoveredCard === actualIndex ? '0 25px 50px -12px rgba(1, 225, 148, 0.25)' : 'none'
          }}
        >
          {/* Gradient overlay on hover */}
          <div 
            className="absolute inset-0 rounded-sm transition-opacity duration-300"
            style={{ 
              background: `linear-gradient(135deg, rgba(1, 225, 148, 0.1) 0%, rgba(1, 225, 148, 0.05) 100%)`,
              opacity: hoveredCard === actualIndex ? 1 : 0
            }}
          ></div>
          
          {/* Icon and Title Container - Flexbox for alignment */}
          <div className="flex items-center mb-6">
            <div 
              className="flex items-center justify-center w-16 h-16 rounded-sm mr-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
              style={{ backgroundColor: '#01E194' }}
            >
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold transition-colors duration-300 leading-tight" style={{ color: '#000000' }}>
              {benefit.title}
            </h3>
          </div>

          {/* Description */}
          <p className="leading-relaxed transition-colors duration-300" style={{ color: '#000000', opacity: 0.8 }}>
            {benefit.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(1, 225, 148, 0.15) 0%, rgba(1, 225, 148, 0.05) 70%)' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse animation-delay-2000" style={{ background: 'radial-gradient(circle, rgba(1, 225, 148, 0.1) 0%, rgba(1, 225, 148, 0.03) 70%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #01E194 50%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Transform Your Business
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#D2D3D5' }}>
            Partner with us to unlock unprecedented growth opportunities and deliver exceptional experiences that set you apart
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {benefits.slice(0, 3).map((benefit, index) => renderCard(benefit, index, index))}
          </div>
          
          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.slice(3, 5).map((benefit, index) => renderCard(benefit, index, index + 3))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div 
            className="backdrop-blur-lg rounded-lg p-12 border max-w-4xl mx-auto"
            style={{ 
              backgroundColor: '#EBEBEB', 
              borderColor: '#01E194', 
              borderWidth: '2px'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#000000' }}>
              Ready to Elevate Your Partnership?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#000000' }}>
              Join industry leaders who trust us to power their growth. Let's discuss how we can customize our solutions for your unique needs.
            </p>
            <button 
              className="group relative inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              style={{ 
                backgroundColor: '#01E194',
                boxShadow: '0 10px 25px -5px rgba(1, 225, 148, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00C77F'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#01E194'}
            >
              <span className="relative z-10">Start Your Partnership Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default PartnershipBenefits;