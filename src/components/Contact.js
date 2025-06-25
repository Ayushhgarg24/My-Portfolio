import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="contact"
    >
      <h2>Let’s get in touch</h2>
      <p style={{ marginTop: "0.8rem", maxWidth: "600px", marginInline: "auto", lineHeight: "1.6" }}>
        Got a project in mind? A question? Or just wanna say hey? — I’m always down for a good convo. 
        Feel free to drop an email or connect through the links below.
      </p>

      <ul className="contact-list">
        <li>
          📧 <a href="mailto:ayushgarg241204@gmail.com">ayushgarg241204@gmail.com</a>
        </li>
        <li>
          💼 <a href="http://www.linkedin.com/in/ayushh-garg" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          🐱 <a href="https://github.com/Ayushhgarg24" target="_blank" rel="noreferrer">GitHub</a>
        </li>
      </ul>
    </motion.section>
  );
}

export default Contact;
