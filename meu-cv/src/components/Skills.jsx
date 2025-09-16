import React from 'react';
import { FaReact, FaPython, FaJava, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  return (
    <div>
      <h2>Habilidades</h2>
      <div>
        <FaReact size={50} />
        <FaPython size={50} />
        <FaJava size={50} />
        <FaNodeJs size={50} />
      </div>
    </div>
  );
}

export default Skills;