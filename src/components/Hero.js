import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-left">
        <h1 className="highlighted-name">
          <Typewriter
            words={['Ayush Garg']}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="tagline">Crafting code with intent</p>
      </div>

      <div className="hero-right">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Tech themed"
        />
        <nav className="hero-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </motion.section>
  );
}

export default Hero;
