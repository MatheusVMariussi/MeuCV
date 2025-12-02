import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-grid-white/[0.02] relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Tem alguma proposta para mim?
        </h2>
        <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
          Estou sempre aberto a novas oportunidades e desafios. Sinta-se à vontade para entrar em contato comigo para discutir projetos, colaborações ou qualquer outra coisa que você tenha em mente.
        </p>
        
        <a 
          href="mailto:imath.mariussi@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
        >
          <FaEnvelope />
          Enviar Email
        </a>

        <div className="mt-16 flex justify-center gap-8 border-t border-neutral-800 pt-8">
            <SocialLink href="https://github.com/MatheusVMariussi" icon={<FaGithub size={24} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/matheus-vinicius-mariussi-a32706150/" icon={<FaLinkedin size={24} />} label="LinkedIn" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
        {icon}
        <span className="text-xs">{label}</span>
    </a>
);

export default Contact;