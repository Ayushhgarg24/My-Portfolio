import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;