import React from "react"

const WorkExperience = () => {

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="work-experience"
        >
            <div className="w-100">
                <h2 className="mb-5">Work Experience</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Restaurant Cashier (Internship)</h3>
                        <div className="subheading mb-2">Aston Inn Gideon</div>
                        <div>
                            <ul className="mb-0">
                                <li>
                                    Accepting payments, ensuring all prices,
                                    and quantities are accurate and proving a receipt to every customer.
                                </li>
                                <li>
                                    Welcoming customer, answering their questions, helping them to locate seat in the restaurant,
                                    and providing advice or recommendations of the menu.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">
                            July 2019 - March 2020 <br /> Kota Batam, Indonesia
                        </span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">Administration (School Internship)</h3>
                        <div className="subheading mb-2">Meranti Sub-District Office</div>
                        <div>
                            <ul>
                                <li>Collecting data for KTP (ID Cards) registration.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">
                            October 2017 - November 2017 <br /> Kabupaten Asahan, Indonesia
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience
