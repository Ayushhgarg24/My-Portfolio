import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="about-container"
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          I’m <span className="highlight">Ayush</span> — a developer deeply fascinated by the
          <span className="highlight"> craft behind the code</span>.
        </p>
        <p>
          I love building interfaces that feel <span className="highlight">effortless</span>,
          solving logic that feels impossible, and getting lost in the beauty of
          <span className="highlight"> clean, intentional software</span>.
        </p>
        <p>
          Whether it’s a simple UI or a complex algorithm, I believe
          <span className="highlight"> good code is like good design</span> — invisible when done right.
        </p>
        <p>
          When I’m not coding, I’m probably <span className="highlight">lifting, learning</span>, or
          quietly refining what I’ve built.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
