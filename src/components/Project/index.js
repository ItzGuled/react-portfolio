import React from "react";

function Project(props) {
  const { name, img, github, link, index } = props;

  return (
    <div>
      <h4>{`${name}`}</h4>
      <img
        src={require(`../../assets/screenshots/${img}.PNG`)}
        alt={name}
        className=""
        href={link}
        key={index}
      />
      <div>
        <a href={link}>link</a>
        <a href={github}>GitHub</a>
      </div>
    </div>
  );
}

export default Project;
