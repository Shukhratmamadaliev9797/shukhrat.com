import React from "react";
import { motion } from "framer-motion";
import { bottomRightIn, transition } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";

export default function Services() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={bottomRightIn}
      transition={transition}
      className="services"
    >
      <Title title="What we do?" />
      <ExitButton />
    </motion.div>
  );
}
