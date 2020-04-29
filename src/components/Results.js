import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";
import { PackResult } from "./PackResult";
import { Button } from "./Button";

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
const container = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const Results = inject("state")(
  observer(function Results({ state }) {
    const {
      setCurrentStep,
      amounts,
      colorSelected,
      nameSelected,
      numberSelected,
    } = state;
    const labels = Object.keys(amounts);

    return (
      <motion.div initial="hidden" animate="visible" variants={slideIn}>
        <div className="results">
          <Button
            label="BACK"
            className="btn-back"
            fun={() => {
              setCurrentStep("stepTwo", "stepThree");
            }}
          />
          <motion.div
            className="display-results"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <div className="intro-results">
              <p className="big-title">
                You smoke
                <span>{numberSelected} </span>
                {nameSelected} a day. So you spend:
              </p>
            </div>
            <div className="packs">
              {labels.map((period, i) => {
                return (
                  <PackResult
                    period={period}
                    color={colorSelected[0]}
                    amount={amounts[period]}
                    scale={i}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  })
);
