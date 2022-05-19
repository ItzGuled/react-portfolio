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
        <p>I am a fullstack developer with a background in Sales and Banking. Im very passionate about all aspects of tech and its implementation within our society. Coding is a skill I hold in high regard and looking forward to this life long journey of making an impact one line of code at a time.</p>
      </div>
    </div>
  );
}

export default About;
