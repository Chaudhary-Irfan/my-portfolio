import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";

function ProjectCards(props) {
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    // Add animation when component mounts
    if (cardRef.current) {
      setTimeout(() => {
        cardRef.current.classList.add('animated');
      }, 300);
    }
  }, []);
  
  return (
    <Card 
      ref={cardRef}
      className={`project-card-view ${showDetails ? 'details-active' : ''}`}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="project-card-top">
        {props.imgPath ? (
          <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-image" />
        ) : (
          <div className="project-icon-container">
            {props.icon}
          </div>
        )}
        
        {/* Overlay that appears on hover */}
        <div className="project-overlay">
          <FaInfoCircle className="info-icon" />
          <span>View Details</span>
        </div>
      </div>
      
      <Card.Body className="project-card-body">
        <div className="project-card-content">
          <Card.Title className="project-title">{props.title}</Card.Title>
          <Card.Text className="project-description">
            {props.description}
          </Card.Text>
          
          {/* Extended description that appears on hover/click */}
          <div className="project-details">
            <h5 className="details-title">Key Features:</h5>
            <ul className="details-list">
              {props.title === "Real-Time ChatApp" && (
                <>
                  <li>Cross-platform messaging with React Native</li>
                  <li>Django REST API backend with WebSockets</li>
                  <li>SQL Server for data persistence</li>
                  <li>User authentication and message encryption</li>
                </>
              )}
              {props.title === "E-commerce Website" && (
                <>
                  <li>Responsive product catalog with filtering</li>
                  <li>Shopping cart with local storage</li>
                  <li>Admin panel for product management</li>
                  <li>Material UI components for modern UI</li>
                </>
              )}
              {props.title === "Children Learning Game" && (
                <>
                  <li>Interactive educational activities</li>
                  <li>Progress tracking for young learners</li>
                  <li>Colorful, engaging interface</li>
                  <li>PHP backend with SQL database</li>
                </>
              )}
              {props.title === "Quiz App" && (
                <>
                  <li>Multiple question types and categories</li>
                  <li>Score tracking and results display</li>
                  <li>Responsive design for all devices</li>
                  <li>Deployed and hosted on Vercel</li>
                </>
              )}
              {props.title === "TechSpyrce Portfolio" && (
                <>
                  <li>Modern React components architecture</li>
                  <li>Responsive layout for all screen sizes</li>
                  <li>Project showcase with filtering</li>
                  <li>Contact form integration</li>
                </>
              )}
              {props.title === "Portfolio Website" && (
                <>
                  <li>React.js with custom animations</li>
                  <li>Dark/light mode toggle</li>
                  <li>Responsive design with Bootstrap</li>
                  <li>Project filtering by category</li>
                  <li>GitHub integration for contributions</li>
                </>
              )}
              {props.title === "Attendance & Duty Module" && (
                <>
                  <li>Real-time attendance tracking</li>
                  <li>Duty scheduling and management</li>
                  <li>User role-based permissions</li>
                  <li>Mobile-first UI design</li>
                </>
              )}
              {props.title === "Shop Management App" && (
                <>
                  <li>Inventory tracking and management</li>
                  <li>Sales recording and reporting</li>
                  <li>Customer database integration</li>
                  <li>Offline capability with sync</li>
                </>
              )}
              {props.title === "TB Diagnosis App" && (
                <>
                  <li>Symptom assessment questionnaire</li>
                  <li>Medical data visualization</li>
                  <li>Healthcare provider integration</li>
                  <li>Patient record management</li>
                </>
              )}
              {props.title === "Email & WhatsApp Integration App" && (
                <>
                  <li>Unified messaging interface</li>
                  <li>Template message management</li>
                  <li>Automated responses and scheduling</li>
                  <li>Analytics and reporting dashboard</li>
                </>
              )}
              {props.title === "Ride Booking App (Frontend)" && (
                <>
                  <li>Location services integration</li>
                  <li>Driver-rider matching interface</li>
                  <li>Payment gateway UI components</li>
                  <li>Trip history and rating system</li>
                </>
              )}
            </ul>
            <p className="details-tech">
              <strong>Technologies:</strong> {props.title.includes("React") ? "React, JavaScript, CSS" : 
                props.title.includes("Native") ? "React Native, Expo, JavaScript" : 
                props.title.includes("Chat") ? "React Native, Django, SQL" :
                props.title.includes("E-commerce") ? "React, Material UI, JavaScript" :
                props.title.includes("Children") ? "PHP, HTML, CSS, MySQL" :
                props.title.includes("Quiz") ? "React, JavaScript, Vercel" :
                props.title.includes("TB") ? "Java, XML, Android SDK" :
                props.title.includes("Email") ? "React Native, Node.js, APIs" :
                props.title.includes("Ride") ? "React Native, Expo, Maps API" :
                "JavaScript, HTML, CSS"}
            </p>
          </div>
        </div>
        
        <div className="project-card-footer">
          {props.ghLink && (
            <Button 
              className="project-button github-button" 
              href={props.ghLink} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${props.title} on GitHub`}
            >
              <BsGithub className="button-icon" />
              <span>GitHub</span>
            </Button>
          )}
          
          {!props.isBlog && props.demoLink && (
            <Button
              className="project-button demo-button"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${props.title}`}
            >
              <FiExternalLink className="button-icon" />
              <span>Live Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
