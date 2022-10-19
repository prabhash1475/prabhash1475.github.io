import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prabhash Kumar </span>
            from <span className="purple"> Supaul, Bihar, India.</span>
            <br />A passionate Developer, with strong administrative and
            communication skills, good attention to detail and with the ability
            to write efficient code using MERN Stack.
            <br />
            <br/>
            <br />I have been developing Web Apps for over 6 months now. Well
            versed in coding using Javascript and its frameworks.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prabhash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
