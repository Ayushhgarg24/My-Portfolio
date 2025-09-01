import React from 'react';
import Section from '../components/Section';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="bg-surface p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-text-primary">{edu.degree}</h3>
            <p className="text-md text-secondary font-medium">{edu.institution}</p>
            <p className="text-sm text-text-secondary">{edu.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;