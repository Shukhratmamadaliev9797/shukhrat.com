import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { motion, AnimatePresence } from "framer-motion";
import { rightIn, rotateLeftIn, transition, zoomIn } from "../animation";
import ExitButton from "../components/ExitButton";
import Button from "../components/Button";
import Title from "../components/Title";
import data from "../data";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(data.skills[0]);

  const animatedSelection = (skill) => {
    setSelectedSkill(skill);
  };

  const renderBar = () => {
    return data.skills.map((skill, index) => {
      const delay = index * 0.3;
      return (
        <motion.div
          variants={zoomIn}
          transition={{ delay: delay, type: "spring", stiffness: 100 }}
          key={skill._id}
          className="skills__skill"
          onClick={(e) => {
            animatedSelection(skill, index);
          }}
        >
          <span className="skills__skill-name">{skill.name}</span>
          <div r className="skills__skill-percent">
            <div
              className="skills__skill-progress"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
          <span className="skills__skill-value">{skill.percent}%</span>
        </motion.div>
      );
    });
  };

  const renderSelectedSkill = () => {
    return (
      <AnimatePresence>
        <div key={selectedSkill._id} className="skills__skill__selectedSkill">
          <div className="skills__skill__selectedSkill__img">
            <motion.img
              variants={zoomIn}
              transition={{ type: "spring", stiffness: 100 }}
              src={selectedSkill.picture}
              alt={selectedSkill.name}
            />
          </div>

          <motion.h1
            variants={rotateLeftIn}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {selectedSkill.name}
          </motion.h1>
          <motion.ul
            variants={rotateLeftIn}
            transition={{ type: "spring", delay: 0.5, stiffness: 100 }}
          >
            {selectedSkill.description.map((skill) => {
              return <li>{skill}</li>;
            })}
          </motion.ul>
          <motion.div
            variants={zoomIn}
            transition={{ type: "spring", delay: 0.8, stiffness: 100 }}
            className="skills__skill__selectedSkill-progressBar"
          >
            <CircularProgressbar
              valueStart={0}
              value={selectedSkill.percent}
              text={`${selectedSkill.percent}%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,

                trailColor: "#eee",
                pathColor:
                  "radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )",
              })}
            />
          </motion.div>
          {selectedSkill.hadCertificate && (
            <div className="skills__skill__selectedSkill-button">
              <motion.div
                variants={zoomIn}
                transition={{ type: "spring", delay: 1, stiffness: 100 }}
              >
                <Button href={selectedSkill.certificate} className="btn__red">
                  Certificate
                </Button>
              </motion.div>

              <motion.img
                variants={zoomIn}
                transition={{ type: "spring", delay: 1, stiffness: 100 }}
                src="/images/header/certified.png"
                alt="certified"
              />
            </div>
          )}
        </div>
      </AnimatePresence>
    );
  };

  return (
    <motion.div
      variants={rightIn}
      initial="out"
      animate="in"
      transition={transition}
    >
      <Title title="My skills" />
      <div className="skills">
        <div className="skills__left">{renderSelectedSkill()}</div>
        <div className="skills__right">
          <ExitButton />
          {renderBar()}
        </div>
      </div>
    </motion.div>
  );
}
