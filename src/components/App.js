import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../pages/Header";
import About from "../pages/About";
import "../styles/app.scss";
import Skills from "../pages/Skills";
import Services from "../pages/Services";
import Projects from "../pages/Projects";

import Contact from "../pages/Contact";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="home">
          <div className="home__navbar">
            <Navbar />
          </div>
          <div className="home">
            <div className="home__content">
              <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/about" exact component={About} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/services" exact component={Services} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/contact" exact component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
