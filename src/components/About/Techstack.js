import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit } from "react-icons/di";
import { SiDjango, SiMongodb, SiFirebase, SiMysql, SiExpo, SiPostgresql, SiDotnet, SiMui, SiVisualstudio } from "react-icons/si";
import { FaDatabase, FaLaptopCode, FaMobileAlt, FaTools, FaInfoCircle } from "react-icons/fa";
import "./TechStack.css";

function Techstack() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const techs = [
    { 
      icon: <DiJavascript1 />, 
      name: "JavaScript", 
      description: "My primary programming language for web and mobile development. I use JavaScript ES6+ features to create dynamic, interactive user interfaces and implement complex client-side logic. I've applied JavaScript in numerous projects including e-commerce platforms, quiz applications, and interactive dashboards."
    },
    { 
      icon: <DiReact />, 
      name: "React.js / React Native", 
      description: "Core framework in my tech stack for building component-based user interfaces. I leverage React's virtual DOM and hooks for efficient web applications, while using React Native for cross-platform mobile apps. I've developed multiple production-ready applications with complex state management and optimized rendering performance."
    },
    { 
      icon: <DiNodejs />, 
      name: "Node.js", 
      description: "Server-side JavaScript runtime that I use to build scalable backend services. I implement RESTful APIs, real-time applications with WebSockets, and microservices architecture. My Node.js applications feature efficient data processing, authentication systems, and integration with various databases and third-party services."
    },
    { 
      icon: <SiDjango />, 
      name: "Django", 
      description: "Python web framework that I utilize for rapid backend development. I leverage Django's built-in admin panel, ORM, and authentication system to create secure, maintainable applications. I've implemented Django REST framework for API development and integrated it with various frontend technologies including React."
    },
    { 
      icon: <DiPython />, 
      name: "Python", 
      description: "Versatile language I use for backend development, data processing, and automation. I implement Python for server-side logic, API development with Django, and data analysis tasks. My Python code follows best practices for readability, maintainability, and performance optimization."
    },
    { 
      icon: <SiMui />, 
      name: "Material UI (MUI)", 
      description: "React component library I use to create professional, consistent UI designs. I customize MUI components to match specific design requirements while maintaining responsive behavior across devices. I've implemented complex layouts, data tables, form validation, and interactive elements using MUI in multiple web applications."
    },
    { 
      icon: <SiDotnet />, 
      name: ".NET", 
      description: "Microsoft's development platform that I use for building enterprise-grade applications. I work with ASP.NET Core for web applications and APIs, leveraging its performance and cross-platform capabilities. I've integrated .NET backends with various frontend frameworks and implemented secure authentication and authorization systems."
    },
    { 
      icon: <SiFirebase />, 
      name: "Firebase", 
      description: "Google's app development platform that I use for rapid prototyping and production applications. I implement Firebase Authentication for user management, Firestore for real-time data storage, Cloud Functions for serverless computing, and Firebase Hosting for deployment. I've built several applications with Firebase as the complete backend solution."
    },
    { 
      icon: <SiMysql />, 
      name: "MySQL (SQL)", 
      description: "Relational database system I use for structured data storage with complex relationships. I design normalized database schemas, write optimized queries, and implement proper indexing strategies. I've worked with MySQL in various projects requiring data integrity, transaction support, and complex reporting capabilities."
    },
    { 
      icon: <SiMongodb />, 
      name: "MongoDB (NoSQL)", 
      description: "Document-oriented database I use for flexible, schema-less data storage. I implement MongoDB for applications requiring rapid development, horizontal scaling, and flexible data models. I've designed MongoDB schemas with proper indexing, aggregation pipelines, and implemented data validation rules for maintaining data quality."
    },
    { 
      icon: <SiPostgresql />, 
      name: "PostgreSQL", 
      description: "Advanced open-source relational database I use for applications requiring robust data integrity and complex queries. I leverage PostgreSQL's advanced features including JSON support, full-text search, and complex data types. I've implemented PostgreSQL in enterprise applications requiring high reliability and performance."
    },
    { 
      icon: <SiExpo />, 
      name: "Expo (React Native)", 
      description: "Development framework I use to streamline React Native mobile app development. I leverage Expo's pre-built native components, simplified build process, and over-the-air updates. I've developed and published multiple cross-platform mobile applications using Expo, implementing features like camera access, push notifications, and location services."
    },
    { 
      icon: <DiGit />, 
      name: "Git & Version Control", 
      description: "Essential tool in my workflow for tracking code changes and collaborating with teams. I follow Git Flow branching strategies, implement CI/CD pipelines, and maintain clean commit histories. I've managed repositories with multiple contributors, resolved merge conflicts, and implemented proper code review processes."
    },
    { 
      icon: <FaMobileAlt />, 
      name: "Mobile App Development", 
      description: "Specialized area where I create native-like experiences using React Native and Expo. I implement responsive layouts, native device features, offline capabilities, and optimize performance for mobile devices. I've published multiple apps to App Store and Google Play, handling the entire development lifecycle from concept to deployment."
    },
    { 
      icon: <FaLaptopCode />, 
      name: "Web Development", 
      description: "Core expertise where I build responsive, accessible, and performant web applications. I implement modern frontend frameworks, responsive design principles, and progressive enhancement. My web applications feature optimized loading times, SEO best practices, and cross-browser compatibility while maintaining clean, maintainable code."
    },
    { 
      icon: <FaTools />, 
      name: "Full Stack Engineering", 
      description: "Comprehensive approach where I handle both client and server aspects of application development. I design and implement complete solutions from database modeling to UI/UX implementation. I've delivered end-to-end applications with secure authentication, data validation, error handling, and optimized performance across the entire stack."
    },
    { 
      icon: <FaDatabase />, 
      name: "Database Management", 
      description: "Critical skill where I design and optimize database systems for performance and reliability. I implement proper data modeling, normalization, indexing strategies, and query optimization. I've worked with both SQL and NoSQL databases, implementing data migration strategies, backup systems, and monitoring solutions for production environments."
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveTooltip(index);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <Row className="tech-stack-container">
      {techs.map((tech, index) => (
        <Col xs={4} md={3} lg={2} className="tech-icon-col" key={index}>
          <div 
            className={`tech-icon-card ${activeTooltip === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="tech-icon-wrapper">
              {tech.icon}
            </div>
            <p className="tech-name">{tech.name}</p>
            
            <div className="tech-tooltip">
              <div className="tooltip-content">
                <FaInfoCircle className="tooltip-icon" />
                <p>{tech.description}</p>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
