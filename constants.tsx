import React from 'react';
import type { Project, Skill, Certificate, Achievement, Hobby, EducationItem } from './types';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCode, FaDatabase,
  FaLinkedin
} from 'react-icons/fa';
import { SiTailwindcss, SiVercel, SiMysql, SiCplusplus } from 'react-icons/si';
import { TrophyIcon, CertificateIcon, GithubIcon as GithubStatsIcon } from './components/icons';

export const PERSONAL_INFO = {
  name: "Ayush Garg",
  title: "Software Developer",
  profilePictureUrl: "/profile.jpg", // updated to local image
  about: "A passionate Software Engineering student at Delhi Technological University with experience in both software development and data science. Skilled in building scalable web applications, designing user interfaces, and working with technologies like React, Node.js, and C++. Also comfortable with Python and machine learning, having developed analytics and prediction models. Dedicated to writing clean code and collaborating in team environments.",
  email: "ayushgarg241204@gmail.com",
  phone: "+91 8570028796",
  location: "Delhi, India",
  socials: {
    linkedin: "https://www.linkedin.com/in/ayushh-garg/",
    github: "https://github.com/Ayushhgarg24",
    leetcode: "https://leetcode.com/u/ayushh_garg2412/",
    codolio: "https://codolio.com/profile/Ayush%20Garg",
  },
};

export const PROJECTS: Project[] = [
  {
    title: "VibeWave - Music Analytics",
    category: "VibeWave - Music Analytics",
    description: "Built a music analytics app using Spotify OAuth & Web API to display user's top tracks/artists with real-time data updates. It handles 300+ API calls per session and analyzes 1K+ unique tracks.",
    tags: ["React", "JavaScript", "Spotify API", "OAuth2", "Vercel"],
    imageUrl: "/vibewave.png", 
    link: "https://github.com/Ayushhgarg24/VibeWave",
  },
  {
    title: "C++ Hangman Game",
    category: "C++ Hangman Game",
    description: "A command-line Hangman game with a 100+ word pool, input validation, and adaptive difficulty. Features scoring, life tracking, and ASCII-based rendering with <10ms response time.",
    tags: ["C++", "CLI", "OOP"],
    imageUrl: "/hangman.jpg", 
    link: "https://github.com/Ayushhgarg24/Hangman-Game",
  },
  {
    title: "Customer Churn Prediction",
    category: "Customer Churn Prediction",
    description: "Analyzed 20,000+ telecom users to predict customer churn with 85%+ accuracy using a Random Forest Classifier. Achieved an F1-score of 0.82 and fast prediction speed.",
    tags: ["Python", "Jupyter", "Pandas", "Scikit-learn"],
    imageUrl: "/churn.jpg", 
    link: "https://github.com/Ayushhgarg24/CUSTOMER-CHURN-PREDICTION-MODEL",
  },
];

export const SKILLS: Skill[] = [
  { name: "C++", icon: SiCplusplus, color: "#00599C", bgColor: "#E6F0FA", category: 'skill' },
  { name: "Python", icon: FaPython, color: "#3776AB", bgColor: "#F3F7FA", category: 'skill' },
  { name: "Java", icon: FaJava, color: "#007396", bgColor: "#EAF6FB", category: 'skill' },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", bgColor: "#FFF3ED", category: 'skill' },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", bgColor: "#EDF6FF", category: 'skill' },
  { name: "JavaScript", icon: FaJsSquare, color: "#000", bgColor: "#F7DF1E", category: 'skill' }, // JS: black icon, yellow bg
  { name: "React", icon: FaReact, color: "#61DAFB", bgColor: "#EAFBFF", category: 'skill' },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", bgColor: "#E6F4EA", category: 'skill' },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", bgColor: "#E6FAFB", category: 'skill' },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", bgColor: "#F4F8FB", category: 'skill' },
  { name: "Git", icon: FaGitAlt, color: "#F05032", bgColor: "#FFF3F0", category: 'tool' },
  { name: "Figma", icon: FaFigma, color: "#F24E1E", bgColor: "#FFF6F3", category: 'tool' },
  { name: "VS Code", icon: FaCode, color: "#007ACC", bgColor: "#F3F8FF", category: 'tool' },
  { name: "Vercel", icon: SiVercel, color: "#000000", bgColor: "#F6F6F6", category: 'tool' },
];

