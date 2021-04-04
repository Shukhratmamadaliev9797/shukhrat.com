import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div className={`btn ${props.className}`}>
      <Link>{props.children}</Link>
    </div>
  );
}
