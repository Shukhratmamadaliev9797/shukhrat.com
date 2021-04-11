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
      <div className="square contact_square-1"></div>
      <div className="square contact_square-2"></div>
      <div className="square contact_square-3"></div>
      <div className="square contact_square-4"></div>
      <div className="contact__formBox">
        <h1>Send a Message</h1>
        <form>
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="text" name="" required />
              <span>First name</span>
            </div>
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="text" name="" required />
              <span>Last name</span>
            </div>
          </div>
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="email" name="" required />
              <span>Email address</span>
            </div>
            <div className="contact__inputBox contact__inputBox-w50">
              <input type="text" name="" required />
              <span>Subject</span>
            </div>
          </div>
          <div className="contact__formBox-row">
            <div className="contact__inputBox contact__inputBox-w100">
              <textarea type="text" name="" required />
              <span>Write your message here...</span>
            </div>
          </div>
          <div className="contact__inputBox contact__inputBox-w100">
            <button type="button">Submit</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
