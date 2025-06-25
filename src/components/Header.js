import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      
    </motion.header>
  );
}

export default Header;
