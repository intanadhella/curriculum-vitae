import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
library.add(fab, fas)

const Skills = () => {

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="skills"
        >
            <div className="w-100">
                <h2 className="mb-5">Skills</h2>

                <div className="mb-5">
                    <div className="subheading mb-2">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>HTML5</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "html5"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>CSS3</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "css3-alt"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>Sass</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "sass"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>Bootstrap</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "bootstrap"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>JavaScript</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "js"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>ReactJS</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "react"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>Git</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "git-alt"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>GitHub</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "github"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>Node.js</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "node-js"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>npm</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "npm"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>Font Awesome</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "font-awesome"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>Markdown</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "markdown"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>README</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "readme"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>stack overflow</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
                            </OverlayTrigger>
                        </li>
                        <li className="list-inline-item">
                            <OverlayTrigger placement="bottom" overlay={<Tooltip>Trello</Tooltip>}>
                                <FontAwesomeIcon icon={["fab", "trello"]} />
                            </OverlayTrigger>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <div className="subheading mb-2">Workflow</div>
                    <ul className="mb-0">
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
                            Agile Development &amp; Scrum
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
