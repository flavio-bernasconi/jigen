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
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
    const { getPrice, setCurrentStep, setColor, setName } = state;
    const style = {
      background: `linear-gradient(${randomDeg(360)}deg, 
    ${tinycolor(randomColor()).toString("rgb")} 50%, 
    ${tinycolor(currentColor).spin(30).toString("rgb")} 50%)`,
    };

    const selecting = (info, e) => {
      getPrice(info.price);
      setColor([style]);
      setName(info.name);
      setTimeout(() => {
        setCurrentStep("stepTwo", "stepOne");
      }, 250);
    };

    return (
      <div className="pack">
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={container}
          onClick={(e) => selecting(info, e)}
          style={style}
          whileTap={{ scale: 0.9 }}
        >
          {/* {pack.map(() => (
            <motion.div key={Math.random()} className="item" variants={item} />
          ))} */}
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <>
              <motion.div
                key={Math.random()}
                className="item-2"
                variants={item}
                style={{ left: `${i * 27}px` }}
                whileHover={{ y: -10 }}
              />
              <motion.div
                className="bk-white"
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </>
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
