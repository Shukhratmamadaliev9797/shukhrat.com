import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { littleleftBottomIn, transition } from "../animation";
import ExitButton from "../components/ExitButton";
import { motion } from "framer-motion";
import Title from "../components/Title";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

export default function Contact(props) {
  const [successSent, setSucessSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fkitjro",
        "template_fzeu07f",
        e.target,
        "user_R8p8jtYLZqhSRRVh9gyFe"
      )
      .then(
        (result) => {
          console.log(result.text);
          if ((result.text = "OK")) {
            setMessage("Message sent successfully");
            setSucessSent(true);
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
          setMessage("Something wrong, try again");
        }
      );
  };

  return loading ? (
    <Loader />
  ) : (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={littleleftBottomIn}
      transition={transition}
      className="contact"
    >
      {successSent ? (
        <Modal text={message} onClick={() => setSucessSent(false)} />
      ) : (
        ""
      )}

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
        <form onSubmit={sendEmail}>
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
          <div className="contact__inputBox contact__inputBox-w100">
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
