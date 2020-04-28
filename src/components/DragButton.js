import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

const lines = new Array(50).fill(0);

export const DragButton = (props) => {
  const constraintsRef = useRef(null);

  document.body.style.overflow = "hidden";

  return (
    <div className="example-container">
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div
        className="ciga-yellow"
        drag
        dragConstraints={constraintsRef}
        onDrag={(event, info) => {
          if (info.point.y < -180) {
            setTimeout(() => {
              props.setCurrentStep("stepThree", "stepTwo");
            }, 200);
          }
        }}
      >
        {lines.map((_, i) => {
          return <div className="line" style={{ top: `${i * 20}px` }} />;
        })}

        <div className="ciga-top"></div>
        <div className="ciga"></div>
      </motion.div>
    </div>
  );
};
