import React from 'react';
import PDF from '../assets/Resume.pdf';

const Header = ({toggleDarkMode, darkMode}) => {
  return (
    <header>
      <h1>Emily Fang</h1>
      <div id="side-menu">
        <ul>
          <li><a href={PDF} target="_blank" rel="noreferrer" >Resume</a></li>
          <li><a href="https://github.com/ef1301/ef1301.github.io">Source Code</a></li>
          <div id="dark-mode">
            {darkMode ? "Light Mode?" : "Dark Mode?"}
            <br/>
            <label className="switch">
              <input type="checkbox" onClick={toggleDarkMode}/>
              <span className="slider"></span>
            </label>
          </div>
        </ul>
      </div>
    </header>
  );
}


export default Header;
