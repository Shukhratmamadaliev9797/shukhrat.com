import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`sidebar ${active ? "sidebar-active" : ""}`}>
      <div className={`sidebar__logo ${active ? "sidebar__logo-active" : ""}`}>
        <div className="sidebar__logo-content">
          <div
            className={`sidebar__logo-name ${
              active ? "sidebar__logo-name-active" : ""
            }`}
          >
            Shukhrat
          </div>
        </div>
        <div className="sidebar__menu-icon">
          <i
            onClick={() => setActive((prevCheck) => !prevCheck)}
            className="fas fa-bars"
          ></i>
        </div>
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__menu__list">
          {data.menu.map((menu, index) => {
            return (
              <li key={menu._id} className="sidebar__menu__list-item">
                <Link
                  onClick={() => setActiveIndex(index)}
                  className={`sidebar__menu__list-link ${
                    index === activeIndex
                      ? "sidebar__menu__list-link-active"
                      : ""
                  }`}
                  to={menu.link}
                >
                  <i className={`${menu.icon}`}></i>
                  <span
                    className={`sidebar__menu__list-link-span ${
                      active ? "sidebar__menu__list-link-span-active" : ""
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
                <span className="sidebar__menu__list-tooltip">Home</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__menu__list">
          <li className="sidebar__menu__list-item">
            <a
              className="sidebar__menu__list-link"
              href="https://github.com/Shukhratmamadaliev9797"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square"></i>
              <span
                className={`sidebar__menu__list-link-span ${
                  active ? "sidebar__menu__list-link-span-active" : ""
                }`}
              >
                Git Hub
              </span>
            </a>
            <span className="sidebar__menu__list-tooltip">Git hub</span>
          </li>
          <li className="sidebar__menu__list-item">
            <a
              className="sidebar__menu__list-link"
              href="https://www.linkedin.com/in/shukhrat-mamadaliev-b5423019a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <span
                className={`sidebar__menu__list-link-span ${
                  active ? "sidebar__menu__list-link-span-active" : ""
                }`}
              >
                Linkedin
              </span>
            </a>
            <span className="sidebar__menu__list-tooltip">Linkedin</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
