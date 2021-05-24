import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";

import { motion } from "framer-motion";
import { littleRightBottomIn, transition } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";
import Project from "../pages/Project";
import data from "../data.js";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
const allCategories = [
  "All",
  ...new Set(data.projects.map((project) => project.category)),
];

export default function Projects() {
  const [projects, setProjects] = useState(data.projects);
  const [buttons, setButtons] = useState(allCategories);
  const [activeIndex, setActiveIndex] = useState(1);
  const [project, setProject] = useState(projects[activeIndex]);

  SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

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
  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <SwiperSlide key={project._id}>
          <div className="swiper__image">
            <img src={project.image} alt={project.name} />
          </div>
        </SwiperSlide>
      );
    });
  };

  useEffect(() => {
    const selectedProject = projects.find(
      (project) => project._id === activeIndex
    );
    if (!selectedProject) {
      return;
    }
    setProject(selectedProject);
  }, [activeIndex, projects, project]);
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
        <div className="projects__box-filterButtons">discover projects</div>
        <div className="projects__box-items">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            onActiveIndexChange={(swiper) => {
              const activeIndex = swiper.realIndex;
              setActiveIndex(activeIndex + 1);
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {renderProjects()}
          </Swiper>

          <div className="projects__box-items_project">
            <Project project={project} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
