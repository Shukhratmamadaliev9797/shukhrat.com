import React, { useState } from "react";

export default function Terminal(props) {
  const [terminalActive, setTerminalActive] = useState(true);

  return (
    <div className={`terminalText${terminalActive ? "-active" : ""}`}>
      <div
        className={`terminalText__container${terminalActive ? "-active" : ""}`}
      >
        <div className="terminalText__head">
          terminal — bash — shukhrats.com
        </div>
        <div className="terminalText__body">{props.children}</div>
      </div>{" "}
      <span
        onClick={(e) => {
          e.preventDefault();
          setTerminalActive((prevCheck) => !prevCheck);
        }}
        className="terminalText__button"
      >
        +
      </span>
    </div>
  );
}
