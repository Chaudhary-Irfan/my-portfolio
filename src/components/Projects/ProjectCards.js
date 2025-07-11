import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-top">
        {props.imgPath ? (
          <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-image" />
        ) : (
          <div className="project-icon-container">
            {props.icon}
          </div>
        )}
      </div>
      
      <Card.Body className="project-card-body">
        <div className="project-card-content">
          <Card.Title className="project-title">{props.title}</Card.Title>
          <Card.Text className="project-description">
            {props.description}
          </Card.Text>
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
