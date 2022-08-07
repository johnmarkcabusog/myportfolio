import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const experiences = [
  {
    id: 1,
    company_name: "Syntactics Inc",
    job_title: "Web Developer Trainee",
    date_range: "(Nov 2016 - Jan 2017)",
    roles: [
      "  Managed and maintained client's website using PHP and Javascript",
    ],
  },
  {
    id: 2,
    company_name: "Visp.net",
    job_title: "Software Developer",
    date_range: "(June 2017 - Present)",
    roles: [
      "Developed features for a billing software utilizing various technologies including payment gateways. I was exposed to billing-related concepts including invoices,credit and debits, credit card and eCheck payments.",
      " Led a team in developing a mapping tool for identifying Internet Service Providers' (ISPs) tower area coverage and signal strength based on customer's location",
      "Created automated testing for codes using Jest and Mocha",
    ],
  },
];

const Experiences = () => {
  const [selected, setSelected] = useState(2);
  const selectedJob = experiences.find((x) => x.id === selected)
  return (
    <div id="experiences">
      <div className="line-experience">
        <span className="dot-experience"></span>
      </div>
      <div className="content-experience">
        <div className="section-title">Experiences</div>
        <div className="tab-header">
        <div className={`companies ${selectedJob.id === 2 ?'selected':''}`} onClick={() => setSelected(2)}>
            Visp.net
          </div>
          <div className={`companies ${selectedJob.id === 1 ?'selected':''}`} onClick={() => setSelected(1)}>
            Syntactics Inc
          </div>
        </div>
        <div className="experience-info">
          <div className="job-title">
            {selectedJob.job_title}{" "}
            <span className="date-range">{selectedJob.date_range}</span>
          </div>
          {selectedJob.roles.map((role, index) => {
            return (
              <p key={index} className="role">
                <FontAwesomeIcon
                  className="tech-chevron"
                  icon={`chevron-right`}
                />
                {role}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
