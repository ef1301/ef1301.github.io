import React from "react";
import { Link } from "react-router-dom";

import NavLogo from "../assets/NavLogo.png";

const Navbar = ({
  japtrans,
  toggleJap,
  menuOpen,
  toggleMenu,
  darkMode,
  toggleDarkMode,
}) => {

  return (
    <nav>
      <input
        id="nav-collapse"
        type="checkbox"
        onChange={(e) => {}}
        checked={menuOpen}
      ></input>
      <div id="links-collapse">
        <div id="links">
          {/*<div className="closed">
            <label
              htmlFor="nav-collapse"
              onClick={toggleMenu}
              id="close-nav-toggle"
            >
              Close
            </label>
  </div>*/}

          <ul id="nav-links">
            <img id="pfp" src={NavLogo} alt="Alt Logo"></img>
            <Link to="/" onClick={toggleMenu}>
              <li>{japtrans ? "ホームページ" : "Home"}</li>
            </Link>
            {/*<Link to="/about" onClick={toggleMenu}>
              <li>{japtrans ? "私について" : "About Me"}</li>
</Link>*/}
            <Link to="/projects" onClick={toggleMenu}>
              <li>{japtrans ? "プロジェクト" : "Projects"}</li>
            </Link>
            <Link to="/hobbies" onClick={toggleMenu}>
              <li>{japtrans ? "趣味" : "Hobbies"}</li>
            </Link>
            <Link to="/comingsoon" onClick={toggleMenu}>
              <li>{japtrans ? "冒険が待っている ( 近日配信 )" : "New Adventure (Coming Soon)"}</li>
            </Link>
          </ul>

          <div id="side-bar">
            <div id="page-utils">
              <span id="utils">
                <div id="translate">
                  日本語
                  <br />
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" onClick={toggleJap}></span>
                  </label>
                </div>
                <div id="dark-mode">
                  <b>
                    <label htmlFor="dark-mode-toggle">
                      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
                    </label>
                  </b>
                  <br />
                  <input
                    className="toggle"
                    onClick={toggleDarkMode}
                    checked={darkMode}
                    onChange={(e) => {}}
                    id="dark-mode-toggle"
                    type="checkbox"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
