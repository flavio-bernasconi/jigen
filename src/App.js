import React, { useState, useEffect } from "react";
import "./App.css";
import { Provider, observer } from "mobx-react";
import { State } from "./state";
import { List } from "./components/List";
import { csv } from "d3";
import { SetNumber } from "./components/SetNumber";
import { Results } from "./components/Results";
import { Search } from "./components/Search";
import { motion } from "framer-motion";
import { Button } from "./components/Button";

const state = State.create({});

window.STATE = state;
const slideIn = {
  hidden: { x: -500, opacity: 0.3 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const App = observer(function App() {
  const { stepOne, stepTwo, stepThree, setDataset, filter } = state;

  useEffect(() => {
    csv("dataset.csv").then((res) => {
      setDataset(res);
    });
  }, [filter, setDataset]);

  return (
    <Provider state={state}>
      <motion.div initial="hidden" animate="visible" variants={slideIn}>
        {stepOne && (
          <>
            <Search />
            <List />
            <Button
              label="top"
              className="btn btn-top"
              fun={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            />
          </>
        )}
        {stepTwo && (
          <div className="fix-height">
            <SetNumber />
          </div>
        )}
        <div>{stepThree && <Results />}</div>
      </motion.div>
    </Provider>
  );
});
