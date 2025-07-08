import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaMobileAlt, FaGamepad, FaReact, FaShoppingCart, FaBrain, FaUserGraduate, FaChartBar, FaCode, FaCalendarCheck, FaEnvelopeOpenText } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently across mobile, web, and full-stack development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaMobileAlt />}
              title="Real-Time ChatApp"
              description="Cross-platform chat app built using React Native (Expo), Django, and SQL Server. Supports real-time messaging, secure authentication, and scalable backend."
              ghLink="https://github.com/Chaudhary-Irfan/ChatApp/tree/main/myproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaShoppingCart />}
              title="E-commerce Website"
              description="Responsive online store with admin panel built using React JS and MUI. Features product browsing, cart management, and admin control (use Ecommerce branch)."
              ghLink="https://github.com/Chaudhary-Irfan/my-app-React-Js-/tree/Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaGamepad />}
              title="Children Learning Game"
              description="Interactive web game for children built using PHP, HTML, CSS, and SQL. Designed for early education and engagement."
              ghLink="https://github.com/Chaudhary-Irfan/Children_Game_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaChartBar />}
              title="Quiz App"
              description="Web-based quiz application using React JS and MUI. Fully responsive and deployed on Vercel."
              ghLink="https://github.com/Chaudhary-Irfan/quiz-app"
              demoLink="https://quiz-app-git-main-chaudhary-irfans-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaCode />}
              title="TechSpyrce Portfolio"
              description="Personal portfolio website built with React JS. Highlights project showcase, skills, and contact sections."
              ghLink="https://github.com/Chaudhary-Irfan/TechSpyrce-Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaCalendarCheck />}
              title="Attendance & Duty Module"
              description="Client project built in React Native for attendance tracking and duty assignment. Mobile-first approach with a clean UI. [Private repo]"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaMobileAlt />}
              title="Shop Management App"
              description="React Native Expo app for managing shop inventory and sales records. Developed as a private client project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaBrain />}
              title="TB Diagnosis App"
              description="Android app using Java and XML for tuberculosis detection support. Built with Android Studio for a client. [Private project]"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaEnvelopeOpenText />}
              title="Email & WhatsApp Integration App"
              description="React Native and Node.js based app for handling WhatsApp and Email communication from a single interface. [Client project – private]"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaMobileAlt />}
              title="Ride Booking App (Frontend)"
              description="Frontend UI for ride booking mobile app built with React Native and Expo. [Client project – private]"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
