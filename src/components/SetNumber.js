import React from "react";
import { observer, inject } from "mobx-react";

export const SetNumber = inject("state")(
  observer(function SetNumber({ state }) {
    const { setNumber, setCurrentStep } = state;
    const nextStep = () => {
      setCurrentStep("stepThree", "stepTwo");
    };
    return (
      <div>
        <input onChange={e => setNumber(e.target.value)} />
        <button onClick={() => nextStep()}>Set</button>
      </div>
    );
  })
);
