import React from "react";
// import logo from "../assets/logo.svg";
import Logo from '../assets/Logo';
import { Link } from "react-router-dom";

import {hamburgerLines} from '../utils/basic-utils.js';

const Header = ({ japtrans, toggleJap, toggleDarkMode, darkMode, toggleCollapse }) => {
  return (
    <header>
      <h1 id="logo">
        <Link to="/">
          {/*<img id="logo" src={logo} alt="EF logo"></img>*/}
          <Logo id="logo"/>
          {japtrans ? "エミリー・ファング" : "Emily Fang"}
        </Link>
      </h1>
      <div id="side-header">
        <label htmlFor="nav-collapse" className="hamburger" onMouseEnter={hamburgerLines} onClick={toggleCollapse}>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
        </label>

      </div>
    </header>
  );
};

export default Header;
