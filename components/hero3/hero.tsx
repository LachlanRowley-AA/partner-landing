import { useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@mantine/core";
import { ContactSection } from "@/components/contact/contact";
import { Logos03 } from "../AnimatedLogos/AnimatedLogos";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const previousTitle = useRef<number>(0);
  const titles = useMemo(
    () => ["industry leaders", "visionaries", "trailblazers", "innovators"],
    []
  );
  const longestString: string = titles.reduce((a, b) => (a.length > b.length ? a : b), "");

  // Generate particles once and memoize them
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4
    }));
  }, []); // Empty dependency array means this only runs once

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      previousTitle.current = titleNumber;
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(1, 225, 148, 0.15) 0%, rgba(1, 225, 148, 0.05) 70%)' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse animation-delay-2000" style={{ background: 'radial-gradient(circle, rgba(1, 225, 148, 0.1) 0%, rgba(1, 225, 148, 0.03) 70%)' }}></div>
      
        {/* Floating particles with stable positions */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
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
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row md:px-20">
        <div className="flex-1 lg:w-2/3">
          <div className="flex gap-8 py-20 lg:pt-20 px-0 md:px-20 lg:px-20 items-center justify-center flex-col ">
            <img src="/AA_Dark_Logo.svg" alt="AA Light Logo" className="h-16 w-auto" />
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
                <span className="text-white">Partnering with tomorrow's</span>
                <br />
                <span className="relative inline-block align-middle w-full">
                  {/* Invisible static placeholder that takes up the correct space */}
                  <span className="invisible font-semibold align-middle text-center text-[#01E194]">
                    {longestString}
                  </span>
                  {/* Animated title absolutely positioned over the placeholder */}
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute left-1/2 top-0 text-[#01E194] text-center transform -translate-x-1/2 whitespace-nowrap leading-none py-1" 
                      style={{ 
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #01E194 50%, #FFFFFF 100%)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent', 
                        backgroundClip: 'text' 
                      }}
                      initial={{ opacity: 0, y: "100%" }}
                      animate={
                        titleNumber === index
                          ? { y: "0%", opacity: 1 } // current entering
                          : index === previousTitle.current
                          ? { y: "100%", opacity: 0 } // outgoing (slide up)
                          : { y: "-100%", opacity: 0 } // default (below)
                      }
                      transition={{ type: "spring", stiffness: 80 }}
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-4xl text-center">
                Unlock growth for you and your clients with our innovative finance partnership model.
              </p>
            </div>
            <div className="flex flex-row gap-3 mantine-hidden-from-md">
              <Button size="lg" bg="#01E194" className="gap-4">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:py-4 rounded-lg mantine-visible-from-md">
          <ContactSection />
        </div>
      </div>
      
      {/* Logos section */}
      <div className="relative z-10">
        <Logos03 />
      </div>
    </div>
  );
}

export { Hero };