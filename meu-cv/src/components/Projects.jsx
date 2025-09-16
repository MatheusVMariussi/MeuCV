import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard.jsx';

// --- Nossos Componentes Estilizados ---

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background-color: #1c1c1c; /* Um fundo quase preto para a seção */
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left; /* Alinha o texto dentro dos cards à esquerda */
`;


// --- Nosso Componente React ---

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>Meus Projetos</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;