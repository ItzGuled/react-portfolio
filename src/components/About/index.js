import React from "react";
import image from "../../assets/screenshots/guled.jpg";
import Typical from "react-typical";

function About() {
  return (
    <div className="about-me">
      <div>
        <img src={image} alt="profile" className="guled-pic"></img>
        <Typical
          className="title"
          steps={[
            "MongoDB",
            2000,
            "Express",
            2000,
            "React",
            2000,
            "Node",
            2000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </div>
      <div className="borderp">
        <p>
          Full Stack developer with a background in sales, customer service, and banking. I earned my certification in Full Stack Web Development from the University of Minnesota. I really enjoy all
          aspects of tech and its implementation within our society. I'm very
          passionate about learning new skills and applying them in a team
          setting with creative problem solving. I work with the MERN stack and leverage my work experience to provide clients the best product.
        </p>
      </div>
    </div>
  );
}

export default About;
