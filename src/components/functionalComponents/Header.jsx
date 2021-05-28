import React from 'react';

const Header = ({toggleDarkMode, darkMode}) => {
  return (
    <header>
      <h1>Emily Fang</h1>
      <ul>
        <li>Resume</li>
        <li><a href="https://github.com/ef1301/ef1301.github.io">Source Code</a></li>
        <button id="dark-mode" onClick={toggleDarkMode}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
      </ul>
    </header>
  );
}


export default Header;
