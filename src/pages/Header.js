import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";

export default function Header() {
  const [terminalLoading, setTerminalLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTerminalLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content-terminal">
          {terminalLoading ? (
            <div className="terminal__loading">
              <FadeLoader color={"white"} size={150} />
            </div>
          ) : (
            <div className="terminal">
              <div className="terminal__head">
                terminal — bash — shukhrats.com
              </div>
              <div className="terminal__body">
                <Typing>
                  <span className="terminal__start"> &gt; Started</span>
                  <Typing.Delay ms={1000} />
                  <br />
                  <span className="terminal__start"> &gt; Processing...</span>
                  <Typing.Reset count={20} delay={1000} />
                  <h3>
                    <span className="">Hi there!</span>
                  </h3>
                  <h1>
                    <span className="">I'm Shukhrat Mamadaliev </span>
                  </h1>
                  <h2>
                    <span className="">Web developer</span>
                    <Typing.Backspace count={9} speed={150} />
                    <span className="">Designer</span>
                    <Typing.Backspace count={12} />
                    <span className="">and Freelancer</span>
                  </h2>
                  <h3>I will be with you during the tour</h3>
                  <Typing.Reset count={80} speed={1} />
                  <h3>Ohh! By the way, I have some issue</h3>
                  <h3>
                    Every time, page rerenders, my mission starts from
                    beginning.
                  </h3>
                  <h3>Don't worry, I am working on it.</h3>
                  <Typing.Reset count={100} speed={1} delay={500} />
                  <h2>Interested..?!</h2>
                  <h2>Why don't you get to know about me?</h2>
                  <h3>
                    <Link to="/about">Learn more...</Link>
                  </h3>
                </Typing>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
