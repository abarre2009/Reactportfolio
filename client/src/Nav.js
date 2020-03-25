import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="header-color">
      <h3>Abdul Barre</h3>
      <ul className="nav-links">
        <Link to="./about">
          <li>About</li>
        </Link>
        <Link to="./projects">
          <li>Projects</li>
        </Link>
        <Link to="./Skills">
          <li>Skills</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
