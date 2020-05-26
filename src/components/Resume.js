import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import myprofile from './../assets/profile.jpg';
library.add(fab, fas);

export default class Resume extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <div className="row">
              <div className="col">
                <h1 className="mb-0">
                  Intan <span className="text-primary">Adela</span>
                </h1>
              </div>
              <div className="col">
                <span className="d-block d-lg-none">
                  <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={myprofile} alt="" />
                </span>
              </div>
            </div>
            <h3>
              <span className="text-secondary">Full-Stack Developer</span>
            </h3>
            <div className="subheading mb-5">
              Kota Batam, Indonesia ·{" "}
              <a href="mailto:mail@intanadela.my.id">mail@intanadela.my.id</a>
            </div>
            <p className="lead mb-5">
              I’m a fresh graduate from Glints Academy. Graduate as a Full-Stack
              Developer, I’m now has skills in HTML, CSS, ReactJS, etc. I
              enjoyed the challenges and do not close my self to new things.
              Have a sense of responsibility, honest, good teamwork and ability
              to work under pressure.
            </p>
            <div className="social-icons">
              <a
                href="https://intanadela.my.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fas", "globe-asia"]} />
              </a>
              <a
                href="https://linkedin.com/in/intanadela"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
              <a
                href="https://github.com/intanadhella"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="work-experience"
        >
          <div className="w-100">
            <h2 className="mb-5">Work Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Restaurant Cashier</h3>
                <div className="subheading mb-3">Aston Inn Gideon</div>
                <div>
                  <ul>
                    <li>
                      Accepting payments, ensuring all prices, and quantities
                      are accurate and proving a receipt to every customer.
                    </li>
                    <li>
                      Welcoming customer, answering their questions, helping
                      them to locate seat in the restaurant, and providing
                      advice or recommendations of the menu.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  July 2019 - March 2020 <br />
                  Kota Batam, Indonesia
                </span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Administration</h3>
                <div className="subheading mb-3">
                  Meranti Sub-District Office
                </div>
                <div>
                  <ul>
                    <li>Collecting data for KTP (ID Cards) registration.</li>
                  </ul>
                </div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  October 2017 - November 2017 <br />
                  Kabupaten Asahan, Indonesia
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Glints Academy</h3>
                <div className="subheading mb-3">Impact Byte</div>
                <div>Full-Stack (ReactJS)</div>
                {/* <p>GPA: 3.23</p> */}
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  March 2020 - Present <br />
                  Kota Batam, Indonesia
                </span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
                <h3 className="mb-0">High School</h3>
                <div className="subheading mb-3">SMK Swasta Meranti</div>
                <div>Administrasi</div>
                {/* <p>GPA: 3.56</p> */}
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  July 2016 - June 2019 <br />
                  Kabupaten Asahan, Indonesia
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "html5"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "css3-alt"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "sass"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "bootstrap"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "js"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "react"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "git-alt"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "node-js"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "npm"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "font-awesome"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "markdown"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "readme"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
              </li>
              <li className="list-inline-item">
                <FontAwesomeIcon icon={["fab", "trello"]} />
              </li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Cross Functional Teams
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="languages"
        >
          <div className="w-100">
            <h2 className="mb-5">Languages</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Bahasa Indonesia</h3>
                <div className="subheading mb-3">Native Proficiency</div>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">English</h3>
                <div className="subheading mb-3">
                  Limited Working Proficiency
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="personal-projects"
        >
          <div className="w-100">
            <h2 className="mb-5">Personal Projects</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Curriculum Vitae</h3>
                <p>
                  This is a personal project of mine, consisting of my
                  curriculum vitae. It use responsive mobile interface so the
                  curriculum can be attracted to be reviewed. You can check it
                  on{" "}
                  <a
                    href="//intanadela.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    intanadela.netlify.app
                  </a>{" "}
                  and my github repository.
                </p>
                <div>Tech: ReactJS and Bootstrap</div>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Todo App</h3>
                <p>
                  This project is just simple creating todo list, it receive
                  input from user and then store the data to the Local Storage.
                </p>
                <div>Tech: ReactJS, Bootstrap and Local Storage</div>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Indonesian Heroes</h3>
                <p>
                  This project is originated from a task that given at the
                  Glints Academy, basically it just accepts input from the user
                  then send it to backend that build using Express.js and saved
                  it to MongoDB server. All the data that has been submitted,
                  returned to the application.
                </p>
                <div>Tech: ReactJS, Bootstrap, Express.js and MongoDB</div>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Weather App</h3>
                <p>
                  This project was assigned to the group that I included in. In
                  that group, my responsibility is showing the data from{" "}
                  <a
                    href="//api.openweatherapp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    api.openweatherapp.org
                  </a>{" "}
                  using fetch function.
                </p>
                <div>Tech: Bootstrap and JavaScript</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
