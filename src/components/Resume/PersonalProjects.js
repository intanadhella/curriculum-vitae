import React from "react"

const PersonalProjects = () => {

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="personal-projects"
        >
            <div className="w-100">
                <h2 className="mb-5">Personal Projects</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Circle Messenger</h3>
                        <p>
                            This project called Circle Messenger, basically it is a realtime chat application.
                            As the Front-end dev,
                            I am responsible for creating the login and register interfaces including UI/UX of the app
                            and the functionality for auth such as,
                            handling error messages and success messages from server to the interface.
                        </p>
                        <div>
                            Preview: {' '}
                            <a
                                href="https://circlemessenger.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                circlemessenger.com
                            </a>
                        </div>
                        <div>
                            GitHub: {' '}
                            <a
                                href="https://github.com/intanadhella/project-chatbox-frontend"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/intanadhella/project-chatbox-frontend
                            </a>
                        </div>
                        <div>Tech: ReactJS, Express.js, Socket.IO and Bootstrap</div>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Curriculum Vitae</h3>
                        <p>
                            This is a personal project of mine, consisting of my curriculum vitae.
                            It use responsive mobile interface so the curriculum can be attracted to be reviewed.
                        </p>
                        <div>
                            Preview: {' '}
                            <a
                                href="https://intanadela.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                intanadela.netlify.app
                            </a>
                        </div>
                        <div>
                            GitHub: {' '}
                            <a
                                href="https://github.com/intanadhella/project-curriculum-vitae"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/intanadhella/project-curriculum-vitae
                            </a>
                        </div>
                        <div>Tech: ReactJS and Bootstrap</div>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Todo App</h3>
                        <p>
                            This project is just simple creating todo list,
                            it receive input from user and then store the data to the Local Storage.
                        </p>
                        <div>
                            Preview: {' '}
                            <a
                                href="https://confident-almeida-580799.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                confident-almeida-580799.netlify.app
                            </a>
                        </div>
                        <div>
                            GitHub: {' '}
                            <a
                                href="https://github.com/intanadhella/project-todoapp-reactjs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/intanadhella/project-todoapp-reactjs
                            </a>
                        </div>
                        <div>Tech: ReactJS, Bootstrap and Local Storage</div>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Indonesian Heroes</h3>
                        <p>
                            This project is originated from a task that given at the Glints Academy,
                            basically it just accepts input from the user then send it to backend that build using Express.js
                            and saved it to MongoDB server.
                            All the data that has been submitted, returned to the application.
                        </p>
                        <div>
                            Preview: {' '}
                            <a
                                href="https://distracted-williams-2071c0.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                distracted-williams-2071c0.netlify.app
                            </a>
                        </div>
                        <div>
                            GitHub: {' '}
                            <a
                                href="https://github.com/intanadhella/project-heroes-fullstack"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/intanadhella/project-heroes-fullstack
                            </a>
                        </div>
                        <div>Tech: ReactJS, Bootstrap, Express.js and MongoDB</div>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">Weather App</h3>
                        <p>
                            This project was assigned to the group that I included in.
                            In that group, my responsibility is showing the data from{" "}
                            <a
                                href="//api.openweatherapp.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                api.openweatherapp.org
                            </a>{" "}
                            using fetch function.
                        </p>
                        <div>
                            Preview: {' '}
                            <a
                                href="https://intanadhella.github.io/project-weather-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                intanadhella.github.io/project-weather-app
                            </a>
                        </div>
                        <div>
                            GitHub: {' '}
                            <a
                                href="https://github.com/intanadhella/project-weather-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/intanadhella/project-weather-app
                            </a>
                        </div>
                        <div>Tech: Bootstrap and JavaScript</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonalProjects
