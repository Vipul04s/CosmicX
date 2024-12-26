import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import VideoSlider from "./Components/VideoSlider/VideoSlider";
import VideoInfo from "./Components/VideoInfo/VideoInfo";
import GoToTop from "./Components/GoToTop/GoToTop";
import Planet from "./Components/Planet/Planet";
import "./App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    topElement.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <div id="top">
        <Navbar scrollToTop={scrollToTop} scrollToSection={scrollToSection} />
      </div>
      <VideoSlider />
      <VideoInfo />

      <div id="events" style={{ height: "2000px" }}>
        <div className="planete">
          <Planet />
        </div>
      </div>
      <GoToTop scrollToTop={scrollToTop} isVisible={isVisible} />
    </div>
  );
};

export default App;
