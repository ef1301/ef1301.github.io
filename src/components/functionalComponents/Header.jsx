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
          <button id="dark-mode" onClick={toggleDarkMode}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
        </ul>
      </div>
    </header>
  );
}


export default Header;
