import React from "react";

import ButtonLink from "../components/ButtonLink";

export default function Project({ project }) {
  return (
    <div className="project__container">
      <div className="project__container-left">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project__container-right">
        <h1>{project.name}</h1>
        <h3>{project.category} project</h3>
        <p>{project.description}</p>
        <div className="project__container-right_buttons">
          <ButtonLink className="btn__green" to={project.projectURL}>
            Demo
          </ButtonLink>
          <ButtonLink className="btn__gray" to={project.githubURL}>
            Github
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
