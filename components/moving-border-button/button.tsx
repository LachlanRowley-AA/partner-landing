"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Simple cn utility function
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  contentStyle,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  contentStyle?: React.CSSProperties;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-16 w-50 md:w-80 p-[1px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 z-10"
      >
        <MovingBorder duration={duration} rx="80%" ry="80%">
          <motion.div
            className={cn(
              "h-24 w-24 opacity-80 rounded-full blur-sm",
              borderClassName
            )}
            style={{
              background: "radial-gradient(rgb(255 255 255) 80%, transparent 80%)",
            }}
            whileHover={{
              scale: 1.2,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        </MovingBorder>
      </div>
      <motion.div
        className={cn(
          "relative backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-md antialiased z-20",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
          ...contentStyle,
        }}
        whileHover={{
          borderColor: "rgba(255, 255, 255, 0.3)",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
          filter: "brightness(1.3) saturate(1.1)",
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
      >
        <motion.span
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
        >
          {children}
        </motion.span>
      </motion.div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);
  const [pathLength, setPathLength] = useState<number>(0);
  
  // Wait for the SVG to be rendered and get the path length
  useEffect(() => {
    const getPathLength = () => {
      if (pathRef.current) {
        try {
          const length = pathRef.current.getTotalLength();
          if (length > 0) {
            setPathLength(length);
          }
        } catch (error) {
          // Fallback: calculate approximate perimeter for rounded rectangle
          const rect = pathRef.current.getBoundingClientRect();
          const approximateLength = 2 * (rect.width + rect.height);
          setPathLength(approximateLength);
        }
      }
    };

    // Try to get length immediately
    getPathLength();
    
    // Also try after a short delay to ensure SVG is rendered
    const timer = setTimeout(getPathLength, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useAnimationFrame((time) => {
    if (!pathRef.current || pathLength === 0) return;
    
    const pxPerMillisecond = pathLength / duration;
    progress.set((time * pxPerMillisecond) % pathLength);
  });
  
  const x = useTransform(
    progress,
    (val) => {
      if (!pathRef.current || pathLength === 0) return 0;
      try {
        return pathRef.current.getPointAtLength(val)?.x || 0;
      } catch {
        // Fallback calculation for approximate position
        const rect = pathRef.current.getBoundingClientRect();
        const perimeter = 2 * (rect.width + rect.height);
        const normalizedVal = val / perimeter;
        
        if (normalizedVal <= 0.25) {
          return normalizedVal * 4 * rect.width;
        } else if (normalizedVal <= 0.5) {
          return rect.width;
        } else if (normalizedVal <= 0.75) {
          return rect.width - (normalizedVal - 0.5) * 4 * rect.width;
        } else {
          return 0;
        }
      }
    }
  );
  
  const y = useTransform(
    progress,
    (val) => {
      if (!pathRef.current || pathLength === 0) return 0;
      try {
        return pathRef.current.getPointAtLength(val)?.y || 0;
      } catch {
        // Fallback calculation for approximate position
        const rect = pathRef.current.getBoundingClientRect();
        const perimeter = 2 * (rect.width + rect.height);
        const normalizedVal = val / perimeter;
        
        if (normalizedVal <= 0.25) {
          return 0;
        } else if (normalizedVal <= 0.5) {
          return (normalizedVal - 0.25) * 4 * rect.height;
        } else if (normalizedVal <= 0.75) {
          return rect.height;
        } else {
          return rect.height - (normalizedVal - 0.75) * 4 * rect.height;
        }
      }
    }
  );
  
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
  
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        style={{ visibility: 'visible' }}
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
          style={{ visibility: 'visible' }}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
          zIndex: 1,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

// Demo component to show the button in action
export default function MovingBorderDemo() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="space-y-8">
        <Button>
          Hover Me!
        </Button>
        
        <Button duration={3000} borderRadius="2rem">
          Slower Animation
        </Button>
        
        <Button 
          duration={1000}
          borderClassName="h-6 w-6"
          className="bg-green-500"
        >
          Green Test
        </Button>
        
        <Button 
          duration={1000}
          borderClassName="h-6 w-6"
          contentStyle={{ backgroundColor: '#01E194' }}
        >
          Custom Green (Style)
        </Button>
        
        <Button 
          duration={1500}
          className="bg-red-500"
        >
          Red Button Test
        </Button>
      </div>
    </div>
  );
}