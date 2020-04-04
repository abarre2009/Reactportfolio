import React from "react";
import "./App.css";
import Nav from "./Nav";
import Contact from "./components/Contact";
import Projects from "./components/projects";
import About from "./components/About";
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
const Home = () => {
  return (
    <div>
      <h1>Welcome to my portfolio!</h1>
    </div>
  );
};
export default App;
