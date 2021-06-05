import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';

const Navbar = ({ japtrans, toggleJap, toggleDarkMode, darkMode }) => {
  const wrapperRef = useRef(null);

  return (
    <nav >
      <label htmlFor="nav-collapse" className="hamburger">
        <i className="hamburger__icon"></i>
        <i className="hamburger__icon"></i>
        <i className="hamburger__icon"></i>
      </label>
      <input id="nav-collapse" type="checkbox"></input>


      <div id="links-collapse">
      <Sidebar
        toggleJap={toggleJap}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <ul id="nav-links">
        <li>
          <Link to="/about">{japtrans ? "私について" : "About Me"}</Link>
        </li>

        <li>
          <Link to="#0">{japtrans ? "プロジェクト" : "Projects"}</Link>
        </li>

        <li>
          <Link to="/hobbies">{japtrans ? "趣味" : "Hobbies"}</Link>
        </li>

        <li>
          <Link to="#0">{japtrans ? "連絡する" : "Contact"}</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
