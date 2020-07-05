import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Education = () => {

    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Glints Academy</h3>
              <div className="subheading mb-2">Impact Byte</div>
              <div>
                Full-Stack (ReactJS){" "}
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>See credential</Tooltip>}
                >
                  <a
                    href="https://network.impactbyte.com/certificate/intan-adela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lowercase"
                  >
                    (network.impactbyte.com/certificate/intan-adela)
                  </a>
                </OverlayTrigger>
              </div>
              {/* <p>GPA: 3.23</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                March 2020 - May 2020 <br /> Kota Batam, Indonesia
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">High School</h3>
              <div className="subheading mb-2">SMK Swasta Meranti</div>
              <div>Administrasi</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                July 2016 - June 2019 <br /> Kabupaten Asahan, Indonesia
              </span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Education
