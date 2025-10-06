import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Notebooks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const notebooks = [
    { name: "Notebook 1", link: "https://nbviewer.org/github/username/notebook1.ipynb" },
    { name: "Notebook 2", link: "https://nbviewer.org/github/username/notebook2.ipynb" }
  ];

  return (
    <section className="notebooks" ref={ref}>
      <h2>Jupyter Notebooks</h2>
      <ul>
        {notebooks.map((nb, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <a href={nb.link}>{nb.name}</a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Notebooks;
