import React from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export type Skill = {
  name: string;
  icon: any;
  category: 'skill' | 'tool';
  color?: string;
  bgColor?: string; // add this line
};

export interface Certificate {
  name: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: number;
}

export interface Hobby {
  name: string;
  description: string;
  imageUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  imageUrl: string;
  highlight: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}