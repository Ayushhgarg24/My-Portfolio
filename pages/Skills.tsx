import React from 'react';
import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;