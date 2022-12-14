import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Project/Project";
import Resume from "../Pages/Resume/Resume";
import Shamshad from "../Pages/Shamshad";
import Skills from "../Pages/Skills/Skills";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shamshad />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
