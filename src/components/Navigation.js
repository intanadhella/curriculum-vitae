import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
import myprofile from './../assets/profile.jpg'

export default class Navigation extends Component {
    render() {
        return (
            <Navbar
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
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="work-experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#work-experience"
                            >
                                Work Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#education"
                            >
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#skills"
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="languages"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#languages"
                            >
                                Languages
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="personal-projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                href="#personal-projects"
                            >
                                Personal Projects
                            </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
