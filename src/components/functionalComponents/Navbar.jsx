import React from "react";
import { Link } from "react-router-dom";

import NavLogo from "../assets/NavLogo.png";

const Navbar = ({
  japtrans,
  toggleJap,
  menuCollapse,
  toggleCollapse,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <nav>
      <input id="nav-collapse" type="checkbox" value={menuCollapse}></input>
      <div id="links-collapse">
        <div className="closed">
          <label
            htmlFor="nav-collapse"
            onClick={toggleCollapse}
            id="close-nav-toggle"
          >
            Close
          </label>
        </div>

        <ul id="nav-links">
          <img id="pfp" src={NavLogo} alt="Alt Logo"></img>
          <Link to="/">
            <li>{japtrans ? "ホームページ" : "Home"}</li>
          </Link>
          <Link to="/about">
            <li>{japtrans ? "私について" : "About Me"}</li>
          </Link>
          <Link to="/projects">
            <li>{japtrans ? "プロジェクト" : "Projects"}</li>
          </Link>
          <Link to="/hobbies">
            <li>{japtrans ? "趣味" : "Hobbies"}</li>
          </Link>
        </ul>

        <div id="side-bar">
          <div id="page-utils">
            <span id="utils">
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
                  id="dark-mode-toggle"
                  type="checkbox"
                />
              </div>
              <div id="translate">
                日本語
                <br />
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" onClick={toggleJap}></span>
                </label>
              </div>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
