import React, { useState, useEffect } from 'react';
import { Shield, Lightbulb, HandHeart, Headphones, Gift, CheckCircle } from 'lucide-react';

const CustomerBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: "Credit Score Protection",
      description: "Credit score-safe second opinion by a specialist team",
      delay: "delay-100"
    },
    {
      icon: HandHeart,
      title: "No-Pressure Approach",
      description: "Honest guidance with integrity — if we can't genuinely help, we'll tell them upfront",
      delay: "delay-300"
    },
    {
      icon: Headphones,
      title: "Lifetime Support",
      description: "Lifetime support and always contactable",
      delay: "delay-400"
    },
    {
      icon: Gift,
      title: "Completely Free",
      description: "No hidden fees, no obligations — just expert advice and support at no cost to them",
      delay: "delay-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#F6F6F6' }}>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            What Your Customers Gain
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#000000', opacity: 0.7 }}>
            We put your customers first with transparent, supportive service that builds trust and delivers real value
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`group transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} ${benefit.delay}`}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="relative bg-white rounded-md p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] h-full flex flex-col" style={{ borderColor: '#EBEBEB', borderWidth: '1px' }}>
                  {/* Brand color accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-md transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" style={{ backgroundColor: '#01E194' }}></div>
                  
                  <div className="flex flex-col items-center text-center space-y-4 flex-1">
                    {/* Icon */}
                    <div className="flex flex-shrink-0 w-16 h-16 rounded-xl items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#01E194' }}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: '#000000' }}>
                        {benefit.title}
                      </h3>
                      <p className="text-base leading-relaxed transition-colors duration-300" style={{ color: '#000000', opacity: 0.8 }}>
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Check mark */}
                    <div className="flex flex-shrink-0 w-8 h-8 rounded-full items-center justify-center transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#01E194' }}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-md transition-opacity duration-300" style={{ backgroundColor: '#01E194' }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default CustomerBenefits;