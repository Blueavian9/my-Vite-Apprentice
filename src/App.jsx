import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { cn } from "@/lib/utils";
import "./App.css";

import Home from "./Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Github from "./components/pages/Github";
import Linkedin from "./components/pages/Linkedin";
import Contact from "./components/pages/Contact";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <div class="flex bg-[#e8e8f1] justify-center h-[100vh] m-12">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Linkedin" element={<Linkedin />} />
        <Route path="/Github" element={<Github />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
