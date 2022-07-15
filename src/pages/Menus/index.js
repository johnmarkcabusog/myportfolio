import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="menus">
      <div className="nav-menu" onClick={() => setShowMenu(!showMenu)}>
        Explore Me{" "}
        <span className="chevron-down-icon">
          <FontAwesomeIcon icon={`chevron-${showMenu?'down':'left'}`} />
        </span>
      </div>
      {showMenu && (
        <>
          <a href="#home" className="nav-menu">Home</a>
          <a href="#about-me" className="nav-menu">Who am I?</a>
          <a href="#experiences" className="nav-menu">Experiences</a>
          <a href="#software-creations" className="nav-menu">Software Works</a>
          <a href="#creative-works" className="nav-menu">Creative Works</a>
        </>
      )}
    </div>
  );
};

export default Menu;
