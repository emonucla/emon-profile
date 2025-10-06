import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="App-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Emon Sarker</h1>
      <p>Full-stack Developer | Python | Rust | Ruby | Node.js | React</p>
    </motion.header>
  );
}

export default Header;
