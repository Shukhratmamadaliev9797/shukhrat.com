import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink({ to, children, className, ...rest }) {
  const parseTo = (to) => {
    let parser = document.createElement("a");
    parser.href = to;
    return parser;
  };

  const isInternal = (to) => {
    // If it's a relative url such as '/path', 'path' and does not contain a protocol we can assume it is internal.

    if (to.indexOf("://") === -1) return true;

    const toLocation = parseTo(to);
    return window.location.hostname === toLocation.hostname;
  };
  const isInternalURL = isInternal(to);
  return (
    <div className={`btn ${className}`}>
      {isInternalURL ? (
        <Link to={to} {...rest}>
          {children}
        </Link>
      ) : (
        <a href={to} rel="noreferrer" target="_blank" {...rest}>
          {children}
        </a>
      )}
    </div>
  );
}
