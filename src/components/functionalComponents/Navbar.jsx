import React from 'react';
import { Link } from 'react-router-dom';
import pfp from '../assets/pfp.jpg';

const Navbar = ({japtrans, toggleJap, toggleDarkMode, darkMode}) => {

  return (
    <nav>
      {/*<div id="nav-collapsed"></div>*/}
      <img id="pfp" src={pfp} alt="Emily Fang"></img>
      <ul id="nav-links">
        <li>
          <Link to="/about" >{japtrans ? "私について" : "About Me"}</Link>
        </li>

        <li>
          <Link href="#0">{japtrans ? "プロジェクト" : "Projects"}</Link>
        </li>

        <li>
          <Link href="#0">{japtrans ? "趣味" : "Hobbies"}</Link>
        </li>

        <li>
          <Link href="#0">{japtrans ? "連絡する" : "Contact"}</Link>
        </li>
      </ul>

      <div id="page-utils">
        <h1>Toggles:</h1> 

        <div id="utils">
        <div id="dark-mode">
        <b>{darkMode ? "Light Mode" : "Dark Mode"}</b><br/>
        <input className="toggle" onClick={toggleDarkMode} type="checkbox" />
      </div>
      <div id="translate">
        日本語<br/>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" onClick={toggleJap}></span>
        </label>
      </div>
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;
