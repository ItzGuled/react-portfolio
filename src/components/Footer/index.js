/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-center">
     
<div className="col-md-4 justify-content-center  d-flex">
          <a target="_blank" href="https://github.com/ItzGuled">
          <img src={github} alt="profile" className="icon"></img>
          </a>
          <a href="mailto:guledlosman@gmail.com">
          <img src={email} alt="profile" className="icon"></img>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/guled-osman-5683aa154/">
          <img src={linkedin} alt="profile" className="icon"></img>
          </a>
          </div>
    </footer>
  );
};

export default Footer;