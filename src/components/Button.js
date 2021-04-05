import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div className={`btn ${props.className}`}>
      <Link to={props.link} target="_blank" download>
        {props.children}
      </Link>
    </div>
  );
}
