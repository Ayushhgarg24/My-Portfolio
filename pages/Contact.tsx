import React from 'react';
import Section from '../components/Section';
import { PERSONAL_INFO } from '../constants';

const ContactItem: React.FC<{ icon: React.ReactNode, label: string, value: string, href?: string }> = ({ icon, label, value, href }) => (
  <div className="flex items-center space-x-4 bg-surface p-4 rounded-lg shadow-md">
    <div className="text-primary">{icon}</div>
    <div>
      <p className="text-sm text-text-secondary">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-text-primary hover:underline">{value}</a>
      ) : (
        <p className="font-semibold text-text-primary">{value}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
       <p className="text-text-secondary mb-8 text-center">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactItem icon={<MailIcon />} label="Email" value={PERSONAL_INFO.email} href={`mailto:${PERSONAL_INFO.email}`} />
        <ContactItem icon={<PhoneIcon />} label="Phone" value={PERSONAL_INFO.phone} href={`tel:${PERSONAL_INFO.phone}`} />
        <ContactItem icon={<MapPinIcon />} label="Location" value={PERSONAL_INFO.location} />
        <ContactItem icon={<LinkedinIcon />} label="LinkedIn" value="in/ayushh-garg" href={PERSONAL_INFO.socials.linkedin} />
        <ContactItem icon={<GithubIcon />} label="GitHub" value="github.com/Ayushhgarg24" href={PERSONAL_INFO.socials.github} />
        <ContactItem icon={<LeetcodeIcon />} label="LeetCode" value="ayushh_garg2412" href={PERSONAL_INFO.socials.leetcode} />
        <ContactItem icon={<CodolioIcon />} label="Codolio" value="Ayush Garg" href={PERSONAL_INFO.socials.codolio} />
      </div>
    </Section>
  );
};

// SVG Icon Components
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const LeetcodeIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24"><title>LeetCode</title><path d="M13.48 4.49l-.5-3.5-1.5 1.5.5 3.5 1.5-1.5zm-3.02 0l-1.5-1.5-.5 3.5 1.5 1.5.5-3.5zM4 18.5c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-13c-.83 0-1.5.67-1.5 1.5v11zM12 17l4-4-4-4v2.5H8V13h4v4z"/></svg>;
const CodolioIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Codolio</title><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;

export default Contact;