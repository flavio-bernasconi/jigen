import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { DragButton } from "./DragButton";
import { BtnIncs } from "./BtnIncs";
import { FakeCiga } from "./FakeCiga";
import { VizCircle } from "./VizCircle";

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

document.body.style.overflow = "hidden";

export const SetNumber = inject("state")(
  observer(function SetNumber({ state }) {
    const {
      setNumber,
      setCurrentStep,
      numberSelected,
      colorSelected,
      nameSelected,
      filterDataset,
      priceSelected,
    } = state;

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
          <Button
            label="BACK"
            className="btn-back"
            fun={() => {
              setCurrentStep("stepOne", "stepTwo");
              setNumber(1);
              filterDataset("");
            }}
          />
          <p className="how">How many a day?</p>
          <input
            className="input-number"
            onChange={(e) => setNumber(e.target.value)}
            value={numberSelected}
            type="number"
            min="0"
          />
          <div className="inc">
            <BtnIncs />
          </div>
          <div className="pack-layout">
            <div style={{ position: "relative" }}>
              <FakeCiga />
            </div>
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
          <div className="title">
            <h1>{nameSelected}</h1>
            <h1>{priceSelected.str}</h1>
          </div>
          {numberSelected > 20 && (
            <h1 className={`title show `}>you better quit now</h1>
          )}

          <motion.div
            className="flex"
            initial="hidden"
            animate="visible"
            style={colorSelected[0]}
          >
            <VizCircle numberSelected={numberSelected} />
          </motion.div>
        </div>
      </motion.div>
    );
  })
);
