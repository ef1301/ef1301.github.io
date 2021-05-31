import React from 'react';

const Navbar = ({refs, scroll}) => {
  return (
    <nav>
      <ul id="nav-links">
        <li onClick={scroll.scrollToAbout}>About</li>
        <li onClick={scroll.scrollToHobbies}>Hobbies</li>
      </ul>
    </nav>
  );
}

export default Navbar;
