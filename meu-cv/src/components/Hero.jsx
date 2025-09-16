import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-color: #212121;
  padding: 80px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem auto;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const HeroLink = styled.a`
  display: inline-block;
  background-color: #007acc;
  color: #fff;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f9e;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroTitle>Matheus Vinicius Mariussi</HeroTitle>
      <HeroSubtitle>
        Estudante de Ciência da Computação apaixonado por resolver problemas através do desenvolvimento de software. Experiência prática na criação de aplicações full-stack com React, Node.js e Java.
      </HeroSubtitle>
      <LinksContainer>
        <HeroLink href="https://github.com/MatheusVMariussi" target="_blank" rel="noopener noreferrer">GitHub</HeroLink>
        <HeroLink href="[SEU_LINK_DO_LINKEDIN]" target="_blank" rel="noopener noreferrer">LinkedIn</HeroLink>
      </LinksContainer>
    </HeroSection>
  );
};

export default Hero;