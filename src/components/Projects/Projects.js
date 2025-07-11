import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaMobileAlt, FaGamepad, FaReact, FaShoppingCart, FaBrain, FaUserGraduate, FaChartBar, FaCode, FaCalendarCheck, FaEnvelopeOpenText } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [animatedItems, setAnimatedItems] = useState([]);

  // Project data with categories
  const projects = [
    {
      id: 1,
      icon: <FaMobileAlt />,
      title: "Real-Time ChatApp",
      description: "Cross-platform chat app built using React Native (Expo), Django, and SQL Server. Supports real-time messaging, secure authentication, and scalable backend.",
      ghLink: "https://github.com/Chaudhary-Irfan/ChatApp/tree/main/myproject",
      category: "mobile"
    },
    {
      id: 2,
      icon: <FaShoppingCart />,
      title: "E-commerce Website",
      description: "Responsive online store with admin panel built using React JS and MUI. Features product browsing, cart management, and admin control (use Ecommerce branch).",
      ghLink: "https://github.com/Chaudhary-Irfan/my-app-React-Js-/tree/Ecommerce",
      category: "web"
    },
    {
      id: 3,
      icon: <FaGamepad />,
      title: "Children Learning Game",
      description: "Interactive web game for children built using PHP, HTML, CSS, and SQL. Designed for early education and engagement.",
      ghLink: "https://github.com/Chaudhary-Irfan/Children_Game_Project",
      category: "web"
    },
    {
      id: 4,
      icon: <FaChartBar />,
      title: "Quiz App",
      description: "Web-based quiz application using React JS and MUI. Fully responsive and deployed on Vercel.",
      ghLink: "https://github.com/Chaudhary-Irfan/quiz-app",
      demoLink: "https://quiz-app-git-main-chaudhary-irfans-projects.vercel.app/",
      category: "web"
    },
    {
      id: 5,
      icon: <FaCode />,
      title: "TechSpyrce Portfolio",
      description: "Personal portfolio website built with React JS. Highlights project showcase, skills, and contact sections.",
      ghLink: "https://github.com/Chaudhary-Irfan/TechSpyrce-Portfolio",
      category: "web"
    },
    {
      id: 6,
      icon: <FaCalendarCheck />,
      title: "Attendance & Duty Module",
      description: "Client project built in React Native for attendance tracking and duty assignment. Mobile-first approach with a clean UI. [Private repo]",
      category: "mobile"
    },
    {
      id: 7,
      icon: <FaMobileAlt />,
      title: "Shop Management App",
      description: "React Native Expo app for managing shop inventory and sales records. Developed as a private client project.",
      category: "mobile"
    },
    {
      id: 8,
      icon: <FaBrain />,
      title: "TB Diagnosis App",
      description: "Android app using Java and XML for tuberculosis detection support. Built with Android Studio for a client. [Private project]",
      category: "mobile"
    },
    {
      id: 9,
      icon: <FaEnvelopeOpenText />,
      title: "Email & WhatsApp Integration App",
      description: "React Native and Node.js based app for handling WhatsApp and Email communication from a single interface. [Client project – private]",
      category: "fullstack"
    },
    {
      id: 10,
      icon: <FaMobileAlt />,
      title: "Ride Booking App (Frontend)",
      description: "Frontend UI for ride booking mobile app built with React Native and Expo. [Client project – private]",
      category: "mobile"
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Initialize animation when component mounts
  useEffect(() => {
    setAnimatedItems(filteredProjects.map(project => project.id));
  }, []);

  // Update animation when filter changes
  useEffect(() => {
    setAnimatedItems([]);
    const timer = setTimeout(() => {
      setAnimatedItems(filteredProjects.map(project => project.id));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <Container fluid className="project-section">
      <div className="project-background"></div>
      <Particle />
      <Container>
        <div className="section-title-container text-center">
          <h1 className="section-title">
            My Recent <span className="highlight-text">Projects</span>
          </h1>
          <div className="section-title-underline mx-auto"></div>
        </div>
        
        <p className="project-subtitle">
          Here are some projects I've worked on recently across mobile, web, and full-stack development.
        </p>
        
        <div className="project-filter-container">
          <Button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button 
            className={`filter-button ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </Button>
          <Button 
            className={`filter-button ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </Button>
          <Button 
            className={`filter-button ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </Button>
        </div>
        
        <Row className="project-card-container">
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} className="project-card-col" key={project.id}>
              <div
                className={`project-card-wrapper ${animatedItems.includes(project.id) ? 'animate' : ''}`}
              >
                <ProjectCard
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
