import React from "react";
import { motion } from "framer-motion";

export function Button({ fun, className, label, style }) {
  console.log(fun, className, label);

  return (
    <motion.button
      onClick={fun}
      className={`${className}`}
      whileTap={{ scale: 0.6 }}
      style={style}
    >
      {label}
    </motion.button>
  );
}
