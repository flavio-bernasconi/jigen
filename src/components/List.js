import React from "react";
import { observer, inject } from "mobx-react";

export const List = inject("state")(
  observer(function List({ state }) {
    const { dataset, getPrice, setCurrentStep } = state;
    const selecting = price => {
      getPrice(price);
      setCurrentStep("stepTwo", "stepOne");
    };
    return (
      <div>
        {dataset.map(e => {
          return (
            <div key={e.name} onClick={() => selecting(e.price)}>
              <h4>{e.name}</h4>
              <p>{e.price}</p>
            </div>
          );
        })}
      </div>
    );
  })
);
