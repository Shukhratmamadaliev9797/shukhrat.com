import React from "react";

export default function Loader() {
  return (
    <div className="loader__container">
      <span className="loader__loading">Loading...</span>
      <span className="loader__animation-1"></span>
      <span className="loader__animation-2"></span>
    </div>
  );
}
