import React from 'react';
import { Link } from 'react-router-dom';
import PDF from '../assets/Resume.pdf';

const Header = ({}) => {
  return (
    <header>
      <h1><Link to="/">Emily Fang</Link></h1>
      <div id="side-menu">
        <ul>
          <li><a href={PDF} target="_blank" rel="noreferrer" >Resume</a></li>
          <li><a href="https://github.com/ef1301/ef1301.github.io">Source Code</a></li>
        </ul>
      </div>
    </header>
  );
}


export default Header;
