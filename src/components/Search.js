import React from "react";
import { observer, inject } from "mobx-react";

export const Search = inject("state")(
  observer(function Search({ state }) {
    const { setFilter } = state;
    return (
      <div>
        <input type="text" onChange={(e) => setFilter(e.target.value)} />
      </div>
    );
  })
);
