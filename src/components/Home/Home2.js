import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiTwotoneMail,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">Full Stack Developer</b> who loves turning ideas into functional and clean digital experiences.
              <br />
              <br />I specialize in building cross-platform mobile apps using
              <i>
                <b className="purple"> React Native</b>
              </i>
              , and I’m also experienced with web technologies like
              <i>
                <b className="purple"> React.js, Django, and Python.</b>
              </i>
              <br />
              <br />
              My areas of interest include developing
              <i>
                <b className="purple"> real-time applications</b>, scalable backend systems, and user-focused interfaces.
              </i>
              <br />
              <br />
              I’ve also worked on projects involving <b className="purple">Firebase, REST APIs</b>, and created apps that help improve communication and user interaction.
              <br />
              <br />
              I enjoy building modern, responsive apps using tools like
              <i>
                <b className="purple"> React Native, React.js</b>
              </i>{" "}
              and frameworks like
              <i>
                <b className="purple"> Django</b>
              </i>
              , always focusing on writing clean, maintainable code.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Chaudhary-Irfan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/923185248744?text=Hi%20Irfan,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chaudhary-irfan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:chaudharyirfan0420@gmail.com?subject=Regarding%20Your%20Portfolio&body=Hi%20Irfan%2C%0A%0AI%20just%20visited%20your%20developer%20portfolio%20and%20wanted%20to%20get%20in%20touch%20with%20you."
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiTwotoneMail />
                </a>
              </li>
              

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
