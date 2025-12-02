import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { projects } from "../data/projectsData";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-black">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">Meus Projetos</h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {projects.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description[0]}
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />}
            icon={<FaCode className="h-4 w-4 text-neutral-500" />}
            link={item.githubLink}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Projects;