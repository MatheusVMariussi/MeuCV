import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">

      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Matheus Mariussi
        </h1>
        
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 leading-relaxed">
          Desenvolvedor Full-stack mobile e entusiasta de IA.
          <br />
          Atualmente trabalhando na{" "}
          <a 
            href="https://www.eaware.com.br/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-blue-500 hover:text-blue-400 font-semibold transition-colors decoration-blue-500/30 underline hover:decoration-blue-400"
          >
            E-Aware
          </a>.
        </p>

        <div className="flex justify-center gap-4 mt-8 relative z-10">
            <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition duration-200 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              Ver Projetos
            </a>
            
            <a 
              href="https://github.com/MatheusVMariussi" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-full border border-neutral-700 hover:bg-neutral-800 text-white transition"
            >
               <FaGithub size={24} />
            </a>

             <a 
               href="https://www.linkedin.com/in/matheus-vinicius-mariussi-a32706150/" 
               target="_blank" 
               rel="noreferrer"
               className="p-3 rounded-full border border-neutral-700 hover:bg-neutral-800 text-white transition"
             >
               <FaLinkedin size={24} />
            </a>
        </div>
      </div>

      <BackgroundBeams className="opacity-40" />
    </div>
  );
};

export default Hero;