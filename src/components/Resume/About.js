import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
library.add(fab, fas)

const About = () => {

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="about"
        >
            <div className="w-100">
                <h1 className="mb-0">
                    Intan <span className="text-primary">Adela</span>
                </h1>
                <h3>
                    <span className="text-secondary">Full-Stack Developer</span>
                </h3>
                <div className="subheading mb-5">
                    Kota Batam, Indonesia ·{" "}
                    <a
                        href="mailto:mail@intanadela.my.id"
                        className="text-lowercase"
                    >
                        mail@intanadela.my.id
                    </a>
                </div>
                <p className="lead mb-5">
                    I’m a fresh graduate from Glints Academy.
                    Graduate as a Full-Stack Developer, I’m now has skills in HTML, CSS, ReactJS, etc.
                    I enjoyed the challenges and do not close my self to new things.
                    Have a sense of responsibility, honest, good teamwork and ability to work under pressure.
                </p>
                <div className="social-icons">
                    <OverlayTrigger placement="top" overlay={<Tooltip>Glints Profile</Tooltip>}>
                        <a
                            href = "https://glints.com/id/profile/public/af08df39-a0d9-4b04-a917-d55c5c5c6382"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={["fas", "globe-asia"]} />
                        </a>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>LinkedIn</Tooltip>}>
                        <a
                            href="https://linkedin.com/in/intanadela"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                        </a>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>GitHub</Tooltip>}>
                        <a
                            href="https://github.com/intanadhella"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    </OverlayTrigger>
                </div>
            </div>
        </section>
    )
}

export default About
