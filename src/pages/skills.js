import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import data from "../data";
import { motion } from "framer-motion";
import { animationSkills, transition } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(data.frontEnd[0]);

  const renderBar = () => {
    return data.frontEnd.map((skill) => {
      return (
        <div className="skills__skill" onClick={() => setSelectedSkill(skill)}>
          <span className="skills__skill-name">{skill.name}</span>
          <div className="skills__skill-percent">
            <div
              className="skills__skill-progress"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
          <span className="skills__skill-value">{skill.percent}%</span>
        </div>
      );
    });
  };

  const renderSelectedSkill = () => {
    return (
      <div className="skills__skill__selectedSkill">
        <img src={selectedSkill.picture} alt={selectedSkill.name} />

        <h1>{selectedSkill.name}</h1>
        <p>{selectedSkill.description}</p>
        <div className="skills__skill__selectedSkill-progressBar">
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
          ;
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationSkills}
      transition={transition}
    >
      <Title title="My skills" />
      <div className="skills">
        <div className="skills__left">{renderSelectedSkill()}</div>
        <div className="skills__right">
          {" "}
          <ExitButton />
          {renderBar()}
        </div>
      </div>
    </motion.div>
  );
}
