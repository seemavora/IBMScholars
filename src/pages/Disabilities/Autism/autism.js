import React, { Component } from "react";
import Navbar from "../../../components/navbar/navbar.js";
import GameLayout from "../Autism/gameLayout.js";
import "./disabilities.css";
import abc from "./pictures/abc-blocks1.png";
import matching from "./pictures/matching.jpg";
import phonics from "./pictures/writing-abc.jpg";
const { AutismColors } = require("../../../const");
export default class Autism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: AutismColors.blue,
      activeTab: "1",
      activities: [
        {
          name: "ABC Lesson",
          link: "/lesson",
          pic: abc
        },
        {
          name: "Matching",
          link: "/matching",
          pic: matching
        },
        {
          name: "Letter Sounds",
          link: "/soundgame",
          pic: phonics
        }
      ]
    };
  }

  componentDidMount() {
    this.initTheme();
  }

  initTheme() {
    let theme = JSON.parse(localStorage.getItem("theme"));
    theme && this.setState({ theme: theme });
  }

  render() {
    let activities = this.state.activities.map(activities => {
      return (
        <li className="flex-items">
          <GameLayout activities={activities} />
        </li>
      );
    });
    return (
      <div className="overview">
        <Navbar autism={() => this.initTheme()} />
        <div style={{ width: "100%", margin: "auto" }}>
          <div style={{ backgroundColor: this.state.theme.light }} className="autism-page">
            <ul
              className="flex-container wrap-reversez"
            >
              <div className="banner-texts">
                <h1>About Us</h1>
                <hr />
                <p
                  className="lead text-center"
                  style={{ backgroundColor: this.state.theme.normal }}
                >
                  {" "}
                  Learn Your ABCs!
                </p>
              </div>
              {activities}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
