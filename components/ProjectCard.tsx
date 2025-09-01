

import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
    <div className="bg-surface rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative h-56">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-white text-center p-4">{project.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-text-secondary font-medium mb-3">{project.category}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-background text-text-secondary px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;