import React from 'react';
import styled from 'styled-components';

// --- Nossos Componentes Estilizados ---

const CardWrapper = styled.div`
  background-color: #2a2a2a; /* Um cinza escuro para o card */
  border: 1px solid #444;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
`;

const TechTag = styled.span`
  background-color: #007acc; /* Um azul para destacar */
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const DescriptionList = styled.ul`
  padding-left: 20px;
  margin-bottom: 24px;
  flex-grow: 1; /* Faz a descrição ocupar o espaço disponível */

  li {
    margin-bottom: 8px;
    line-height: 1.6;
    color: #ccc;
  }
`;

const GithubLink = styled.a`
  display: inline-block;
  background-color: #1e88e5; /* Um tom de azul mais vivo */
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 4px;
  text-align: center;
  transition: background-color 0.3s ease;
  align-self: flex-start; /* Alinha o botão à esquerda */

  &:hover {
    background-color: #1565c0;
  }
`;


// --- Nosso Componente React ---

const ProjectCard = ({ project }) => {
  return (
    <CardWrapper>
      <h3>{project.title}</h3>
      <TechnologiesContainer>
        {project.technologies.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </TechnologiesContainer>
      <DescriptionList>
        {project.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </DescriptionList>
      <GithubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </GithubLink>
    </CardWrapper>
  );
};

export default ProjectCard;