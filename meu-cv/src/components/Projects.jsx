import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import mcp from "../assets/mcp.png";
import ocean from "../assets/oceanTowersApp.png";
import fer from "../assets/tcc-fer.png";
import tictactoe from "../assets/tictactoe.png";
import genetic from "../assets/genetic-algorithm.png";
import skins from "../assets/minhasskins.png";
import networks from "../assets/complex-networks.png";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "OceanTowersApp",
      description: t('projects.ocean.desc', { returnObjects: true }),
      appStore: "https://apps.apple.com/br/app/ocean-towers/id6739984955",
      image: ocean
    },
    {
      title: "Assistente de Voz (MCP Agent)",
      description: t('projects.mcp.desc', { returnObjects: true }),
      github: "https://github.com/MatheusVMariussi/mcp-voice-agent",
      image: mcp
    },
    {
      title: "Framework FER",
      description: t('projects.fer.desc', { returnObjects: true }),
      github: "https://github.com/MatheusVMariussi/TCC-FER",
      image: fer
    },
    {
      title: "Algoritmo Genético",
      description: t('projects.genetic.desc', { returnObjects: true }),
      github: "https://github.com/MatheusVMariussi/TDE-Genetic-Algorithm",
      image: genetic
    },
    {
      title: "MinhasSkins Marketplace",
      description: t('projects.skins.desc', { returnObjects: true }),
      github: "https://github.com/MatheusVMariussi/Cs2-SKINS",
      image: skins
    },
    {
      title: "IA Invencível (Game Theory)",
      description: t('projects.minimax.desc', { returnObjects: true }),
      github: "https://github.com/MatheusVMariussi/TDE2-Minimax-AlphaBeta",
      image: tictactoe
    },
    {
      title: "Análise de Redes Complexas",
      description: t('projects.networks.desc', { returnObjects: true }),
      github: "https://github.com/MatheusVMariussi/TDE_Actuators",
      image: networks
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