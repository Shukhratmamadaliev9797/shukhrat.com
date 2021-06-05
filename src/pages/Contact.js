import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Title from "../components/Title";
import Terminal from "../components/Terminal";
import Typing from "react-typing-animation";

export default function Contact(props) {
  const [successSent, setSucessSent] = useState(false);

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
          if ((result.text = "OK")) {
            setSucessSent(true);
            e.target.reset();
          }
        },
        (error) => {}
      );
  };

  return (
    <div>
      <Terminal>
        <Typing>
          <>
            <h3>Unfortunately, it's time to say you Bye ): </h3>
            <h3>I hope you like my portofolio...!</h3>
            <h3>Now, it is your turn. Take the desicion...</h3>
            <Typing.Reset count={100} delay={3000} speed={1} />
            <h3>By the way, you can close me now.</h3>
          </>
        </Typing>
      </Terminal>
      {successSent ? (
        <Terminal>
          <Typing>
            <span className="terminal__start"> &gt; Sending...</span>
            <Typing.Reset count={10} delay={1000} />
            <h3>Awesome!!!</h3>
            <h3>I've noticed that I received the email from you.</h3>
            <h3>I get back you as soon as possible. Thank you. </h3>
          </Typing>
        </Terminal>
      ) : (
        ""
      )}
      <div className="contact">
        <div className="contact__title">
          <Title title="Contact me" />
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
      </div>
    </div>
  );
}
