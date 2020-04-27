import React from "react";
import { observer, inject } from "mobx-react";

export const Search = inject("state")(
  observer(function Search({ state }) {
    const { filterDataset } = state;
    return (
      <div className="search-section">
        <input type="text" onChange={(e) => filterDataset(e.target.value)} />
      </div>
    );
  })
);
