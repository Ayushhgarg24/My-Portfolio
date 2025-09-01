import React from 'react';

export const MessageCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);

export const LoaderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} animate-spin`}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
export const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
export const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-9.7 1.2-13.9-3.2-16-7.2-2.3 2.7-1.4 6.9 2 9-2.1-.1-3.9-1.2-5-2.8v.1c.1 4.1 3.1 7.4 7 8.3-1.6.4-3.1.4-4.5-.2 1.1 3.6 4.2 6.1 7.9 6.2-3.8 3-8.5 4.8-13.4 4.8-1 0-1.9-.1-2.8-.4 4.8 3.2 10.4 5.2 16.6 5.2 10.9 0 16.9-9.1 16.9-16.9v-.8c1.2-1 2.2-2.1 3-3.4z"/></svg>;
export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
export const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
export const CertificateIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="10" cy="16" r="2"/><path d="m16 10-4.5 4.5"/><path d="m14 14 2 2"/></svg>;

export const BlobShapeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className={className} width="100%" id="blobSvg">
        <path d="M441.5,296.5Q424,343,388,375.5Q352,408,301,422Q250,436,204,415Q158,394,113.5,368Q69,342,65,296Q61,250,75,206.5Q89,163,121,130Q153,97,201.5,76Q250,55,295,78.5Q340,102,374.5,133.5Q409,165,429.5,207.5Q450,250,441.5,296.5Z" stroke="none" strokeWidth="0" fill="currentColor"></path>
    </svg>
);

export const RobotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

export const LeetcodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
        <title>LeetCode</title>
        <path d="M13.48 4.49l-.5-3.5-1.5 1.5.5 3.5 1.5-1.5zm-3.02 0l-1.5-1.5-.5 3.5 1.5 1.5.5-3.5zM4 18.5c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-13c-.83 0-1.5.67-1.5 1.5v11zM12 17l4-4-4-4v2.5H8V13h4v4z"/>
    </svg>
);

export const CodolioIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <title>Codolio</title>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

// Tech Stack Icons
export const Html5Icon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#E34F26"/><path d="M12 21.6V2.4h8.25l-1.725 19.2L12 21.6z" fill="#F16529"/><path d="m12 10.425-4.237-.022-.293-3.273h4.53v-3.48H7.327l.073.818.6 6.742H12v-3.48zm.022 5.16-2.415-.65-.164-1.84h-3.48l.48 5.394L12 19.82v-3.48z" fill="#EBEBEB"/><path d="M12 10.425V6.945h4.15l.074-.82h-4.224V2.4H19.9l-.074.82-.74 8.205H12zm0 8.395v-3.48h3.84l-.36 4.02-3.48.96z" fill="#FFF"/></svg>;
export const Css3Icon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#1572B6"/><path d="M12 21.6V2.4h8.25l-1.725 19.2L12 21.6z" fill="#33A9DC"/><path d="m12 10.425-4.237-.022-.293-3.273h4.53v-3.48H7.327l.073.818.6 6.742H12v-3.48zm.022 5.16-2.415-.65-.164-1.84h-3.48l.48 5.394L12 19.82v-3.48z" fill="#EBEBEB"/><path d="M12 10.425V6.945h4.15l.074-.82h-4.224V2.4H19.9l-.074.82-.74 8.205H12zm0 8.395v-3.48h3.84l-.36 4.02-3.48.96z" fill="#FFF"/></svg>;
export const JavascriptIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0z" fill="#F7DF1E"/><path d="M21.233 18.067c-.208-1.292-1.16-2.292-2.5-2.608-1.334-.317-2.792-.017-3.908.95-1.109.967-1.975 2.217-3.067 3.392-.95 1.033-2.075 1.992-3.375 2.7-1.225.684-2.65.917-4.117.633-1.458-.284-2.633-1.284-3.233-2.609-.6-1.316-.508-2.858.35-4.066.858-1.209 2.167-2.034 3.55-2.417 1.383-.383 2.825-.266 4.116.316 1.125.508 2.142 1.35 3.067 2.317s1.791 2.066 2.583 3.167c.125.175.25.366.375.542l1.783-1.183c-.175-.28-.367-.558-.575-.817zm-7.116-2.35c.492-.717.825-1.542.917-2.433.083-.892-.108-1.8-.558-2.559-.45-.75-1.158-1.316-1.975-1.608-.817-.292-1.708-.25-2.517.175-.808.417-1.458 1.1-1.842 1.941-.383.834-.475 1.8-.208 2.684.266.875.875 1.625 1.683 2.083.808.45 1.767.575 2.683.333.9-.25 1.7- .834 2.183-1.617z"/></svg>;
export const CppIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C++</title><path d="M13.69,11.378h-1.378v-1.378h-1.225v1.378h-1.378v1.225h1.378v1.378h1.225v-1.378h1.378Zm3.238,0h-1.378v-1.378h-1.225v1.378h-1.378v1.225h1.378v1.378h1.225v-1.378h1.378Zm-6.6-8.312C6.01,3.066,2.944,6.132,2.944,10.191v3.617c0,4.06,3.066,7.125,7.125,7.125h3.617c4.06,0,7.125-3.066,7.125-7.125v-3.617c0-4.06-3.066-7.125-7.125-7.125Z" fill="#00599C" /></svg>;
export const PythonIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M23.228 15.655c.34-.34.34-.892 0-1.232l-2.07-2.07c2.096-.21 3.23-1.637 2.01-3.61-1.07-1.74-3.42-2.15-4.83-.98l-.29.23c-2.22-1.92-5.43-1.7-7.4-.04-1.26 1.05-1.89 2.59-1.89 4.19v1.89c0 1.6.63 3.14 1.89 4.19 1.97 1.65 5.17 1.88 7.4.04l.29.23c1.41 1.17 3.76.76 4.83-.98 1.22-1.98.08-3.41-2.02-3.62l2.07-2.07zm-10.15 4.19c-1.99 0-3.61-1.61-3.61-3.61s1.61-3.61 3.61-3.61 3.61 1.61 3.61 3.61-1.62 3.61-3.61 3.61zm-6.84-12.87c.34-.34.89-.34 1.23 0l2.07 2.07c.21-2.096 1.64-3.23 3.61-2.01 1.74 1.07 2.15 3.42.98 4.83l-.23.29c1.92 2.22 1.7 5.43.04 7.4-1.05 1.26-2.59 1.89-4.19 1.89H6.88c-1.6 0-3.14-.63-4.19-1.89-1.65-1.97-1.88-5.17-.04-7.4l-.23-.29c-1.17-1.41-.76-3.76.98-4.83 1.98-1.22 3.41-.08 3.62 2.02l2.07-2.07zm4.19 10.15c0-1.99-1.61-3.61-3.61-3.61s-3.61 1.61-3.61 3.61 1.61 3.61 3.61 3.61 3.61-1.62 3.61-3.61z" fill="#3776AB"/></svg>;
export const MysqlIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MySQL</title><path d="M12.012 11.516c-1.997 0-3.923.48-3.923 1.874v.273c0 1.12 1.63 1.82 3.923 1.82s3.923-.7 3.923-1.82v-.273c0-1.393-1.926-1.874-3.923-1.874zm-.008 7.03c-5.59 0-7.238-1.82-7.238-3.046v-3.79c0-1.12 1.65-2.88 7.23-2.88s7.23 1.76 7.23 2.88v3.79c0 1.227-1.64 3.047-7.22 3.047zm.008-11.393c-5.833 0-8.02-1.337-8.02-2.502S6.178 2.15 12.012 2.15c5.833 0 8.02 1.338 8.02 2.502s-2.187 2.501-8.02 2.501z" fill="#4479A1"/><path d="M12.012 2.15c-5.834 0-8.02 1.338-8.02 2.5s2.186 2.5 8.02 2.5v.364c0 .878-1.442.878-2.31.878v.5c1.47 0 3.32.066 3.32-.97v-.77c5.834 0 8.02-1.338 8.02-2.5s-2.186-2.5-8.02-2.5zm0 7.153c-5.58 0-7.23 1.76-7.23 2.88v3.79c0 1.228 1.648 3.047 7.23 3.047v-1.17c-4.14 0-5.11-1.077-5.11-1.877v-3.79c0-.8 1.02-1.81 5.11-1.81v-1.07zm7.222 2.88v3.79c0 .8-.97 1.877-5.11 1.877v1.17c5.58 0 7.22-1.82 7.22-3.047v-3.79c0-1.12-1.65-2.88-7.22-2.88v1.07c4.09 0 5.11 1.01 5.11 1.81zm-7.222-1.326c-1.994 0-3.924.48-3.924 1.873v.274c0 1.12 1.63 1.82 3.924 1.82v.94c-2.874 0-4.924-1.09-4.924-2.76v-.273c0-1.74 2.22-2.81 4.924-2.81v1.136zm3.916 1.873v.274c0 1.67-2.05 2.76-4.916 2.76v-.94c2.294 0 3.916-.7 3.916-1.82v-.274c0-1.394-1.92-1.873-3.916-1.873v-1.136c2.705 0 4.916 1.07 4.916 2.81z" fill="#000"/></svg>;
export const VscodeIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Visual Studio Code</title><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-12.2 10.83-2.682 2.376a.5.5 0 0 0 0 .788l2.682 2.376L4.21 17.7a1.494 1.494 0 0 0-.29 1.705l2.376 4.938a1.5 1.5 0 0 0 1.95.85l3.825-1.406 8.52-19.563a1.5 1.5 0 0 0-.42-1.926zm-9.03 10.82L5.27 5.488l10.04-4.453.003 16.32-6.15-2.882z" fill="#007ACC"/></svg>;
export const VercelIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M12 1.5l12 21H0L12 1.5z" fill="#000"/></svg>;
export const TypescriptIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M0 0h24v24H0V0z" fill="#3178C6"/><path d="M12.12 10.11v4.237h2.926v2.332H9.01v-2.332h2.24V7.633H8.39V5.301h6.633v2.332h-2.903z" fill="#fff"/></svg>;
export const ReactIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><circle cx="12" cy="12" r="2.1" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"/><ellipse rx="10" ry="4.5" transform="rotate(60)"/><ellipse rx="10" ry="4.5" transform="rotate(120)"/></g></svg>;
export const VuejsIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.js</title><path d="M24 1.61h-9.84L12 5.16 9.84 1.61H0l12 20.78L24 1.61z" fill="#41B883"/><path d="M14.16 1.61L12 5.16 9.84 1.61H3.84l8.16 14.15L20.16 1.61h-6z" fill="#34495E"/></svg>;
export const LaravelIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Laravel</title><path d="m13.411.015-3.23 5.483-3.285-1.464 1.503 2.827-3.253.055 3.224 5.565-3.224 5.483 3.253.055-1.503 2.826 3.285-1.464 3.23 5.485 7.925-13.565zm.32 1.942 6.096 11.62-1.442.027-4.793-2.613-1.63 2.766-1.442-2.5-1.45 2.5-1.62-2.766L2.9 22.022l1.58-2.993-1.587-.027 1.587-2.966-1.587-.027 4.79-8.12-.036.012 1.44-2.45 1.455 2.44.024-.012 4.79-8.118-1.584-.027z" fill="#F05340"/></svg>;
export const TailwindCssIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 13.382 14.976 12 12.001 12h-6z" fill="#38B2AC"/></svg>;
export const PhpIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PHP</title><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.611 11.724c-1.296 1.062-2.583 1.025-2.583 1.025-.563.023-.92-.375-.92-.375s.313-.422.875-.445c.563-.023 2.156 0 2.953-1.023.797-1.024.492-2.149.492-2.149s.25-1.008-1.07-1.008H10.5v4.5s0 .813-1.07.813-.93-2.196-.93-2.196H6.608s-.422 3.102 2.016 3.102c2.438 0 4.21-1.664 4.21-1.664s1.782-1.352.777-3.234zm3.39-1.39c-1.296 1.062-2.583 1.025-2.583 1.025-.563.023-.92-.375-.92-.375s.313-.422.875-.445c.563-.023 2.156 0 2.953-1.023.797-1.024.492-2.149.492-2.149s.25-1.008-1.07-1.008H13.8v4.5s0 .813-1.07.813-.93-2.196-.93-2.196h-1.89s-.422 3.102 2.015 3.102c2.438 0 4.21-1.664 4.21-1.664s1.782-1.352.778-3.234z" fill="#777BB4"/></svg>;
export const GitIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M22.046 10.339c-.118-1.21-.61-2.31-1.425-3.125-.815-.815-1.914-1.307-3.125-1.425-.133-1.125-.63-2.16-1.425-2.965C15.256 2.01 14.191 1.5 13 1.5c-1.125 0-2.16.48-2.965 1.284-.805.805-1.297 1.84-1.425 2.965-.015 0-.03 0-.046.015-1.18.13-2.264.61-3.08 1.425-.814.815-1.306 1.914-1.424 3.125C4.045 10.323 4 10.354 4 10.37v3.26c0 .015.015.03.015.045.133 1.18.61 2.265 1.425 3.08.815.815 1.901 1.307 3.08 1.425.13 1.125.62 2.16 1.425 2.965.805.804 1.84 1.289 2.965 1.289 1.191 0 2.256-.495 3.06-1.329.805-.835 1.297-1.9 1.425-3.014.016 0 .03-.015.046-.015 1.21-.118 2.31-.61 3.125-1.425.815-.815 1.307-1.914 1.425-3.125.015-.015.015-.03.015-.045v-3.26c.001-.016.001-.031-.014-.046zm-9.046 9.418c-.469 0-.89-.18-1.203-.492-.313-.313-.493-.735-.493-1.203 0-.469.18-.89.493-1.203.313-.313.734-.492 1.203-.492.469 0 .89.18 1.203.492.313.313.492.734.492 1.203 0 .468-.18 89-.492 1.203-.313.312-.734.492-1.203.492zm0-13.84c.33 0 .644.13.88.365.235.235.365.55.365.88s-.13.645-.365.88a1.24 1.24 0 0 1-.88.365c-.33 0-.645-.13-.88-.365a1.24 1.24 0 0 1-.365-.88c0-.33.13-.645.365-.88.235-.235.55-.365.88-.365zm6.817 6.92h-4.328v-1.22c.985-.312 1.688-1.218 1.688-2.31 0-1.344-1.094-2.437-2.438-2.437-1.344 0-2.438 1.093-2.438 2.438 0 1.092.703 1.998 1.688 2.31v4.375c-.985.312-1.688 1.218-1.688 2.31 0 1.344 1.094 2.438 2.438 2.438 1.344 0 2.438-1.094 2.438-2.438 0-1.092-.703-1.998-1.688-2.31v-1.155h4.328c.672 0 1.22-.547 1.22-1.219s-.548-1.22-1.22-1.22z" fill="#F05032"/></svg>;
export const FigmaIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M12 12a4.5 4.5 0 0 0 4.5 4.5h-4.5v-4.5z" fill="#a259ff"/><path d="M7.5 12a4.5 4.5 0 1 0 0 9h4.5v-4.5h-4.5z" fill="#f24e1e"/><path d="M16.5 12a4.5 4.5 0 0 1-4.5 4.5v-4.5h4.5z" fill="#ff7262"/><path d="M12 7.5a4.5 4.5 0 0 1 4.5 4.5h-4.5v-4.5z" fill="#1abcfe"/><path d="M7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" fill="#0acf83"/></svg>;
export const AwsIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon Web Services</title><path d="M4.69 13.921c0-1.673.49-3.013 1.45-4.002.959-1.002 2.339-1.502 4.14-1.502 1.06 0 2.01.19 2.85.57.85.38 1.52.93 2.04 1.63l-2.13 1.4c-.34-.49-.76-.87-1.25-1.14-.5-.27-1.04-.41-1.62-.41-.77 0-1.42.23-1.93.7-1.06.96-1.59 2.28-1.59 3.96 0 1.69.53 3.01 1.59 3.98 1.06.96 2.45.96 4.17.02.48-.27.88-.63 1.2-1.08l2.14 1.41c-.54.72-1.23 1.29-2.07 1.71-.84.42-1.78.63-2.82.63-1.8 0-3.18-.5-4.14-1.5s-1.44-2.35-1.44-4.05z" fill="#232F3E" /><path d="m19.35 10.661c-.02 0-.03-.01-.05-.01-.7 0-1.27.24-1.72.73s-.67 1.13-.67 1.93c0 .82.23 1.48.68 1.98.45.5 1.03.75 1.75.75.72 0 1.3-.25 1.75-.75.45-.5.67-1.16.67-1.98 0-.8-.22-1.44-.67-1.93-.45-.49-1.03-.72-1.72-.72z" fill="#FF9900"/></svg>;
export const NodejsIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M12.364 0A12 12 0 0 0 .52 10.963l.348 1.454L12.364 0zm-1.35 1.834a12.002 12.002 0 0 0-1.55 1.751l-4.11-2.146L11.014 1.834zm-2.01 2.337a12 12 0 0 0-1.423 1.91l-4.482-1.17L8.98 4.17zm-1.87 2.497a12 12 0 0 0-1.203 1.983L1.518 7.37l4.38-1.286zM22.844 5.37l-4.22 3.428a12 12 0 0 0 .8-5.328l3.42.8z M4.08 17.076L2.348 12.96l-.736.326c.38 3.033 1.954 5.766 4.29 7.64l.82-3.85zm16.12 2.376c2.812-2.22 4.414-5.46 4.414-9.082a12.005 12.005 0 0 0-7.393-10.87L4.996 7.618l-.348-1.454a12.002 12.002 0 0 0-1.472 2.012L1.52 7.37c-.36.096-.708.21-1.05.342l.332 1.383c.096.398.156.81.18 1.224l.012.21V11a12 12 0 0 0 1.636 6.324l.816-3.834-.348 1.466 3.06-2.502 9.066 7.354a12.002 12.002 0 0 0 6.136-4.524z" fill="#339933"/></svg>;

export const ChessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.25 10.89c.3-2.18-.74-4.34-2.7-5.64-1.97-1.3-4.59-1.3-6.56 0-1.97 1.3-3 3.46-2.7 5.64A8.83 8.83 0 0 0 4 18.26V20h16v-1.74a8.83 8.83 0 0 0-4.25-7.37z" />
    <path d="M4.5 16.5h15" />
  </svg>
);

export const CricketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.32 10.32 8.3 16.34" />
    <path d="m7.35 15.39 5.96-5.96" />
    <path d="m15.39 8.35 2.25-2.25" />
    <circle cx="17.5" cy="5.5" r="2.5" />
    <path d="M21 15c-1-1-2-1-2.5-1.5s0-1.5-.5-2-.5-1-1.5-1.5-1.5-1.5-2-2.5-1-1.5-1.5-2" />
  </svg>
);

export const ArduinoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="12" x="3" y="6" rx="2" />
        <path d="M7 12h4" />
        <path d="M13 9h4" />
        <path d="M13 15h4" />
        <circle cx="8" cy="9" r="1" />
        <circle cx="8" cy="15" r="1" />
    </svg>
);