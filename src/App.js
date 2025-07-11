import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load components for better performance
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

// Loading component for suspense fallback
const LazyLoader = () => {
  return (
    <div className="lazy-loader">
      <div className="spinner"></div>
    </div>
  );
};

function App() {
  const [load, updateLoad] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Handle initial loading
  useEffect(() => {
    // Preload critical images
    const preloadImages = () => {
      const imageList = [
        require('./Assets/home-main.svg').default,
        // Add other critical images here
      ];
      
      imageList.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    // Optimize loading sequence
    const timer = setTimeout(() => {
      preloadImages();
      updateLoad(false);
    }, 1000);

    // Add dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    }

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('dark-mode');
    };
  }, [darkMode]);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <Router>
      <Preloader load={load} />
      <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`} id={load ? "no-scroll" : "scroll"}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop />
        <Suspense fallback={<LazyLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
