import React, { useState } from "react";
import "./App.css";
import { Provider, observer } from "mobx-react";
import { State } from "./state";
import { List } from "./components/List";
import { csv } from "d3";
import { SetNumber } from "./components/SetNumber";
import { Results } from "./components/Results";
import { Search } from "./components/Search";

const state = State.create({});

window.STATE = state;

export const App = observer(function App() {
  const { stepOne, stepTwo, stepThree, setDataset } = state;
  const [filter, setFilter] = useState("");
  csv("dataset.csv").then((res) => {
    setDataset(res, filter);
  });

  return (
    <Provider state={state}>
      <div>
        {stepOne && (
          <>
            <Search />
            <List />
          </>
        )}
      </div>
      <div>{stepTwo && <SetNumber />}</div>
      <div>{stepThree && <Results />}</div>
    </Provider>
  );
});
