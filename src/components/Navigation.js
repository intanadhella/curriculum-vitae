import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import myprofile from './../assets/profile.jpg'

export default class Navigation extends Component {
    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                bg="primary"
                fixed="top"
                id="sideNav"
            >
                <Link
                    className="navbar-brand"
                    to="page-top"
                    spy={true}
                    smooth={true}
                    duration={500}
                    href="#page-top"
                >
                    <span className="d-block d-lg-none">Intan Adela</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={myprofile} alt="" />
                    </span>
                </Link>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="1"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#about"
                                as={Link}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                activeClass="active"
                                to="work-experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#work-experience"
                                as={Link}
                            >
                                Work Experience
                            </Nav.Link>
                            <Nav.Link
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#education"
                                as={Link}
                            >
                                Education
                            </Nav.Link>
                            <Nav.Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#skills"
                                as={Link}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                activeClass="active"
                                to="languages"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#languages"
                                as={Link}
                            >
                                Languages
                            </Nav.Link>
                            <Nav.Link
                                activeClass="active"
                                to="personal-projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#personal-projects"
                                as={Link}
                            >
                                Personal Projects
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