export const CERTIFICATES: Certificate[] = [];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "LeetCode Weekly Contest 450", description: "Secured Global Rank of 1,715 out of 26,806 participants (Top 6.4%).", year: 2024 },
  { title: "LeetCode Biweekly Contest 161", description: "Attained Global Rank of 1,746 out of 31,670 participants (Top 5.5%).", year: 2024 },
  { title: "Peak LeetCode Rating", description: "Achieved a peak rating of 1751 on LeetCode (Top ~5% globally).", year: 2024 },
  { title: "Gold Medalist", description: "Won 1st Prize for building a Gesture-Controlled Robot using Arduino UNO and HC-05 Module.", year: 2024 },
  { title: "Vihaan Hackathon 2025 Finalist", description: "Ranked Top 40 out of 250+ teams for strong troubleshooting and technical skills.", year: 2024 },
  { title: "Proficient Problem Solver", description: "Solved 650+ problems across platforms including LeetCode, Codeforces, and GeeksforGeeks.", year: 2024 },
];


export const CAREER_HIGHLIGHTS = [
    {
        icon: TrophyIcon,
        title: "Top LeetCode Performer",
        description: "Consistently ranked in the top 5-6% in competitive programming contests."
    },
    {
        icon: GithubStatsIcon,
        title: "650+ Problems Solved",
        description: "Demonstrated strong problem-solving skills across multiple coding platforms."
    },
    {
        icon: CertificateIcon,
        title: "Gold Medalist & Hackathon Finalist",
        description: "Awarded 1st Prize for a hardware project and ranked as a top team in a major hackathon."
    }
]

export const HOBBIES: Hobby[] = [
  {
    name: "Chess",
    description: "An avid chess player with a rating of over 1500 on Chess.com. Enjoys the strategic depth and competitive nature of the game, constantly learning new openings and endgame techniques.",
    imageUrl: "/chess.png",
  },
  {
    name: "Cricket",
    description: "A passionate cricket enthusiast who follows the sport closely. Played actively during childhood, which fostered a sense of teamwork, discipline, and sportsmanship that translates into professional life.",
    imageUrl: "/cricket.jpg"
  },
  {
    name: "Arduino Projects",
    description: "Fascinated by the intersection of hardware and software. Enjoys building Arduino-based projects, having developed several during school, from simple sensor integrations to more complex robotic controls.",
    imageUrl: "/arduino.jpg"
  }
];

export const EDUCATION: EducationItem[] = [
  { 
    degree: "B.TECH (Software Engineering)", 
    institution: "Delhi Technological University", 
    period: "2022 - 2026",
    imageUrl: "/dtu.jpg",
    highlight: "CGPA: 8.56 (till 6th Sem) | Minor in Data Science"
  },
  { 
    degree: "CBSE (Class XII)", 
    institution: "The Vivekanand School, Narela", 
    period: "2022",
    imageUrl: "school.png",
    highlight: "Scored 87.6%"
   },
  { 
    degree: "CBSE (Class X)", 
    institution: "OSDAV Public School, Haryana", 
    period: "2020",
    imageUrl: "school.jpg",
    highlight: "Scored 97%"
  },
];

const POSITIONS_OF_RESPONSIBILITY = [
  {
    role: "Co-Head, Entrepreneurship Cell, DTU",
    period: "July'24 - Present",
    description: "Co-led sponsor acquisition, engaging with 20+ companies. Coordinated speaker sessions and managed sponsor visibility during the 2-day summit."
  },
  {
    role: "Student Counsellor, Desh Ke Mentor (Govt. of NCT of Delhi)",
    period: "Jan'23 - April'23",
    description: "Mentored 4 high school students over 2+ months, offering academic and career guidance under a state-led initiative."
  }
];

export const FULL_PORTFOLIO_CONTEXT = `
  Name: ${PERSONAL_INFO.name}
  Title: ${PERSONAL_INFO.title}
  About: ${PERSONAL_INFO.about}
  Contact: Email - ${PERSONAL_INFO.email}, Phone - ${PERSONAL_INFO.phone}, Location - ${PERSONAL_INFO.location}
  Education: ${JSON.stringify(EDUCATION.map(e => `${e.degree} from ${e.institution} (${e.period}) - ${e.highlight}`))}
  Projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, description: p.description, technologies: p.tags })))}
  Skills: Languages & Technologies: C, C++, Python, HTML, CSS, JavaScript, MySQL. Version Control: Git, GitHub. Tools & Platforms: Visual Studio Code, Jupyter Notebook, PyCharm, Google Colab, Notion, Canva. Deployment: Vercel, Netlify, Render. Soft Skills: Effective Communication, Cross-Functional Teamwork, Conflict Resolution, Initiative ownership.
  Achievements: ${JSON.stringify(ACHIEVEMENTS.map(a => `${a.title}: ${a.description}`))}
  Positions of Responsibility: ${JSON.stringify(POSITIONS_OF_RESPONSIBILITY.map(p => `${p.role} (${p.period}) - ${p.description}`))}
  Hobbies: ${JSON.stringify(HOBBIES.map(h => `${h.name}: ${h.description}`))}
`;