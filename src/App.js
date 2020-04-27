import React, { useState, useEffect } from "react";
import "./App.css";
import { Provider, observer } from "mobx-react";
import { State } from "./state";
import { List } from "./components/List";
import { csv } from "d3";
import { SetNumber } from "./components/SetNumber";
import { Results } from "./components/Results";
import { Search } from "./components/Search";
import { CardPack } from "./components/CardPack";

const state = State.create({});

window.STATE = state;

export const App = observer(function App() {
  const { stepOne, stepTwo, stepThree, setDataset, filter } = state;

  useEffect(() => {
    csv("dataset.csv").then((res) => {
      setDataset(res);
    });
  }, [filter, setDataset]);

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
      <div>
        {stepTwo && (
          <>
            <SetNumber />
          </>
        )}
      </div>
      <div>{stepThree && <Results />}</div>
    </Provider>
  );
});
