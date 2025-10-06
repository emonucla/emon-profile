import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = ["JavaScript / React / Node.js", "Python / Jupyter Notebook", "Rust / Ruby", "HTML / CSS"];

  return (
    <section className="skills" ref={ref}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
