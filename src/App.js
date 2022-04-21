import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from "./portfolioContainer/header/Header.js"
import Project from './portfolioContainer/projects/project';
import Profile from './portfolioContainer/Home/Profile'
import Skills from './portfolioContainer/skills/skills';
import Blogs from './portfolioContainer/Blogs/blogs';
import About from "./portfolioContainer/about/About";
import Footer from "./portfolioContainer/Footer/Footer";

function App() {
  return (
       <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Profile />}></Route>
            <Route exact path="/projects" element={<Project />}></Route>
            <Route exact path="/skills" element={<Skills />}></Route>
            <Route exact path="/blogs" element={<Blogs />}></Route>
            <Route exact path="/aboutme" element={<About />}></Route>
          </Routes>
          {/* <Footer /> */}
       </Router>
  );
}

export default App;



