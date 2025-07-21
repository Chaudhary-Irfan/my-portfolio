import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ScrollAnimation from "../ScrollAnimation";
import pdf from "../../Assets/../Assets/ChaudharyIrfan-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <ScrollAnimation animationType="fade-in" duration="normal">
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
              className="primary-button"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </ScrollAnimation>

        <ScrollAnimation animationType="zoom-in" duration="slow">
          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        </ScrollAnimation>

        <ScrollAnimation animationType="slide-up" duration="normal">
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
              className="primary-button"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

export default ResumeNew;
