
import React from 'react';
import type { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center text-center gap-2 p-4 bg-surface rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
        <skill.icon className="h-10 w-10 md:h-12 md:w-12 text-primary" />
        <p className="text-sm font-medium text-text-secondary">{skill.name}</p>
    </div>
  );
};

export default SkillBadge;
