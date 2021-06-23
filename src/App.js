import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/functional.scss";
import "./styles/responsive.scss";
import "./styles/animation.scss";
import "./styles/utils.scss";
//Components
import About from "./components/containers/About.js";
import Hobbies from "./components/containers/Hobbies.js";
import Projects from "./components/containers/Projects";
import WorkingOnIt from "./components/containers/WorkingOnIt.js";
import { Header, Navbar, Footer } from "./components/functionalComponents";

//import { OutsideClick } from "./components/utils/basic-utils";

//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const [ready,setReady] = useState(false);
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

  const AboutComponent = () => <About japtrans={japtrans} />;
  const WorkingOnItComponent = () => <WorkingOnIt japtrans={japtrans} />;

  useEffect(() => {
    const handleReady = () => setReady(true);
    handleReady();
  }, []);

  return (
    <div className="App" style={{ visibility: ready ? 'visible' : 'hidden' }} data-theme={darkMode ? "dark" : "light"} basename={process.env.PUBLIC_URL} >
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
            <Route exact path="/" component={AboutComponent} />
            {/*<Route exact path="/about" component={About} />*/}
            <Route exact path="/hobbies" component={Hobbies} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/comingsoon" component={WorkingOnItComponent} />
            <Route exact path="/veganism" component={WorkingOnItComponent} />
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
