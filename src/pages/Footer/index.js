import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const openLink = (link)=>{
    window.open(
        link,
        '_blank' // <- This is what makes it open in a new window.
      );
  }  
  const emailClicked = () => {
    const receiver = "johnmarkcabusog@gmail.com";
    const subject = "Software Development Request";
    const message = "Hi John,";
    window.location.href = `mailto:${receiver}?subject=${subject}&body=${message}`;
  };
  return (
    <div id="footer">
      <div className="footer-body">
        <div>Built and designed by JM Cabusog</div>
        <div>All rights reserved &copy;</div>
        <div className="icon-contacts">
          <FontAwesomeIcon className="icon-contact-item" onClick={()=>openLink('https://www.linkedin.com/in/john-mark-cabusog-063320173')} icon="fa-brands fa-linkedin" />
          <FontAwesomeIcon className="icon-contact-item" onClick={()=>openLink('https://github.com/johnmarkcabusog')} icon="fa-brands fa-github" />
          <FontAwesomeIcon className="icon-contact-item" icon="fa-solid fa-message" onClick={emailClicked} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
