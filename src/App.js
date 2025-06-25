import React, { useState } from "react";
import "./App.css";

import Navbar from './Navbar';
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="toggle-btn"
>
  {darkMode ? "☀️" : "🌙"}
</button>
      <Navbar />
      <Hero />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
