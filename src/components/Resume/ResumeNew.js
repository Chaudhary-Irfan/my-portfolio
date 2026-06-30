import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ScrollAnimation from "../ScrollAnimation";
import pdf from "../../Assets/../Assets/ChaudharyIrfan.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

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
  <Row className="resume" style={{ justifyContent: "center" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: "90vh",
        width: "100%",
        alignItems: "center",
        paddingBottom: "20px",
      }}
    >
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        className="d-flex flex-column align-items-center"
      >
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={width > 786 ? 1.7 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              style={{ marginBottom: "20px" }}
            />
          ))}
      </Document>
    </div>
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
