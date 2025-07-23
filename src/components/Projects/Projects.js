import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DataAn from "../../Assets/Projects/DataAnalysis.jpg";
import powerbi from "../../Assets/Projects/PowerBi.jpg";
import powerbi2 from "../../Assets/Projects/1234.png";
import powerbi3 from "../../Assets/Projects/Capture123.jpeg";
import dataMining from "../../Assets/Projects/DataMining.jpg";
import dataMining2 from "../../Assets/Projects/1736884777793.jpeg";
import dataMining3 from "../../Assets/Projects/1736884779315.jpeg";
import dataMining4 from "../../Assets/Projects/1736884779846.jpeg";
import dataMining5 from "../../Assets/Projects/1736884779901.jpeg";
import dataMining6 from "../../Assets/Projects/1736884780055.jpeg";
import dataMining7 from "../../Assets/Projects/1736884780128.jpeg";
import Recommendy from "../../Assets/Projects/Recommendy.jpg";
import jewlery from "../../Assets/Projects/Jewlery.png";
import jewlery2 from "../../Assets/Projects/Screenshot (68).png";
import jewlery3 from "../../Assets/Projects/Screenshot (69).png";
import jewlery4 from "../../Assets/Projects/Screenshot (70).png";
import jewlery5 from "../../Assets/Projects/Screenshot (71).png";
import jewlery6 from "../../Assets/Projects/Screenshot (72).png";
import jewlery7 from "../../Assets/Projects/Screenshot (73).png";
import jewlery8 from "../../Assets/Projects/Screenshot (74).png";
import mongoDb from "../../Assets/Projects/mongoApp.jpg";
import zezoResto from "../../Assets/Projects/Screenshot (79).png";  
import zezoResto2 from "../../Assets/Projects/Screenshot (80).png";
import zezoResto3 from "../../Assets/Projects/Screenshot (81).png";
import zezoResto4 from "../../Assets/Projects/Screenshot (82).png";
import zezoResto5 from "../../Assets/Projects/Screenshot (83).png";
import zezoResto6 from "../../Assets/Projects/Screenshot (84).png";
import zezoResto7 from "../../Assets/Projects/Screenshot (85).png";
import zezoResto8 from "../../Assets/Projects/Screenshot (86).png";
import zezoResto9 from "../../Assets/Projects/Screenshot (87).png";
import zezoResto10 from "../../Assets/Projects/Screenshot (88).png";
import zezoResto11 from "../../Assets/Projects/Screenshot (89).png";
import zezoResto12 from "../../Assets/Projects/Screenshot (90).png";
import zezoResto13 from "../../Assets/Projects/Screenshot (91).png";
import zezoResto14 from "../../Assets/Projects/Screenshot (92).png";
import zezoResto15 from "../../Assets/Projects/Screenshot (93).png";
import recommendation_book from "../../Assets/Projects/Screenshot 2025-07-20 091209.png";

import recommendbook2 from "../../Assets/Projects/Screenshot (95).png";
import recommendbook3 from "../../Assets/Projects/Screenshot (96).png";
import recommendbook4 from "../../Assets/Projects/Screenshot (97).png";
import recommendbook5 from "../../Assets/Projects/Screenshot (98).png";
import recommendbook6 from "../../Assets/Projects/Screenshot (99).png";
import recommendbook7 from "../../Assets/Projects/Screenshot (100).png";
import recommendbook8 from "../../Assets/Projects/Screenshot (101).png";

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
              images={[powerbi, powerbi2, powerbi3]}
              isBlog={false}
              title="Power Bi Dashboard "
              description="This is a dash board that I made to display the accidents that happened in Saudi Arabia and understand and analyze the cause of accidents, their places of occurrence, and the most places where accidents occur and in any month of the months"
              demoLink="https://mostaql.com/u/Rashad_hazem/portfolio"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recommendation_book}
              images={[ recommendbook2, recommendbook3, recommendbook4, recommendbook5, recommendbook6, recommendbook7, recommendbook8]}
              isBlog={false}
              title="Book Recommendation System"
              description="This is a book recommendation system that I created using Python and Streamlit. It allows users to input their preferences and receive personalized book recommendations based on their interests."
              ghLink="https://github.com/rashadhazem/Book-Recommendation-System"
              demoLink="https://www.linkedin.com/posts/rashad-hazem-24623b286_datascience-python-machinelearning-activity-7352581473998192640-CTSY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVyNpYBsr_-7x-0SJ2eRdLOa9lBEv0yx94"
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
              demoLink="https://www.linkedin.com/posts/rashad-hazem-24623b286_computerscience-ai-machinelearning-activity-7347601309715390464-QHbv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVyNpYBsr_-7x-0SJ2eRdLOa9lBEv0yx94"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jewlery}
              images={[jewlery, jewlery2, jewlery3, jewlery4, jewlery5, jewlery6, jewlery7, jewlery8]}
              isBlog={false}
              title="jwelery store "
              description=" the full-stack developer of this jewelry e-commerce platform, I built the entire system using the MERN stack to ensure performance, scalability, and a modern user experience.
                        On the frontend, I used React.js to create a responsive, elegant, and interactive UI where users can easily browse collections, filter products, add to cart/wishlist, and complete secure checkouts.
                        On the backend, I built a robust Node.js and Express.js server to handle API requests, user authentication, order management, and secure admin operations."
              ghLink="https://github.com/rashadhazem/jewlery-Store"
              demoLink="https://lnkd.in/deDgATjH"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataMining}
              images={[dataMining, dataMining2, dataMining3, dataMining4, dataMining5, dataMining6, dataMining7]}
              isBlog={false}
              title="Data clean, statistics  and Ml "
              description="In this project i  create streamlit app  to  help the data analysis  to import his data and clean  it   and find the missing  and 
              dublicaties  and make sum visualization  and  make  machenlearning  processes"
              ghLink="https://github.com/rashadhazem/streamlit-app-"
              demoLink="https://www.linkedin.com/posts/rashad-hazem-24623b286_excited-to-announce-my-new-streamlit-app-activity-7285022790896803840-SDPm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVyNpYBsr_-7x-0SJ2eRdLOa9lBEv0yx94"
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
              imgPath={zezoResto}
              images={[zezoResto, zezoResto2, zezoResto3, zezoResto4, zezoResto5, zezoResto6, zezoResto7, zezoResto8, zezoResto9, zezoResto10, zezoResto11, zezoResto12, zezoResto13, zezoResto14, zezoResto15]}
              isBlog={false}
              title="zezo restaurant"
              description="This is a restaurant website that I created using c# mvc and sql server, where I created a database for the restaurant and added all the necessary features such as adding items to the cart, managing orders, and displaying the menu."
              ghLink="https://github.com/rashadhazem/Zizo"
              demoLink="https://github.com/rashadhazem/Zizo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mongoDb}
              isBlog={false}
              title="MongoDb manager using streamlit "
              description="this app is  used for work with mongodb from python you can  do  crud operations  and index and aggregations   and map reduce functions in it ."
              ghLink="https://github.com/rashadhazem/"
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
