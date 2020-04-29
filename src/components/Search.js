import React from "react";
import { observer, inject } from "mobx-react";

export const Search = inject("state")(
  observer(function Search({ state }) {
    const { filterDataset } = state;
    const setFilter = (value) => filterDataset(value.toLowerCase());

    return (
      <div className="search-section">
        <input
          className="search-input"
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Which cigarette do you smoke?"
        />
        <div className="boot" />
      </div>
    );
  })
);
