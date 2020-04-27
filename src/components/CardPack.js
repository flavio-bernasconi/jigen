import React from "react";
import { motion } from "framer-motion";
import { observer, inject } from "mobx-react";

var tinycolor = require("tinycolor2");

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};

let currentColor;
const pack = new Array(20).fill(0);
const randomDeg = (n) => Math.round(Math.random() * n + 10);
const randomColor = () => {
  currentColor = `rgb(${randomDeg(230)}, ${randomDeg(230)}, ${randomDeg(230)})`;
  return currentColor;
};

export const CardPack = inject("state")(
  observer(function CardPack({ state, info }) {
    const { getPrice, setCurrentStep } = state;
    const selecting = (price, e) => {
      getPrice(price);
      setTimeout(() => {
        setCurrentStep("stepTwo", "stepOne");
      }, 600);
    };

    return (
      <div className="pack">
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={container}
          onClick={(e) => selecting(info.price, e)}
          style={{
            background: `linear-gradient(${randomDeg(80)}deg, 
          ${tinycolor(randomColor()).toString("rgb")} 50%, 
          ${tinycolor(currentColor).spin(18).toString("rgb")} 50%)`,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {pack.map(() => (
            <motion.div
              key={Math.random()}
              className="item"
              variants={container}
            />
          ))}
          <div className="name-pack" key={info.name}>
            <h4>{info.name}</h4>
            <p>{info.price}</p>
          </div>
        </motion.div>
      </div>
    );
  })
);
