import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { bottomRightIn, transition } from "../animation";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";
import data from "../data.js";
import Loader from "../components/Loader";

export default function Services() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
          >
            <i className={service.icon}></i>
            <h1>{service.name}</h1>
            <p>{service.description}</p>
          </div>
        </div>
      );
    });
  };

  return loading ? (
    <Loader />
  ) : (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={bottomRightIn}
      transition={transition}
      className="services"
    >
      <div>
        <Title title="What we do?" />
        <ExitButton />
      </div>
      <div className="services__title">
        <h1>Services</h1>
      </div>
      <div className="services__box">{renderServicesCard()}</div>
    </motion.div>
  );
}
