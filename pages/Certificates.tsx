import React from 'react';
import Section from '../components/Section';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <Section id="certificates" title="Certificates">
      <div className="space-y-4">
        {CERTIFICATES.map((cert, index) => (
          <div key={index} className="bg-surface p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-text-primary">{cert.name}</h3>
              <p className="text-sm text-text-secondary">{cert.issuer} - {cert.year}</p>
            </div>
            {cert.credentialUrl && (
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;