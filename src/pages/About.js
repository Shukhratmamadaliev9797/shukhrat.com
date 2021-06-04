import React from "react";
import Title from "../components/Title";
import Typing from "react-typing-animation";
import ButtonLink from "../components/ButtonLink";
import { Link } from "react-router-dom";

const About = () => {
  const calcAge = () => {
    return new Date().getFullYear() - 1997;
  };

  return (
    <div className="about">
      <div>
        <Title title="Biography" />
      </div>
      <div className="about__content">
        <div className="about__left">
          <div className="about__image">
            <div className="about__image-container">
              <img src="../images/header/about1.png" alt="My avatar" />
            </div>
            <p>Front End Developer</p>
            <h1>Shukhrat Mamadaliev</h1>
          </div>
        </div>
        <div className="about__right">
          <div className="about__right-terminal">
            <div className="terminal">
              <div className="terminal__head">
                terminal — bash — shukhrats.com
              </div>
              <div className="terminal__body">
                <Typing speed={10}>
                  <span className="terminal__start"> &gt; Processing...</span>
                  <Typing.Delay ms={1000} />
                  <Typing.Reset count={10} />
                  <h3>Hi again!</h3>
                  <h4>Let me tell you about Myself</h4>
                  <Typing.Reset count={30} delay={1000} />
                  <p>
                    I'm a 24-year-old Uzbek Freelance Front-end developer. I
                    have a desire to learn softwear development deeply and this
                    great passion made me approach to the UK. Now I am studying
                    at Ulster University in London. Basically, I create web
                    applications using
                    {" REACTJS"}. I'm also started to learn NODEJS, MONGODB for
                    Back-end.
                    <br />
                    <br />
                    <Typing.Delay ms={1000} />
                    I'm a guy who likes making unusual things with web
                    technologies. I like to resolve design problems, create
                    smart user interface and imagine useful interaction,
                    developing rich web experiences & web applications.
                  </p>
                  <br />
                  <span>
                    Let's continue the tour in <Link to="/skills">skills</Link>{" "}
                    page
                  </span>
                </Typing>
              </div>
            </div>
          </div>

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
          <div className="about__contact">
            <ButtonLink to="/contact" className="btn__green">
              Contact me
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
