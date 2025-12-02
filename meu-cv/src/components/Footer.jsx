import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-8 border-t border-neutral-800 bg-black text-center">
      <p className="text-neutral-500 text-sm">
        © {new Date().getFullYear()} Matheus Vinicius Mariussi. 
        <br className="md:hidden"/> {t('footer.text')}
      </p>
    </footer>
  );
};

export default Footer;