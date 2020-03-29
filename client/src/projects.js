import React from "react";
import "./App.css";
import {
  Card,
  CardTitle,
  CardText,
  CardMenu,
  CardActions,
  Button
} from "react-mdl";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

function Projects() {
  return (
    <div className="projects-grid">
      {/* Card 1 */}

      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT25ZU4SEpMmV6IgLuXL1ZRKJtbeHAK4TP76pv_POgoBGIZ1eZl) center / cover"
          }}
        ></CardTitle>
        <CardText>Favorite Giphy Storage App</CardText>
        <CardActions border>
          <Button href={"https://giphyapp017co.herokuapp.com"} colored>
            Live Demo
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>

      {/* Card 2 */}

      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_TlwaQGJi_HDB-yDSAXBBuqkTQImj4KUp5PHZZcrquknDHaqj) center / cover"
          }}
        ></CardTitle>
        <CardText>Employee Directory App</CardText>
        <CardActions border>
          <Button href={"https://morning-lake-75256.herokuapp.com/"} colored>
            Live Demo
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>

      {/* Card 3 */}

      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://image.shutterstock.com/image-photo/gym-day-schedule-pencil-260nw-553690546.jpg) center / cover"
          }}
        ></CardTitle>
        <CardText>Day Planner App</CardText>
        <CardActions border>
          <Button
            href={"https://abarre2009.github.io/Homework05/index.html"}
            colored
          >
            Live Demo
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>

      {/* card 4 */}

      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP_HDgI3TJN073VHRLaPKUjRox4CEiX85IGhadkKqApiFI4Nlg) center / cover"
          }}
        ></CardTitle>
        <CardText>Voting Info App</CardText>
        <CardActions border>
          <Button
            href={
              "https://abarre2009.github.io/team-fullhouse-project-1/project01/index.html"
            }
            colored
          >
            Live Demo
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>
    </div>
  );
}

export default Projects;
