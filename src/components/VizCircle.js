import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 0.5,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const height = () =>
  window.innerWidth > 700 ? window.innerHeight - 50 : window.innerHeight - 500;
const width = () =>
  window.innerWidth > 700 ? window.innerWidth / 2 - 100 : 200;

const rand = (n) => Math.random() * n;

export function VizCircle({ numberSelected }) {
  const pack = new Array(numberSelected).fill(0);

  return (
    <div>
      {pack.map((_, i) => (
        <motion.div
          key={Math.random()}
          className={`rect ${i < numberSelected && "selected"}`}
          variants={container}
          style={{
            top: rand(height()),
            left: rand(width()),
          }}
        />
      ))}
    </div>
  );
}
