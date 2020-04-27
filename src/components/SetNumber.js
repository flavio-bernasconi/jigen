import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 0.5,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const height = () =>
  window.innerWidth > 700 ? window.innerHeight - 500 : window.innerHeight - 50;
const width = () =>
  window.innerWidth > 700 ? window.innerWidth / 2 - 100 : 200;

const rand = (n) => Math.random() * n;

export const SetNumber = inject("state")(
  observer(function SetNumber({ state }) {
    const {
      setNumber,
      setCurrentStep,
      numberSelected,
      colorSelected,
      nameSelected,
    } = state;
    const pack = new Array(numberSelected).fill(0);

    const nextStep = () => {
      setCurrentStep("stepThree", "stepTwo");
    };
    return (
      <div className="select-section">
        <div className="btn-group">
          <button
            className="btn-back "
            onClick={() => {
              setCurrentStep("stepOne", "stepTwo");
              setNumber(1);
            }}
          >
            BACK
          </button>
          <input
            className="input-number"
            onChange={(e) => setNumber(e.target.value)}
            value={numberSelected}
            type="number"
          />
          <div>
            <button
              className="btn"
              onClick={() => setNumber(numberSelected + 1)}
            >
              +
            </button>
            <button
              className="btn"
              onClick={() => setNumber(numberSelected - 1)}
            >
              -
            </button>
          </div>

          <button onClick={() => nextStep()}>Set</button>
        </div>
        <div className="half">
          <h1 className="title">{nameSelected}</h1>
          <h1 className={`title ${numberSelected > 60 ? "show" : "hide"}`}>
            you better quit now
          </h1>

          <motion.div
            className="flex"
            initial="hidden"
            animate="visible"
            style={colorSelected[0]}
          >
            {pack.map((_, i) => (
              <motion.div
                key={Math.random()}
                className={`rect ${i < numberSelected && "selected"}`}
                variants={container}
                style={{
                  top: rand(height()),
                  left: rand(width()),
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  })
);
