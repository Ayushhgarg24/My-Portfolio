import React from 'react';
import Section from '../components/Section';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements">
      <div className="space-y-6">
        {ACHIEVEMENTS.map((ach, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-surface"></div>
            <div className="absolute left-[7px] top-5 h-full w-0.5 bg-primary/30"></div>
            <p className="font-bold text-accent">{ach.year}</p>
            <h3 className="font-semibold text-lg text-text-primary mt-1">{ach.title}</h3>
            <p className="text-text-secondary text-sm">{ach.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;