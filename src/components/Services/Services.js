import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import ScrollAnimation from "../ScrollAnimation";
import "./Services.css";
import { 
  FaCode, 
  FaMobile, 
  FaChartLine, 
  FaPlug, 
  FaTools,
  FaReact,
  FaDatabase,
  FaServer,
  FaCloud,
  FaShieldAlt
} from "react-icons/fa";
import { MdDashboard, MdApi } from "react-icons/md";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Full-stack Web App Development",
      description: "End-to-end web application development using modern technologies like React, Django, Node.js, and Python. From concept to deployment, I create scalable, responsive, and high-performance web applications.",
      features: [
        "Frontend: React, Next.js, Vue.js",
        "Backend: Django, Node.js, Express",
        "Database: PostgreSQL, MongoDB, MySQL",
        "Cloud: AWS, Heroku, Vercel"
      ],
      color: "primary"
    },
    {
      icon: <FaMobile />,
      title: "Mobile App UI Development",
      description: "Cross-platform mobile application development using React Native. Create beautiful, native-feeling mobile apps that work seamlessly on both iOS and Android platforms.",
      features: [
        "React Native Development",
        "Cross-platform Compatibility",
        "Native Performance",
        "App Store Deployment"
      ],
      color: "secondary"
    },
    {
      icon: <MdDashboard />,
      title: "Dashboard & Admin Panel Development",
      description: "Custom dashboard and admin panel solutions with intuitive interfaces, real-time data visualization, and comprehensive management features for your business needs.",
      features: [
        "Real-time Data Visualization",
        "User Management Systems",
        "Analytics & Reporting",
        "Role-based Access Control"
      ],
      color: "accent"
    },
    {
      icon: <MdApi />,
      title: "RESTful API Integration",
      description: "Seamless API development and integration services. I create robust, scalable APIs and integrate third-party services to enhance your application's functionality.",
      features: [
        "Custom API Development",
        "Third-party Integrations",
        "API Documentation",
        "Security & Authentication"
      ],
      color: "highlight"
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Deployment",
      description: "Comprehensive maintenance and deployment services to keep your applications running smoothly. From CI/CD setup to ongoing support and optimization.",
      features: [
        "CI/CD Pipeline Setup",
        "Performance Optimization",
        "Security Updates",
        "24/7 Monitoring & Support"
      ],
      color: "success"
    }
  ];

  const techStack = [
    { icon: <FaReact />, name: "React/Next.js" },
    { icon: <FaMobile />, name: "React Native" },
    { icon: <FaDatabase />, name: "Databases" },
    { icon: <FaServer />, name: "Backend APIs" },
    { icon: <FaCloud />, name: "Cloud Services" },
    { icon: <FaShieldAlt />, name: "Security" }
  ];

  return (
    <Container fluid className="services-section">
      <Particle />
      <Container>
        {/* Header Section */}
        <ScrollAnimation animationType="fade-in" duration="slow">
          <Row>
            <Col md={12} className="services-header">
              <h1 className="project-heading">
                My <strong className="purple">Services</strong>
              </h1>
              <p className="services-description">
                I offer comprehensive development services to bring your digital ideas to life.
                From concept to deployment, I provide end-to-end solutions tailored to your needs.
              </p>
            </Col>
          </Row>
        </ScrollAnimation>

        {/* Services Grid */}
        <Row className="services-grid">
          {services.map((service, index) => (
            <Col md={6} lg={4} className="service-card-col" key={index}>
              <ScrollAnimation 
                animationType="slide-up" 
                delay={index * 100}
                duration="normal"
              >
                <Card className={`service-card service-card-${service.color}`}>
                  <Card.Body>
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <Card.Title className="service-title">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="service-description">
                      {service.description}
                    </Card.Text>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          ))}
        </Row>

        {/* Technology Stack Section */}
        <ScrollAnimation animationType="fade-in" delay="300">
          <Row className="tech-stack-section">
            <Col md={12}>
              <h2 className="tech-stack-heading">
                <strong className="purple">Technologies</strong> I Work With
              </h2>
              <Row className="tech-stack-grid">
                {techStack.map((tech, index) => (
                  <Col xs={6} md={4} lg={2} key={index} className="tech-item">
                    <ScrollAnimation 
                      animationType="zoom-in" 
                      delay={index * 50}
                    >
                      <div className="tech-card">
                        <div className="tech-icon">{tech.icon}</div>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    </ScrollAnimation>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animationType="slide-up" delay="400">
          <Row className="services-cta">
            <Col md={12} className="text-center">
              <h3 className="cta-heading">
                Ready to Start Your <strong className="purple">Project</strong>?
              </h3>
              <p className="cta-description">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology and professional expertise.
              </p>
              <div className="cta-buttons">
                <a 
                  href="mailto:chaudharyirfan.dev@gmail.com" 
                  className="btn primary-button me-3"
                >
                  Get In Touch
                </a>
                <a 
                  href="https://www.linkedin.com/in/chaudhary-irfan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn secondary-button"
                >
                  View LinkedIn
                </a>
              </div>
            </Col>
          </Row>
        </ScrollAnimation>
      </Container>
    </Container>
  );
}

export default Services;