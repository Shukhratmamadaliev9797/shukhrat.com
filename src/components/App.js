import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "../pages/Header";
import About from "../pages/About";
import "../styles/app.scss";
import Skills from "../pages/skills";
import "../";

class App extends Component {
  render() {
    return (
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills} />
          </Switch>
        </AnimatePresence>
      </Router>
    );
  }
}

export default App;
