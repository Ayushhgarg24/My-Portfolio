import React, { useState } from 'react';
import { DownloadIcon } from './icons';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { path: '#about', name: 'Home' },
    { path: '#projects', name: 'Projects' },
    { path: '#skills', name: 'Skills' },
    { path: '#credentials', name: 'Credentials' },
    { path: '#hobbies', name: 'Hobbies' },
    { path: '#education', name: 'Education' },
    { path: '#contact', name: 'Contact' },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-surface/80 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-xl font-bold text-primary">
              Ayush Garg
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map(item => (
              <a 
                key={item.path} 
                href={item.path} 
                onClick={(e) => handleNavClick(e, item.path)} 
                className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.name.toLowerCase() ? 'text-primary font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            <a 
              href="https://drive.google.com/uc?export=download&id=1tK0WgkSY3T2BpATfUT6wTUSC9JguAgez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 btn-gradient text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>
          <div className="md:hidden flex items-center">
             <ThemeSwitcher />
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-background focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map(item => (
              <a 
                key={item.path} 
                href={item.path} 
                onClick={(e) => handleNavClick(e, item.path)} 
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === item.name.toLowerCase() ? 'text-primary bg-background' : 'text-text-secondary hover:text-text-primary hover:bg-background'}`}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 pt-4 pb-2 border-t border-background/20">
                <a 
                    href="https://drive.google.com/uc?export=download&id=1tK0WgkSY3T2BpATfUT6wTUSC9JguAgez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 btn-gradient text-white px-4 py-2 rounded-full text-base font-semibold hover:opacity-90 transition-opacity w-full"
                >
                    <DownloadIcon className="h-5 w-5" />
                    <span>Download CV</span>
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;