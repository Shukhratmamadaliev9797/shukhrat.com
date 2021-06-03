import React from "react";
import { rotateLeftIn, topRightIn, transition, zoomIn } from "../animation";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Title from "../components/Title";
import Typing from "react-typing-animation";
import ExitButton from "../components/ExitButton";
import ButtonLink from "../components/ButtonLink";
import { useEffect } from "react";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const calcAge = () => {
    return new Date().getFullYear() - 1997;
  };

  useEffect(() => {
    if (inView) {
      controls.start("in");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        variants={topRightIn}
        initial="out"
        animate="in"
        transition={transition}
        className="about__education"
      >
        <div>
          <Title title="Biography & Education" />
          <ExitButton />
        </div>
        <div className="about">
          <div className="about__left">
            <div className="about__image">
              <motion.div
                variants={rotateLeftIn}
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
              <h2>Who am I ?</h2>

              <p>
                Hi, I'm Shukhrat, a 24-year-old Uzbek Freelance Front-end
                developer. I have a desire to learn softwear development deeply
                and this great passion made me approach to the UK. Now I am
                studying at Ulster University in London. Basically, I create web
                applications using
                {" REACTJS"}. I'm also started to learn NODEJS, MONGODB for
                Back-end.
                <br />
                <br />
                <Typing.Delay ms={1000} />
                I'm a guy who likes making unusual things with web technologies.
                I like to resolve design problems, create smart user interface
                and imagine useful interaction, developing rich web experiences
                & web applications.
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
                  <span>Nationality: </span> Uzbek
                </li>
                <li>
                  <span>Address :</span> London, United Kingdom
                </li>

                <li>
                  <span>Email :</span> Shukhratmamadaliev9797@gmail.com
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
              <div className="education__time-date">2004</div>
              <motion.div
                ref={ref}
                initial="out"
                animate={controls}
                variants={zoomIn}
                transition={{ type: "spring", stiffness: 300 }}
                className="education__time-content"
              >
                <h3>High school</h3>
                <ul>
                  <li>2004 - 2013 •</li>
                  <li>Namangan, Uzbekistan •</li>
                </ul>
              </motion.div>
            </div>
            <div className="education__time">
              <div className="education__time-dot"></div>
              <div className="education__time-date">2013</div>
              <motion.div
                ref={ref}
                initial="out"
                animate={controls}
                variants={zoomIn}
                transition={{
                  duration: 0.3,
                  delay: 1,
                  type: "spring",
                  stiffness: 300,
                }}
                className="education__time-content"
              >
                <h3>Information technology College</h3>
                <ul>
                  <li> • 2013 - 2016 </li>
                  <li> • Namangan, Uzbekistan</li>
                  <li> • A level</li>
                </ul>
              </motion.div>
            </div>
            <div className="education__time">
              <div className="education__time-dot"></div>
              <div className="education__time-date">2019</div>
              <motion.div
                ref={ref}
                initial="out"
                animate={controls}
                variants={zoomIn}
                transition={{
                  duration: 0.3,
                  delay: 1.3,
                  type: "spring",
                  stiffness: 300,
                }}
                className="education__time-content"
              >
                <h3>Ulster University</h3>
                <ul>
                  <li>2019 - Current • </li>
                  <li>London, United Kingdom • </li>
                  <li>Bachelor of Science - Computing systems • </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default About;
