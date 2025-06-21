import React, { useState, useEffect } from "react";
import { Container, Row ,Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Rashad hazem ali.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import dpei1 from "../../Assets/certifications/DEPI.jpg"; // مثال: صورة شهادة
import depi2 from "../../Assets/certifications/DPEI.jpg";
import aws from "../../Assets/certifications/Aws.png";
import ibm from "../../Assets/certifications/IBM.png";
import efe from "../../Assets/certifications/efe.png";
import sss from "../../Assets/certifications/SSSS.png";
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
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 100 ? .8 : 0.3} />
            <Page pageNumber={2} scale={width > 100 ? .8 : 0.3} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

         <h2 className="text-center mt-5 mb-4" style={{ color: "#fff" }}>My Certificates</h2>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-4">
            <img src={aws} alt="Certificate 1" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img src={dpei1} alt="Certificate 2" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img src={depi2} alt="Certificate 3" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img src={ibm} alt="Certificate 4" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img src={efe} alt="Certificate 5" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <img src={sss} alt="Certificate 6" className="img-fluid rounded shadow" />
          </Col>
          {/* أضف المزيد من الشهادات هنا بنفس الطريقة */}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
