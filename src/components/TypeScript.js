import React from "react";
import Typed from "typed.js";

class Typing extends React.Component {
  componentDidMount() {
    const { word1, word2, word3 } = this.props;
    this.options = {
      strings: [word1, word2, word3],
      typeSpeed: 200,
      backSpeed: 200,
      loop: true,
    };

    this.typed = new Typed(".type", this.options);
  }
  render() {
    const { startWord, className } = this.props;
    return (
      <div>
        <h2 className={className}>
          {startWord} <span className="type"></span>
        </h2>
      </div>
    );
  }
}

export default Typing;
