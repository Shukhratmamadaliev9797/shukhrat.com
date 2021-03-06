import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Button from "../components/Button";
import Title from "../components/Title";
import data from "../data";
import "react-circular-progressbar/dist/styles.css";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";
import Terminal from "../components/Terminal";
import { motion } from "framer-motion";
import { topIn, zoomIn } from "../animation";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(data.skills[0]);

  const animatedSelection = (skill) => {
    setSelectedSkill(skill);
  };

  const renderBar = () => {
    return data.skills.map((skill, index) => {
      return (
        <div
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
        </div>
      );
    });
  };

  const renderSelectedSkill = () => {
    return (
      <div key={selectedSkill._id} className="skills__skill__selectedSkill">
        <div className="skills__skill__selectedSkill__img">
          <motion.img
            variants={zoomIn}
            initial="out"
            animate="in"
            transition={{ type: "spring", duration: 2 }}
            src={selectedSkill.picture}
            alt={selectedSkill.name}
          />
        </div>

        <motion.h1
          variants={topIn}
          initial="out"
          animate="in"
          transition={{ type: "spring", duration: 1, delay: 0.5 }}
        >
          {selectedSkill.name}
        </motion.h1>
        <motion.ul
          variants={topIn}
          initial="out"
          animate="in"
          transition={{ type: "spring", duration: 1, delay: 0.7 }}
        >
          {selectedSkill.description.map((skill) => {
            return <li>{skill}</li>;
          })}
        </motion.ul>
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
            <motion.div
              variants={topIn}
              initial="out"
              animate="in"
              transition={{ type: "spring", duration: 1, delay: 0.7 }}
            >
              <Button href={selectedSkill.certificate} className="btn__red">
                Certificate
              </Button>
            </motion.div>

            <motion.img
              variants={zoomIn}
              initial="out"
              animate="in"
              transition={{ type: "spring", duration: 2 }}
              src="/images/skills/certified.png"
              alt="certified"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Terminal>
        <Typing>
          <span className="terminal__start"> &gt; Processing...</span>
          <Typing.Delay ms={1000} />
          <Typing.Reset count={20} />
          <h3>It's great to see you again!!!</h3>
          <h3>Learn more about my skills by clicking skill bars</h3>
          <Typing.Reset count={100} delay={3000} speed={1} />
          <h3>You wanna see what I offer you with these technologies?</h3>
          <h3>
            Then, let's go to my <Link to="/services">services page</Link>
          </h3>
        </Typing>
      </Terminal>
      <div className="skills">
        <Title title="My skills" />
        <div></div>
        <div className="skills__content">
          <div className="skills__left">{renderSelectedSkill()} </div>
          <div className="skills__right">{renderBar()}</div>
        </div>
      </div>
    </div>
  );
}
