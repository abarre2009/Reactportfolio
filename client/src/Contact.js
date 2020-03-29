import React from "react";
import "./App.css";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

function Contact() {
  return (
    <div className="App">
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Abdul Barre</h2>
            <img
              src="http://imageshack.com/a/img924/2283/ajO1hT.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              <h5> Welcome </h5>
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    Cell: (612) 407-7781
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    Email: abarre2009@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  ></ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
