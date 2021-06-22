import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { RightIn } from "../animation";

import ButtonLink from "../components/ButtonLink";

export default function Project({ project }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={RightIn}
        initial="out"
        animate="in"
        key={project._id}
        className="project__container"
      >
        <div className="project__container-left">
          <h1>{project.name}</h1>
          <img src={project.image} alt={project.name} />
          {project.note && (
            <p>
              <i className="fas fa-info-circle"></i> {project.note}
            </p>
          )}
        </div>
        <div className="project__container-right">
          <div className="project__container-right-item">
            <h3>Category: {project.category} project</h3>
          </div>
          <div className="project__container-right-item">
            <h4>Technologies</h4>
            <ul>
              {project.technologies.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="project__container-right-item">
            <h4>Features</h4>
            <ul>
              {project.features.map((feature) => {
                return <li>{feature}</li>;
              })}
            </ul>
          </div>
          <div>
            <h4>Responsive: {project.isResponsive}</h4>
          </div>
          <div>
            <h4>Deployed on: {project.deploy}</h4>
          </div>

          <div className="project__container-right_buttons">
            <ButtonLink className="btn__green" to={project.projectURL}>
              Demo
            </ButtonLink>
            <ButtonLink className="btn__gray" to={project.githubURL}>
              Github
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
