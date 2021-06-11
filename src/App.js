import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/functional.scss";
import "./styles/responsive.scss";
import "./styles/animation.scss";
import "./styles/utils.scss";
//Components
import About from "./components/containers/About.js";
import Hobbies from "./components/containers/Hobbies.js";
import WorkingOnIt from "./components/containers/WorkingOnIt.js";
import { Header, Navbar, Footer } from "./components/functionalComponents";
import Window from "./components/utils/window";

//import { OutsideClick } from "./components/utils/basic-utils";

//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [japtrans, setJap] = useState(false);
  const [menuOpen, setOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  const toggleJap = () => setJap(japtrans ? false : true);
  const toggleMenu = (e) => {
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    setOpen(menuOpen ? false : true);
  };

  const WorkingOnItComponent = () => <WorkingOnIt japtrans={japtrans} />;

  /*const boxRef = useRef(null);
    const collapse = () => setCollapse(boxOutsideClick);
  const boxOutsideClick = OutsideClick(boxRef); 
  console.log(boxOutsideClick);*/

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"} basename={process.env.PUBLIC_URL} >
      <Router basename={process.env.PUBLIC_URL}>
        <Header
          japtrans={japtrans}
          toggleJap={toggleJap}
          toggleCollapse={toggleMenu}
        />
        <Navbar
          japtrans={japtrans}
          toggleJap={toggleJap}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div id="page-body">
          <Switch>
            <Route exact path="/" render={() => <Window />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/hobbies" component={Hobbies} />
            <Route exact path="/projects" component={WorkingOnItComponent} />
            <Route exact path="/contact" component={WorkingOnItComponent} />
          </Switch>
        </div>
        <Footer 
        japtrans={japtrans}
        toggleJap={toggleJap}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        />
      </Router>
    </div>
  );
}

export default App;
