import React from "react";
import { observer, inject } from "mobx-react";
import { Button } from "./Button";

export const BtnIncs = inject("state")(
  observer(function BtnIncs({ state }) {
    const { numberSelected, setNumber } = state;
    return (
      <>
        <Button
          label="-"
          className="btn"
          fun={() => numberSelected > 0 && setNumber(numberSelected - 1)}
        />
        <Button
          label="+"
          className="btn"
          fun={() => setNumber(numberSelected + 1)}
        />
      </>
    );
  })
);
