import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";


function ProjectCards(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card className="project-card-view" style={{ cursor: "pointer" }} onClick={handleShow}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* If the component contains GitHub link then, it will render the below component  */}
        {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        )}
        {"\n"}
        {"\n"}
        
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>

     {/* ✅ Modal */}

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
       <Modal.Body>
  {props.images && props.images.length > 0 ? (
    <Carousel>
      {props.images.map((imgSrc, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={imgSrc}
            alt={`slide-${idx}`}
            style={{ borderRadius: "8px", maxHeight: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <img
      src={props.imgPath}
      alt="Project"
      style={{ width: "100%", marginBottom: "15px", borderRadius: "8px" }}
    />
  )}

  <p style={{ marginTop: "15px" }}>{props.description}</p>
</Modal.Body>

        <Modal.Footer>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button variant="success" href={props.demoLink} target="_blank">
              <CgWebsite /> Demo
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}
export default ProjectCards;
