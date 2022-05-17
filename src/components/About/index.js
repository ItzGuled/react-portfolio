import React from "react";
import image from "../../assets/guled.JPG";

function About() {
  return (
    <div>
      <h3>About Me</h3>
      <div>
      <img src={image} alt="profile" className = "guled-pic"
      ></img>
        <h4>Guleds Bio</h4>
      </div>
      <div>
        <p>My name is Guled Osman</p>
      </div>
    </div>
  );
}

export default About;
