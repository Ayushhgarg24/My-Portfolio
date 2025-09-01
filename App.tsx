import React from 'react';
import AIAssistant from './components/AIAssistant';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './hooks/useTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-background text-text-primary">
        <HomePage />
        <AIAssistant />
      </div>
    </ThemeProvider>
  );
};

export default App;