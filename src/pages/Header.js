import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Typing from "../components/TypeScript";
import { leftIn, topIn, transition, zoomIn } from "../animation";

const Header = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <motion.div
      variants={topIn}
      initial="out"
      animate="in"
      transition={transition}
      className="header__container"
    >
      <motion.div
        variants={zoomIn}
        transition={{ type: "spring", stiffness: 150 }}
        className="header__social header__social-facebook_background"
      >
        <a
          href="https://www.facebook.com/shukhratmamadaliev0969/"
          className="header__social header__social-facebook_content"
        >
          <i className="fab fa-facebook-square header__social-icon"></i>
        </a>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.1,
        }}
        className="header__social header__social-instagram_background"
      >
        <a
          href="https://www.instagram.com/shukhrat3626/"
          className="header__social header__social-instagram_content"
        >
          <i className="fab fa-instagram header__social-icon"></i>
        </a>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.2,
        }}
        className="header__social header__social-linkedin_background"
      >
        <a
          href="https://www.linkedin.com/in/shukhrat-mamadaliev-b5423019a/"
          className="header__social header__social-linkedin_content"
        >
          <i className="fab fa-linkedin header__social-icon"></i>
        </a>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.2,
        }}
        className="header__social header__social-github_background"
      >
        <a
          href="https://github.com/Shukhratmamadaliev9797"
          className="header__social header__social-github_content"
        >
          <i className="fab fa-github-square header__social-icon"></i>
        </a>
      </motion.div>
      <motion.div
        variants={leftIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 1.2,
        }}
        className="header__hero header__hero_background"
      >
        <div
          variants={topIn}
          initial="out"
          animate="in"
          transition={{
            type: "spring",
            stiffness: 150,
            delay: 1.2,
          }}
          className="header__hero header__hero_content"
        >
          <motion.div
            variants={topIn}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: 1.2,
            }}
            className="header__hero-text"
          >
            <p>Hello, my name is</p>
            <h1>Shukhrat Mamadaliev</h1>{" "}
            <Typing
              className="header__hero-text-typing"
              word1="Web developer"
              word2="Web Designer"
              word3="Freelancer"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.3,
        }}
        className="header__section header__section-about_background"
      >
        <Link
          className="header__section header__section-about_content"
          to="/about"
        >
          <span className="header__section-horizontal-title">About Me</span>
          <div className="header__section-logo-horizontal">
            <img src="/images/header/about.png" alt="about logo" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.4,
        }}
        className="header__section header__section-skills_background"
      >
        <Link
          to="/skills"
          className="header__section header__section-skills_content"
        >
          <span className="header__section-horizontal-title">Skills</span>
          <div className="header__section-logo-horizontal">
            <img src="/images/header/skills.png" alt="about logo" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.5,
        }}
        className="header__section header__section-services_background"
      >
        <Link
          to="/services"
          className="header__section header__section-services_content"
        >
          <span className="header__section-vertical-title">Services</span>
          <div className="header__section-logo-vertical">
            <img src="/images/header/services.png" alt="about logo" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.6,
        }}
        className="header__section header__section-projects_background"
      >
        <Link
          to="/projects"
          className="header__section header__section-projects_content"
        >
          <span className="header__section-vertical-title">Project</span>
          <div className="header__section-logo-vertical">
            <img src="/images/header/projects.png" alt="about logo" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.7,
        }}
        className="header__section header__section-download_background"
      >
        <a
          href="cv/cv.pdf"
          download
          className="header__section header__section-download_content"
        >
          <span className="header__section-vertical-title">Download CV</span>
          <div className="header__section-logo-vertical">
            <img src="/images/header/cv.png" alt="about logo" />
          </div>
        </a>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.8,
        }}
        className="header__section header__section-5_background"
      >
        <div className="header__section header__section-5_content">
          <span className="header__section-vertical-title">Feedbacks</span>
          <div className="header__section-logo-vertical">
            <img src="/images/header/feedback.png" alt="about logo" />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 0.9,
        }}
        className="header__section header__section-contact_background"
      >
        <Link
          to="/contact"
          className="header__section header__section-contact_content"
        >
          <span className="header__section-vertical-title">Contact</span>
          <div className="header__section-logo-vertical">
            <img src="/images/header/contact.png" alt="about logo" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        variants={zoomIn}
        transition={{
          type: "spring",
          stiffness: 150,
          delay: 1,
        }}
        className="header__section header__section-setting_background"
      >
        <div className="header__section header__section-setting_content">
          <span className="header__section-vertical-title">Setting</span>
          <div className="header__section-logo-vertical">
            <img src="/images/header/setting.png" alt="about logo" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
