import React from 'react';
import { Link } from 'react-router-dom';
import PDF from '../assets/Resume.pdf';

const Header = ({japtrans}) => {
  return (
    <header>
      <h1><Link to="/">{japtrans ? "エミリー・ファング" : "Emily Fang"}</Link></h1>
      <div id="side-menu">
        <ul>
          <li><a href={PDF} target="_blank" rel="noreferrer" >{japtrans ? "履歴書" : "Resume"}</a></li>
          <li><a href="https://github.com/ef1301/ef1301.github.io">{japtrans ? "ソースコード" : "Source Code"}</a></li>
        </ul>
      </div>
    </header>
  );
}


export default Header;
