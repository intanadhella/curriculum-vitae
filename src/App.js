import React, { Component } from 'react';
import './App.css';
import { 
  Container, Row, Col, Nav, ProgressBar
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import myprofile from './assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, fas);

class App extends Component {
  
  render() {

    return (
      <div>
        <Container className="my-3">
          
          <div className="mb-2">
            <Row>
              <Col md={12} lg={{ span: 6, offset: 6 }}>
                <Nav 
                  justify
                  variant="pils"
                  defaultActiveKey="about-me"
                  className="navbar-expand-md"
                >
                  <Nav.Item>
                    <Nav.Link href="#about-me">About Me</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#skills" eventKey="skills">Skills</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#education" eventKey="education">Education</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#portfolio" eventKey="portfolio">Portfolio</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </div>

          <div className="mb-2" id="about-me">
            <Row>
              <Col>
                <h2>About Me</h2>
              </Col>
            </Row>
            <Row>
              <Col className="text-right">
                <h4>
                  Intan Adela<br />
                  <small>Full-Stack Web Developer</small>
                </h4>
                
                <blockquote className="blockquote">
                  "I enjoyed the challenges and do not close myself to new things.
                  Have a sense of responsibility, honest, and have good teamwork in any conditions."
                </blockquote>
                <p>
                  intanadela@outlook.com
                  <span className="icon">
                    <FontAwesomeIcon icon={['fas', 'envelope-open']} />
                  </span>
                  <br />
                  github.com/intanadhella
                  <span className="icon">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </span>
                  <br />
                  Batam, Indonesia
                  <span className="icon">
                    <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                  </span>
                </p>
              </Col>
              <Col className="my-auto">
                <img 
                  className="w-50"
                  src={ myprofile }
                  alt="Intan"
                />
              </Col>
            </Row>
          </div>

          <div className="mb-2" id="skills">
            <Row>
              <Col>
                <h2>Skills</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li>
                    <ProgressBar now={60} label="HTML" variant="info" />
                  </li>
                  <li>
                    <ProgressBar now={60} label="CSS" variant="info" />
                  </li>
                  <li>
                    <ProgressBar now={40} label="JavaScript" variant="warning" />
                  </li>
                  <li>
                    <ProgressBar now={10} label="ReactJS" variant="danger" />
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="mb-2" id="education">
            <Row>
              <Col>
                <h2>Education</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li>
                    Glints Academy by Impact Byte &nbsp; <small>March 16th, 2020 - May 5th, 2020</small>
                  </li>
                  <li>
                    SMK Swasta Meranti &nbsp; <small>July, 2016 - June, 2019</small>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="mb-2" id="portfolio">
            <Row>
              <Col>
                <h2>Portfolio</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Image</p>
              </Col>
            </Row>
          </div>

        </Container>
      </div>
    )
  }
}

export default App;
