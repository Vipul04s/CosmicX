import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 100 + "%";
      const y = Math.random() * 100 + "%";
      const size = Math.random() * 3 + "px";
      const delay = Math.random() * 2 + "s";

      stars.push(
        <div
          key={i}
          className="star"
          style={{
            top: y,
            left: x,
            width: size,
            height: size,
            animationDelay: delay,
          }}
        ></div>
      );
    }
    return stars;
  };
  

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}></MobileNav>
      <div className="nav-wrapper">
        <div className="stars">{generateStars()}</div>
        <nav className="nav-content">
          {/* <p className="logo">Logo</p> */}
          <img className="logo" src="./src/assets/logo4.png" alt="Logo"></img>
          <ul>
            <li>
              <a className="menu-item" href="#home">
                HOME
              </a>
            </li>
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

          <button class="menu-btn" onClick={toggleMenu}>
            <span class={"material-symbols-outlined"}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
