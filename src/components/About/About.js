import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./About.css";

function About() {
  return (
    <Container fluid className="about-section">
      <div className="about-background"></div>
      <Particle />
      <Container>
        <div className="section-title-container text-center mb-5">
          <h1 className="section-title">
            About <span className="highlight-text">Me</span>
          </h1>
          <div className="section-title-underline mx-auto"></div>
        </div>
        
        <Row className="about-content-row">
          <Col lg={7} md={12} className="about-card-col">
            <Aboutcard />
          </Col>
          
          <Col lg={5} md={12} className="about-img-col">
            <div className="about-img-container">
              <div className="about-img-background"></div>
              <img src={laptopImg} alt="Developer working on laptop" className="img-fluid about-image" loading="lazy" />
            </div>
          </Col>
        </Row>
        
        <div className="tech-section">
          <div className="section-title-container text-center mb-5">
            <h2 className="section-title">
              Tech <span className="highlight-text">Stack</span>
            </h2>
            <div className="section-title-underline mx-auto"></div>
          </div>
          
          <Techstack />
        </div>
        
        <div className="tools-section">
          <div className="section-title-container text-center mb-5">
            <h2 className="section-title">
              <span className="highlight-text">Tools</span> I Use
            </h2>
            <div className="section-title-underline mx-auto"></div>
          </div>
          
          <Toolstack />
        </div>
        
        <div className="github-section">
          <div className="section-title-container text-center mb-5">
            <h2 className="section-title">
              My <span className="highlight-text">GitHub</span> Contributions
            </h2>
            <div className="section-title-underline mx-auto"></div>
          </div>
          
          <Github />
        </div>
      </Container>
    </Container>
  );
}

export default About;
