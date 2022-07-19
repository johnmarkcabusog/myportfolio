import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VispImage from "./assets/visp-mapping.png";
import VispImage2 from "./assets/visp-dashboard.png";
import VispImage3 from "./assets/visp.png";

const works = [
  {
    id: 1,
    name: "Visp.net",
    img_src: VispImage,
    description:"Visp.net is an automated billing system designed for Internet Service Providers. Most of my works deal with the Equipment and Mapping Tools inside the system, such as coverage detection based on tower location, AP/Antenna configuration and customer location",
    tech_used:"(Material UI, Redux, ReactJS, Apollo GraphQL, MySQL, PostgreSQL)",
    repository:"",
    link:""
  },
  {
    id: 2,
    name: "Word Game",
    img_src: VispImage2,
    description:"",
    tech_used:"",
    repository:"",
    link:""
  },
  {
    id: 3,
    name: "Mapping Game",
    img_src: VispImage3,
    description:"",
    tech_used:"",
    repository:"",
    link:""
  },
];
const SoftwareCreations = () => {
  const [currentSlide, setSelectSlide] = useState(1);

  // const selectedWork = works.find(x=> x.id === currentSlide);
  // setTimeout(()=>{
  //   setSelectSlide(currentSlide + 1);
  // }, 3000);

  console.log("CUrrent slide", currentSlide);

  const handleBack = () => {
    if (currentSlide === 1) {
      setSelectSlide(works.length - 1);
    } else {
      setSelectSlide(currentSlide - 1);
    }
  };

  const handleForward = () => {
    if (currentSlide === works.length) {
      setSelectSlide(1);
    } else {
      setSelectSlide(currentSlide + 1);
    }
  };

  return (
    <div id="software-creations">
      <div className="software-line">
        <span className="dot"></span>
      </div>
      <div className="work-content">
        <div className="section-title">Software Creations</div>
        <div className="software-body">
          {works.map((work) => {
            return (
              <div
                className={`${
                  currentSlide === work.id ? "selected-software" : "content"
                }`}
              >
                <img src={work.img_src} alt="visp" className="work-image" />
                {/* {work.name} */}
                <div className="info-panel">
                  <div className="software-name">{work.name}</div>
                  <div className="software-desc">{work.description}</div>
                  <div className="software-tech">{work.tech_used}</div>
                  <div className="software-resources">
                    <FontAwesomeIcon className="tech-chevron" icon="fa-brands fa-github" />
                  </div>

                </div>
              </div>
            );
          })}
          <div className="cover"></div>
          <div className="navigator navigate-left" onClick={handleBack}>
            <FontAwesomeIcon icon={`chevron-left`} />
          </div>
          <div className="navigator navigate-right" onClick={handleForward}>
            <FontAwesomeIcon icon={`chevron-right`} />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SoftwareCreations;
