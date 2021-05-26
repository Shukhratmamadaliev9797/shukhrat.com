import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import data from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { rightIn, rotateLeftIn } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";
import Button from "../components/Button";
import Loader from "../components/Loader";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(data.skills[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const animatedSelection = (skill) => {
    setSelectedSkill(skill);
  };

  const renderBar = () => {
    return data.skills.map((skill, index) => {
      // const delay = 0.3 + index * 0.3;
      return (
        <div
          key={skill.name}
          className="skills__skill"
          onClick={() => animatedSelection(skill, index)}
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
      <AnimatePresence>
        <div key={selectedSkill._id} className="skills__skill__selectedSkill">
          <motion.div
            variants={rotateLeftIn}
            initial="out"
            animate="in"
            exit={{ x: "40vw", rotate: "360deg", opacity: 0 }}
            key={selectedSkill._id}
            className="skills__skill__selectedSkill__img"
          >
            <img src={selectedSkill.picture} alt={selectedSkill.name} />
          </motion.div>

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
          </div>
          {selectedSkill.hadCertificate && (
            <div className="skills__skill__selectedSkill-button">
              <Button href={selectedSkill.certificate} className="btn__red">
                Certificate
              </Button>
              <img src="/images/header/certified.png" alt="certified" />
            </div>
          )}
        </div>
      </AnimatePresence>
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <div
    // initial="out"
    // animate="in"
    // variants={rightIn}
    // transition={{
    //   type: "spring",
    //   duration: 2,
    //   stiffness: 100,

    //   when: "beforeChildren",
    // }}
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
    </div>
  );
}
