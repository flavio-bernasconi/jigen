import * as React from "react";
import { motion } from "framer-motion";
import { observer, inject } from "mobx-react";
var tinycolor = require("tinycolor2");

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
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

export const Item = inject("state")(
  observer(function Item({ state }) {
    const { dataset, getPrice, setCurrentStep } = state;
    const selecting = (price) => {
      getPrice(price);
      setCurrentStep("stepTwo", "stepOne");
    };

    return dataset.map((e, i) => (
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
        key={Math.random()}
        style={{
          background: `linear-gradient(${randomDeg(80)}deg, 
          ${tinycolor(randomColor()).toString("rgb")} 50%, 
          ${tinycolor(currentColor).spin(18).toString("rgb")} 50%)`,
        }}
      >
        {pack.map(() => (
          <motion.div
            key={Math.random()}
            className="item"
            variants={container}
          />
        ))}
        <div
          className="name-pack"
          key={e.name}
          onClick={() => selecting(e.price)}
        >
          <h4>{e.name}</h4>
          <p>{e.price}</p>
        </div>
      </motion.div>
    ));
  })
);
