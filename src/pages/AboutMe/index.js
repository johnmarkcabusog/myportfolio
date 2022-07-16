import React from "react";
import "./style.css";
import profilepic from "./asset/profile-pic.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skillset=['React.js', 'Node.js','Apollo GraphQL', 'Javascript ES6+', 'HTML and CSS', 'Redux.js','Java', 'Leaflet.js', 'Material UI']
const AboutMe = () => {

  return (
    <div id="about-me">
      <div className="line"><span className="dot"></span></div>
      <div className="content">
        <div clasName="section-title">Who am I ?</div>
        <div className="content-div">
          <div className="prof-pic-container"><img className="profile-pic" src={profilepic} alt="profile-pic"/></div>
          <div className="profile-info">
            <p>
              ¿Como estas? How are You?.In tagalog it’s <span> Kumusta</span>. <br/>I’m a software
              engineer in the Philippines, who writes code and poetry. <br/>Welcome to
              my personal website!- a collection of my software works <br/>and a bit
              of my creative works.
            </p>
            <p>
               I've been working as a software engineer since 2017 and here are the<br/> technologies I use:
            </p>
            <div className="tech-list">
                {skillset.map(skill=>{
                    return(<div><FontAwesomeIcon className="tech-chevron" icon={`chevron-right`} />{skill}</div>)
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
