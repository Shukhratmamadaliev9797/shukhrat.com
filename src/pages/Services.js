import React from "react";
import { motion } from "framer-motion";
import { bottomRightIn, transition } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";
import data from "../data.js";

export default function Services() {
  const renderServicesCard = () => {
    return data.services.map((service, index) => {
      return (
        <div
          key={service.name}
          className={`services__card services__card-${index + 1}`}
        >
          <div className={`services__card-img services__card-${index + 1}-img`}>
            <img src={service.image} alt={service.image} />
          </div>
          <div
            className={`services__card-content services__card-${
              index + 1
            }-content`}
          ></div>
        </div>
      );
    });
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={bottomRightIn}
      transition={transition}
      className="services"
    >
      <div className="services__title">
        <Title title="What we do?" />
        <ExitButton />
      </div>
      <div className="services__box">{renderServicesCard()}</div>
    </motion.div>
  );
}
