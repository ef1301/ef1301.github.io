import React, {useState, useRef} from 'react';

import './styles/functional.css';
import './styles/responsive.css';
import './styles/utils.css';

//import { shootLines } from './styles/basic-utils.js';

//Components
import About from './components/containers/About.js';
//import Projects from './components/containers/Projects.js';
import Hobbies from './components/containers/Hobbies.js';
import {
  Header,
  Navbar,
  Footer
} from "./components/functionalComponents";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const aboutRef = useRef(null);
  const hobbiesRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  const scrollToAbout = () => scrollToRef(aboutRef);
  const scrollToHobbies = () => scrollToRef(hobbiesRef);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Navbar refs={{aboutRef,hobbiesRef}} scroll={{scrollToAbout, scrollToHobbies}} />
      <section id="page-body">
        <div ref={aboutRef}>
          <About ref={aboutRef}/>
        </div>
        <div ref={hobbiesRef}>
          <Hobbies ref={hobbiesRef}/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
