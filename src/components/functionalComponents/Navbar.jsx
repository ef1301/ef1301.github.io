import React from 'react';

const Navbar = ({refs, scroll}) => {
  return (
    <nav>
      <ul>
        <li onClick={scroll.scrollToAbout}>About</li>
        <li onClick={scroll.scrollToHobbies}>Hobbies</li>
        {/*<li onClick={scrollSmoothHandler(refs.projectsRef)}>Projects</li>
            <li onClick={scrollSmoothHandler(refs.hobbiesRef)}>Hobbies</li>*/}
      </ul>
    </nav>
  );
}

export default Navbar;
