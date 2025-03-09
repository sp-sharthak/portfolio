import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ModeToggle } from "./components/DarkMode";
import Journey from "./components/Journey";

export default function page() {
  return (
    <div className="min-h-[350vh]  dark:bg-black bg-white overflow-hidden">
      <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative">
        <div className="max-w-7xl mx-auto p-5">
          <ModeToggle />
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t dark:from-black from-white absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Journey />
        <Footer />
      </div>
    </div>
  );
}
