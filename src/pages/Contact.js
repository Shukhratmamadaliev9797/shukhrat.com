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

        <form
          method="post"
          name="contact v1"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w50">
              <input id="first-name" type="text" name="first-name" required />
              <label htmlFor="first-name">First name</label>
            </div>
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="text" name="last-name" required />
              <label htmlFor="last-name">Last name</label>
            </div>
          </div>
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w50">
              <input id="email" type="email" name="email" required />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="contact__inputBox contact__inputBox-w50">
              <input id="subject" type="text" name="subject" required />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w100">
              <textarea id="message" type="text" name="message" required />
              <label htmlFor="message">Write your message here...</label>
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
