import React, {useState} from 'react';
import pfp from '../assets/pfp.jpg';

const Navbar = ({refs, scroll, toggleDarkMode, darkMode}) => {
  const [japtrans, setJap] = useState(false);
  return (
    <nav>
      {/*<div id="nav-collapsed"></div>*/}
      <img id="pfp" src={pfp}></img>
      <ul id="nav-links">
        <li>
          <a href="#0" >{japtrans ? "私について" : "About Me"}</a>
        </li>

        <li>
          <a href="#0">{japtrans ? "プロジェクト" : "Projects"}</a>
        </li>

        <li>
          <a href="#0">{japtrans ? "趣味" : "Hobbies"}</a>
        </li>

        <li>
          <a href="#0">{japtrans ? "私について" : "Contact"}</a>
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
          <span className="slider" onClick={() => setJap(japtrans ? false : true)}></span>
        </label>
      </div>
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;
