import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-4 md:gap-10 relative",
      index !== 1 && "mb-16"
    )}>

      <div className="absolute left-[19px] top-10 bottom-[-64px] w-[2px] bg-neutral-800 md:left-1/2 md:-ml-[1px] hidden md:block"></div>
      <div className="absolute left-[10px] top-6 w-5 h-5 rounded-full border-4 border-black bg-blue-500 z-10 md:left-1/2 md:-ml-[10px] hidden md:block"></div>

      <div className={cn(
        "md:w-1/2 md:px-10 flex flex-col justify-start",
        index % 2 === 0 ? "md:text-right md:items-end" : "md:order-last md:text-left md:items-start"
      )}>
        <h3 className="text-xl font-bold text-white tracking-tight">{experience.title}</h3>
        <p className="text-blue-400 font-medium mb-2">{experience.company}</p>
        <span className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 mb-4 font-mono">
          {experience.period}
        </span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "md:w-1/2 md:px-10 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors",
          index % 2 === 0 ? "md:order-last" : "md:order-first md:text-right"
        )}
      >
        <div className="md:hidden mb-4 border-l-2 border-blue-500 pl-4">
             <h3 className="text-lg font-bold text-white">{experience.title}</h3>
             <p className="text-blue-400 text-sm">{experience.company}</p>
             <p className="text-neutral-500 text-xs mt-1">{experience.period}</p>
        </div>

        <ul className={cn(
          "space-y-2 text-neutral-400 text-sm list-disc list-inside",
          index % 2 !== 0 ? "md:list-none" : "" 
        )}>
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className={cn("flex flex-wrap gap-2 mt-4", index % 2 !== 0 && "md:justify-end")}>
            {experience.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono text-neutral-500 bg-black/30 px-2 py-1 rounded">{t}</span>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.jobs.eaware.title'),
      company: "E-Aware",
      period: "Out 2025 - Present",
      description: [
        t('experience.jobs.eaware.desc_1'),
        t('experience.jobs.eaware.desc_2'),
        t('experience.jobs.eaware.desc_3'),
      ],
      tech: ["React Native", "TypeScript", "Mobile", "Expo", "APIs RESTful"]
    },
    {
      title: t('experience.jobs.puc.title'),
      company: "PUCPR",
      period: "Jan 2023 - Dez 2026",
      description: [
        t('experience.jobs.puc.desc_1'),
      ],
      tech: ["Python", "C", "React", "IA", "Machine Learning", "Data Structures"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-20"
        >
          {t('experience.title')}
        </motion.h2>
        
        <div className="relative">
           <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-neutral-800 md:hidden"></div>
           <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;