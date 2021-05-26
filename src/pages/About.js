import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rotateLeftIn, topRightIn } from "../animation";
import Title from "../components/Title";

import ExitButton from "../components/ExitButton";
import ButtonLink from "../components/ButtonLink";
import Loader from "../components/Loader";

const About = () => {
  const [loading, setLoading] = useState(false);
  const calcAge = () => {
    return new Date().getFullYear() - 1997;
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AnimatePresence>
      <div className="about__education">
        <div>
          <Title title="Biography & Education" />
          <ExitButton />
        </div>
        <div className="about">
          <div className="about__left">
            <div className="about__image">
              <motion.div
                variants={rotateLeftIn}
                initial="out"
                animate="in"
                className="about__image-container"
              >
                <img src="../images/header/about1.png" alt="My avatar" />
              </motion.div>
              <p>Front End Developer</p>
              <h1>Shukhrat Mamadaliev</h1>
            </div>
          </div>
          <div className="about__right">
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
                  <span>Age:</span> {calcAge()}
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
              <ButtonLink to="/contact" className="btn__green">
                Contact me
              </ButtonLink>
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
      </div>
    </AnimatePresence>
  );
};
export default About;
