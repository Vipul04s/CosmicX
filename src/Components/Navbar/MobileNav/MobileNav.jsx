import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        {/* <p className="logo">Logo</p> */}
        <img className="logo" src="./src/assets/logo4.png" alt="Logo"></img>
        <ul>
          <li></li>
          <li>
            <a className="menu-item" href="#events">
              EVENTS
            </a>
          </li>
          <li>
            <a className="menu-item" href="#courses">
              COURSES
            </a>
          </li>
          <li>
            <a className="menu-item" href="#store">
              STORE
            </a>
          </li>
          <li>
            <a className="menu-item" href="#blogs">
              BLOG'S
            </a>
          </li>
          <button className="rocket-button">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
