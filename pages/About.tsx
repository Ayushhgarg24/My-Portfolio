import React from 'react';
import Section from '../components/Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={PERSONAL_INFO.profilePictureUrl}
            alt={PERSONAL_INFO.name}
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-primary"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-text-primary">{PERSONAL_INFO.name}</h1>
          <p className="text-xl text-secondary font-medium mt-1">{PERSONAL_INFO.title}</p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;