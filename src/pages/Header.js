import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";

export default function Header() {
  const [terminalLoading, setTerminalLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTerminalLoading(false);
    }, 1500);
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
                    <Typing.Backspace count={9} speed={50} />
                    <span className="">Designer</span>
                    <Typing.Backspace count={12} />
                    <span className="">and Freelancer</span>
                  </h2>
                  <h3>I will be with you during the tour</h3>
                  <h3>I would recommend not to close me!</h3>
                  <Typing.Reset count={110} delay={1000} speed={1} />
                  <h3>Interested..?!</h3>
                  <h3>Why don't you get to know more about me?</h3>
                  <Typing.Reset count={80} delay={1000} />
                  <span className="terminal__start">
                    {" "}
                    &gt; Link creating...
                  </span>
                  <Typing.Delay ms={1000} />
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
