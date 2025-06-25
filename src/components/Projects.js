import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Candy Crush Clone",
    description:
      "A React-based match-three puzzle game inspired by Candy Crush. Built using modern JavaScript, grid logic, and fun animations.",
    github: "https://github.com/Ayushhgarg24/Candy-Crush",
    demo: "https://ayushhgarg24.github.io/Candy-Crush/",
    icon: "🎮",
  },
  {
    title: "Sentiment Analyzer",
    description:
      "Analyzes text input and classifies sentiment using NLP. Simple, clean, and super useful.",
    github: "https://github.com/Ayushhgarg24/SENTIMENT-ANALYSER",
    icon: "🧠",
  },
  {
    title: "Customer Churn Predictor",
    description:
      "ML model that predicts churn using pandas + scikit-learn. Built to be accurate and explainable.",
    github: "https://github.com/Ayushhgarg24/CUSTOMER-CHURN-PREDICTION-MODEL",
    demo: "https://github.com/Ayushhgarg24/CUSTOMER-CHURN-PREDICTION-MODEL/blob/main/customer_churn_final.ipynb",
    icon: "📊",
  },
  {
    title: "Portfolio Website",
    description:
      "This very site. React + Framer Motion, built with obsession, no templates. You’re looking at it.",
    github: "https://github.com/your-username/portfolio-site",
    demo: "",
    icon: "🔗",
  },
];

function Projects() {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {projectData.map((project, index) => (
        <motion.a
          className="project"
          key={index}
          href={project.demo || project.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
        >
          <h3>{project.icon} {project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
          </div>
        </motion.a>
      ))}
    </section>
  );
}

export default Projects;
