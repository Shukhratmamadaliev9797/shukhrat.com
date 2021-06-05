import React from "react";
import Typing from "react-typing-animation";
import Terminal from "../components/Terminal";
export default function Setting() {
  return (
    <div>
      <Terminal>
        <Typing>
          <span className="terminal__start"> &gt; Processing...</span>
          <Typing.Reset count={10} delay={1000} />
          <h3>Opps, This page is not available now.</h3>
          <h3>sorry for inconvience, I'll fix it as soon as possible</h3>
        </Typing>
      </Terminal>
    </div>
  );
}
