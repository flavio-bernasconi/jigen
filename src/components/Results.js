import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";

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

export const Results = inject("state")(
  observer(function Results({ state }) {
    const { dataset, getPrice, setCurrentStep, priceSelected, amounts } = state;

    return (
      <motion.div initial="hidden" animate="visible" variants={slideIn}>
        <button
          className="btn-back "
          onClick={() => setCurrentStep("stepTwo", "stepThree")}
        >
          BACK
        </button>
        <h1>{amounts.day}</h1>
        <h1>{amounts.week}</h1>
        <h1>{amounts.month}</h1>
        <h1>{amounts.year}</h1>
      </motion.div>
    );
  })
);
