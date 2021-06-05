import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/functional.css";
import "./styles/responsive.css";
import "./styles/utils.css";
//Components
import About from "./components/containers/About.js";
//import Hobbies from "./components/containers/Hobbies.js";
import WorkingOnIt from "./components/containers/WorkingOnIt.js";
import { Header, Navbar, Footer } from "./components/functionalComponents";
import Window from "./components/utils/window";

//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [japtrans, setJap] = useState(false);

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  const toggleJap = () => setJap(japtrans ? false : true);

  const WorkingOnItComponent = () => <WorkingOnIt japtrans={japtrans} />;

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          japtrans={japtrans}
          toggleJap={toggleJap}
        />
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          japtrans={japtrans}
          toggleJap={toggleJap}
        />
        <div id="page-body">
          <Switch>
            <Route exact path="/" render={() => <Window />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/hobbies" component={WorkingOnItComponent} />
            <Route exact path="/projects" component={WorkingOnItComponent} />
            <Route exact path="/contact" component={WorkingOnItComponent} />
          </Switch>
        </div>
        <Footer japtrans={japtrans} />
      </Router>
    </div>
  );
}

export default App;
