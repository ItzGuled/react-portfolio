import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Gameporium",
      github: "https://github.com/ItzGuled/Gameporium",
      link: "https://morning-lowlands-91275.herokuapp.com/",
      img: "game"
    },
    {
      name: "Photo Port",
      github: "https://github.com/ItzGuled/photo-port",
      link: "https://itzguled.github.io/photo-port/",
      img: "port"
    },
    {
      name: "Tech Blog",
      github: "https://github.com/ItzGuled/tech-blog",
      link: "https://github.com/ItzGuled/tech-blog",
      img: "tech"
    },
    {
      name: "Weather Dashboard",
      github: "https://github.com/ItzGuled/weather-dashboard",
      link: "https://itzguled.github.io/weather-dashboard/",
      img: "weather"
    },
  ];

  return (
    <section>
      <h3>Portfolio</h3>
      <div>
        {projects.map((project, i) => (
          <Project
            name={project.name}
            github={project.github}
            link={project.link}
            img={project.img}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
