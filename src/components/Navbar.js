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
            class="fas fa-bars"
          ></i>
        </div>
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__menu__list">
          {data.menu.map((menu, index) => {
            return (
              <li className="sidebar__menu__list-item">
                <Link
                  onClick={() => setActiveIndex(index)}
                  className={`sidebar__menu__list-link ${
                    index === activeIndex
                      ? "sidebar__menu__list-link-active"
                      : ""
                  }`}
                  to={menu.link}
                >
                  <i class={`${menu.icon}`}></i>
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
            <Link className="sidebar__menu__list-link" to="">
              <i class="fab fa-github-square"></i>
              <span
                className={`sidebar__menu__list-link-span ${
                  active ? "sidebar__menu__list-link-span-active" : ""
                }`}
              >
                Git Hub
              </span>
            </Link>
            <span className="sidebar__menu__list-tooltip">Git hub</span>
          </li>
          <li className="sidebar__menu__list-item">
            <Link className="sidebar__menu__list-link" to="">
              <i class="fab fa-linkedin"></i>
              <span
                className={`sidebar__menu__list-link-span ${
                  active ? "sidebar__menu__list-link-span-active" : ""
                }`}
              >
                Linkedin
              </span>
            </Link>
            <span className="sidebar__menu__list-tooltip">Linkedin</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
