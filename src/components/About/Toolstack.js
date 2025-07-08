import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiPostman,
  SiVercel,
  SiSlack,
  SiGithub,
  SiExpo,
  SiFigma,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio title="Visual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpo title="Expo CLI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel (Hosting)" />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack" />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal title="CLI / Terminal" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma title="Figma (UI Collaboration)" />
      </Col>
    </Row>
  );
}

export default Toolstack;
