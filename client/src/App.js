import React from "react";
import "./App.css";
import Nav from "./Nav";
import Contact from "./Contact";
import Projects from "./projects";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Welcome to my portfolio.</h1>
  </div>
);

export default App;
