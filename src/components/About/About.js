import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ScrollAnimation from "../ScrollAnimation";
import "./About.css";

function About() {
  return (
    <Container fluid className="about-section">
      <div className="about-background"></div>
      <Particle />
      <Container>
        <ScrollAnimation animationType="fade-in" duration="slow">
          <div className="section-title-container text-center mb-5">
            <h1 className="section-title">
              About <span className="highlight-text">Me</span>
            </h1>
            <div className="section-title-underline mx-auto"></div>
          </div>
        </ScrollAnimation>
        
        <Row className="about-content-row">
          <Col lg={7} md={12} className="about-card-col">
            <ScrollAnimation animationType="slide-right" duration="normal">
              <Aboutcard />
            </ScrollAnimation>
          </Col>
          
          <Col lg={5} md={12} className="about-img-col">
            <ScrollAnimation animationType="slide-left" duration="normal">
              <div className="about-img-container">
                <div className="about-img-background"></div>
                <img src={laptopImg} alt="Developer working on laptop" className="img-fluid about-image float" loading="lazy" />
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
        
        <div className="tech-section">
          <ScrollAnimation animationType="fade-in" duration="normal">
            <div className="section-title-container text-center mb-5">
              <h2 className="section-title">
                Tech <span className="highlight-text">Stack</span>
              </h2>
              <div className="section-title-underline mx-auto"></div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-in" stagger={true} threshold={0.1}>
            <Techstack />
          </ScrollAnimation>
        </div>
        
        <div className="tools-section">
          <ScrollAnimation animationType="fade-in" duration="normal">
            <div className="section-title-container text-center mb-5">
              <h2 className="section-title">
                <span className="highlight-text">Tools</span> I Use
              </h2>
              <div className="section-title-underline mx-auto"></div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="slide-up" stagger={true} threshold={0.1}>
            <Toolstack />
          </ScrollAnimation>
        </div>
        
        <div className="github-section">
          <ScrollAnimation animationType="fade-in" duration="normal">
            <div className="section-title-container text-center mb-5">
              <h2 className="section-title">
                My <span className="highlight-text">GitHub</span> Contributions
              </h2>
              <div className="section-title-underline mx-auto"></div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="zoom-in" duration="slow">
            <Github />
          </ScrollAnimation>
        </div>
      </Container>
    </Container>
  );
}

export default About;
