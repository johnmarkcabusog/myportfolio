import React from "react";

const GeneralInformation = () => {
  return (
    <div className="gen-info-panel">
      <div className="gen-info-content">
        <div className="dev-name">
          <span>I'm</span> JOHN MARK,
        </div>
        <div className="dev-title">Software Engineer </div>
        <div className="dev-message">
          I develop performant and robust software solutions for businesses.{" "}
          <br /> I do full stack development and I have great interests in GIS
          mapping,
          <br /> mobile and game development.
        </div>
        <div className="line1">
          <span className="dot1"></span>
        </div>
        <div className="line2">
          <span className="dot2"></span>
        </div>
        <div className="line3">
          <span className="dot3"></span>
        </div>
      </div>
      <div className="buttons-grid">
        <div className="main-buttons but1" >Message Me </div>
        <a className="main-buttons but2" href="#software-creations"> Explore My Works </a>
      </div>
    </div>
  );
};

export default GeneralInformation;
