import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { FaGithub, FaApple, FaGooglePlay, FaGlobe } from "react-icons/fa";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  github,
  appStore,
  googlePlay,
  demo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden relative z-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          flexBasis: isHovered ? "20%" : "50%",
          marginBottom: isHovered ? "0.5rem" : "1rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full rounded-xl overflow-hidden relative"
      >
        {header}
      </motion.div>

      <div className="flex flex-col flex-grow transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "auto" : "3.5rem",
            opacity: 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 overflow-hidden"
        >
          <div className="max-h-[160px] overflow-y-auto custom-scrollbar pr-2">
            {Array.isArray(description) ? (
              <ul className="list-disc list-inside space-y-1 pb-2">
                {description.map((item, idx) => (
                  <li key={idx} className={idx === 0 ? "text-neutral-300 font-medium" : "text-neutral-400"}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              description
            )}
          </div>
        </motion.div>

        {/* ÁREA DE LINKS */}
        <div className="flex gap-3 mt-auto pt-4 flex-wrap">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-neutral-500 hover:text-blue-400 transition-colors text-xs border border-neutral-700 rounded px-2 py-1 z-20 cursor-pointer">
              <FaGlobe /> Demo Online
            </a>
          )}

          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-neutral-500 hover:text-white transition-colors text-xs border border-neutral-700 rounded px-2 py-1 z-20 cursor-pointer">
              <FaGithub /> Code
            </a>
          )}
          {appStore && (
            <a href={appStore} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-neutral-500 hover:text-blue-400 transition-colors text-xs border border-neutral-700 rounded px-2 py-1 z-20 cursor-pointer">
              <FaApple /> App Store
            </a>
          )}
          {googlePlay && (
            <a href={googlePlay} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-neutral-500 hover:text-green-400 transition-colors text-xs border border-neutral-700 rounded px-2 py-1 z-20 cursor-pointer">
              <FaGooglePlay /> Google Play
            </a>
          )}
        </div>
      </div>
    </div>
  );
};