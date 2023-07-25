import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skill from "./components/Skill";
import AboutMe from "./components/AboutMe";
import Content from "./components/Content";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/home" element={<Content />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
