import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import VideoSlider from "./Components/VideoSlider/VideoSlider";
import VideoInfo from "./Components/VideoInfo/VideoInfo";
import GoToTop from "./Components/GoToTop/GoToTop";
import Planet from "./Components/Planet/Planet";
import Footer from "./Components/Footer/Footer";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import ResetToTop from "./Components/ResetToTop";
import "./App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
    <Router>
      <ResetToTop /> {/* Automatically scrolls to top on route change */}
      <div id="top">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <VideoSlider />
                <VideoInfo />
                <div id="events" style={{ height: "2000px" }}>
                  <div className="planete">
                    <Planet />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <GoToTop scrollToTop={scrollToTop} isVisible={isVisible} />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
