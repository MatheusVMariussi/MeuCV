import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const BackgroundBeams = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 bg-transparent [mask-image:radial-gradient(transparent,white)] pointer-events-none",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-[0.80] bg-red-500 opacity-20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-[0.80] opacity-20 blur-3xl" />
      
      {/* O Grid de Linhas Animadas */}
      <div className="absolute h-full w-full inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <BackgroundBeam key={i} delay={i * 0.2} />
        ))}
      </div>
    </div>
  );
};

const BackgroundBeam = ({ delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: -100 }}
      animate={{ 
        opacity: [0, 1, 0], 
        x: [0, window.innerWidth], 
        y: [0, window.innerHeight] 
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      className="absolute top-0 left-0 w-[1px] h-[100px] bg-gradient-to-b from-transparent via-blue-500 to-transparent transform -rotate-45"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};