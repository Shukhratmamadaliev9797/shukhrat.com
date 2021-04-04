import React from "react";
import { Link } from "react-router-dom";

export default function ExitButton() {
  return (
    <Link className="btn__exit" to="/">
      <i class="fas fa-times btn__exit-icon"></i>
    </Link>
  );
}
