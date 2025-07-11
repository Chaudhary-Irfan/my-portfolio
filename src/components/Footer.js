import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiTwotoneMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="footer-wrapper">
      <div className="footer-divider">
        <div className="footer-divider-line"></div>
      </div>
      
      <Container fluid className="footer">
        <Row className="footer-content">
          <Col lg="4" md="6" className="footer-about mb-4 mb-md-0">
            <h2 className="footer-title">Chaudhary Irfan</h2>
            <p className="footer-description">
              A passionate Full Stack Developer specializing in building exceptional digital experiences with modern technologies.
            </p>
            <div className="footer-nav">
              <Link to="/" className="footer-nav-link">Home</Link>
              <Link to="/about" className="footer-nav-link">About</Link>
              <Link to="/project" className="footer-nav-link">Projects</Link>
              <Link to="/resume" className="footer-nav-link">Resume</Link>
            </div>
          </Col>
          
          <Col lg="4" md="6" className="footer-contact mb-4 mb-lg-0">
            <h2 className="footer-title">Contact</h2>
            <p className="footer-contact-item">
              <span className="footer-contact-label">Email:</span>
              <a href="mailto:chaudharyirfan0420@gmail.com" className="footer-contact-value">
                chaudharyirfan0420@gmail.com
              </a>
            </p>
            <p className="footer-contact-item">
              <span className="footer-contact-label">WhatsApp:</span>
              <a 
                href="https://wa.me/923185248744?text=Hi%20Irfan,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                className="footer-contact-value"
                target="_blank" 
                rel="noopener noreferrer"
              >
                +92 318 5248744
              </a>
            </p>
            <p className="footer-contact-item">
              <span className="footer-contact-label">Location:</span>
              <span className="footer-contact-value">Pakistan</span>
            </p>
          </Col>
          
          <Col lg="4" md="12" className="footer-social">
            <h2 className="footer-title">Connect</h2>
            <p className="footer-social-text">Follow me on social media to stay updated with my latest projects and activities.</p>
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/Chaudhary-Irfan"
                  className="footer-social-icon github"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/923185248744?text=Hi%20Irfan,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                  className="footer-social-icon whatsapp"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chaudhary-irfan"
                  className="footer-social-icon linkedin"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:chaudharyirfan0420@gmail.com?subject=Regarding%20Your%20Portfolio&body=Hi%20Irfan%2C%0A%0AI%20just%20visited%20your%20developer%20portfolio%20and%20wanted%20to%20get%20in%20touch%20with%20you."
                  className="footer-social-icon email"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Email Contact"
                >
                  <AiTwotoneMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <Row className="footer-bottom">
          <Col md="6" className="footer-copyright">
            <p>© {year} Chaudhary Irfan. All Rights Reserved.</p>
          </Col>
          <Col md="6" className="footer-credit">
            <p>Designed and Developed with <span className="heart">❤️</span> by Chaudhary Irfan</p>
          </Col>
        </Row>
      </Container>
      
      <Button 
        onClick={scrollToTop} 
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        <AiOutlineArrowUp />
      </Button>
    </footer>
  );
}

export default Footer;
