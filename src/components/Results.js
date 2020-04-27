import React from "react";
import { observer, inject } from "mobx-react";

export const Results = inject("state")(
  observer(function Results({ state }) {
    const { dataset, getPrice, setCurrentStep, priceSelected, amounts } = state;
    console.log(amounts);

    return (
      <div>
        <button onClick={() => setCurrentStep("stepTwo", "stepTwo")}>
          BACK
        </button>
        <h1>{amounts.day}</h1>
        <h1>{amounts.week}</h1>
        <h1>{amounts.month}</h1>
        <h1>{amounts.year}</h1>
      </div>
    );
  })
);
