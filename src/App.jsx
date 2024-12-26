// import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import VideoSlider from "./Components/VideoSlider/VideoSlider";
// import VideoInfo from "./Components/VideoInfo/VideoInfo";
// import GoToTop from "./Components/GoToTop/GoToTop";

// const App = () => {
//   return (
//     <>
//       <div className="app">
//         <Navbar />
//         <VideoSlider />
//         <VideoInfo />
//         <div style={{ height: "2000px", padding: "20px" }}>
//           <h1>Scroll down to see the GoToTop button!</h1>
//         </div>
//         <GoToTop />
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import VideoSlider from "./Components/VideoSlider/VideoSlider";
import VideoInfo from "./Components/VideoInfo/VideoInfo";
import GoToTop from "./Components/GoToTop/GoToTop";
import Planet from "./Components/Planet/Planet";
import "./App.css";

const App = () => {
  const topRef = useRef(null); // Create a reference for the top of the page
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Detect scroll position to show/hide the button
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
      <div ref={topRef}>
        <Navbar />
      </div>
      <VideoSlider />
      <VideoInfo />
      <div className="planete">
        <Planet></Planet>
      </div>
      {/* Pass the scrollToTop function to GoToTop */}
      <GoToTop scrollToTop={scrollToTop} isVisible={isVisible} />
    </div>
  );
};

export default App;
