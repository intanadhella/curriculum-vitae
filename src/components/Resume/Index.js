import React from "react";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Languages from "./Languages";
import PersonalProjects from "./PersonalProjects";

const Resume = () => {
  return (
    <div className="container-fluid p-0">
      <About />
      <hr className="m-0" />
      <WorkExperience />
      <hr className="m-0" />
      <Education />
      <hr className="m-0" />
      <Skills />
      <hr className="m-0" />
      <Languages />
      <hr className="m-0" />
      <PersonalProjects />
    </div>
  );
};

export default Resume;
