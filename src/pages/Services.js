import React from "react";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import Terminal from "../components/Terminal";
import Title from "../components/Title";
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
          >
            <div className="services__card-icon">
              <img src={service.icon} alt={service.icon} />
            </div>
            <h1>{service.name}</h1>
            <p>{service.description}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Terminal>
        <Typing>
          <span className="terminal__start"> &gt; Processing...</span>
          <Typing.Reset count={10} delay={1000} />
          <h3>Now, it's time to show you my services.</h3>
          <Typing.Reset count={10} delay={6000} />
          <h3>Are you thinking that this guy really knows them?</h3>
          <h3>Let me prove my knowledge by showing you my projects.</h3>
          <h3>Wait...!</h3>
          <Typing.Reset count={80} delay={2000} />
          <h3>Ready...?</h3>
          <Typing.Reset count={10} delay={1000} />
          <span className="terminal__start"> &gt; Projects packing...</span>
          <Typing.Reset count={10} delay={1000} />
          <h3>
            <Link to="/projects">Projects</Link>
          </h3>
        </Typing>
      </Terminal>
      <div className="services">
        <div>
          <Title title="Services" />
        </div>

        <div className="services__title">
          <h1>What I offer ?</h1>
        </div>
        <div className="services__box">{renderServicesCard()}</div>
      </div>
    </div>
  );
}
