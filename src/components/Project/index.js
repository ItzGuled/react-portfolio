import React from "react";

function Project(props) {
  const { name, description, img, github, link, index } = props;

  return (
    <div className="proj">
      <img
        src={require(`../../assets/screenshots/${img}.PNG`)}
        alt={name}
        className="proj-img"
        href={link}
        key={index}
      />
      <div className="port-buttons">
        <h2>{`${name}`}</h2>
        <p>{`${description}`}</p>
        <a target="_blank" href={link} rel="noreferrer">link</a>
        <a target="_blank" href={github} rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Project;
