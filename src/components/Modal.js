import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { zoomIn } from "../animation";

export default function Modal(props) {
  return (
    <div className="modal__container">
      <AnimatePresence>
        <motion.div
          variants={zoomIn}
          initial="out"
          animate="in"
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
          }}
          className="modal__box"
        >
          <h1>{props.text}</h1>
          <button onClick={props.onClick}>OK</button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
