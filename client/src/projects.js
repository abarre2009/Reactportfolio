import React from "react";
import "./App.css";
import { Card, CardTitle, CardText } from "react-mdl";

function Projects() {
  return (
    <div className="projects-grid">
      <Card>
        <CardTitle>
          <a href="https://giphyapp017co.herokuapp.com/">
            <img
              src="data:image/png;base64,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"
              alt="giphy"
            />
          </a>
        </CardTitle>
        <CardText>Basic Mern Stack application</CardText>
      </Card>
    </div>
  );
}

export default Projects;
