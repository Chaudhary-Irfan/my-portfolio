import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="about-card">
      <Card.Body className="about-card-body">
        <h2 className="about-greeting">
          Hello, I'm <span className="highlight-text">Chaudhary Irfan</span>
        </h2>
        
        <div className="about-info-item">
          <FaMapMarkerAlt className="about-icon" />
          <span>Based in <span className="highlight-text">Rawalpindi, Pakistan</span></span>
        </div>
        
        <div className="about-info-item">
          <FaBriefcase className="about-icon" />
          <span>Working as a <span className="highlight-text">Mobile & Web App Developer</span> at Maxremind Inc.</span>
        </div>
        
        <div className="about-info-item">
          <FaGraduationCap className="about-icon" />
          <span>Pursuing Bachelor's in Information Technology from Foundation University (CGPA: 3.57)</span>
        </div>
        
        <div className="about-description">
          <p>
            I specialize in developing cross-platform mobile applications using{" "}
            <b className="highlight-text">React Native</b> and also build dynamic, responsive web frontends using{" "}
            <b className="highlight-text">React JS, MUI, .NET, and HTML5</b>.
          </p>
          <p>
            Additionally, I support backend development using{" "}
            <b className="highlight-text">Django and Node.js</b>, contributing to full-stack solutions.
          </p>
        </div>
        
        <div className="about-interests">
          <h3 className="interests-title">
            <FaCode className="about-icon" /> Beyond Coding
          </h3>
          <ul className="interests-list">
            <li className="about-activity">
              <ImPointRight className="activity-icon" /> Exploring new web and mobile tech stacks
            </li>
            <li className="about-activity">
              <ImPointRight className="activity-icon" /> Designing sleek UIs with MUI and custom CSS
            </li>
            <li className="about-activity">
              <ImPointRight className="activity-icon" /> Participating in development competitions & hackathons
            </li>
          </ul>
        </div>

        <div className="about-quote">
          <p>"I aim to craft clean, scalable solutions that deliver real impact."</p>
          <footer className="quote-author">- Chaudhary Irfan</footer>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
