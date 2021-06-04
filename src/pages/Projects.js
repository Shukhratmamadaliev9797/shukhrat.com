import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";
import { motion } from "framer-motion";
import { littleRightBottomIn, topIn, transition } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";
import Project from "../pages/Project";
import data from "../data.js";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

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
    return projects.map((project, index) => {
      const delay = index * 0.2;
      return (
        <SwiperSlide key={project._id}>
          <motion.div
            variants={topIn}
            transition={{ delay: delay }}
            className="swiper__image"
          >
            <img src={project.image} alt={project.name} />
          </motion.div>
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
    <div className="projects">
      <div>
        <Title title="My projects" />
      </div>
      <div className="projects__terminal">
        <div className="terminal">
          <div className="terminal__head">terminal — bash — shukhrats.com</div>
          <div className="terminal__body">
            <Typing>
              <span className="terminal__start"> &gt; Processing...</span>
              <Typing.Reset count={10} delay={1000} />
              <h3>Honestly I really like this page</h3>
            </Typing>
          </div>
        </div>
      </div>
      <div className="projects__box">
        <div className="projects__box-title">
          <h2>
            Recent <span>works</span>
          </h2>
        </div>
        <div className="projects__box-filterButtons">
          <h1>Discover projects</h1>
        </div>
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
              delay: 10000,
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
    </div>
  );
}
