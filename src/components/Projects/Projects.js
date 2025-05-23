import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DataAn from "../../Assets/Projects/DataAnalysis.jpg";
import powerbi from "../../Assets/Projects/PowerBi.jpg";
import dataMining from "../../Assets/Projects/DataMining.jpg";
import Recommendy from "../../Assets/Projects/Recommendy.jpg";
import jewlery from "../../Assets/Projects/Jewlery.png";
import mongoDb from "../../Assets/Projects/mongoApp.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerbi}
              isBlog={false}
              title="Power Bi Dashboard "
              description="This is a dash board that I made to display the accidents that happened in Saudi Arabia and understand and analyze the cause of accidents, their places of occurrence, and the most places where accidents occur and in any month of the months"
              ghLink="https://github.com/rashadhazem"
              demoLink="https://github.com/rashadhazem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Recommendy}
              isBlog={false}
              title="Recommendy system"
              description="The web application helps students find scholarships and internships. Students can upload their 
                CVs, and the system will automatically scan and recommend the most relevant opportunities 
                based on the user's CV"
              ghLink="https://github.com/rashadhazem/recommendy"
              demoLink="https://github.com/rashadhazem/recommendy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jewlery}
              isBlog={false}
              title="jwelery store "
              description=" the full-stack developer of this jewelry e-commerce platform, I built the entire system using the MERN stack to ensure performance, scalability, and a modern user experience.
                        On the frontend, I used React.js to create a responsive, elegant, and interactive UI where users can easily browse collections, filter products, add to cart/wishlist, and complete secure checkouts.
                        On the backend, I built a robust Node.js and Express.js server to handle API requests, user authentication, order management, and secure admin operations."
              ghLink="https://github.com/rashadhazem/jewlery-Store"
              demoLink="https://github.com/rashadhazem/jewlery-Store"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataMining}
              isBlog={false}
              title="Data clean, statistics  and Ml "
              description="In this project i  create streamlit app  to  help the data analysis  to import his data and clean  it   and find the missing  and 
              dublicaties  and make sum visualization  and  make  machenlearning  processes"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DataAn}
              isBlog={false}
              title="Data Analysis and Rag"
              description="in this project i create with my team web site using streamlit app  to  do all the data analysis  tasks  and  chat with ai  to our data   the ai is  only  focused in the data i upload  to ."
              ghLink="https://github.com/rashadhazem/data-insights-explorer"
              demoLink="https://youtu.be/hA9Rk0t9WhQ?si=N6KTp9CN8C38mPsT" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mongoDb}
              isBlog={false}
              title="MongoDb manager using streamlit "
              description="this app is  used for work with mongodb from python you can  do  crud operations  and index and aggregations   and map reduce functions in it ."
              ghLink="https://github.com/rashadhazem/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
