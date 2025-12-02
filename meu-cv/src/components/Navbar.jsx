import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../utils/cn';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollY.getPrevious();
      if (scrollY.get() < 50) setVisible(true);
      else setVisible(direction < 0);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        "bg-black/50 backdrop-blur-md border border-white/10 rounded-full",
        "shadow-lg px-8 py-4 flex items-center justify-between"
      )}
    >
      <a href="#" className="font-bold text-lg text-white tracking-tight hidden md:block">
        Matheus Mariussi
      </a>
      
      <div className="flex items-center gap-6 mx-auto md:mx-0">
        <a href="#projetos" className="text-sm font-medium text-neutral-300 hover:text-blue-500 transition-colors">
          {t('nav.projects')}
        </a>
        <a href="#skills" className="text-sm font-medium text-neutral-300 hover:text-blue-500 transition-colors">
          {t('nav.skills')}
        </a>
        <a href="#contato" className="text-sm font-medium text-neutral-300 hover:text-blue-500 transition-colors">
          {t('nav.contact')}
        </a>

        <div className="h-4 w-[1px] bg-neutral-700"></div>

        <button 
          onClick={toggleLanguage}
          className="text-sm font-bold text-white hover:text-blue-500 transition-colors flex gap-1 cursor-pointer"
        >
          <span className={i18n.language === 'pt' ? "text-blue-500" : "text-neutral-500"}>PT</span>
          <span className="text-neutral-700">/</span>
          <span className={i18n.language.includes('en') ? "text-blue-500" : "text-neutral-500"}>EN</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;