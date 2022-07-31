import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VispImage from "./assets/visp-mapping.png";
import WordImage from "./assets/savantrush.png";

const works = [
  {
    id: 1,
    name: "Visp.net",
    img_src: VispImage,
    description:
      "Visp.net is an automated billing system designed for Internet Service Providers. Most of my works deal with the Equipment and Mapping Tools inside the system, such as coverage detection based on tower location, AP/Antenna configuration and customer location",
    tech_used:
      "(Material UI, Redux, ReactJS, Apollo GraphQL, MySQL, PostgreSQL)",
    repository: "",
    link: "",
    isPersonal: false,
  },
  {
    id: 2,
    name: "Word Game",
    img_src: WordImage,
    description:
      "This word game is a ripped-off of the famous game called Wordle.",
    tech_used: "(ReactJS, HTML & CSS)",
    repository: "",
    link: "",
    isPersonal: true,
  },
  {
    id: 3,
    name: "Mapping Game",
    img_src: "",
    description:
      "Mapping game is a geographical quiz that tests your knowledge about history, culture and geography",
    tech_used: "(ReactJS, HTML & CSS)",
    repository: "",
    link: "",
    isPersonal: true,
  },
];
const SoftwareCreations = () => {
  const [currentSlide, setSelectSlide] = useState(1);
  const [interrupted, setInterrupted] = useState(false);
  useEffect(()=>{
    const interval = setInterval(() => {
      if(!interrupted){
        if (currentSlide === works.length) {
          setSelectSlide(1);
        } else {
          setSelectSlide(currentSlide + 1);
        }
      }
    
    }, 6000);
    return ()=> clearInterval(interval)
  }, [currentSlide, interrupted])

  const handleBack = () => {
    if (currentSlide === 1) {
      setSelectSlide(works.length - 1);
    } else {
      setSelectSlide(currentSlide - 1);
    }
    setInterrupted(true)
  };

  const handleForward = () => {
    if (currentSlide === works.length) {
      setSelectSlide(1);
    } else {
      setSelectSlide(currentSlide + 1);
    }
    setInterrupted(true)
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
                key={work.id}
                className={`${
                  currentSlide === work.id ? "selected-software" : "content"
                }`}
              >
                {work.img_src !=="" && (
                  <img src={work.img_src} alt="visp" className="work-image" />
                )}
                <div className="info-panel ">
                  <div className="software-name">{work.name}</div>
                  <div className="software-desc">{work.description}</div>
                  <div className="software-tech">{work.tech_used}</div>
                  {work.isPersonal ? (
                    <div className="software-resources">
                      <FontAwesomeIcon
                        className="tech-icon"
                        icon="fa-brands fa-github"
                      />
                      <FontAwesomeIcon
                        className="tech-icon"
                        icon="fa-solid fa-eye"
                      />
                    </div>
                  ) : (
                    <div className="personal-message">
                      [Repository and Live Demo are not available due to
                      company's ownership rights]
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div className="navigator navigate-left" onClick={handleBack}>
            <FontAwesomeIcon icon={`chevron-left`} />
          </div>
          <div className="navigator navigate-right" onClick={handleForward}>
            <FontAwesomeIcon icon={`chevron-right`} />
          </div>
        </div>
        <div className="bullet-software-parent">
          {works.map(work=>{
            return(
              <div className={`${
                currentSlide === work.id ? "selected" : ""
              }`}></div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default SoftwareCreations;
