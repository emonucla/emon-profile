import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Notebooks from "./components/Notebooks";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
      <Header />
      <Skills />
      <Projects />
      <Notebooks />
      <Contact />
    </div>
  );
}

export default App;
