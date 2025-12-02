import React from 'react';
import { skills } from '../data/skillsData';

const SkillCard = ({ title, items }) => (
  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 transition-colors group">
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, idx) => (
        <span 
          key={idx} 
          className="px-3 py-1 text-sm rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Arsenal Técnico
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard title="Linguagens" items={skills.languages} />
          <SkillCard title="Web & Mobile" items={skills.webAndMobile} />
          <SkillCard title="Banco de Dados" items={skills.databases} />
          <SkillCard title="IA" items={skills.ia} />
          <SkillCard title="Ferramentas" items={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;