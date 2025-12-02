import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden pt-20">
      
      <div className="max-w-2xl mx-auto p-4 relative z-10 flex flex-col items-center">
        
        {/* FOTO DE PERFIL */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="/perfil.jpeg" 
            alt="Matheus Mariussi" 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-neutral-800 shadow-2xl"
            onError={(e) => { 
              // Se a imagem sumir, abre o console (F12) para ver este erro
              console.error("Erro: Imagem /perfil.jpg não encontrada na pasta public");
              e.target.style.display = 'none'; 
            }} 
          />
        </div>

        <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-4">
          Matheus Mariussi
        </h1>
        
        <p className="text-neutral-500 max-w-lg mx-auto text-sm md:text-base text-center relative z-10 leading-relaxed mb-8">
          {t('hero.intro')}
          <br className="hidden md:block" />
          {t('hero.working_at')}{" "}
          <a 
            href="https://www.eaware.com.br/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-blue-500 hover:text-blue-400 font-semibold transition-colors decoration-blue-500/30 underline hover:decoration-blue-400"
          >
            E-Aware
          </a>.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-4 relative z-10">
            {/* CORREÇÃO DO BOTÃO AQUI 👇 */}
            <a 
              href="/MatheusMariussi_CVV.pdf" 
              download="Matheus_Mariussi_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition duration-200 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              <FaFileDownload /> {t('hero.btn_cv')}
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/MatheusVMariussi" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full border border-neutral-700 hover:bg-neutral-800 text-white transition hover:scale-110"
              >
                 <FaGithub size={24} />
              </a>

               <a 
                 href="https://www.linkedin.com/in/matheus-vinicius-mariussi-a32706150/" 
                 target="_blank" 
                 rel="noreferrer"
                 className="p-3 rounded-full border border-neutral-700 hover:bg-neutral-800 text-white transition hover:scale-110"
               >
                 <FaLinkedin size={24} />
              </a>

              <a 
                 href="https://www.instagram.com/matheus.mariussi/"
                 target="_blank" 
                 rel="noreferrer"
                 className="p-3 rounded-full border border-neutral-700 hover:bg-neutral-800 text-white transition hover:scale-110"
               >
                 <FaInstagram size={24} />
              </a>
            </div>
        </div>
      </div>

      <BackgroundBeams className="opacity-40" />
    </div>
  );
};

export default Hero;