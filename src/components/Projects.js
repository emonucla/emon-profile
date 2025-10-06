import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    { name: "Project 1 - JavaScript", link: "#" },
    { name: "Project 2 - Python", link: "#" },
    { name: "Project 3 - Rust", link: "#" },
    { name: "Project 4 - Ruby", link: "#" }
  ];

  return (
    <section className="projects" ref={ref}>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <a href={project.link}>{project.name}</a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
