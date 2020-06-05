import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const Languages = () => {

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="languages"
        >
            <div className="w-100">
                <h2 className="mb-5">Languages</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Bahasa Indonesia</h3>
                        <div className="subheading mb-3">Native</div>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">English</h3>
                        <div className="subheading mb-3">
                            EF SET Level B2 {" "}
                            <OverlayTrigger placement="right" overlay={<Tooltip>See credential</Tooltip>}>
                                <a
                                    href="https://www.efset.org/cert/KgGbjj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lowercase"
                                >
                                    (efset.org/cert/KgGbjj)
                                </a>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Languages
