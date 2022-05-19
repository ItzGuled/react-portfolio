import React from "react";

function Project(props) {
  const { name, description, img, github, link, index } = props;

  return (
    <div className="proj">
      <h2>{`${name}`}</h2>
      <img
        src={require(`../../assets/screenshots/${img}.PNG`)}
        alt={name}
        className="proj-img"
        href={link}
        key={index}
      />
      <h3>{`${description}`}</h3>
      <div className="port-buttons">
        <a href={link}>link</a>
        <a href={github}>GitHub</a>
      </div>
    </div>
  );
}

export default Project;
