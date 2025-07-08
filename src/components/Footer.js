import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiTwotoneMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Chaudhary Irfan</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Chaudhary-Irfan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/923185248744?text=Hi%20Irfan,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/chaudhary-irfan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:chaudharyirfan0420@gmail.com?subject=Regarding%20Your%20Portfolio&body=Hi%20Irfan%2C%0A%0AI%20just%20visited%20your%20developer%20portfolio%20and%20wanted%20to%20get%20in%20touch%20with%20you."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiTwotoneMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
