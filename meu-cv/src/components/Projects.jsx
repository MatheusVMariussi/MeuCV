import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "OceanTowersApp",
      description: [t('projects.ocean.desc')],
      appStore: "https://apps.apple.com/br/app/ocean-towers/id6739984955",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Assistente de Voz (MCP Agent)",
      description: [t('projects.mcp.desc')],
      github: "https://github.com/MatheusVMariussi/mcp-voice-agent",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da9e205b?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Framework FER",
      description: [t('projects.fer.desc')],
      github: "https://github.com/MatheusVMariussi/TCC-FER",
      image: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1471&auto=format&fit=crop"
    },
    {
      title: "Algoritmo Genético",
      description: [t('projects.genetic.desc')],
      github: "https://github.com/MatheusVMariussi/TDE-Genetic-Algorithm",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1587&auto=format&fit=crop"
    },
    {
      title: "MinhasSkins Marketplace",
      description: [t('projects.skins.desc')],
      github: "https://github.com/MatheusVMariussi/Cs2-SKINS",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "IA Invencível (Game Theory)",
      description: [t('projects.minimax.desc')],
      github: "https://github.com/MatheusVMariussi/TDE2-Minimax-AlphaBeta",
      image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1450&auto=format&fit=crop"
    },
    {
      title: "Análise de Redes Complexas",
      description: [t('projects.networks.desc')],
      github: "https://github.com/MatheusVMariussi/TDE_Actuators",
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-black">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
        {t('projects.title')}
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
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover/bento:scale-110"/>
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
            className={i === 0 || i === 2 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Projects;