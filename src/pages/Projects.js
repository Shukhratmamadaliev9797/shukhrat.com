import React, { useState } from "react";
import { motion } from "framer-motion";
import { littleRightBottomIn, transition } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";
import data from "../data.js";
import Project from "./Project";
const allCategories = [
  "All",
  ...new Set(data.projects.map((project) => project.category)),
];

export default function Projects() {
  const [projects, setProjects] = useState(data.projects);
  const [showProject, setShowProject] = useState(false);
  const [id, setId] = useState(null);

  const [buttons, setButtons] = useState(allCategories);

  const openModal = (projectId) => {
    setShowProject((prev) => !prev);
    setId(projectId);
  };
  const filter = (button) => {
    if (button === "All") {
      setProjects(data.projects);
      return;
    }

    const filterData = data.projects.filter(
      (project) => project.category === button
    );
    setProjects(filterData);
  };
  const renderButtons = () => {
    return buttons.map((button, index) => {
      return (
        <button
          className="projects__btn"
          key={index}
          type="button"
          onClick={() => filter(button)}
        >
          {button}
        </button>
      );
    });
  };

  const renderProjectsLists = () => {
    return projects.map((project) => {
      return (
        <div className="projects__box-item" key={project._id}>
          <div className="projects__box-item_detailsBox">
            <div className="projects__box-item_imgBox">
              <img src={project.image} alt={project.name} />
            </div>
            <button
              type="button"
              onClick={() => openModal(project._id)}
              className="projects__btn"
            >
              More details
            </button>
          </div>
          <div className="projects__box-item_cover">
            <span>{project.name}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={littleRightBottomIn}
      transition={transition}
      className="projects"
    >
      <div>
        <Title title="My projects" />
        <ExitButton />
      </div>
      <div className="projects__box">
        <div className="projects__box-title">
          <h2>
            Recent <span>works</span>
          </h2>
        </div>
        <div className="projects__box-filterButtons">{renderButtons()}</div>
        <div className="projects__box-items">{renderProjectsLists()}</div>
      </div>
      <Project
        showProject={showProject}
        setShowProject={setShowProject}
        id={id}
      />
    </motion.div>
  );
}
