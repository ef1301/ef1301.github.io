import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import {hamburgerLines} from '../utils/basic-utils';

const Header = ({ japtrans, toggleJap, toggleDarkMode, darkMode }) => {
  return (
    <header>
      <h1 id="logo">
        <Link to="/">
          <img src={logo} alt="EF logo"></img>
          {japtrans ? "エミリー・ファング" : "Emily Fang"}
        </Link>
      </h1>
      <div id="side-header">
        <label htmlFor="nav-collapse" className="hamburger" onClick={hamburgerLines}>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
        </label>

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
    </header>
  );
};

export default Header;
