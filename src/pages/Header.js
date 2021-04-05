import React from "react";
import { Link } from "react-router-dom";
import Typing from "../components/TypeScript";
import { motion } from "framer-motion";
import { fadeIn, transition } from "../animation";

const Header = () => {
  return (
    <motion.div
      className="header__container"
      initial="out"
      animate="in"
      exit="out"
      variants={fadeIn}
      transition={transition}
    >
      <div className="header__social header__social-facebook_background">
        <Link className="header__social header__social-facebook_content">
          <i className="fab fa-facebook-square header__social-icon"></i>
        </Link>
      </div>
      <div className="header__social header__social-instagram_background">
        <div className="header__social header__social-instagram_content">
          <i className="fab fa-instagram header__social-icon"></i>
        </div>
      </div>
      <div className="header__social header__social-linkedin_background">
        <div className="header__social header__social-linkedin_content">
          <i className="fab fa-linkedin header__social-icon"></i>
        </div>
      </div>
      <div className="header__social header__social-github_background">
        <div className="header__social header__social-github_content">
          <i className="fab fa-github-square header__social-icon"></i>
        </div>
      </div>
      <div className="header__hero header__hero_background">
        <div className="header__hero header__hero_content">
          <div className="header__hero-text">
            <p>Hello, my name is</p>
            <h1>Shukhrat Mamadaliev</h1>{" "}
            <Typing
              className="header__hero-text-typing"
              word1="Web developer"
              word2="Web Designer"
              word3="Freelancer"
            />
          </div>
        </div>
      </div>
      <div className="header__section header__section-about_background">
        <Link
          className="header__section header__section-about_content"
          to="/about"
        >
          <i className="far fa-address-card header__section-horizontal-icon header__section-icon-about"></i>
          <span className="header__section-horizontal-title">About</span>
          <p className="header__section-vertical-paragraph">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </Link>
      </div>
      <div className="header__section header__section-skills_background">
        <Link
          to="/skills"
          className="header__section header__section-skills_content"
        >
          <i className="fas fa-check-square header__section-horizontal-icon header__section-icon-skills"></i>
          <span className="header__section-horizontal-title">Skills</span>
          <p className="header__section-vertical-paragraph">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </Link>
      </div>
      <div className="header__section header__section-services_background">
        <Link
          to="/services"
          className="header__section header__section-services_content"
        >
          <i className="fas fa-clipboard-list header__section-vertical-icon header__section-icon-services"></i>
          <span className="header__section-vertical-title">Services</span>
          <p className="header__section-vertical-paragraph">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </Link>
      </div>
      <div className="header__section header__section-4_background">
        <div className="header__section header__section-4_content">
          <i className="fab fa-product-hunt fa-2x header__section-vertical-icon header__section-icon-4"></i>
          <span className="header__section-vertical-title">Project</span>
          <p className="header__section-vertical-paragraph">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
      <div className="header__section header__section-5_background">
        <div className="header__section header__section-5_content">
          <i className="fab fa-product-hunt fa-2x header__section-vertical-icon header__section-icon-5"></i>
          <span className="header__section-vertical-title">Project</span>
          <p className="header__section-vertical-paragraph">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
      <div className="header__section header__section-projects_background">
        <div className="header__section header__section-projects_content">
          <i className="fab fa-product-hunt fa-2x header__section-vertical-icon header__section-icon-project"></i>
          <span className="header__section-vertical-title">Project</span>
          <p className="header__section-vertical-paragraph">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
      <div className="header__section header__section-contact_background">
        <div className="header__section header__section-contact_content">
          <i className="fas fa-phone-square-alt fa-2x header__section-vertical-icon header__section-icon-contact"></i>
          <span className="header__section-vertical-title">Contact</span>
          <p className="header__section-vertical-paragraph">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
      <div className="header__section header__section-setting_background">
        <div className="header__section header__section-setting_content">
          <i className="fas fa-cog fa-2x header__section-vertical-icon header__section-vertical-icon-setting"></i>
          <span className="header__section-vertical-title">Setting</span>
          <p className="header__section-vertical-paragraph">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
