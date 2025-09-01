import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon } from './icons';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2 bg-surface p-1 rounded-full">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'bg-primary text-white' : 'text-text-secondary hover:bg-background'}`}
        aria-label="Switch to light theme"
      >
        <SunIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-primary text-white' : 'text-text-secondary hover:bg-background'}`}
        aria-label="Switch to dark theme"
      >
        <MoonIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;