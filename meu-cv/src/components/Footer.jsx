import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-neutral-800 bg-black text-center">
      <p className="text-neutral-500 text-sm">
        © {new Date().getFullYear()} Matheus Vinicius Mariussi. 
        <br className="md:hidden"/> Feito com React, Tailwind & Aceternity.
      </p>
    </footer>
  );
};

export default Footer;