import React from "react";
import image from "../../assets/guled.JPG";

function About() {
  return (
    <div className = "about-me">
      <h3>About Me</h3>
      <div>
      <img src={image} alt="profile" className = "guled-pic"
      ></img>
        <h4>Guleds Bio</h4>
      </div>
      <div>
        <p>I am a fullstack developer who has a wide </p>
      </div>
    </div>
  );
}

export default About;
