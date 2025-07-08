import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chaudhury Irfan</span> from{" "}
            <span className="purple">Rawalpindi, Pakistan</span>.
            <br />
            I'm currently working as a Mobile & Web App Developer at Maxremind Inc.
            <br />
            I specialize in developing cross-platform mobile applications using{" "}
            <b className="purple">React Native</b> and also build dynamic, responsive web frontends using{" "}
            <b className="purple">React JS, MUI, .NET, and HTML5</b>.
            <br />
            Additionally, I support backend development using{" "}
            <b className="purple">Django and Node js</b>, contributing to full-stack solutions.
            <br />
            I'm pursuing my Bachelor's in Information Technology from Foundation University with a CGPA of 3.57.
            <br />
            <br />
            Outside of coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new web and mobile tech stacks
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing sleek UIs with MUI and custom CSS
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in development competitions & hackathons
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I aim to craft clean, scalable solutions that deliver real impact."
          </p>
          <footer className="blockquote-footer">Chaudhury Irfan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
