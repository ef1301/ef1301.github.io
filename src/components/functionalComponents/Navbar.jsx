import React from 'react';
import mojs from "@mojs/core";

function shootLines(e) {
  console.log(e);
  const itemDim = e.target.getBoundingClientRect(),
        itemSize = {
          x: itemDim.right - itemDim.left,
          y: itemDim.bottom - itemDim.top,
        },
        shapes = ['line', 'zigzag'],
        colors = ['#2FB5F3',
                  '#FF0A47',
                  '#FF0AC2',
                  '#47FF0A'];

  const chosenC = Math.floor(Math.random() * colors.length),
        chosenS = Math.floor(Math.random() * shapes.length);

  // create shape
  const burst = new mojs.Burst({
    left: itemDim.left + (itemSize.x/2),
    top: itemDim.top + (itemSize.y/2),
    radiusX: itemSize.x,
    radiusY: itemSize.y,
    count: 10,

    children: {
      shape: shapes[chosenS],
      radius: 10,
      scale: {0.8: 1},
      fill: 'none',
      points: 7,
      stroke: colors[chosenC],
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%' : '100%' },
      duration: 350,
      delay: 100,
      easing: 'quad.out',
      isShowEnd: false,
    }
  });

  burst.play();
}

const Navbar = ({refs, scroll}) => {
  return (
    <nav>
      <ul id="nav-links">
        <li onClick={scroll.scrollToAbout}><a onMouseEnter={shootLines} >About</a></li>
        <li><a onMouseEnter={shootLines}>Projects</a></li>
        <li onClick={scroll.scrollToHobbies}><a onMouseEnter={shootLines}>Hobbies</a></li>
        <li><a onMouseEnter={shootLines}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
