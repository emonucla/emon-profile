import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <h2>Contact Me</h2>
      <p>Email: emon@example.com</p>
      <p>GitHub: <a href="https://github.com/emonucla">github.com/emonucla</a></p>
      <p>LinkedIn: <a href="#">linkedin.com/in/emon</a></p>
    </motion.section>
  );
}

export default Contact;
