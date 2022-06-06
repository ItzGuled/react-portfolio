import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Perspective News",
      description: "A news app that lets you save your news.",
      github: "https://github.com/ItzGuled/perspective-news",
      link: "https://perspective-news.herokuapp.com/",
      img: "perspective"
    },
    {
      name: "Password Generator",
      description: "A quick and easy to use password generator to meet your needs.",
      github: "https://github.com/ItzGuled/quick-password-generator",
      link: "https://itzguled.github.io/quick-password-generator/",
      img: "pass"
    },
    {
      name: "Gameporium",
      description: "A gaming blog to discuss and review games.",
      github: "https://github.com/ItzGuled/Gameporium",
      link: "https://morning-lowlands-91275.herokuapp.com/",
      img: "game"
    },
    {
      name: "Pizza Hunt",
      description: "Create your own delicious pizza with numerous options to choose from.",
      github: "https://github.com/ItzGuled/pizza-hunt",
      link: "https://fierce-falls-54250.herokuapp.com/",
      img: "pizza"
    },
    {
      name: "Tech Blog",
      description: "Tech blog website to interact with others on all things tech.",
      github: "https://github.com/ItzGuled/tech-blog",
      link: "https://damp-inlet-92456.herokuapp.com",
      img: "tech"
    },
    {
      name: "Work Day Scheduler",
      description: "A scheduler to plan you day at work with ease of use.",
      github: "https://github.com/ItzGuled/work-day-scheduler",
      link: "https://itzguled.github.io/work-day-scheduler/",
      img: "work"
    },
    
  ];

  return (
    <section>
     <h1 className="Projh">Featured Projects</h1>
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
