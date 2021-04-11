import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import data from "../data";
import { motion, transform } from "framer-motion";
import { rightIn, transition } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";
import Button from "../components/Button";
import { useSpring, animated } from "react-spring";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(data.frontEnd[0]);

  const animatedSelection = (skill) => {
    setSelectedSkill(skill);
  };
  const anim = useSpring({
    config: {
      duration: 1000,
    },
    to: {
      opacity: 1,
      transform: `translateX(0%)`,
    },

    from: { opacity: 0, transform: `translateX(-100%)` },

    leave: { opacity: 0, transform: `translateX(100%)` },
  });
  const renderBar = () => {
    return data.frontEnd.map((skill) => {
      return (
        <div
          key={skill.name}
          className="skills__skill"
          onClick={() => animatedSelection(skill)}
        >
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
      <animated.div style={anim} className="skills__skill__selectedSkill">
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
        {selectedSkill.hadCertificate && (
          <Button link={selectedSkill.certificate} className="btn__red">
            Certificate
          </Button>
        )}
      </animated.div>
    );
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={rightIn}
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
