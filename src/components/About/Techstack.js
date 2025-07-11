import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit } from "react-icons/di";
import { SiDjango, SiMongodb, SiFirebase, SiMysql, SiExpo, SiPostgresql, SiDotnet, SiMui, SiVisualstudio } from "react-icons/si";
import { FaDatabase, FaLaptopCode, FaMobileAlt, FaTools } from "react-icons/fa";

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React.js / React Native" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <DiPython />, name: "Python" },
    { icon: <SiMui />, name: "Material UI (MUI)" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiMysql />, name: "MySQL (SQL)" },
    { icon: <SiMongodb />, name: "MongoDB (NoSQL)" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiExpo />, name: "Expo (React Native)" },
    { icon: <DiGit />, name: "Git & Version Control" },
    { icon: <FaMobileAlt />, name: "Mobile App Development" },
    { icon: <FaLaptopCode />, name: "Web Development" },
    { icon: <FaTools />, name: "Full Stack Engineering" },
    { icon: <FaDatabase />, name: "Database Management" }
  ];

  return (
    <Row className="tech-stack-container">
      {techs.map((tech, index) => (
        <Col xs={4} md={3} lg={2} className="tech-icon-col" key={index}>
          <div className="tech-icon-card">
            <div className="tech-icon-wrapper">
              {tech.icon}
            </div>
            <p className="tech-name">{tech.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
