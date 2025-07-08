import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit } from "react-icons/di";
import { SiDjango, SiMongodb, SiFirebase, SiMysql, SiExpo, SiPostgresql, SiDotnet, SiMui, SiVisualstudio } from "react-icons/si";
import { FaDatabase, FaLaptopCode, FaMobileAlt, FaTools } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js / React Native" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango title="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui title="Material UI (MUI)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet title=".NET" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL (SQL)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB (NoSQL)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiExpo title="Expo (React Native)" />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git & Version Control" />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <FaMobileAlt title="Mobile App Development" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaptopCode title="Web Development" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTools title="Full Stack Engineering" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase title="Data Visualization & DB Tools" />
      </Col>
    </Row>
  );
}

export default Techstack;
