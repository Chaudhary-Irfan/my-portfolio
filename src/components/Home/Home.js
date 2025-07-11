import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  const heroRef = useRef(null);

  // Add a subtle animation effect when the component mounts
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("fade-in");
    }
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className="home-header" ref={heroRef}>
              <div className="hero-badge">
                <span>Full Stack Developer</span>
              </div>
              
              <h1 className="hero-title">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M {" "}
                <strong className="main-name">  Chaudhary Irfan</strong>
              </h1>

              <div className="hero-type-wrapper">
                <Type />
              </div>
              
              <p className="hero-description">
                I build exceptional digital experiences with modern technologies.
                Specializing in creating responsive, high-performance applications
                that solve real-world problems.
              </p>
              
              <div className="hero-buttons">
                <Button 
                  as={Link} 
                  to="/project" 
                  className="primary-button"
                  aria-label="View my projects"
                >
                  View My Work <FiArrowRight className="ms-2" />
                </Button>
                
                <Button 
                  as={Link} 
                  to="/resume" 
                  className="secondary-button ms-3"
                  aria-label="Download my resume"
                >
                  Resume <AiOutlineDownload className="ms-2" />
                </Button>
              </div>
              
              <div className="tech-stack">
                <span>Tech Stack:</span>
                <div className="tech-icons-small">
                  <div className="tech-icon">React</div>
                  <div className="tech-icon">Django</div>
                  <div className="tech-icon">React Native</div>
                  <div className="tech-icon">Python</div>
                </div>
              </div>
            </Col>

            <Col lg={5} md={12} className="home-img-column">
              <div className="home-image-container">
                <div className="home-image-background"></div>
                <img
                  src={homeLogo}
                  alt="developer illustration"
                  className="img-fluid home-main-icon"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
