import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../utils/cn';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollY.getPrevious();
      if (scrollY.get() < 50) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
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
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        "px-8 py-4 flex items-center justify-between"
      )}
    >
      <a href="#" className="font-bold text-lg text-white tracking-tight">
        Matheus Mariussi
      </a>
      
      <div className="flex gap-6">
        {['Projetos', 'Skills', 'Contato'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="text-sm font-medium text-neutral-300 hover:text-blue-500 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;