import React from "react";
import { observer, inject } from "mobx-react";
import { motion } from "framer-motion";
import { Item } from "./Item";

export const List = inject("state")(
  observer(function List({ state }) {
    const { dataset, getPrice, setCurrentStep } = state;

    return (
      <div className="container-packs">
        <Item />
      </div>
    );
  })
);
