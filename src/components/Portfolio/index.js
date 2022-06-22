import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Deep Thoughts",
      description: "Post your deep thoughts and interact with users with a social media like app.",
      github: "https://github.com/ItzGuled/deep-thoughts",
      link: "https://deep-thoughts-social-graph.herokuapp.com/",
      img: "deep"
    },
    {
      name: "Weather Dashboard",
      description: "Weather app that provides current and future forecast in cities.",
      github: "https://github.com/ItzGuled/weather-dashboard",
      link: "https://itzguled.github.io/weather-dashboard/",
      img: "weather"
    },
    {
      name: "PWA Budget Tracker",
      description: "An easy to use budget tracker to add and subtract expenses.",
      github: "https://github.com/ItzGuled/pwa-budget-tracker",
      link: "https://agile-brook-49215.herokuapp.com/",
      img: "progressive"
    },
    {
      name: "Pizza Hunt",
      description: "Create your own delicious pizza with numerous options to choose from.",
      github: "https://github.com/ItzGuled/pizza-hunt",
      link: "https://fierce-falls-54250.herokuapp.com/",
      img: "pizza"
    },
    {
      name: "Password Generator",
      description: "A quick and easy to use password generator to meet your needs.",
      github: "https://github.com/ItzGuled/quick-password-generator",
      link: "https://itzguled.github.io/quick-password-generator/",
      img: "pass"
    },
    {
      name: "Work Day Scheduler",
      description: "A scheduler to plan your day at work with ease of use.",
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
