import React from "react";
import Title from "../components/Title";
import Typing from "react-typing-animation";
import ButtonLink from "../components/ButtonLink";

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
          <div className="terminal">
            <div className="terminal__head">
              terminal — bash — shukhrats.com
            </div>
            <div className="terminal__body">
              <Typing>
                <p>
                  Hi, I'm Shukhrat, a 24-year-old Uzbek Freelance Front-end
                  developer. I have a desire to learn softwear development
                  deeply and this great passion made me approach to the UK. Now
                  I am studying at Ulster University in London. Basically, I
                  create web applications using
                  {" REACTJS"}. I'm also started to learn NODEJS, MONGODB for
                  Back-end.
                  <br />
                  <br />
                  <Typing.Delay ms={1000} />
                  I'm a guy who likes making unusual things with web
                  technologies. I like to resolve design problems, create smart
                  user interface and imagine useful interaction, developing rich
                  web experiences & web applications.
                </p>
              </Typing>
            </div>
          </div>
          <div className="about__right-text ">
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
    </div>
  );
};
export default About;
