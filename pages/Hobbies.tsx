import React from 'react';
import Section from '../components/Section';
import { HOBBIES } from '../constants';

const Hobbies: React.FC = () => {
  return (
    <Section id="hobbies" title="Hobbies & Interests">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HOBBIES.map((hobby, index) => (
          <div key={index} className="bg-surface p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-primary mb-2">{hobby.name}</h3>
            <p className="text-text-secondary">{hobby.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;