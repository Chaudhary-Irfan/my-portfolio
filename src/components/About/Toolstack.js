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
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiVisualstudio />, name: "Visual Studio" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiExpo />, name: "Expo CLI" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <FaTerminal />, name: "Terminal" },
    { icon: <SiFigma />, name: "Figma" }
  ];

  return (
    <Row className="tools-container">
      {tools.map((tool, index) => (
        <Col xs={4} md={3} lg={2} className="tool-icon-col" key={index}>
          <div className="tech-icon-card tool-card">
            <div className="tech-icon-wrapper">
              {tool.icon}
            </div>
            <p className="tech-name">{tool.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
