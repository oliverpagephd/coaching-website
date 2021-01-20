import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Coaching from "./components/Coaching"




import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  return (
    <div>
    <MyNavbar />
    <Switch>
    <Route exact path="/">
    <div className="App">
      <Container>
        
        <Row>
          <Col className="full-width-image-wrapper">
            <Image
              src="/collina.jpg" alt="image"
              fluid
              className="full-width-image"
            />
            <div className="overlay-text-wrapper">
              <p className="overlay-text">
                Football connects
              </p>
            </div>
          </Col>
        </Row>
         
        <Row className="my-5">
          <Col className="my-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <Card>
              <Card.Img
                variant="top"
                src="/Fußballcamp.jpg"
                />
              <Card.Body>
                <Card.Title>Youth Coaching Course: 6-12 years</Card.Title>
                <Card.Text>
                Intensive youth course for Youth Coaches, parents and teachers who coach young talents on any level Age 6-12 years
                </Card.Text>
                <a href="https://oliver-page-s-school.teachable.com/admin-app/courses/1284504/pricing">
                   <Button variant="primary">Buy this course!</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <Card>
              <Card.Img
                variant="top"
                src="/U17FKF.jpg" alt="image"
          />
              <Card.Body>
                <Card.Title>Elite Youth Coaching Course</Card.Title>
                <Card.Text>
                Elite youth coaching course for youth coaches who work with elite players 15-19 years old. Level: National Team, Youth Premierleague or 2nd Divison
                           </Card.Text>
                <a href="https://cdn.fs.teachablecdn.com/dBquPX6oTAKDRM3k8yM2">
                  <Button variant="primary">Buy this course!</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <Card>
              <Card.Img
                variant="top"
                src="Fußballlehrer Gruppe.jpg"
              />
              <Card.Body>
                <Card.Title>Best of UEFA B /UEFA A / UEFA PRO:</Card.Title>
                <Card.Text>
                
This course will focus on modules whoare important to advance your career as a coach especially if you do not have access to this kind of courses. 
                </Card.Text>
                <a href="https://oliver-page-s-school.teachable.com/sign_in?origin_path=%2Fadmin-app%2Fservices">
                  <Button variant="primary">Buy this course!</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <Card>
              <Card.Img
                variant="top"
                src="/RWOU15.jpg"
              />
              <Card.Body>
                <Card.Title>Start your own awesome Youthacademy</Card.Title>
                <Card.Text>
                This course will help you to create your own academy, mainly to develop players but also as an an NGO or a business.

                </Card.Text>
                <a href="https://oliver-page-s-school.teachable.com/sign_in?origin_path=%2Fadmin-app%2Fservices">
                  <Button variant="primary">Buy this course!</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <Card>
              <Card.Img
                variant="top"
                src="/U17OP.jpg"
              />
              <Card.Body>
                <Card.Title>Technical Director (TD) in a Center of Excellence</Card.Title>
                <Card.Text>
                This course will explain the position of Technical Director in a youth academy: Creating a playing philosophy, scouting benchmarks, squad management and hiring the best coaches
                </Card.Text>
                <a href="https://oliver-page-s-school.teachable.com/sign_in?origin_path=%2Fadmin-app%2Fservices">
                  <Button variant="primary">Buy this course!</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <Card>
              <Card.Img
                variant="top"
                src="Talentfussballcamp.jpg"
                />
              <Card.Body>
                <Card.Title>Scouting Talent</Card.Title>
                <Card.Text>
                This course will help you to identify Top Talents in a youth setup. Focus on Technique, Gameintelligence, Mentality and Speed. 
                </Card.Text>
                <a href="Videotalentrwo.mp4">
                  <Button variant="primary">Buy this course!</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              
Your development as a Coach is my passion. Many coaches get frustrated because they don’t have access to courses which really benefits them. Obstacles are often time, money, unavailability or logistical challenges. Not seldom Coaches take part in courses to obtain the necessary certificate to coach in a club, Academy or school. Not seldom they feel something is missing. With my over 20 years experience in coaching, consulting and instructing in Europe, Africa and Asia I put together courses with the best content necessary to succeed in your field. Personally I have done in 2001 the German Level C, 2003 UEFA B, 2004 UEFA A and in 2007 the Pro License in Germany. Then I worked in several clubs as Head Coach, Technical Director, Scout and Coaching Instructor. 
As a technical Expert of the German FA (DFB) for almost ten years I worked in Africa and Asia. My experience includes the German Fa DFB, Ethiopian Federation, Sri Lanka Federation, South Korean Federation, Chinese Federation (Foshan) and Kenyan Federation as Instructor and U17 National Team Coach. Clubs experience includes 1. FC Koeln (Scouting 3 years), VFL Wolfsburg (Coaching Instructor), Rot Weiß Oberhausen (Technical Director/ Head Coach Center of Excellence), Kenya Premier league, U17 Bundesliga Head Coach and U 23 Head Coach. 
What I have seen and experienced and worked I share with you in the courses. I have also included parents, because not seldom they spend a lot of time driving their kids to training or/and pay a lot of money for academies and are wondering if what they see and experience is the right thing. Especially the course for the young players age 6-12 is for them and teachers who have often limited ressource of time, field and equippment but want to give the best training to “their kids”.

{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="google.com">
              <Button>turn:pro!</Button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="py-5">
        
          <p>
      {"Copyright © "}
        turn:pro {new Date().getFullYear()}
      {"."}
    </p>
          </Col>
        </Row>
      </Container>
    </div>
    </Route>
    <Route path="/coaching">
      <Coaching/>
      
    </Route>
</Switch>
</div>
      );
}



function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">turn:pro</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">courses</Nav.Link>
          <Nav.Link href="/coaching">coaching</Nav.Link>
          <NavDropdown title="pricing" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">U6-U12 Course</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">elite youth course U15-U19</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Best of UEFA Course</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Start your amazing youth academy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Position of Technical Director</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Scouting Talent</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              turn:pro
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#quotes">quotes</Nav.Link>
          <Nav.Link eventKey={2} href="#galery">galery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


// https://react-bootstrap.github.io/components
