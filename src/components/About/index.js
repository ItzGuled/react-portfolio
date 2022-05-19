import React from "react";
import image from "../../assets/guled.JPG";

function About() {
  return (
    <div className="about-me">
      <div>
        <img src={image} alt="profile" className="guled-pic"></img>
        <h2>Guleds Bio</h2>
      </div>
      <div>
        <p>I am a fullstack developer who has a wide </p>
      </div>
    </div>
  );
}

export default About;
