import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Button from "../components/Button";
import Title from "../components/Title";
import data from "../data";
import "react-circular-progressbar/dist/styles.css";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(data.skills[0]);

  const animatedSelection = (skill) => {
    setSelectedSkill(skill);
  };

  const renderBar = () => {
    return data.skills.map((skill, index) => {
      const delay = index * 0.3;
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
          <img src={selectedSkill.picture} alt={selectedSkill.name} />
        </div>

        <h1>{selectedSkill.name}</h1>
        <ul>
          {selectedSkill.description.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
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
            <div>
              <Button href={selectedSkill.certificate} className="btn__red">
                Certificate
              </Button>
            </div>

            <img src="/images/header/certified.png" alt="certified" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="skills">
      <Title title="My skills" />

      <div className="skills__content">
        <div className="skills__left">{renderSelectedSkill()} </div>
        <div className="skills__right">{renderBar()}</div>
      </div>
    </div>
  );
}
