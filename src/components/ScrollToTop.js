import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        padding: "0.6rem 1rem",
        fontSize: "1rem",
        backgroundColor: "#58a6ff",
        color: "#0d1117",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      ↑ Top
    </motion.button>
  ) : null;
}

export default ScrollToTop;
