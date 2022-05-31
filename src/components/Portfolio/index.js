import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Gameporium",
      description: "A gaming blog to discuss and review games.",
      github: "https://github.com/ItzGuled/Gameporium",
      link: "https://morning-lowlands-91275.herokuapp.com/",
      img: "game"
    },
    {
      name: "Photo Port",
      description: "An art gallery that uses React.",
      github: "https://github.com/ItzGuled/photo-port",
      link: "https://itzguled.github.io/photo-port/",
      img: "port"
    },
    {
      name: "Tech Blog",
      description: "Tech blog website to interact with others.",
      github: "https://github.com/ItzGuled/tech-blog",
      link: "https://damp-inlet-92456.herokuapp.com",
      img: "tech"
    },
    {
      name: "Weather Dashboard",
      description: "A weather app.",
      github: "https://github.com/ItzGuled/weather-dashboard",
      link: "https://itzguled.github.io/weather-dashboard/",
      img: "weather"
    },
  ];

  return (
    <section>

      <div className='projectsDiv'>
        {projects.map((project, i) => (
          <Project
            name={project.name}
            description={project.description}
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
