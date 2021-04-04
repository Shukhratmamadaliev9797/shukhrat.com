import React from "react";
import { motion } from "framer-motion";
import { topRightIn, transition } from "../animation";
import Title from "../components/Title";
// import myAvatar from "../../public/images/about/my_avatar.jpg";
import Button from "../components/Button";
import ExitButton from "../components/ExitButton";

class About extends React.Component {
  calcAge = () => {
    return new Date().getFullYear() - 1997;
  };
  render() {
    return (
      <motion.div
        className="about__education"
        initial="out"
        animate="in"
        exit="out"
        variants={topRightIn}
        transition={transition}
      >
        <div className="about">
          <div className="about__left">
            <Title title="Biography & Education" />
            <div className="about__image">
              <img src="../images/about/my_avatar.jpg" alt="My avatar" />
              <p>Front End Developer</p>
              <h1>Shukhrat Mamadaliev</h1>
            </div>
          </div>
          <div className="about__right">
            <ExitButton />
            <div className="about__right-text">
              <h2>About me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
                <br />
                <br />
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in
              </p>
              <ul>
                <li>
                  <span>Name :</span> Shukhrat Mamadaliev
                </li>
                <li>
                  <span>Birthday :</span> 27 June 1997
                </li>
                <li>
                  <span>Age:</span> {this.calcAge()}
                </li>
                <li>
                  <span>Address :</span> London, United Kingdom
                </li>

                <li>
                  <span>Email :</span> Shukhratmamadaliev9797@gmail.com
                </li>
                <li>
                  <span>Phone :</span> +(44) 07523230971
                </li>
                <li>
                  <span>Freelancer :</span> Available
                </li>
              </ul>
            </div>
            <div className="about__contact">
              <Button className="btn__green">Contact me</Button>
            </div>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className="education__times">
            <div className="education__time">
              <div className="education__time-dot"></div>
              <div className="education__time-date">2013</div>
              <div className="education__time-content">
                <h3>Information College</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
              </div>
            </div>
            <div className="education__time">
              <div className="education__time-dot"></div>
              <div className="education__time-date">2013</div>
              <div className="education__time-content">
                <h3>Information College</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
              </div>
            </div>
            <div className="education__time">
              <div className="education__time-dot"></div>
              <div className="education__time-date">2013</div>
              <div className="education__time-content">
                <h3>Information College</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
export default About;
