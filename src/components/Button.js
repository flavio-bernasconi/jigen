import React from "react";
import { motion } from "framer-motion";

export function Button({ fun, className, label }) {
  console.log(fun, className, label);

  return (
    <motion.button
      onClick={fun}
      className={`${className}`}
      whileTap={{ scale: 0.6 }}
    >
      {label}
    </motion.button>
  );
}
