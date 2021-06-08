import React from "react";
import { Link } from "react-router-dom";
import pfp from "../assets/pfp.png";
import PDF from "../assets/Resume.pdf";

import {hamburgerLines} from '../utils/basic-utils.js';

const Navbar = ({ japtrans, menuCollapse, toggleCollapse }) => {
  return (
    <nav>
      <input id="nav-collapse" type="checkbox" value={menuCollapse}></input>
      <div id="links-collapse">
        <div className="closed">
          <label
            htmlFor="nav-collapse"
            onClick={toggleCollapse}
            id="close-nav-toggle"
            onMouseEnter={hamburgerLines}
          >
            Close
          </label>
        </div>

        <div id="side-bar">
          <img id="pfp" src={pfp} alt="Emily Fang"></img>
          <ul id="nav-links">
          <Link to="/">
            <li>{japtrans ? "ホームページ" : "Home"}</li>
          </Link>
          <Link to="/about">
            <li>{japtrans ? "私について" : "About Me"}</li>
          </Link>
          <Link to="/projects">
            <li>{japtrans ? "プロジェクト" : "Projects"}</li>
          </Link>
          <Link to="/hobbies">
            <li>{japtrans ? "趣味" : "Hobbies"}</li>
          </Link>
          <Link to="/contact">
            <li>{japtrans ? "連絡する" : "Contact"}</li>
          </Link>
        </ul>
        </div>

        <div id="side-menu">
          <a href={PDF} target="_blank" rel="noreferrer">
            {japtrans ? "履歴書" : "Resume"}
          </a>
          ・
          <a href="https://github.com/ef1301/ef1301.github.io">
            {japtrans ? "ソースコード" : "Source Code"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
