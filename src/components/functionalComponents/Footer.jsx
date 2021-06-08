import React from 'react';

const Footer = ({japtrans, toggleJap, darkMode, toggleDarkMode}) => {
  return (
    <footer>
              

              <div id="page-utils">
          <input type="checkbox" id="utils-toggle"></input>
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
          <label htmlFor="utils-toggle" id="page-utils-tab"></label>
        </div>
      <h2>{japtrans ? "太陽はまた昇り、私たちはまた挑戦する" : "The sun will rise and we will try again."}</h2>
    </footer>
  );
}

export default Footer;
