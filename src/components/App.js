import React, { useRef, useEffect, useState } from "react";
import './App.css';
import Home from "./Home";
import Navbar from "./Navbar";
import { DarkModeProvider, useDarkModeContext } from "../DarkModeContext";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import { FaChevronUp } from "react-icons/fa";
import Awards from "./Awards";

function BackToTopButton({ onClick }) {
  const { isDarkMode } = useDarkModeContext();

  return (
    <button
      className={`fixed bottom-6 right-6 p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-white text-black' : 'bg-sky-500 text-white'}`}
      onClick={onClick}
    >
      <div className="flex flex-row gap-2 justify-center items-center md:px-2">
        <FaChevronUp />
        <span className="md:block hidden">Back to Top</span>
      </div>
    </button>
  );
}

export default function App() {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const awardsRef = useRef(null);

  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleBackToTopClick = () => {
    scrollToRef(homeRef);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when the page is scrolled down, hide it when at the top.
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Add the scroll event listener when the component mounts.
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DarkModeProvider>
      <main className="transition-all duration-500">
        <div className="transition-all duration-500">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div id="home" ref={homeRef}>
            <Home />
          </div>
          <div id="about" ref={aboutRef}>
            <AboutMe />
          </div>
          <div id="portfolio" ref={portfolioRef}>
            <Portfolio />
          </div>
          <div id="awards" ref={awardsRef}>
            <Awards />
          </div>
          <div id="skills" ref={skillsRef}>
            <Skills />
          </div>
          <Footer />
        </div>
      </main>
      {showBackToTop && <BackToTopButton onClick={handleBackToTopClick} />}
    </DarkModeProvider>
  );
}
