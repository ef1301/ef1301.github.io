import React from "react";
// import logo from "../assets/logo.svg";
import Logo from '../assets/Logo';
import { Link } from "react-router-dom";


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
        <label htmlFor="nav-collapse" className="hamburger" onClick={toggleCollapse}>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
        </label>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
