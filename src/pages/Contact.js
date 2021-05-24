import { motion } from "framer-motion";
import React from "react";
import { littleleftBottomIn, transition } from "../animation";
import ExitButton from "../components/ExitButton";
import Title from "../components/Title";

export default function Contact() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={littleleftBottomIn}
      transition={transition}
      className="contact"
    >
      <div>
        <Title title="Contact me" />
        <ExitButton />
      </div>
      <motion.div
        initial={{ x: "0rem" }}
        animate={{ x: "-10rem" }}
        transition={{ yoyo: Infinity, duration: 4, delay: 1 }}
        className="square contact_square-1"
      ></motion.div>
      <motion.div
        initial={{ x: "0rem" }}
        animate={{ x: "10rem" }}
        transition={{ yoyo: Infinity, duration: 3 }}
        className="square contact_square-2"
      ></motion.div>
      <motion.div
        initial={{ y: "0rem" }}
        animate={{ y: "10rem" }}
        transition={{ yoyo: Infinity, duration: 4, delay: 2 }}
        className="square contact_square-3"
      ></motion.div>
      <motion.div
        initial={{ y: "0rem" }}
        animate={{ y: "10rem" }}
        transition={{ yoyo: Infinity, duration: 3, delay: 3 }}
        className="square contact_square-4"
      ></motion.div>
      <div className="contact__formBox">
        <h1>Send a Message</h1>
        <form action="POST" name="contact" data-netlify="true">
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="text" name="firstName" required />
              <span>First name</span>
            </div>
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="text" name="lastName" required />
              <span>Last name</span>
            </div>
          </div>
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="email" name="email" required />
              <span>Email address</span>
            </div>
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="text" name="subject" required />
              <span>Subject</span>
            </div>
          </div>
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w100">
              <textarea type="text" name="message" required />
              <span>Write your message here...</span>
            </div>
          </div>
          <div className="contact__formBox-row">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <div className="contact__inputBox contact__inputBox-w100">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
