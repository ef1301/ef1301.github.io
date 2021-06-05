import React from "react";
import pfp from "../assets/pfp.jpg";
import logo from "../assets/logo.svg";

const Sidebar = ({ toggleJap, toggleDarkMode, darkMode }) => {
  return (
    <div id="side-bar">
      <img id="logo" src={logo} alt="logo"></img>
      <img id="pfp" src={pfp} alt="Emily Fang"></img>
      <div id="page-utils">
        <span id="utils">
          <div id="dark-mode">
            <b>{darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}</b>
            <br />
            <input
              className="toggle"
              onClick={toggleDarkMode}
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
  );
};

export default Sidebar;
