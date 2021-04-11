import React, { useRef } from "react";
import data from "../data";
import { useSpring, animated } from "react-spring";

export default function Project({ showProject, setShowProject, id }) {
  const modalRef = useRef();
  const project = data.projects.find((project) => project._id === id);
  console.log(typeof id);
  const animation = useSpring({
    config: {
      duration: 500,
    },
    opacity: showProject ? 1 : 0,
    scale: showProject ? 1 : 0,
    transform: showProject ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeProjectModal = (e) => {
    if (modalRef.current === e.target) {
      setShowProject(false);
    }
  };
  return (
    <>
      {showProject ? (
        <div
          className="project__background"
          ref={modalRef}
          onClick={closeProjectModal}
        >
          <button
            className="btn__exit project__modal_btn"
            onClick={() => setShowProject((prev) => !prev)}
          >
            {" "}
            <i className="fas fa-times btn__exit-icon"></i>
          </button>
          <h1>{project.name}</h1>
          <animated.div style={animation} className="project__modal">
            <div className="project__modal-imgBox">
              <img src={project.image} alt={project.name} />
            </div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <div className="project__modal-btnBox">
              <div className="btn btn__green">
                <a
                  href={project.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
              <div className="btn btn__red">
                <a
                  href={project.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App demo
                </a>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
}
