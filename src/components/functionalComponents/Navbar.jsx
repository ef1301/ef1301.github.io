import React from 'react';

const Navbar = ({refs, scroll}) => {
  return (
    <nav>
      <div id="nav-collapsed"></div>
      <ul id="nav-links">
        <li onClick={scroll.scrollToAbout}>
          <a href="#0" >About</a>
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
    </nav>
  );
}

export default Navbar;
