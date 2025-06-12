import React, { useState, useEffect, useRef } from 'react';
import { Phone, Search, CheckCircle, Users, Shield, FileCheck, DollarSign, Award } from 'lucide-react';

const ReferralJourneySection = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const stepIndex = parseInt((entry.target as HTMLElement).dataset.step || '0');
            setVisibleSteps(prev => new Set([...prev, stepIndex]));
        }
        });
    },
    { threshold: 0.3 }
    );
    observerRef.current = observer;

    // Observe all step elements after a short delay
    setTimeout(() => {
      document.querySelectorAll('[data-step]').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Phone,
      title: "Immediate Response",
      description: "Speed is our priority — we contact your lead ASAP",
      color: "from-red-500 to-rose-600",
      time: "< 5 minutes"
    },
    {
      icon: Search,
      title: "Discovery Call",
      description: "We deep dive into the customer's goals, situation, and financial needs",
      color: "from-blue-500 to-cyan-600",
      time: "15-30 minutes"
    },
    {
      icon: CheckCircle,
      title: "Fit Assessment",
      description: "Honest evaluation — we only proceed if we can genuinely help",
      color: "from-green-500 to-emerald-600",
      time: "Same day"
    },
    {
      icon: Users,
      title: "Pre-qualification",
      description: "Strategic workshop with our network of trusted lenders",
      color: "from-purple-500 to-violet-600",
      time: "24-48 hours"
    },
    {
      icon: Shield,
      title: "Credit-Safe Options",
      description: "Present tailored solutions while protecting their credit score",
      color: "from-amber-500 to-orange-600",
      time: "2-3 days"
    },
    {
      icon: FileCheck,
      title: "Approval Process",
      description: "Submit application and handle all documentation seamlessly",
      color: "from-indigo-500 to-blue-600",
      time: "3-7 days"
    },
    {
      icon: DollarSign,
      title: "Funding & Support",
      description: "Deal completes with lifetime customer support included",
      color: "from-green-600 to-teal-600",
      time: "7-14 days"
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Referral Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial contact to successful funding — here's exactly what happens when you send us a lead
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line - centered on desktop, left-aligned on mobile */}
          <div className="absolute md:left-1/2 left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-[#01E194] to-black md:transform md:-translate-x-1/2 opacity-100"></div>
          
          {/* Steps */}
          <div>
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLeft = index % 2 === 0;
              const isVisible = visibleSteps.has(index);
              
              return (
                <div
                  key={index}
                  data-step={index}
                  className="relative flex items-center w-full"
                >
                  {/* Timeline dot - centered on desktop, left-aligned on mobile */}
                  <div className={`absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#01E194] rounded-full border-4 border-white shadow-lg z-20 transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  }`}>
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                  </div>

                  {/* Step content - alternating on desktop, all right on mobile */}
                  <div className={`md:w-5/12 w-full ${
                    isLeft ? "md:pr-8 pl-12" : "md:pl-8 md:ml-auto pl-12"
                  }`}>
                    <div className={`relative transform transition-all duration-700 delay-${index * 100} ${
                      isVisible 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : `translate-y-8 opacity-0 scale-95 ${isLeft ? 'translate-x-8' : 'md:-translate-x-8 translate-x-8'}`
                    }`}>
                      <div className="bg-white rounded-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group relative">
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-[#01E194] opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-sm`}></div>
                        
                        {/* Step number */}
                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-10">
                          {index + 1}
                        </div>
                        
                        {/* Header with inline icon */}
                        <div className="flex items-center mb-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#01E194] shadow-lg group-hover:scale-110 transition-transform duration-300 mr-4`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        
                        {/* Content */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>                                                
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner Payment Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-black rounded-sm p-12 text-white relative overflow-hidden">            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 backdrop-blur-lg rounded-sm mb-6">
                <Award className="w-10 h-10 text-[#01E194]" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#01E194]">
                Your Reward for Success
              </h3>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-white leading-relaxed">
                  You get paid when your customer gets funded — it's that simple. No complex fee structures or hidden conditions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-[#01E194] backdrop-blur-lg rounded-md p-6 border border-white/20">
                    <h4 className="text-lg font-semibold mb-2">Fast Payment</h4>
                    <p className="text-white">Commission paid within 48 hours of funding</p>
                  </div>
                  
                  <div className="bg-[#01E194] backdrop-blur-lg rounded-md p-6 border border-white/20">
                    <h4 className="text-lg font-semibold mb-2">Transparent Rates</h4>
                    <p className="text-white">Clear, competitive commission structure</p>
                  </div>
                  
                  <div className="bg-[#01E194] backdrop-blur-lg rounded-md p-6 border border-white/20">
                    <h4 className="text-lg font-semibold mb-2">No Risk</h4>
                    <p className="text-white">Only earn when your customer succeeds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralJourneySection;