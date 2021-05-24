import React from "react";
import { Link } from "react-router-dom";

export default function ExitButton() {
  return (
    <Link className="btn__exit" to="/">
      <i className="fas fa-times btn__exit-icon"></i>
    </Link>
  );
}
