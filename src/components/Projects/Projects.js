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
import recommendy2 from "../../Assets/Projects/Screenshot (42).png";
import recommendy3 from "../../Assets/Projects/Screenshot (52).png";
import recommendy4 from "../../Assets/Projects/Screenshot (57).png";
import recommendy5 from "../../Assets/Projects/Screenshot (60).png";
import recommendy6 from "../../Assets/Projects/Screenshot (61).png";
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
import CareMallCover from "../../Assets/Projects/Screenshot (231).png";
import carMall1 from "../../Assets/Projects/Screenshot (232).png";
import carMall2 from "../../Assets/Projects/Screenshot (233).png";
import carMall3 from "../../Assets/Projects/Screenshot (234).png";
import carMall4 from "../../Assets/Projects/Screenshot (235).png";
import carMall5 from "../../Assets/Projects/Screenshot (236).png";
import carMall6 from "../../Assets/Projects/Screenshot (237).png";

import QuazaCover from "../../Assets/Projects/Screenshot (119).png";
import quaza1 from "../../Assets/Projects/Screenshot (120).png";
import quaza2 from "../../Assets/Projects/Screenshot (121).png";
import quaza3 from "../../Assets/Projects/Screenshot (122).png";
import quaza4 from "../../Assets/Projects/Screenshot (123).png";
import quaza5 from "../../Assets/Projects/Screenshot (124).png";
import quaza6 from "../../Assets/Projects/Screenshot (125).png";
import quaza7 from "../../Assets/Projects/Screenshot (126).png";
import quaza8 from "../../Assets/Projects/Screenshot (127).png";


import HospitalCover from "../../Assets/Projects/Screenshot (179).png";
import hospital1 from "../../Assets/Projects/Screenshot (180).png";
import hospital2 from "../../Assets/Projects/Screenshot (181).png";
import hospital3 from "../../Assets/Projects/Screenshot (182).png";
import hospital4 from "../../Assets/Projects/Screenshot (183).png";
import hospital5 from "../../Assets/Projects/Screenshot (184).png";
import hospital6 from "../../Assets/Projects/Screenshot (175).png";


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
              imgPath={CareMallCover}
              images={[CareMallCover, carMall1, carMall2, carMall3, carMall4, carMall5, carMall6]}
              isBlog={false}
              title="Care Mall eCommerce Platform "
              description="As a full-stack developer, I created a comprehensive eCommerce platform for Mall using the MERN stack. The frontend was built with React.js to provide a seamless and engaging user experience, while the backend utilized Node.js and Express.js to handle API requests, user authentication, and order management. MongoDB was employed as the database to store product information, user data, and transaction records. The platform features a responsive design, secure payment processing, and an intuitive interface for browsing and purchasing vehicles."
              ghLink="https://github.com/rashadhazem/Care-Mall-Front"
              demoLink="https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2FE7314DAF01A40444%21s80392aa5975b47a0912bd30876e54c75%3Fithint%3Dvideo%26migratedtospo%3Dtrue&cid=E7314DAF01A40444&id=E7314DAF01A40444%21s80392aa5975b47a0912bd30876e54c75&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy9lNzMxNGRhZjAxYTQwNDQ0L0lRQ2xLam1BVzVlZ1I1RXIwd2gyNVV4MUFhYVlxT1hyX0tjSDZNNTZiX3pyVUc0&v=photos"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuazaCover}
              images={[QuazaCover, quaza1, quaza2, quaza3, quaza4, quaza5, quaza6, quaza7, quaza8]}
              isBlog={false}
              title="Quaza E-Learning Platform "
              description="As a full-stack developer, I built Quaza, an e-learning platform using the MERN stack. The frontend was developed with React.js to create an interactive and user-friendly interface for students and instructors. The backend utilized Node.js and Express.js to manage API requests, user authentication, course management, and content delivery. MongoDB served as the database to store user profiles, course materials, and progress tracking. The platform features responsive design, secure access to courses, and tools for instructors to create and manage their content effectively."
              ghLink="https://github.com/rashadhazem/Quaza"
              demoLink="https://www.linkedin.com/posts/rashad-hazem-24623b286_mern-fullstackdeveloper-dataanalysis-activity-7369008663811780608-Inpu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVyNpYBsr_-7x-0SJ2eRdLOa9lBEv0yx94"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HospitalCover}
              images={[HospitalCover, hospital1, hospital2, hospital3, hospital4, hospital5, hospital6]}
              isBlog={false}
              title="Hospital Management System"
              description="As a full-stack developer, I created a comprehensive Hospital Management System using the MERN stack. The frontend was built with React.js to provide a seamless and engaging user experience for patients and staff. The backend was developed with Node.js and Express.js to handle API requests, user authentication, and appointment scheduling. MongoDB was used as the database to store patient records, medical history, and appointment details. The system features responsive design, secure data handling, and an intuitive interface for managing hospital operations."
              ghLink="https://github.com/rashadhazem/Hospital-system"
              demoLink="https://www.linkedin.com/posts/rashad-hazem-24623b286_react-webdevelopment-javascript-activity-7403780503423672320-cj3j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVyNpYBsr_-7x-0SJ2eRdLOa9lBEv0yx94"
            />
          </Col>
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
              images={[Recommendy, recommendy2, recommendy3, recommendy4, recommendy5, recommendy6]}
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
