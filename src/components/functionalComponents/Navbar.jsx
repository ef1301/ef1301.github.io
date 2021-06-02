import React from 'react';
import pfp from '../assets/pfp.jpg';

const Navbar = ({refs, scroll, toggleDarkMode, darkMode}) => {
  return (
    <nav>
      {/*<div id="nav-collapsed"></div>*/}
      <img id="pfp" src={pfp}></img>
      <ul id="nav-links">
        <li onClick={scroll.scrollToAbout}>
          <a href="#0" >About Me</a>
        </li>

        <li>
          <a href="#0">Projects</a>
        </li>

        <li onClick={scroll.scrollToHobbies}>
          <a href="#0">Hobbies</a>
        </li>

        <li>
          <a href="#0">Contact</a>
        </li>
      </ul>
      <div id="dark-mode">
            {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
            <br/>
            {/*<label className="switch">*/}
              <input className="toggle" onClick={toggleDarkMode} type="checkbox" />
              {/*<span className="slider" onClick={toggleDarkMode}></span>*/}
            {/*</label>*/}
          </div>
    </nav>
  );
}

export default Navbar;
