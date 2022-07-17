import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VispImage from "./assets/visp.png";


const works = [
  {
    id: 1,
    name: "Visp.net",
    img_src:  VispImage,
  },
  {
    id: 2,
    name: "Word Game",
    img_src: "",
  },
  {
    id: 3,
    name: "Mapping",
    img_src: "",
  },
];
const SoftwareCreations = () => {
  const [currentSlide, setSelectSlide] = useState(1);

  // const selectedWork = works.find(x=> x.id === currentSlide);
  // setTimeout(()=>{
  //   setSelectSlide(currentSlide + 1);
  // }, 3000);

  console.log("CUrrent slide", currentSlide)

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
            console.log(work.name, work.img_src,"===", VispImage
              )
            return (
              <div
                className={`${
                  currentSlide === work.id ? "selected" : "content"
                }`}
              >
                <img src={work.img_src} alt="visp" className="work-image"/>
                {/* {work.name} */}
              </div>
            );
          })}
          {/* <div className={`conten1 ${cur}`}>{selectedWork.name}</div> */}
          <button className="carousel-but back" onClick={handleBack}>
            <FontAwesomeIcon icon={`chevron-left`} />
          </button>
          <button className="carousel-but next" onClick={handleForward}>
            <FontAwesomeIcon icon={`chevron-right`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCreations;
