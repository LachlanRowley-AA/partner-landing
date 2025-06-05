import React, { useState } from 'react';
import { Play, Users, Target, Zap } from 'lucide-react';

export const FounderStorySection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const stats = [
    { icon: Users, label: "Partners Empowered", value: "x+" },
    { icon: Target, label: "Success Rate", value: "y%" },
    { icon: Zap, label: "Years Experience", value: "z+" }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      </div>
      
      {/* Geometric background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-4 border border-white/20">
              Behind the Vision
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our Founder's
            <span className="block bg-[#01E194] bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover the passion and vision behind Asset Alley.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video section */}
          <div className="order-2 lg:order-1">
            <div 
              className={`relative group cursor-pointer transition-all duration-700 ${
                isHovered ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Video container with advanced styling */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {!videoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center z-20">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/30">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-white font-medium">Click to Play</p>
                    </div>
                  </div>
                )}
                
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ej_lEGyyAdU?rel=0&modestbranding=1"
                  title="Asset Alley Founder Story"
                  frameBorder="0"
                  allowFullScreen
                  onLoad={() => setVideoLoaded(true)}
                />
                
                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-60"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400 opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400 opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400 opacity-60"></div>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`} style={{
                background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 40%)',
                filter: 'blur(20px)',
                transform: 'translateZ(0)'
              }}></div>
            </div>
          </div>

          {/* Content section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white leading-tight">
                Built from Vision,
                <span className="block text-[#01E194]">Powered by Purpose</span>
              </h3>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Every great company starts with a problem that demands to be solved. 
                Asset Alley was born from the frustration of seeing talented partners 
                struggle with outdated tools and fragmented systems.
              </p>              
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA button */}
            <div className="pt-6">
              <button className="group relative px-8 py-4 bg-[#01E194] rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Join Our Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom accent */}
        <div className="mt-20 text-center">
          <div className="w-24 h-1 bg-[#01E194] mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};