import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";
import { SelectableGroup } from "react-selectable-fast";

const pack = new Array(20).fill(0);
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
export const SetNumber = inject("state")(
  observer(function SetNumber({ state }) {
    const { setNumber, setCurrentStep, numberSelected } = state;
    const nextStep = () => {
      setCurrentStep("stepThree", "stepTwo");
    };
    return (
      <div className="select-section">
        <div>
          <button onClick={() => setCurrentStep("stepOne", "stepTwo")}>
            BACK
          </button>
          <h1>{numberSelected}</h1>
          <button onClick={() => setNumber(numberSelected + 1)}>+</button>
          <button onClick={() => setNumber(numberSelected - 1)}>-</button>
          <button onClick={() => nextStep()}>Set</button>
        </div>
        <div className="half">
          <motion.div className="flex" initial="hidden" animate="visible">
            {pack.map((_, i) => (
              <motion.div
                key={Math.random()}
                className={`circle ${i < numberSelected && "selected"}`}
                variants={container}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  })
);
