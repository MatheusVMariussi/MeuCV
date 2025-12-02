import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { projects } from "../data/projectsData";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-black">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
        Meus Projetos
      </h2>
      
      <BentoGrid className="max-w-7xl mx-auto px-4">
        {projects.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              item.image ? (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/10 relative">
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover transform transition-transform duration-500 group-hover/bento:scale-110"
                   />
                   {/* Overlay escuro para o texto ficar legível se passar por cima */}
                   <div className="absolute inset-0 bg-black/20 group-hover/bento:bg-black/0 transition-colors"></div>
                </div>
              ) : (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800" />
              )
            }
            
            icon={<FaCode className="h-4 w-4 text-neutral-500" />}
            
            github={item.github}
            appStore={item.appStore}
            googlePlay={item.googlePlay}
            
            className="" 
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Projects;