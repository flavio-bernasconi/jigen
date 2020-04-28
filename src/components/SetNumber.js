import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { DragButton } from "./DragButton";

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
const slideIn = {
  hidden: { x: 100, opacity: 0.3 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const height = () =>
  window.innerWidth > 700 ? window.innerHeight - 50 : window.innerHeight - 500;
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
      filterDataset,
    } = state;
    const pack = new Array(numberSelected).fill(0);

    const nextStep = () => {
      setTimeout(() => {
        setCurrentStep("stepThree", "stepTwo");
      }, 200);
    };
    return (
      <motion.div
        className="select-section"
        initial="hidden"
        animate="visible"
        variants={slideIn}
      >
        <div className="btn-group">
          <button
            className="btn-back "
            onClick={() => {
              setCurrentStep("stepOne", "stepTwo");
              setNumber(1);
              filterDataset("");
            }}
          >
            BACK
          </button>
          <input
            className="input-number"
            onChange={(e) => setNumber(e.target.value)}
            value={numberSelected}
            type="number"
            min="0"
          />
          <div className="inc">
            <Button
              label="-"
              className="btn"
              fun={() => numberSelected > 0 && setNumber(numberSelected - 1)}
            />
            <Button
              label="+"
              className="btn"
              fun={() => setNumber(numberSelected + 1)}
            />
          </div>
          <DragButton setCurrentStep={setCurrentStep} />
          <div className="set">
            <Button
              label="Set"
              className="btn-set"
              style={colorSelected[0]}
              fun={() => nextStep()}
            />
          </div>
        </div>
        <div className="half">
          <h1 className="title">{nameSelected}</h1>
          <h1 className={`title ${numberSelected > 20 ? "show" : "hide"}`}>
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
      </motion.div>
    );
  })
);
