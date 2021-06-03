import React, {useState, useRef} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './styles/functional.css';
import './styles/responsive.css';
import './styles/utils.css';

//import { shootLines } from './styles/basic-utils.js';

//Components
import About from './components/containers/About.js';
import Hobbies from './components/containers/Hobbies.js';
import {
  Header,
  Navbar,
  Footer
} from "./components/functionalComponents";
import Window from './components/utils/window';

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
      <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Navbar 
        refs={{aboutRef,hobbiesRef}} 
        scroll={{scrollToAbout, scrollToHobbies}}
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} />
      <div id="page-body">
        <Switch>
          <Route exact path="/" render={() =><Window/>}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/hobbies" component={Hobbies}/>
        </Switch>
        {/*<div ref={aboutRef}>
          <About ref={aboutRef}/>
        </div>
        <div ref={hobbiesRef}>
          <Hobbies ref={hobbiesRef}/>
  </div>*/}
      </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;