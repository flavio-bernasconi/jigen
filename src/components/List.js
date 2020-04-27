import React from "react";
import { observer, inject } from "mobx-react";
import { Item } from "./Item";

export const List = inject("state")(
  observer(function List({ state }) {
    return (
      <div className="container-packs masonry">
        <Item />
      </div>
    );
  })
);
