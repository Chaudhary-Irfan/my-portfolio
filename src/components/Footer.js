import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiTwotoneMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaLinkedinIn, FaCode, FaMobileAlt, FaServer, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

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
      <div className="footer-wave-container">
        <svg className="footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(79, 70, 229, 0.1)" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <Container fluid className="footer">
        <Row className="footer-content">
          <Col lg="4" md="6" className="footer-about mb-4 mb-md-0">
            <h2 className="footer-title">Chaudhary Irfan</h2>
            <div className="footer-specialties">
              <div className="footer-specialty">
                <FaCode className="specialty-icon" />
                <span>Web Development</span>
              </div>
              <div className="footer-specialty">
                <FaMobileAlt className="specialty-icon" />
                <span>Mobile Apps</span>
              </div>
              <div className="footer-specialty">
                <FaServer className="specialty-icon" />
                <span>Backend Solutions</span>
              </div>
            </div>
            <p className="footer-description">
              A passionate Full Stack Developer specializing in building exceptional digital experiences with modern technologies.
            </p>
            <div className="footer-nav">
              <Link to="/" className="footer-nav-link">Home</Link>
              <Link to="/about" className="footer-nav-link">About</Link>
              <Link to="/project" className="footer-nav-link">Projects</Link>
              <Link to="/services" className="footer-nav-link">Services</Link>
              <Link to="/resume" className="footer-nav-link">Resume</Link>
            </div>
          </Col>
          
          <Col lg="4" md="6" className="footer-contact mb-4 mb-lg-0">
            <h2 className="footer-title">Contact</h2>
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <div className="contact-details">
                <span className="footer-contact-label">Email:</span>
                <a href="mailto:chaudharyirfan0420@gmail.com" className="footer-contact-value">
                  chaudharyirfan0420@gmail.com
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <AiOutlineWhatsApp className="contact-icon" />
              </div>
              <div className="contact-details">
                <span className="footer-contact-label">WhatsApp:</span>
                <a 
                  href="https://wa.me/923185248744?text=Hi%20Irfan,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                  className="footer-contact-value"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  +92 318 5248744
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <div className="contact-details">
                <span className="footer-contact-label">Location:</span>
                <span className="footer-contact-value">Rawalpindi, Pakistan</span>
              </div>
            </div>
            <div className="footer-availability">
              <div className="availability-indicator available"></div>
              <span>Available for freelance projects</span>
            </div>
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
                  <span className="icon-tooltip">GitHub</span>
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
                  <span className="icon-tooltip">WhatsApp</span>
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
                  <span className="icon-tooltip">LinkedIn</span>
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
                  <span className="icon-tooltip">Email</span>
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
