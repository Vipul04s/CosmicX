// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Use Link from react-router-dom
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import { BiMailSend } from "react-icons/bi";
// import "./Footer.css";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [feedback, setFeedback] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // Handle feedback form changes
//   const handleFeedbackChange = (e) => {
//     setFeedback({
//       ...feedback,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle feedback form submission
//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     if (feedback.name && feedback.email && feedback.message) {
//       alert("Thank you for your feedback!");
//       setFeedback({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   // Handle email subscription
//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       alert(`Subscribed successfully with ${email}!`);
//       setEmail("");
//     } else {
//       alert("Please enter a valid email.");
//     }
//   };

//   return (
//     <footer className="footer">
//       {/* Wave Effect */}
//       <div className="waveEffect"></div>

//       {/* Social Media Icons */}
//       <div className="socialIcons">
//         <a
//           href="https://facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaFacebook />
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <FaTwitter />
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaInstagram />
//         </a>
//         <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//           <FaYoutube />
//         </a>
//       </div>

//       {/* Links Section */}
//       <div className="links">
//         <a href="#about">About Us</a>
//         <a href="#services">Services</a>
//         <a href="#features">Features</a>
//         <a href="#testimonials">Testimonials</a>
//         <a href="#contact">Contact</a>
//         {/* <a href="#faq">FAQ</a> */}

//         <Link to="/faq" className="clickable">
//           FAQ
//         </Link>

//         {/* Use Link for Privacy Policy */}
//         <Link to="/privacy-policy" className="clickable">
//           Privacy Policy
//         </Link>
//       </div>

//       {/* Feedback Form */}
//       <div className="feedback">
//         <h3>Feedback</h3>
//         <form onSubmit={handleFeedbackSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={feedback.name}
//             onChange={handleFeedbackChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={feedback.email}
//             onChange={handleFeedbackChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Feedback"
//             rows="4"
//             value={feedback.message}
//             onChange={handleFeedbackChange}
//             required
//           ></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       {/* Stay Updated Section */}
//       <div className="stayUpdated">
//         <h3>Stay Updated</h3>
//         <form onSubmit={handleSubscribe}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button type="submit">
//             <BiMailSend /> Subscribe
//           </button>
//         </form>
//       </div>

//       {/* Copyright Section */}
//       <div className="copyright">
//         &copy; {new Date().getFullYear()} CosmicX. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showStayUpdatedForm, setShowStayUpdatedForm] = useState(false);

  // Handle feedback form changes
  const handleFeedbackChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  // Handle feedback form submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.name && feedback.email && feedback.message) {
      alert("Thank you for your feedback!");
      setFeedback({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Handle email subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}!`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <footer className="footer">
      {/* Wave Effect */}
      <div className="waveEffect"></div>

      {/* Social Media Icons */}
      <div className="socialIcons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>

      {/* Links Section */}
      <div className="links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#features">Features</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <Link to="/faq" className="clickable">
          FAQ
        </Link>
        <Link to="/privacy-policy" className="clickable">
          Privacy Policy
        </Link>
      </div>

      {/* Feedback Section */}
      <div className="formToggleSection">
        <button
          className="formToggleButton"
          onClick={() => setShowFeedbackForm(!showFeedbackForm)}
        >
          {showFeedbackForm ? "Close Feedback" : "Give Feedback"}
        </button>
        {showFeedbackForm && (
          <div className="feedback">
            <h3>Feedback</h3>
            <form onSubmit={handleFeedbackSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={feedback.name}
                onChange={handleFeedbackChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={feedback.email}
                onChange={handleFeedbackChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                rows="4"
                value={feedback.message}
                onChange={handleFeedbackChange}
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>

      {/* Stay Updated Section */}
      <div className="formToggleSection">
        <button
          className="formToggleButton"
          onClick={() => setShowStayUpdatedForm(!showStayUpdatedForm)}
        >
          {showStayUpdatedForm ? "Close Stay Updated" : "Stay Updated"}
        </button>
        {showStayUpdatedForm && (
          <div className="stayUpdated">
            <h3>Stay Updated</h3>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <BiMailSend /> Subscribe
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} CosmicX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
