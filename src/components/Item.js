import * as React from "react";
import { observer, inject } from "mobx-react";
import LazyLoad from "react-lazyload";
import { CardPack } from "./CardPack";

export const Item = inject("state")(
  observer(function Item({ state }) {
    const { dataset } = state;

    return dataset.map((info, i) => (
      <LazyLoad
        placeholder={<div className="container-empty"></div>}
        offset={100}
        key={i}
        once
      >
        <CardPack info={info} />
      </LazyLoad>
    ));
  })
);
